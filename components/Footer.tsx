import { useStoreState, useStoreActions } from "../store";
import Flame from "./Flame";
import { useEffect, useState } from "react";

const Footer = () => {
  const adminPage = useStoreState((state) => state.adminPage);
  const setAdminPage = useStoreActions((actions) => actions.setAdminPage);

  const [localState, setLocalState] = useState(adminPage);

  useEffect(() => {
    setAdminPage(localState);
  }, [localState, setAdminPage]);

  return (
    <>
      <Flame number={1} />
      <Flame number={2} />
      <Flame number={3} />
      <footer className="footer">
        <div className="footer_container">
          <p> &copy; Ruben Verster 2022 {adminPage}</p>
          <button onClick={() => setLocalState(!localState)}>
            {localState === true ? "admin" : "home"}
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
