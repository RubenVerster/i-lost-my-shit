import Link from "next/link";
import { useRouter } from "next/router";
import { IFooter } from "../../types";

const Footer = ({ setAuth, auth }: IFooter) => {
  const router = useRouter();

  const logout = () => {
    setAuth(false);
  };
  const login = () => {
    setAuth(true);
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        <>
          {auth ? (
            <button
              onClick={() => {
                logout();
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                login();
              }}
            >
              Log In
            </button>
          )}

          <Link href={"/"}>Home</Link>
        </>
      </div>
    </footer>
  );
};

export default Footer;
