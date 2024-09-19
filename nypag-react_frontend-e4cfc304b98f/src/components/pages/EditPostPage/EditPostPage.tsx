import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from "../PostPage/PostForm";
import PostImageService from '../../../Services/PostImageService';
import { ImagePostDTO } from '../../../types/models/ImagePost.model';

const EditPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<ImagePostDTO | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                const postData = await PostImageService.getImagePostById(id);
                setPost(postData);
            }
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (updatedPost: ImagePostDTO) => {
        if (id) {
            await PostImageService.updateImagePost(id, updatedPost);
            navigate('/home');
        }
    };

    return (
        <div>
            <h1>Edit Post</h1>
            {post ? <PostForm initialValues={post} onSubmit={handleSubmit} /> : <p>Loading...</p>}
        </div>
    );
};

export default EditPostPage;
