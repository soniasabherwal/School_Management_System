
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function RoleBasedAccess({ role, children }) {
  const { user } = useContext(AuthContext);

  if (!user || !user.roles.includes(role)) {
    return <div>Access Denied</div>;
  }

  return <>{children}</>;
}

export default RoleBasedAccess;
