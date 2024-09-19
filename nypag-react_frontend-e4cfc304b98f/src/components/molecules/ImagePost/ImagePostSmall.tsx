import React from "react";
import {Card, CardContent, Button, Typography} from "@mui/material";
import LikeButton from "../../atoms/LikeButton";
import {useNavigate} from "react-router-dom";
import UserProfileButton from "../../atoms/UserProfileButton/UserProfileButton";

type ImagePostSmallProps = {
    Description: string
    Userid: string
    PostImage: string
    itemID: string | undefined
}

const ImagePostSmall: React.FC<ImagePostSmallProps> = ({ Description, Userid, PostImage, itemID}) => {
    const navigate = useNavigate();


    return (
        <Button variant="contained" onClick={() => navigate(`/post/${itemID}`)}>
            <Card sx={{maxWidth: 200, minWidth: 200}}>
                <img
                    src={PostImage}
                    width={"100%"}
                    height={"100%"}
                    alt="uh oh"
                    loading="lazy"
                />
                <CardContent>
                    <UserProfileButton
                        Userid={Userid}
                    size={'40px'}/>
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