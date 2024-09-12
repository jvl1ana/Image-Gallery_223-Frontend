import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {IconButton} from "@mui/material";
import React, {useState} from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const handleLike =() => {
        console.log("clicked")
        if (liked){
            console.log("un liked")
            setLiked(false)
        } else{
            console.log("liked")
            setLiked(true)
        }

    }

    return(
        <IconButton onClick={handleLike}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    )
}