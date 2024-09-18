import ImagePostSmall from "../molecules/ImagePost/ImagePostSmall";
import items from "../molecules/ImagePost/TestData";
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostGallery() {
    const navigate = useNavigate();

    const handleCreatePostClick = () => {
        navigate('/create-post');
    };

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
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            breakInside: 'avoid',
                            marginBottom: '20px',
                        }}
                    >
                        <ImagePostSmall
                            UserProfilePicture={item.userProfilePhoto}
                            Description={item.description}
                            PostImage={item.postImage}
                            itemID={item.id}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
