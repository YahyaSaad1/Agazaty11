import { Navigate, Outlet } from "react-router-dom";
import { token } from "./server/serves";

function RequireAuth() {
    return token? <Outlet/> : <Navigate to="/login" />;
}

export default RequireAuth;
