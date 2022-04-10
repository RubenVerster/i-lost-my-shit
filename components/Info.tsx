import CountUp from "react-countup";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";
import { HashLoader } from "react-spinners";

const Info = () => {
  const [total, setTotal] = useState(null);
  const [stats, setStats] = useState({ low: 0, med: 0, high: 0 });
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const getTotal = async () => {
    try {
      const docRef = await doc(db, "statistics", "total");
      const DB_TOTAL = await getDoc(docRef);

      if (DB_TOTAL.exists()) {
        console.log("DB_TOTAL", DB_TOTAL.data());
        setTotal(DB_TOTAL.data().amount);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
      setFetchError(true);
    }
    setLoading(false);
  };

  const getStats = async () => {
    try {
      const docRef = await doc(db, "statistics", "level");
      const DB_LEVEL = await getDoc(docRef);

      if (DB_LEVEL.exists()) {
        console.log("DB_LEVEL", DB_LEVEL.data());

        const { low, med, high } = DB_LEVEL.data();
        setStats({
          low: low,
          med: med,
          high: high,
        });
      } else {
        console.log("No such document!");
        setFetchError(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTotal();
    getStats();
  }, []);

  return (
    <div className="info">
      {loading && !fetchError ? (
        <HashLoader size={169} color={"#FFF"} />
      ) : (
        <>
          {total && (
            <CountUp className="info_total" end={total} duration={1.11} />
          )}
          {stats && (
            <div className="info_stats">
              <div className="info_stats_item yellow">
                <CountUp end={stats.low} duration={0.33} />
                <p>Low</p>
              </div>
              <div className="info_stats_item orange">
                <CountUp end={stats.med} duration={0.55} />
                <p>Medium</p>
              </div>
              <div className="info_stats_item red">
                <CountUp end={stats.high} duration={0.77} />
                <p>High</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Info;
