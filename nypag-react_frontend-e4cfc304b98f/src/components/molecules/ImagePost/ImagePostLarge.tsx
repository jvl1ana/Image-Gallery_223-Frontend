import React, {useEffect, useState} from "react";
import {Card, CardContent, Button, Typography, Grid} from "@mui/material";
import LikeButton from "../../atoms/LikeButton";
import {useNavigate, useParams} from "react-router-dom";
import UserProfileButton from "../../atoms/UserProfileButton/UserProfileButton";
import {ImagePostDTO} from "../../../types/models/ImagePost.model";
import PostImageService from "../../../Services/PostImageService";


type ImagePostLargeProps = {
    defaultImage: string
}


const ImagePostLarge: React.FC<ImagePostLargeProps> = ({defaultImage}) => {
    const [posts, setPosts] = useState<ImagePostDTO[]>([]);
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<ImagePostDTO | undefined>();

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await PostImageService.getAllImagePosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const foundPost = posts.find(post => post.id === id);
        setPost(foundPost);
    }, [id, posts]);


    return (

            <Card sx={{maxWidth: 1000, minWidth: 1000}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            src={post?.url}
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
                                    UserProfilePicture={defaultImage}
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