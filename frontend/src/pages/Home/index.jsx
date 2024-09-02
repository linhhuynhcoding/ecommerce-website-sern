import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <title>Home Page</title>
                
            </Helmet>
            <Header />
            
            <main>
                <img style={{width:1000}} src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" />
            </main>
            
            <Footer/>

        </>
    );
}


export default Home;