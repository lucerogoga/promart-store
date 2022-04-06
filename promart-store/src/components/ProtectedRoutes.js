import { Navigate } from "react-router-dom";

export const ProtectedRouter = ({ children }) => {
  // const { token } = callToken();
  //Si el token del usuario no esta en la lista se mantiene en el login
  //   if (!token.currentUser) {
  //     return <Navigate to="/" />;
  //   }
  //   return <>{children}</>;
};
