import React from 'react'
import classes from './Content.module.css'
import Card from '../Cards/Card'
import ObjectDetection from '../ObjectDetection/ObjectDetection'


const Content = () => {

    return (
        <div className={classes.content}>
            <div className={classes.contentWrap}>

                <h1>System Check</h1>
                <h2>We utilize your camera image to ensure fairness for all participants, and we also employ both your camera and microphone for a video questions where you will be prompted to record a response using your camera or webcam, so it's essential to verify that your camera and microphone are functioning correctly and that you have a stable internet connection.
                    To do this, please position yourself in front of your camera, ensuring that your entire face is clearly visible on the screen. This includes your forehead, eyes, ears, nose, and lips. You can initiate a 5-second recording of yourself by clicking the button below.</h2>
                <div className={classes.videoDeck}>
                    <div className={classes.leftDeck} style={{ border: '2px solid #755ae2' }}>
                        <ObjectDetection />
                    </div>
                    <div className={classes.rightDeck}>
                        <div className={classes.deckCardWrap}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
                <button>
                    Take picture and continue
                </button>
            </div>
        </div>
    )
}

export default Content
