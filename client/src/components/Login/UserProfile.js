import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ImUser } from 'react-icons/im'


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {user.picture ? (
          <img src={user.picture} alt={user.name} />

        ) : (
          <ImUser />
        )}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
