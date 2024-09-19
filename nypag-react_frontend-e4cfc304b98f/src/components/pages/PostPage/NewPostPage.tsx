import React from 'react';
import PostForm from './PostForm';
import PostImageService from '../../../Services/PostImageService';
import { useNavigate } from 'react-router-dom';
import { ImagePostDTO } from '../../../types/models/ImagePost.model';

const NewPostPage = () => {
    const navigate = useNavigate();


    const handleSubmit = async (values: ImagePostDTO) => {
        try {
            await PostImageService.createImagePost(values);
            navigate('/home');
        } catch (error) {
            console.error('Error creating post', error);
        }
    };

    return (
        <div>
            <h1>Create a New Post</h1>

            <PostForm onSubmit={handleSubmit} />
        </div>
    );
};

export default NewPostPage;
