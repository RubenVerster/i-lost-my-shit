type FlameProps = {
  color: string;
};
const Flame = ({ color }: FlameProps) => {
  return <div className="flame" style={{ backgroundColor: color }}></div>;
};

export default Flame;
