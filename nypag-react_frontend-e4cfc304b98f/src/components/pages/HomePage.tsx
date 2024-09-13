import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo1.png';
import LoginDialog from './LoginDialog/LoginDialog';

export default function HomePage() {
  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate('/create-post');
  };

  return (
      <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection={'column'}
      >
        <h1>Welcome to the Homepage</h1>
        <LoginDialog />

        <Button
            variant="contained"
            color="primary"
            onClick={handleCreatePost}
            style={{ position: 'absolute', top: 20, right: 20 }}
        >
          Create Post
        </Button>

        <img
            src={logo}
            style={{ filter: 'invert(100%)' }}
            className='App-logo'
            alt='logo'
        />
      </Box>
  );
}
