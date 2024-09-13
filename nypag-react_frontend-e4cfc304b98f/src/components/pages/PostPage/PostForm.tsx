import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { object, string, array } from 'yup';

interface PostProps {
    submitPostHandler?: (values: Post) => void;
}

interface Post {
    url: string;
    author: string;
    description: string;
    likes: string[];
}

const PostForm = ({ submitPostHandler }: PostProps) => {
    const formik = useFormik({
        initialValues: {
            url: '',
            author: '',
            description: '',
            likes: [],
        },
        validationSchema: object({
            url: string().url('Must be a valid URL').required('URL is required'),
            author: string().required('Author is required').min(2, 'Too short').max(50, 'Too long'),
            description: string().required('Description is required').min(10, 'Too short').max(500, 'Too long'),
            likes: array().of(string().email('Must be a valid email')),
        }),
        onSubmit: (values: Post) => {
            console.log('Form submitted, but no action is performed.');
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
                    id="author"
                    label="Author"
                    variant="outlined"
                    sx={{ paddingRight: '10px' }}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={Boolean(formik.touched.author && formik.errors.author)}
                    value={formik.values.author}
                />
                {formik.errors.author && formik.touched.author ? (
                    <div style={{ color: 'red' }}>{formik.errors.author}</div>
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

            <div>
                <Button
                    sx={{ marginTop: '15px', marginRight: '10px' }}
                    variant="contained"
                    color="success"
                    type="submit"
                >
                    Create Post
                </Button>
            </div>
        </form>
    );
};

export default PostForm;
