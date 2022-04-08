import Flame from "./Flame";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Footer = () => {
  return (
    <>
      <Flame number={1} />
      <Flame number={2} />
      <Flame number={3} />
      <footer className="footer">
        <div className="footer_container">
          <p> &copy; Ruben Verster 2022</p>
          <p>Admin</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
