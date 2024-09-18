
import React from 'react';
import {useFormik} from 'formik';
import {registerUser, updateUser} from '../../../Services/UserService';
import {Box, Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {array, object, string} from 'yup';
import {User, UserDTO} from '../../../types/models/User.model';

interface UserProps {
    user?: UserDTO,
    submitActionHandler?: (values: User) => void
}

const UserForm = ({user, submitActionHandler}: UserProps) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            id: user?.id || '',
            firstName: user?.firstName || '',
            lastName: user?.lastName || '',
            email: user?.email || '',
            roles: user?.roles || [],
        },
        validationSchema: object({
            firstName: string().required().min(2).max(50),
            lastName: string().required().min(2).max(50),
            email: string().required().email(),
            roles: array().of(string()),
        }),
        onSubmit: async (values: UserDTO) => {
            try {
                if (values.id) {

                    await updateUser(values.id, values);
                } else {

                    await registerUser(values);
                }
                navigate('/users');
            } catch (error) {
                alert('Fehler beim Speichern des Benutzers');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{paddingTop: '15px'}}>
                <TextField
                    id="firstName"
                    label="Vorname"
                    variant="outlined"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                    value={formik.values.firstName}
                />

            </Box>
            <Button type="submit" variant="contained" color="primary">
                {user?.id ? 'Benutzer aktualisieren' : 'Benutzer hinzufügen'}
            </Button>
        </form>
    );
};

export default UserForm;
