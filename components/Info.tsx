import data from "../mock.json";
import CountUp from "react-countup";

const Info = () => {
  const localdata = JSON.parse(JSON.stringify(data));
  return (
    <div className="info">
      <div>
        <CountUp end={localdata.stats.total} duration={1.11} />
      </div>
    </div>
  );
};

export default Info;
