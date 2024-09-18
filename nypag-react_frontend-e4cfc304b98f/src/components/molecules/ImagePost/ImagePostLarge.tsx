import React, {useState} from "react";
import {Card, CardContent, Button, Typography, Grid} from "@mui/material";
import LikeButton from "../../atoms/LikeButton";
import {useNavigate} from "react-router-dom";
import UserProfileButton from "../../atoms/UserProfileButton/UserProfileButton";
import items from "./TestData";
type ImagePostLargeProps = {
    defaultImage: string
}

interface item{
    postImage: string
    description: string
    userProfilePhoto: string
    id: number
}

const ImagePostLarge: React.FC<ImagePostLargeProps> = ({defaultImage}) => {
    const navigate = useNavigate();

    const postId = localStorage.getItem('postId');

    const numericPostId = postId ? parseInt(postId, 10) : null;

    const [post, setPost] = useState<item | undefined>(() => {
        return items.find(item => item.id == numericPostId);
    });
    return (

            <Card sx={{maxWidth: 1000, minWidth: 1000}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            src={post?.postImage}
                            width={"100%"}
                            height={"100%"}
                            alt="uh oh"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                        <Grid container spacing={10}>
                            <Grid item xs={6}>
                                <UserProfileButton
                                    UserProfilePicture={post?.userProfilePhoto || defaultImage}
                                    size={'80px'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <LikeButton/>
                            </Grid>
                            <Grid item xs={12}>

                                    <Typography noWrap>
                                        {post?.description}
                                    </Typography>
                            </Grid>
                        </Grid>
                        </CardContent>
                    </Grid>
                </Grid>

            </Card>
    );
};

export default ImagePostLarge;