import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const user = useAppSelector((state) => state.userSlice.user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
