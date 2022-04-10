import { useEffect, useState } from "react";
import AdminFooter from "../components/ADMIN/AdminFooter";
import Login from "../components/ADMIN/Login";
import Manage from "../components/ADMIN/Manage";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import CircleLoader from "react-spinners/CircleLoader";
const Admin = () => {
  const [loading, setLoading] = useState(true);
  const checkIfUserLoggedIn = () => {
    const FBAUTH = getAuth();
    onAuthStateChanged(FBAUTH, (user) => {
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
    const auth = await getAuth();

    try {
      await signOut(auth);
      await setAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin">
      {!loading ? (
        auth ? (
          <Manage />
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
