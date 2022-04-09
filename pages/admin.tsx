import { useRouter } from "next/router";
import { useState } from "react";
import AdminFooter from "../components/ADMIN/AdminFooter";
import Login from "../components/ADMIN/Login";
import Manage from "../components/ADMIN/Manage";
const Admin = () => {
  const router = useRouter();

  const [auth, setAuth] = useState(true);

  const logout = async () => {
    await setAuth(false);
  };
  const login = () => {
    setAuth(true);
  };

  return (
    <div>
      {auth ? <Manage logout={logout} /> : <Login login={login} />}
      <AdminFooter logout={logout} auth={auth} />
    </div>
  );
};

export default Admin;
