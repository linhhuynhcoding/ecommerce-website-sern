import clsx from 'clsx';
import styles from './tophome.module.scss';
import MainMenu from '../MainMenu';
import SlideHome from '../SlideHome';
import HorizontalBanner from '../HorizontalBanner';
import {RightBanner} from '../RightBanner';
import { useEffect, useState } from 'react';

function TopHome() {
    return (
        <>
            <div className={clsx(styles.topHomeContainer)}>
                <div className={clsx(styles.topHome)}>
                    <MainMenu _id='topMenu'/>
                    <SlideHome />
                    <RightBanner />
                </div>
                <div className={clsx(styles.HorizontalBanner)}>
                    <HorizontalBanner />
                </div>
            </div>
        </>
    );
}

export default TopHome;