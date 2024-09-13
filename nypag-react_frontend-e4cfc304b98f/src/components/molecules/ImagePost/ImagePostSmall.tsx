import React from "react";
import {Card, CardContent, Button, Typography} from "@mui/material";
import LikeButton from "../../atoms/LikeButton";
import {useNavigate} from "react-router-dom";
import UserProfileButton from "../../atoms/UserProfileButton";

type ImagePostSmallProps = {
    Description: string
    UserProfilePicture: string
    PostImage: string
}

const ImagePostSmall: React.FC<ImagePostSmallProps> = ({ Description, UserProfilePicture, PostImage}) => {
    const navigate = useNavigate();

    return (
        <Button variant="contained" onClick={() => navigate('/post')}>
            <Card sx={{maxWidth: 200, minWidth: 200}}>
                <img
                    src={PostImage}
                    width={"100%"}
                    height={"100%"}
                    alt="uh oh"
                />
                <CardContent>
                    <UserProfileButton
                        UserProfilePicture={UserProfilePicture}/>
                    <LikeButton/>
                    <Typography noWrap>
                        {Description}
                    </Typography>
                </CardContent>
            </Card>
        </Button>
    );
};

export default ImagePostSmall;