import React from 'react';
import classes from './Header.module.css';
import { TimerStart, Eye } from 'iconsax-react';
import { ReactComponent as Logo } from '../../assets/logoo.svg';
import { useTimer } from '../../context/TimerContext';

const Header = () => {
    const { time, startTimer } = useTimer();
    startTimer();
    return (
        <nav className={classes.navBar}>
            <div className={classes.navLogo}>
                <Logo />
                <div className={classes.logoText}>
                    <h1>
                        Frontend Developer
                    </h1>
                    <h2>
                        skill assessment test
                    </h2>
                </div>
            </div>
            <div className={classes.navTimer}>
                <div className={classes.timerWrap}>
                    <TimerStart size="32" color="#755ae2" />
                    <h1>
                        {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
                        <span>
                            time left
                        </span>
                    </h1>

                </div>
                <div className={classes.eyeWrap}>

                    <Eye size="32" color="#755ae2" />
                </div>
            </div>
        </nav>
    )
}

export default Header
