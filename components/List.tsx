import data from "../mock.json";
import CountUp from "react-countup";

const List = () => {
  const localdata = JSON.parse(JSON.stringify(data));
  return (
    <div className="list">
      <div>Entry</div>
      <div>Entry</div>
      <div>Entry</div>
      <div>Entry</div>
      <div>Entry</div>
      <div>Entry</div>
      <div>Entry</div>
    </div>
  );
};

export default List;
