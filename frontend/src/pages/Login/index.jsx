import clsx from 'clsx';
import styles from './Login.module.scss';

import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------MY COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/index.jsx';

//---------------PRIME REACT
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';


//---------------ANOTHER COMPONENTS
//________API SERVICE
import { handleLogin } from './../../service/UserService.js'
//--------------------------

function Login() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const toast = useRef(null);

    const showError = (content) => {
        toast.current.show({ severity: 'error', summary: 'Cảnh báo', detail: content });
    };
    const showSuccess = (content) => {
        toast.current.show({ severity: 'success', summary: 'Chúc mừng', detail: content });
    };
    const submitHandler = async (e) => {
        e.preventDefault();

        setLoading(true);
        await handleLogin(username, password).then((res) => {
            setLoading(false);
            if (res?.status === 404) {
                showError(res?.response?.data?.errMessage)
            }
            else {
                localStorage.setItem('username', username);
                showSuccess("Đăng nhập thành công!")
                const sleep = ms => new Promise(r => setTimeout(r, 1000));
                setLoading(true);
                window.location.href = '/';
            }
        })

    }
    useEffect(() => {
        var cookiesMap = document.cookie.split(";").map(value => {
            var val = value.split("=")
            var obj = { [val[0]]: val[1] }
            if (val[0] == 'toast') {
                showSuccess('Bạn đã đăng ký thành công!')
                document.cookie = 'toast=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/login;'
                return;
            }
        });
    }, []);



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

            <div className={clsx(styles.Login)}>
                <div className={clsx(styles.Container)}>
                    <h1>Đăng nhập</h1>
                    <form onSubmit={submitHandler} className={clsx(styles.FormBox)}>
                        <div className={clsx(styles.FormField)}>
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input type="text" id={"username"}
                                value={username} required
                                onChange={(e) => { setUsername(e.target.value) }} />

                        </div>
                        <div className={clsx(styles.FormField)}>
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id={"password"}
                                value={password} required
                                onChange={(e) => { setPassword(e.target.value) }}
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