const Manage = ({ logout }: any) => {
  return (
    <>
      <h1>Add an instance</h1>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export default Manage;
