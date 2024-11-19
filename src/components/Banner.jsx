import React from 'react';
import useAuth from '../utilities/useAuth';

const Banner = ({ title }) => {
  const { user, signIn, signOut } = useAuth();

  return (
    <div className="banner">
      <h1>{title}</h1>
      <div className="auth-buttons">
        {user ? (
          <>
            <span>Welcome, {user.displayName}</span>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <button onClick={signIn}>Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Banner;
