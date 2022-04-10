import data from "../mock.json";
import Card from "./Card";
import { IEntry } from "../types";
import { query, orderBy, limit, getDocs, collection } from "firebase/firestore";
import db from "../firebase";
import { useEffect, useState } from "react";

const List = () => {
  const instancesRef = collection(db, "instances");
  const [instances, setInstances] = useState<IEntry[]>([]);

  const fetchInstances = async () => {
    let instancesCollection: IEntry[] = [];
    const q = await query(instancesRef, limit(5), orderBy("date", "asc"));
    try {
      const DB_COLLECTION = await getDocs(q);
      DB_COLLECTION.forEach((doc) => {
        //@ts-ignore - can use advanced TS to configure this
        instancesCollection.push(doc.data());
      });
    } catch (error) {
      console.log(error);
    }

    console.log(instancesCollection);

    setInstances(instancesCollection);
  };

  useEffect(() => {
    fetchInstances();
  }, []);

  const renderList = () => {
    return instances.map((entry: IEntry) => {
      return <Card {...entry} key={entry.id} />;
    });
  };
  return <div className="list">{renderList()} </div>;
};

export default List;
