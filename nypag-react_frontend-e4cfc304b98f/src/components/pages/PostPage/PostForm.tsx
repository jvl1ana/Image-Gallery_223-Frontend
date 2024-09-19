import { useContext } from 'react';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { object, string } from 'yup';
import PostImageService from '../../../Services/PostImageService';
import {useNavigate} from "react-router-dom";

const PostForm = () => {
    const { user } = useContext(ActiveUserContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            url: '',
            description: '',
            likes: 0,
        },
        validationSchema: object({
            url: string().url('Must be a valid URL').required('URL is required'),
            description: string().required('Description is required').min(10, 'Too short').max(500, 'Too long'),
        }),
        onSubmit: async (values) => {
            if (!user) {
                alert('User is not logged in');
                return;
            }

            try {

                await PostImageService.createImagePost({
                    ...values,
                    author: {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                });
                alert('Post created successfully');
                navigate(`/home`);
            } catch (error) {
                alert('Error creating post');
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ paddingTop: '15px' }}>
                <TextField
                    id="url"
                    label="URL"
                    variant="outlined"
                    sx={{ paddingRight: '10px' }}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.url && formik.errors.url)}
                    value={formik.values.url}
                />
                {formik.errors.url && formik.touched.url ? (
                    <div style={{ color: 'red' }}>{formik.errors.url}</div>
                ) : null}

                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.description && formik.errors.description)}
                    value={formik.values.description}
                />
                {formik.errors.description && formik.touched.description ? (
                    <div style={{ color: 'red' }}>{formik.errors.description}</div>
                ) : null}
            </Box>

            <Button
                id="createButton"
                sx={{ marginTop: '15px' }} variant="contained" color="success" type="submit">
                Create Post
            </Button>
        </form>
    );
};

export default PostForm;
