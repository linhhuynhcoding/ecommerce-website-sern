import clsx from 'clsx';
import styles from './home.module.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopHome from '../../components/TopHome';
import ProductBlock from '../../components/ProductBlock';
import Loading from '../../components/Loading/index.jsx';

import { useEffect, useState } from 'react';


function Home() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Home Page</title>

            </Helmet>
            <Header />

            <main>
                {loading ? <Loading></Loading> : null}

                <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                <div className={clsx('clearHeader')}></div>
                <TopHome />
                <div className={clsx(styles.Main)}>
                    <ProductBlock setLoading={setLoading} key={'laptop'} backgroundColor={'background1'} categoryID={'laptop'} />
                    <ProductBlock setLoading={setLoading} key={'sanphamapple'} backgroundColor={'background2'} categoryID={'sanphamapple'} />
                    <ProductBlock setLoading={setLoading} key={'pc'} backgroundColor={'background1'} categoryID={'pc'} />
                    <ProductBlock setLoading={setLoading} key={'linhkien'} backgroundColor={'background2'} categoryID={'linhkien'} />
                    <ProductBlock setLoading={setLoading} key={'phukien'} backgroundColor={'background1'} categoryID={'phukien'} />
                </div>
            </main>

            <Footer />

        </>
    );
}


export default Home;