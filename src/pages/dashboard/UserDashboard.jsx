import { useAuthContext } from "../../context/AuthContext";

const UserDashboard = () => {
  const {user} = useAuthContext();
   const firstName = user.displayName ? user.displayName.split(" ")[0] : "";
  return <div>UserDashboard

    <h2 className="">Toor, you don set na {firstName}</h2>
  </div>;
};

export default UserDashboard;
