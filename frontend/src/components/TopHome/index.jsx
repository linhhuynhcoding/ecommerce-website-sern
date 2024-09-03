import clsx from 'clsx';
import styles from './tophome.module.scss';
import MainMenu from '../MainMenu';
import { useEffect, useState } from 'react';

function TopHome() {
    return (
        <>
            <div className={clsx(styles.topHomeContainer)}>
                <div className={clsx(styles.topHome)}>

                    <MainMenu />
                    <div className={clsx(styles.imageSlider)} style={{ backgroundColor: 'red', }}>TEST</div>
                    <div className={clsx(styles.rightBanner)} style={{ backgroundColor: 'yellow', }}>TEST</div>
                </div>

            </div>
        </>
    );
}

export default TopHome;