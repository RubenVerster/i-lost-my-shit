import data from "../mock.json";
import Card from "./Card";
import { IEntry } from "../types";

const List = () => {
  const localdata = JSON.parse(JSON.stringify(data));

  const renderList = () => {
    return localdata.entries.map((entry: IEntry) => {
      return <Card {...entry} key={entry.id} />;
    });
  };
  return <div className="list">{renderList()} </div>;
};

export default List;
