import { useStoreState, useStoreActions } from "../store";
import Flame from "./Flame";
import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const adminPage = useStoreState((state) => state.adminPage);
  const setAdminPage = useStoreActions((actions) => actions.setAdminPage);

  return (
    <>
      <Flame number={1} />
      <Flame number={2} />
      <Flame number={3} />
      <footer className="footer">
        <div className="footer_container">
          <p> &copy; Ruben Verster 2022</p>
          <Link href={"/admin"}>Admin</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
