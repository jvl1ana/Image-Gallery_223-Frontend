import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ImagePostLarge from "../../molecules/ImagePost/ImagePostLarge";
import PostImageService from '../../../Services/PostImageService';
import logo from "../../../logo1.png";

export default function SinglePostPage() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const handleEdit = () => {
        navigate(`/edit-post/${id}`);
    };

    const handleDeleteConfirmation = () => {
        setOpenDeleteDialog(true);
    };

    const handleDelete = async () => {
        if (id) {
            try {
                await PostImageService.deleteImagePost(id);
                navigate('/home');
            } catch (error) {
                alert('Failed to delete post');
            }
        }
        setOpenDeleteDialog(false);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Button variant="contained" onClick={() => navigate('/home')}>
                Back to homepage
            </Button>
            <br />
            <ImagePostLarge defaultImage={logo} />
            <br />

            <Button variant="contained" color="primary" onClick={handleEdit}>
                Edit Post
            </Button>
            <Button variant="contained" color="error" onClick={handleDeleteConfirmation}>
                Delete Post
            </Button>


            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
            >
                <DialogTitle>{"Delete Post"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this post? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
