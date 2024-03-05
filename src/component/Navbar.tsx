import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Navbar: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <nav>
      <div>
        <Link to="/">Users ({users.length})</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;