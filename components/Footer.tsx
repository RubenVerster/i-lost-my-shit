import Link from "next/link";
import Flame from "./Flame";

const Footer = () => {
  return (
    <>
      <Flame number={1} />
      <Flame number={2} />
      <Flame number={3} />
      <footer className="footer">
        <div className="footer_container">
          <p> &copy; Ruben Verster 2022</p>
          <p>
            <Link href={`/admin`}>Admin</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
