import { Navigate } from "react-router-dom";

export const ProtectedRouter = ({ children }) => {
  //if token doesnt exist navigate to login
  if (localStorage.getItem("token") == null) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
