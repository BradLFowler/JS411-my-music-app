import React from 'react';


import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function SoundQualityCard(props) {

    return (
      <Card sx={{ width: 260 }}>
        <CardContent>
          <div className='cardContainer'>
            <Typography variant="h5" component="div">
              Sound Quality
            </Typography>
            <Typography variant="body2">
              Manually control the music quality in event of poor connection
            </Typography>
            <Select defaultValue="Normal" onChange={props.handleQuality}>
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </div>
        </CardContent>
      </Card>
    );
}