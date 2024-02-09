import Auth from "@/api/Auth";
import { Navigate } from "react-router-dom";
import { IChildren } from "@/@types/baseInterface";

type ProtectedRoutesProps = IChildren;
function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { isAuthenticated } = Auth;
  // if (!isAuthenticated()) {
  //   return <Navigate to="/login" replace />;
  // }

  return <>{children}</>;
}

export default ProtectedRoutes;
