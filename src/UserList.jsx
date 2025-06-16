import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListUser(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Liste des utilisateurs</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {listUser.map(user => (
          <li key={user.id} style={{ marginBottom: '1rem', background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
            <strong>{user.name}</strong> <br />
            <span>Email : {user.email}</span> <br />
            <span>Téléphone : {user.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList; 
