
import api from '../config/Api';
import { UserDTO } from '../types/models/User.model';


export const registerUser = async (user: UserDTO) => {
  const response = await api.post('/user/registerUser', user);
  return response.data;
};

export const updateUser = async (id: string, user: UserDTO) => {
  const response = await api.put(`/user/${id}`, user);
  return response.data;
};

const deleteUser = async (id: string) => {
  await api.delete(`/user/${id}`);
};

const getAllUsers = async () => {
  const response = await api.get('/user');
  return response.data;
};

const getUserById = async (id: string) => {
  const response = await api.get(`/user/${id}`);
  return response.data;
};


const UserService = {
  registerUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserById,
};

export default UserService;
