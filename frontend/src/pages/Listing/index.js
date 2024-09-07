import clsx from 'clsx';
import styles from './listing.module.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopHome from '../../components/TopHome';


function Listing() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Home Page</title>

            </Helmet>
            <Header onMenu={true} />

            <main>
                <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                <div className={clsx(styles.clearHeader)}></div>
                {/* <TopHome /> */}
                <div className={clsx(styles.Main)}>
                    <div className={clsx(styles.listing)}>
                        <div className={clsx(styles.Container)}>
                            aaaaaaa
                        </div>
                    </div>
                </div>
                <img style={{ width: 1000 }} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
            </main>

            <Footer />

        </>
    );
}


export default Listing;