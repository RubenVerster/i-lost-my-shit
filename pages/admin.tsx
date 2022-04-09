import { useRouter } from "next/router";
import { useState } from "react";
import AdminFooter from "../components/ADMIN/AdminFooter";
import Login from "../components/ADMIN/Login";
import Manage from "../components/ADMIN/Manage";
const Admin = () => {
  const router = useRouter();

  const [auth, setAuth] = useState(false);

  const logout = async () => {
    await setAuth(false);
  };
  const login = () => {
    setAuth(true);
  };

  return (
    <div className="admin">
      {auth ? <Manage logout={logout} /> : <Login setAuth={setAuth} />}
      <AdminFooter logout={logout} auth={auth} />
    </div>
  );
};

export default Admin;
