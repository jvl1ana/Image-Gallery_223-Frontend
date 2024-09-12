import { Box } from '@mui/system';
import logo from '../../../logo1.png';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ImagePostSmall from "../../molecules/ImagePost/ImagePostSmall"

export default function HomePage() {
  const navigate = useNavigate();


  return (
      <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
      >
        <h1>Welcome to the Homepage</h1>
        <img
            src={logo}
            style={{ filter: 'invert(100%)' }}
            className="App-logo"
            alt="logo"
        />
        <Button variant="contained" onClick={() => navigate('/login')}>
          login
        </Button>
      </Box>
  );
}
