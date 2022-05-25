import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';

const AuthContext = React.createContext<AuthContextType>(null!);

const useAuth = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <h1>You are not logged in.</h1>;
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/../login" state={{ from: location }} replace />;
  }

  return children;
};

export { useAuth, AuthProvider, AuthStatus, RequireAuth };
