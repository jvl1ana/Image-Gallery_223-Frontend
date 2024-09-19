// src/components/organisms/PostGallery/PostGallery.tsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostImageService from '../../Services/PostImageService';
import ImagePostSmall from "../molecules/ImagePost/ImagePostSmall";
import { ImagePostDTO } from '../../types/models/ImagePost.model';

export default function PostGallery() {
    const [posts, setPosts] = useState<ImagePostDTO[]>([]);
    const navigate = useNavigate();

    const handleCreatePostClick = () => {
        navigate('/create-post');
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await PostImageService.getAllImagePosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <Box padding={5} sx={{ position: 'relative' }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreatePostClick}
                sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 1,
                }}
            >
                Create Post
            </Button>

            <Box
                sx={{
                    columnWidth: '250px',
                    columnGap: '20px',
                }}
            >
                {posts.map((post, index) => (
                    <Box key={index} sx={{ breakInside: 'avoid', marginBottom: '20px' }}>
                        <ImagePostSmall
                            UserProfilePicture={post.author.id}
                            Description={post.description}
                            PostImage={post.url}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
