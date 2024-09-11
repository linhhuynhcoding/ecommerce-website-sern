import clsx from 'clsx';
import styles from './Profile.module.scss';

import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------MY COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/index.jsx';
import Info from './Info.jsx';
import Address from './Address.jsx';
//---------------PRIME REACT
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';


//---------------ANOTHER COMPONENTS
//________API SERVICE

import { 
    handleGetInfoUser, 
    handleUpdateInfoUser, 
    handleLogout 
} from './../../service/UserService.js'
//--------------------------

function Profile() {

    const [loading, setLoading] = useState(false);
    const [select, setSelect] = useState('address'); //info, order, address

    const toast = useRef(null);
    const username = localStorage.getItem("username")

    const showError = (content) => {
        toast.current.show({ severity: 'error', summary: 'Cảnh báo', detail: content });
    };
    const showSuccess = (content) => {
        toast.current.show({ severity: 'success', summary: 'Chúc mừng', detail: content });
    };

    const btnLogoutHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        await handleLogout(username).then((res) => {
            localStorage.setItem("username", "");
            window.location.href = '/';
        })
    }

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Đăng nhập</title>

        </Helmet>
        <Header onMenu={true} />
        <main>
            {loading ? <Loading></Loading> : null}
            <Toast ref={toast} />

            <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
            <div className={clsx('clearHeader')}></div>

            <div className={clsx(styles.Profile)}>
                <div className={clsx(styles.Container)}>
                    <div className={clsx(styles.ProfileBox)}>
                        <div className={clsx(styles.profileTitle)}>
                            <i className={clsx('fi fi-rr-user')}></i>
                            <div className={clsx(styles.nameBox)}>
                                <span>Tài khoản của</span>
                                <strong><h5>{username}</h5></strong>
                            </div>
                        </div>
                        <div className={clsx(styles.divider)}><a href=""></a></div>
                        <div className={clsx(styles.nav, (select === 'info') ? styles.clicked : null)}><a onClick={() => setSelect('info')}>Thông tin tài khoản</a></div>
                        <div className={clsx(styles.nav, (select === 'order') ? styles.clicked : null)}><a onClick={() => setSelect('order')}>Quản lý đơn hàng</a></div>
                        <div className={clsx(styles.nav, (select === 'address') ? styles.clicked : null)}><a onClick={() => setSelect('address')}>Sổ địa chỉ</a></div>
                        <div className={clsx(styles.divider)}><a href=""></a></div>
                        
                        <Button label="Đăng xuất" onClick={btnLogoutHandler}/>
                    </div>
                    
                    { select === 'info' ? < Info setLoading={setLoading} showError={showError} showSuccess={showSuccess}/> : null}
                    { select === 'address' ? < Address setLoading={setLoading} showError={showError} showSuccess={showSuccess}/> : null}
                
                    <div>
                    </div>

                </div>
            </div>
        </main>


        <Footer />
    </>

}

export default Profile;