import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
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

  const updateTotalInDB = async (level: Level) => {
    const totalRef = await doc(db, "statistics", "total");
    const DB_TOTAL = await getDoc(totalRef);

    if (DB_TOTAL.exists()) {
      let total = DB_TOTAL.data().amount;
      const newTotal = total + 1;
      await updateDoc(totalRef, {
        amount: newTotal,
      });
    }

    const levelRef = await doc(db, "statistics", "level");
    const DB_LEVEL = await getDoc(levelRef);

    if (DB_LEVEL.exists()) {
      let { low, med, high } = DB_LEVEL.data();
      console.log(low, med, high);

      let newTotals = {
        low: low,
        med: med,
        high: high,
      };
      console.log(level);
      switch (level) {
        case Level.Low:
          newTotals.low = low + 1;
          break;
        case Level.Medium:
          newTotals.med = med + 1;
          break;
        case Level.High:
          newTotals.high = high + 1;
          break;

        default:
          break;
      }
      await updateDoc(levelRef, newTotals);
    }
  };

  const checkEmpty = (title: string) => {
    let testString = title.replaceAll(" ", "");

    if (testString.length === 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    if (
      title.length < 7 ||
      level === null ||
      title.length > 99 ||
      checkEmpty(title)
    ) {
      setErrorMsg("You missing something man?");
      setError(true);
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "instances"), {
        name: title,
        level: level,
        date: Date(),
        id: uuidv4(),
      });
      updateTotalInDB(level);
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
              setError(false);
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
              setError(false);
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
              setError(false);
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
