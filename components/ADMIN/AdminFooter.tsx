import Link from "next/link";
import { IFooter } from "../../types";

const Footer = ({ auth, logout }: IFooter) => {
  return (
    <footer className="footer">
      <div className="footer_container">
        {auth && (
          <div
            className="footer_container_logout"
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </div>
        )}
        <Link href="/">Home</Link>
      </div>
    </footer>
  );
};

export default Footer;
