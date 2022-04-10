import { addDoc, collection } from "firebase/firestore";
import { FormEvent, useState } from "react";
import db from "../../firebase";
import { Level } from "../../types";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState<Level | null>(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    if (title.length < 7) {
      setErrorMsg("You missing something man?");
      setError(true);
      setLoading(false);
      return;
    }
    if (level === null) {
      setLoading(false);
      setError(true);
      setErrorMsg("You missing something man?");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "instances"), {
        name: title,
        level: level,
        date: new Date(),
        id: uuidv4(),
      });
    } catch (error) {
      setError(true);
      setErrorMsg("Failed saving");
      return;
    }

    setLevel(null);
    setTitle("");
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="add">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="add_form"
      >
        {error && <p className="error">{errorMsg}</p>}
        {success && <p className="success">Instance Added Successfully</p>}

        <input
          className="add_form_input"
          type="text"
          onChange={(e) => {
            setSuccess(false);
            setError(false);
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Description"
        />
        <div className="add_form_options">
          <div
            className={`add_form_options_option yellow ${
              level === Level.Low && "selected"
            }`}
            onClick={() => {
              setLevel(Level.Low);
            }}
          >
            {Level.Low}
          </div>
          <div
            className={`add_form_options_option orange ${
              level === Level.Medium && "selected"
            }`}
            onClick={() => {
              setLevel(Level.Medium);
            }}
          >
            {Level.Medium}
          </div>
          <div
            className={`add_form_options_option red ${
              level === Level.High && "selected"
            }`}
            onClick={() => {
              setLevel(Level.High);
            }}
          >
            {Level.High}
          </div>
        </div>
        <button disabled={loading} className="add_form_button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
