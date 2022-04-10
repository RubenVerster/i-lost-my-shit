import { IEntry, Level } from "../types";

const Card = ({ name, date, level }: IEntry) => {
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
      style={{ borderBottom: `3px solid ${determineColor(level)}` }}
    >
      <p className="card_title">{name} </p>
      <span className={`card_date ${determineColor(level)}`}>
        {date?.seconds}
      </span>
    </div>
  );
};

export default Card;
