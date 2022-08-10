import React, { useEffect, useState } from 'react';

import OnlineCard from './OnlineCard';
import VolumeCard from './VolumeCard';
import SoundQualityCard from './SoundQualityCard';

import '../App.css';


export default function Dashboard() {
  const [online, setStatus] = useState(false)
  const [volume, setVolume] = useState(20)
  const [quality, setQuality] = useState([1, 2, 3])
  const [notifications, setNotifs] = useState([])

  const handleStatus = () => {
    setStatus(!online)
  }

  const handleVolume = (e) => {
    setVolume(e.target.value)
  }

  const handleQuality = (e) => {
    setQuality(e.target.value)
  }

  // I tried I just could'nt figure it out
  // useEffect(() => {
  //   const newNotifs = notifications
  //   const onlineNotif = "Your application is offline. You won't be able to share or stream music to other devices."
  //   const volumeNotif = "Listening to music at a high volume could cause long-term hearing loss."
  //   const qualityNotif = "Music quality is degraded. Increase quality if your connection allows it."

  //   if(!online) {

  //     newNotifs.splice(onlineNotif, 1)
  //     newNotifs.push(onlineNotif)

  //   } else if(volume > 80) {

  //     newNotifs.splice(volumeNotif, 1)
  //     newNotifs.push(volumeNotif)

  //   } else if(quality == "Low") {
      
  //     newNotifs.splice(qualityNotif, 1)
  //     newNotifs.push(qualityNotif)

  //   }

  //   setNotifs(newNotifs)
  //   console.log(notifications)
  // }, [online, volume, quality])

  return (
    <div>
        <header className='dashHeader'>Welcome User!</header>
        <div className='controlsContainer'>
            <OnlineCard 
            handleStatus={handleStatus}
            />
            <VolumeCard 
            volume={volume} 
            handleVolume={handleVolume}
            />
            <SoundQualityCard 
            handleQuality={handleQuality}
            />
        </div>
        <div>
          <h1>System Notifications: {notifications}</h1>
        </div>
    </div>
  )
}
