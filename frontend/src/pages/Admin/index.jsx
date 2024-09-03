import clsx from 'clsx';
import styles from './admin.module.scss';
import { Helmet } from 'react-helmet';
import AdminMenu from './Components/AdminMenu'

function AdminDashbroad() {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes='16x16' />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Admin Dashboard</title>

            </Helmet>

            <main>
                <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                <h1>Admin Page</h1>
                <div className={clsx(styles.admin)}>
                    <AdminMenu />
                </div>
                <img style={{ width: 1000 }} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
            </main>

        </>
    );
}

export default AdminDashbroad;