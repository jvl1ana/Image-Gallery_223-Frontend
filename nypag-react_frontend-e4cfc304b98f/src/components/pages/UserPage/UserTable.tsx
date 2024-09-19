import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../Services/UserService';
import { UserDTO } from '../../../types/models/User.model';

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserDTO[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then((data) => setUsers(data));
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Bist du sicher, dass du diesen Benutzer löschen möchtest?')) {
      try {
        await UserService.deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        alert('Fehler beim Löschen des Benutzers');
      }
    }
  };

  return (
      <div>
        {users.map((user) => (
            <Card key={user.id}>
              <CardContent>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate(`/useredit/${user.id}`)}>Bearbeiten</Button>
                <Button onClick={() => handleDelete(user.id)} color="error">Löschen</Button>
              </CardActions>
            </Card>
        ))}
        <Button onClick={() => navigate('/useredit')}>Benutzer hinzufügen</Button>
      </div>
  );
};

export default UserTable;
