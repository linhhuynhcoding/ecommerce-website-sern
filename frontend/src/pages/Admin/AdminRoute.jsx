import { Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";

import AdminMenu from './Components/AdminMenu'
import AdminHeader from './Components/AdminHeader'
import AdminStyles from './Components/AdminStyles'
import clsx from "clsx";

function AdminRoute() {
    const [tab, setTab] = useState('');

    const updateTab = (newTab) => {
        setTab(newTab);
    }
    useEffect(() => {
    }, []);

    return (
        <AdminStyles>
            <Helmet>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes='16x16' />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Admin Page</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                    crossorigin="anonymous"
                />
            </Helmet>
            <main>
                <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                <div className={'admin'}>
                    <div className={'adminMenuContainer'}>
                        <AdminMenu _id={tab} />
                    </div>
                    <div className={'dashboard'}>
                        <div className={'AdminHeaderContainer'}>
                            <AdminHeader />
                        </div>
                        <div className={'clearHeader'}></div>
                        <div className={'Container'} >
                            <Outlet context={[updateTab]} />
                        </div>
                    </div>
                </div>

            </main>
        </AdminStyles>
    );

}
export default AdminRoute;