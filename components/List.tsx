import Card from "./Card";
import { IEntry } from "../types";
import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import db from "../firebase";
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

const List = () => {
  const instancesRef = collection(db, "instances");
  const [instances, setInstances] = useState<IEntry[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchInstances = async () => {
    let instancesCollection: IEntry[] = [];
    const q = await query(instancesRef, limit(5), orderBy("date", "asc"));
    try {
      const DB_COLLECTION = await getDocs(q);
      DB_COLLECTION.forEach((doc) => {
        //@ts-ignore - diff between IEntry and DocumentData from Firebase
        instancesCollection.push(doc.data());
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);

    setInstances(instancesCollection);
  };

  useEffect(() => {
    fetchInstances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    return instances.map((entry: IEntry) => {
      return <Card {...entry} key={entry.id} />;
    });
  };
  return (
    <div className="list">
      {loading ? (
        <ClockLoader size={111} color="#fff" />
      ) : error ? (
        "Error Fetching Data"
      ) : (
        renderList()
      )}
    </div>
  );
};

export default List;
