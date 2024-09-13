import ImagePostSmall from "../molecules/ImagePost/ImagePostSmall";
import items from "../molecules/ImagePost/TestData";
import { Box } from '@mui/material';

export default function PostGallery() {
    return (
        <Box padding={5} sx={{
            columnWidth: '250px',
            columnGap: '20px',
        }}>
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
                    />
                </Box>
            ))}
        </Box>
    );
}


