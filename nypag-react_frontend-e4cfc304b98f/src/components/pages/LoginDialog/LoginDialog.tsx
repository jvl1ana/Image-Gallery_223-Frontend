import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';

const LoginDialog = () => {
    const { user } = useContext(ActiveUserContext);
    const [open, setOpen] = useState(!user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setOpen(false);
        }
    }, [user]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleLoginRedirect = () => {
        navigate('/login');
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Login Required"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    To continue, you must log in first.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLoginRedirect} color="primary" variant="contained">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
