import React, {useEffect, useState} from "react";
import {Card, CardContent, Button, Typography, Grid} from "@mui/material";
import LikeButton from "../../atoms/LikeButton";
import {useNavigate, useParams} from "react-router-dom";
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
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<item | undefined>();

    useEffect(() => {
        const numericId = parseInt(id || '', 10);
        const foundPost = items.find(item => item.id === numericId);
        setPost(foundPost);
    }, [id]);
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

                                    <Typography >
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