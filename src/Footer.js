import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img  className='footer_albumLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZ_JL8u3tYNQJOZ2dWSGr_W9ZA1qP_euBPQ&usqp=CAU' alt='' />
                <div className='footer_songInfo'>
                    <h4>SongName</h4>
                    <p>Singer</p>
                </div>
            </div>

            <div className='footer_center'>
                <ShuffleIcon className='footer_icon'/>
                <SkipPreviousIcon className='footer_icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
                <SkipNextIcon className='footer_icon'/>
                <RepeatIcon className='footer_icon'/>
            </div>

            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

