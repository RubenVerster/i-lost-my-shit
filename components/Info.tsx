import data from "../mock.json";
import CountUp from "react-countup";

const Info = () => {
  const localdata = JSON.parse(JSON.stringify(data));
  return (
    <div className="info">
      <div className="info_total">
        <CountUp end={localdata.stats.total} duration={1.11} />
      </div>
      <div className="info_stats">
        <div className="info_stats_item yellow">
          <CountUp end={localdata.stats.level.low} duration={0.33} />
          <p>Low</p>
        </div>
        <div className="info_stats_item orange">
          <CountUp end={localdata.stats.level.med} duration={0.55} />
          <p>Medium</p>
        </div>
        <div className="info_stats_item red">
          <CountUp end={localdata.stats.level.high} duration={0.77} />
          <p>High</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
