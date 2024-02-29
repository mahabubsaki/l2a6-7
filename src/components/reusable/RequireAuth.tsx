import { ReactNode } from 'react';
import { useAppSelector } from '../../redux/store/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: { children: ReactNode; }) => {
    const user = useAppSelector(selectCurrentUser);
    if (!user) {
        return <Navigate to={'/login'} />;
    }
    return children;
};

export default RequireAuth;