import Flame from "./Flame";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Flame number={1} />
      <Flame number={2} />
      <Flame number={3} />
      <footer className="footer">
        <div className="footer_container">
          <Link href={"https://rubenverster.com"}>
            &copy; Ruben Verster 2022
          </Link>
          <Link href={"/admin"}>Admin</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
