import React from 'react';

import '../App.css'
import Switch from '@mui/material/Switch'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const RedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

export default function OnlineCard(props) {

  return (
    <Card sx={{ width: 260 }}>
      <CardContent>
        <div className='cardContainer'>
          <Typography variant="h5" component="div">
            Online Mode
          </Typography>
          <Typography variant="body2">
            Is this application connected to the internet?
          </Typography>
        <RedSwitch onClick={props.handleStatus}/>
      </div>
      </CardContent>
    </Card>
  );
}