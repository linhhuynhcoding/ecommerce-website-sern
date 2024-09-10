import clsx from 'clsx';
import styles from './home.module.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TopHome from '../../components/TopHome';
import ProductBlock from '../../components/ProductBlock';

 
function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Home Page</title>

            </Helmet>
            <Header />

            <main>
                <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
                <div className={clsx('clearHeader')}></div>
                <TopHome />
                <div className={clsx(styles.Main)}>
                    <ProductBlock key={'laptop'} backgroundColor={'background1'} categoryID={'laptop'}/>
                    <ProductBlock key={'sanphamapple'} backgroundColor={'background2'} categoryID={'sanphamapple'}/>
                    <ProductBlock key={'pc'} backgroundColor={'background1'} categoryID={'pc'}/>
                    <ProductBlock key={'linhkien'} backgroundColor={'background2'} categoryID={'linhkien'}/>
                    <ProductBlock key={'phukien'} backgroundColor={'background1'} categoryID={'phukien'}/>
                </div>
                <img style={{ width: 1000 }} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
            </main>

            <Footer />

        </>
    );
}


export default Home;