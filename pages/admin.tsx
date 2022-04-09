import { useEffect, useState } from "react";
import AdminFooter from "../components/ADMIN/AdminFooter";
import Login from "../components/ADMIN/Login";
import Manage from "../components/ADMIN/Manage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import CircleLoader from "react-spinners/CircleLoader";
const Admin = () => {
  const [loading, setLoading] = useState(true);
  const checkIfUserLoggedIn = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true);
        setLoading(false);
      } else {
        setAuth(false);
        setLoading(false);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    checkIfUserLoggedIn();
  }, []);

  const [auth, setAuth] = useState(false);

  const logout = async () => {
    await setAuth(false);
  };

  return (
    <div className="admin">
      {!loading ? (
        auth ? (
          <Manage logout={logout} />
        ) : (
          <Login auth={auth} setAuth={setAuth} />
        )
      ) : (
        <CircleLoader size={420} color="#D0021B" />
      )}
      <AdminFooter logout={logout} auth={auth} />
    </div>
  );
};

export default Admin;
