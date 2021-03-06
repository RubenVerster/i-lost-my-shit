import { IEntry, Level } from "../types";

const Card = (props: IEntry) => {
  const determineColor = (level: string) => {
    switch (level) {
      case Level.Low:
        return "yellow";
      case Level.Medium:
        return "orange";
      case Level.High:
        return "red";
      default:
        return "white";
    }
  };

  return (
    <div
      className="card"
      style={{ borderBottom: `3px solid ${determineColor(props.level)}` }}
    >
      <p className="card_title">{props.name} </p>
      <span className={`card_date ${determineColor(props.level)}`}>
        {new Date(props.date).toLocaleDateString()}
      </span>
    </div>
  );
};

export default Card;
