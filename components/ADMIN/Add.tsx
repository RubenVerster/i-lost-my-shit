import { FormEvent, useState } from "react";
import { Level } from "../../types";

const Add = () => {
  const [title, setTitle] = useState("");
  const [option, setOption] = useState<Level>(Level.Low);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(title);
    console.log(option);
  };

  return (
    <div className="add">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="add_form"
      >
        <input
          className="add_form_input"
          required
          type="text"
          onChange={(e) => {
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
        <button className="add_form_button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
