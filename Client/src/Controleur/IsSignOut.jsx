import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';

export default function IsSignOut({ children }) {
    const isAuthenticated = useIsAuthenticated();

    if (!isAuthenticated()) {
        return <Navigate to={children} replace />;
    }
    return null;
}