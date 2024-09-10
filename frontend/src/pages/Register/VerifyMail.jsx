import clsx from 'clsx';
import styles from './Register.module.scss';

import { Helmet } from 'react-helmet';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation, useNavigate } from "react-router-dom";

//---------------MY COMPONENTS
import Loading from '../../components/Loading/index.jsx';

//---------------PRIME REACT
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';
import "primereact/resources/themes/lara-light-cyan/theme.css";

//---------------ANOTHER COMPONENTS 
//________API SERVICE
import {handleCreateUser} from './../../service/UserService.js'
//--------------------------

function VerifyMail() {
    const [loading, setLoading] = useState(false);
    const [token, setTokens] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const toast = useRef(null);
    const navigate = useNavigate();
    const showWarn = (content) => {
        toast.current.show({ severity: 'info2', summary: 'Cảnh báo', detail: content });
    };
    const showSuccess = (content) => {
        toast.current.show({ severity: 'success', summary: 'Chúc mừng', detail: content });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(Number(token));
        if (Number(token) < 1000) {
            showWarn("Sai mã xác thực! Vui lòng thử lại")
        }
        else {            
            setLoading(true)
            await handleCreateUser(token).then((res) => {
                document.cookie = "toast=success; max-Age=3600; path=/login";
                console.log(res);
                setLoading(true);
                window.location.href = '/login';
                // navigate('/')
            });
        }
    }

    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>Xác thực</title>

        </Helmet>
        <main>
            {loading ? <Loading></Loading> : null}
            <Toast ref={toast} />

            <div className={clsx(styles.Cover)}>

                <div className={clsx(styles.Register)}>
                    <div className={clsx(styles.Container)}>
                        <h1>Xác thực tài khoản của bạn</h1>
                        <form onSubmit={submitHandler} className={clsx(styles.FormBox)}>
                            <div className={clsx(styles.OTPContainer)}>
                                <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask />

                            </div>

                            <div className={clsx(styles.FormField)}>
                                <input type="submit" value="Xác thực" />
                            </div>
                        </form>
                        <div>
                            <span>Không nhận được mã ? </span>
                            <a id="resend">Gửi lại</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </>

}


export default VerifyMail;