import { Box } from '@mui/system';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ImagePostLarge from "../../molecules/ImagePost/ImagePostLarge";

import logo from "../../../logo1.png"
import testImage from "../../../testImages/testImage8.jpeg"

export default function SinglePostPage() {
    const navigate = useNavigate();


    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >

            <Button variant="contained" onClick={() => navigate('/home')}>
                back to homepage
            </Button>
            <br/>
            <ImagePostLarge Description={"hallo"} UserProfilePicture={logo} PostImage={testImage}/>
        </Box>
    );
}
