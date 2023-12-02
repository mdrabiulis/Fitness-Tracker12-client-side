import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import useFirebase from "../../Hooks/Firebase/useFirebase";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useFirebase();
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56 justify-center"></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
