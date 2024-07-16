import React from 'react'
import classes from './Card.module.css'
import { MonitorRecorder } from 'iconsax-react';

const Card = () => {
    return (
        <div className={classes.card}>
            <div className={classes.cardWrap}>
                <MonitorRecorder size="32" color="#755ae2" />
            </div>
            <div className={classes.idleWrap}>
            </div>
            <h1>WebCam</h1>
        </div>
    )
}

export default Card
