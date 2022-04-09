import { IEntry, Level } from "../types";

const Card = ({ title, date, level, id }: IEntry) => {
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
      <p className="card_title">{title} </p>
      <span className={`card_date ${determineColor(level)}`}>{date}</span>
    </div>
  );
};

export default Card;
