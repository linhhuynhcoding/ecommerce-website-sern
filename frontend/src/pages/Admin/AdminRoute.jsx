import { Outlet } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import AdminMenu from './Components/AdminMenu'
import AdminHeader from './Components/AdminHeader'
import GlobalStyles from './Components/GlobalStyles'
import clsx from "clsx";

function AdminRoute() {
    const [tab, setTab] = useState('');
    
    const updateTab = (newTab) => {
        setTab(newTab);
    }
    useEffect(() => {
    },[]);

    return (
        <>
            <GlobalStyles>
                <>
                    <Helmet>
                        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes='16x16' />
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Admin Page</title>
                    </Helmet>
                    <main>
                        <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                        <div className={clsx('admin')}>
                            <div className={clsx('adminMenuContainer')}>
                                <AdminMenu _id={tab} />
                            </div>
                            <div className={clsx('dashboard')}>
                                <div className={clsx('AdminHeaderContainer')}>
                                    <AdminHeader/>
                                </div>
                                <div className={clsx('clearHeader')}></div>
                                <div className={clsx('container')} >
                                    <Outlet context={[updateTab]}/>
                                </div>
                            </div>
                        </div>

                    </main>
                </>
            </GlobalStyles>
        </>
    );

}
export default AdminRoute;