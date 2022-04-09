import { useState } from "react";
import AdminFooter from "../components/ADMIN/AdminFooter";

const Admin = () => {
  const [auth, setAuth] = useState(true);

  return (
    <div>
      <AdminFooter auth={auth} setAuth={setAuth} />
    </div>
  );
};

export default Admin;
