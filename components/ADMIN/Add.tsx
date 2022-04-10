import { FormEvent, useState } from "react";
import { Level } from "../../types";

const Add = () => {
  const [title, setTitle] = useState("");
  const [option, setOption] = useState<Level | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (title.length < 7 || !option) {
      setError(true);
      return;
    }

    console.log(title, option);
    setOption(null);
    setTitle("");
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
        {error && <p className="error">You missing something man?</p>}

        <input
          className="add_form_input"
          type="text"
          onChange={(e) => {
            setError(false);
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Description"
        />
        <div className="add_form_options">
          <div
            className={`add_form_options_option yellow ${
              option === Level.Low && "selected"
            }`}
            onClick={() => {
              setOption(Level.Low);
            }}
          >
            {Level.Low}
          </div>
          <div
            className={`add_form_options_option orange ${
              option === Level.Medium && "selected"
            }`}
            onClick={() => {
              setOption(Level.Medium);
            }}
          >
            {Level.Medium}
          </div>
          <div
            className={`add_form_options_option red ${
              option === Level.High && "selected"
            }`}
            onClick={() => {
              setOption(Level.High);
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
