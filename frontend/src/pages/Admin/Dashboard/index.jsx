import clsx from 'clsx';
import styles from './admin.module.scss';
import { useEffect } from 'react';
import {useOutletContext} from 'react-router-dom';

import Breadcrumb from '../Components/Breadcrumb';

function Dashboard() {
    const [updateTab] = useOutletContext();
    useEffect(() => {

        updateTab('dashboardBox');

    } ,[]);
    return (
        <>
            <h1>Dashboard</h1>
            <Breadcrumb />
            <img style={{ width: 1000 }} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />

        </>
    );
}

export default Dashboard;