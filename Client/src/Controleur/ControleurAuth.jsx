import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import EspaceUser from '../Composants/EspaceUser';
export default function ControleurAuth({children}){
    const isAuthenticated = useIsAuthenticated();
    if (isAuthenticated()) {
        return <EspaceUser/>;
    }
    return children;

}