// src/components/organisms/PostGallery/PostGallery.tsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostImageService from '../../Services/PostImageService';
import ImagePostSmall from "../molecules/ImagePost/ImagePostSmall";
import { ImagePostDTO } from '../../types/models/ImagePost.model';

type PostGalleryProps = {
    posts: ImagePostDTO[]
}

const PostGallery: React.FC<PostGalleryProps> = ({posts}) => {
    const navigate = useNavigate();

    const handleCreatePostClick = () => {
        navigate('/create-post');
    };


    return (
        <Box padding={5} sx={{ position: 'relative' }}>
            <Button
                id = "createButton"
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
                            Userid={post.author.id}
                            Description={post.description}
                            PostImage={post.url}
                            itemID={post.id}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default PostGallery;