import clsx from 'clsx';
import styles from './Profile.module.scss';

import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------MY COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/index.jsx';

//---------------PRIME REACT
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';


//---------------ANOTHER COMPONENTS
//________API SERVICE
//--------------------------

function Login() {
    const [loading, setLoading] = useState(false);
    const toast = useRef(null);

    const showError = (content) => {
        toast.current.show({ severity: 'error', summary: 'Cảnh báo', detail: content });
    };
    const showSuccess = (content) => {
        toast.current.show({ severity: 'success', summary: 'Chúc mừng', detail: content });
    };

    const submitHandler = () => {

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
                    <h1>Đăng nhập</h1>
                    <form onSubmit={submitHandler} className={clsx(styles.FormBox)}>
                        <div className={clsx(styles.FormField)}>
                            <label htmlFor="">Tên đăng nhập</label>
                            <input type="text" id={""}
                                value={0} required
                            // onChange={(e) => { setUsername(e.target.value) }} 
                            />

                        </div>
                        <div className={clsx(styles.FormField)}>
                            <label htmlFor="0">Mật khẩu</label>
                            <input type="0" id={"0"}
                                value={0} required
                            // onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <div>
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className={clsx(styles.FormField)}>
                            <input type="submit" value="Đăng nhập" />
                        </div>
                    </form>
                    <div>
                        <span>Bạn chưa có tài khoản ? </span>
                        <a href="/register">Đăng ký</a>
                    </div>
                </div>
            </div>
        </main>


        <Footer />
    </>

}

export default Login;