
import api from '../config/Api';
import { ImagePostDTO } from '../types/models/ImagePost.model';

export const createImagePost = async (imagePost: ImagePostDTO) => {
    const response = await api.post('/imagePosts/create', imagePost);
    return response.data;
};

export const getAllImagePosts = async () => {
    const response = await api.get('/imagePosts/');
    return response.data;
};

export const getImagePostById = async (id: string) => {
    const response = await api.get(`/imagePosts/${id}`);
    return response.data;
};

export const updateImagePost = async (id: string, imagePost: ImagePostDTO) => {
    const response = await api.put(`/imagePosts/${id}`, imagePost);
    return response.data;
};

export const deleteImagePost = async (id: string) => {
    await api.delete(`/imagePosts/${id}`);
};

const PostImageService = {
    createImagePost,
    getAllImagePosts,
    getImagePostById,
    updateImagePost,
    deleteImagePost,
};

export default PostImageService;
