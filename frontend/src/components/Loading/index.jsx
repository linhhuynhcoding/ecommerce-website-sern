import clsx from 'clsx';
import styles from './Loading.module.scss';
import { useEffect, useRef, useState } from 'react';

//---------------PRIME REACT
import { ProgressSpinner } from 'primereact/progressspinner';



function Loading() {
    return <>
        <div className={clsx('darkBox')}></div>
        <ProgressSpinner 
         strokeWidth="3" animationDuration=".5s"
        className={clsx(styles.ProgressSpinner)} />
    </>
}

export default Loading;