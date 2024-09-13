import React from "react";
import {Card, CardContent, Button, Typography, Grid} from "@mui/material";
import LikeButton from "../../atoms/LikeButton";
import {useNavigate} from "react-router-dom";
import UserProfileButton from "../../atoms/UserProfileButton/UserProfileButton";

type ImagePostLargeProps = {
    Description: string
    UserProfilePicture: string
    PostImage: string
}

const ImagePostLarge: React.FC<ImagePostLargeProps> = ({ Description, UserProfilePicture, PostImage}) => {
    const navigate = useNavigate();

    return (

            <Card sx={{maxWidth: 1000, minWidth: 1000}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img
                            src={PostImage}
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
                                    UserProfilePicture={UserProfilePicture}
                                    size={'80px'}/>
                            </Grid>
                            <Grid item xs={6}>
                                <LikeButton/>
                            </Grid>
                            <Grid item xs={12}>

                                    <Typography noWrap>
                                        {Description}
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