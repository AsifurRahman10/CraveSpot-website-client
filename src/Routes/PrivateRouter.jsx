import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <div>{children}</div>;
};
