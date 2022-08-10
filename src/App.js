import React, { useState } from 'react';

import Dashboard from './components/Dashboard';

import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function App() {
  const [loggedIn, setLogin] = useState(false)
  const [text, setText] = useState("")

  const handleLogin = () => {
    !loggedIn ? setLogin(true) : setLogin(false)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      {loggedIn ? 
        <Dashboard /> :
        <div className='loginContainer'>
          <div>
            <TextField onChange={handleChange} variant='standard' label='Username' required></TextField>
          </div>
          <div>
            <TextField onChange={handleChange} variant='standard' label='Password' required></TextField>
          </div>
          <div>
            <Button className='loginButton' variant='contained' onClick={handleLogin}>Login</Button>
          </div>
      </div>
      }
    </Box>
  );
}