import clsx from 'clsx';
import styles from './Register.module.scss';

import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation, useNavigate } from "react-router-dom";

//---------------MY COMPONENTS
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/index.jsx';
//---------------PRIME REACT
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

//---------------ANOTHER COMPONENTS
//________API SERVICE
import { handleCreateUserRequest } from './../../service/UserService.js'
//--------------------------

function Register() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const toast = useRef(null);
    const navigate = useNavigate();


    const showWarn = (content) => {
        toast.current.show({ severity: 'error', summary: 'Cảnh báo', detail: content });
    };

    const submitHandler = async (e) => {
        const formData = new FormData(e.target);
        e.preventDefault();
        if (password !== confirmPassword) {
            showWarn("Mật khẩu xác nhận không khớp!")
        }
        else {
            setLoading(true);
            await handleCreateUserRequest(email, username, password).then((res) => {
                if (Number(res.data['errCode']) === 0) {
                    setLoading(false);
                    window.location.href = '/register/verify';
                    
                }
                // navigate('/register/verify');
                else if (Number(res.data['errCode']) === 1) {
                    setLoading(false);
                    showWarn("Tên đăng nhập đã tồn tại!")
                    console.log("Tên đăng nhập đã tồn tại!")

                }
                console.log("aaaaaaâ")

            });

        }
    }

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Đăng ký</title>

        </Helmet>
        <Header onMenu={true} />
        <main>
            {loading ? <Loading /> : null}

            <Toast ref={toast} />

            <div id="cover" className={clsx('is-disable', 'darkBox')}></div>
            <div className={clsx('clearHeader')}></div>

            <div className={clsx(styles.Register)}>
                <div className={clsx(styles.Container)}>
                    <h1>Đăng ký</h1>
                    <form onSubmit={submitHandler} className={clsx(styles.FormBox)}>
                        <fieldset className={clsx(styles.FormField)}>
                            <label htmlFor="email">Email</label>
                            <input name='email' type="text" id={"email"} required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />

                        </fieldset>
                        <fieldset className={clsx(styles.FormField)}>
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input name='username' type="text" id={"username"} required
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }} />

                        </fieldset>
                        <fieldset className={clsx(styles.FormField)}>
                            <label htmlFor="password">Mật khẩu</label>
                            <input name='password' type="password" id={"password"} required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />

                        </fieldset>
                        <fieldset className={clsx(styles.FormField)}>
                            <label htmlFor="password-confirm">Xác nhận mật khẩu</label>
                            <input name='password-confirm' type="password" id={"password-confirm"} required
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                            />

                        </fieldset>
                        <div className={clsx(styles.FormField)}>
                            <input type="submit" value="Đăng ký" />
                        </div>
                    </form>
                    <div>
                        <span>Bạn đã có tài khoản ? </span>
                        <a href="/login">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </>

}

export default Register;