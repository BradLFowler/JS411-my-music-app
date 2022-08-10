import React from 'react';

import '../App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';


export default function VolumeCard(props) {

    return (
      <Card sx={{ width: 260 }}>
        <CardContent>
          <div className='cardContainer'>
            <Typography variant="h5" component="div">
              Master Volume
            </Typography>
            <Typography variant="body2">
              Overrides all other sound settings in this application
            </Typography>
            <Slider
              aria-label="Temperature"
              value={props.volume}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
              onChange={props.handleVolume}
            />
          </div>
        </CardContent>
      </Card>
  );
}