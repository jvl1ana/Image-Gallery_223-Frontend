
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PostImageService from '../../Services/PostImageService';
import ImagePostSmall from "../molecules/ImagePost/ImagePostSmall";
import { ImagePostDTO } from '../../types/models/ImagePost.model';
import ActiveUserContext from "../../Contexts/ActiveUserContext";

type PostGalleryProps = {
    posts: ImagePostDTO[]
}

const PostGallery: React.FC<PostGalleryProps> = ({posts}) => {
    const navigate = useNavigate();
    const { user } = useContext(ActiveUserContext);

    const handleCreatePostClick = () => {
        navigate('/create-post');
    };

    const handleAdminClick = () => {
        navigate('/admin');
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

            {user && user.roles.some(role => typeof role.name === 'string' && role.name === 'ADMIN') && (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAdminClick}
                    sx={{
                        position: 'absolute',
                        top: '50px',
                        right: '10px',
                        zIndex: 1,
                    }}
                >
                    Admin
                </Button>
            )}


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