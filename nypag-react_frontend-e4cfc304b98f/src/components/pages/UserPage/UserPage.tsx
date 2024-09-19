import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../../../types/models/User.model';
import UserService from '../../../Services/UserService';
import UserForm from '../../molecules/UserForm/UserForm';
import { useEffect, useState } from 'react';

const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState<User>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    roles: [],
  });

  useEffect(() => {
    if (userId) {
      UserService.getUserById(userId).then((res) => {
        setUser(res);
      });
    }
  }, [userId]);

  const submitActionHandler = (values: User) => {
    if (userId) {
      UserService.updateUser(userId, values).then(() => {
        navigate('../users');
      });
    } else {
      UserService.registerUser(values).then(() => {
        navigate('/users');
      });
    }
  };

  return <UserForm user={user} submitActionHandler={submitActionHandler} />;
};

export default UserPage;
