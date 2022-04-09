import Link from "next/link";
import { IFooter } from "../../types";

const Footer = ({ auth, logout }: IFooter) => {
  return (
    <footer className="footer">
      <div className="footer_container">
        {auth && (
          <button
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </button>
        )}
        <Link href="/">Home</Link>
      </div>
    </footer>
  );
};

export default Footer;
