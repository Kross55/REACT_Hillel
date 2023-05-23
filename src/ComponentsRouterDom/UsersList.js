import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import style from './Common.module.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <div>
            <h2>Name: {user.name}</h2>
          </div>
          <div>
            Email: {user.email}
          </div>
          <div>
            Website: {user.website}
          </div>
          <button>
            <Link to={`/albums?userId=${user.id}`} className={clsx(style.link, style.testColor)}>Albums</Link> 
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
