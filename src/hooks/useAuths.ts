import React from "react";
import Auth from "@/api/Auth";

export default function useAuth() {
  const authenticatedUser = Auth.getDecodedJwt();
  const isLoggedIn = Auth.isAuthenticated();
  const logOut = Auth.removeToken;

  const user = React.useMemo(() => {
    return authenticatedUser;
  }, [authenticatedUser]);

  return {
    user,
    logOut,
    authenticatedUser,
    isLoggedIn,
  };
}
