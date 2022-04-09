import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Footer = () => {
  const [auth, setAuth] = useState(true);
  const router = useRouter();

  const logout = () => {
    alert("logged out");
    router.push("/");
  };

  return (
    <footer className="footer">
      <div className="footer_container">
        <>
          <button
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </button>
          <Link href={"/"}>Home</Link>
        </>
      </div>
    </footer>
  );
};

export default Footer;
