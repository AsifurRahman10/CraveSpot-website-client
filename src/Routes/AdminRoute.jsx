import { useLocation } from "react-router-dom";
import { useAdmin } from "../Hooks/useAdmin";
import { useAuth } from "../Hooks/useAuth";

export const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();
  const location = useLocation();

  if (loading || isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <div>{children}</div>;

  return <div>AdminRoute</div>;
};
