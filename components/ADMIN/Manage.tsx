import Add from "./Add";
import List from "../List";
const Manage = () => {
  return (
    <div className="manage">
      <h1 className="manage_title">What code made you lose your 💩?</h1>
      <div className="manage_content">
        <Add />
      </div>
    </div>
  );
};

export default Manage;
