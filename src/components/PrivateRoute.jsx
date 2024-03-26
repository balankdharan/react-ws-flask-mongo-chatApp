import { Outlet, Navigate } from "react-router-dom";
import { getItem } from "../utility/LocalStore";

const PrivateRoute = () => {
  const userEntry = getItem("wsId");
  return userEntry ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
