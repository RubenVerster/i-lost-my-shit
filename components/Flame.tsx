type FlameProps = {
  number: number;
};
const Flame = ({ number }: FlameProps) => {
  return <div className={`flame flame-${number}`}></div>;
};

export default Flame;
