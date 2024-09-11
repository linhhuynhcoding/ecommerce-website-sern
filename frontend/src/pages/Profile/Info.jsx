import clsx from 'clsx';
import styles from './Profile.module.scss';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------PRIME REACT
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
//________API SERVICE

import { 
    handleGetInfoUser, 
    handleUpdateInfoUser, 
    handleLogout 
} from './../../service/UserService.js'

function Info({setLoading, showSuccess, showError}) {
    const pattern = new RegExp(/[\-\.\w]+@[\-\w]+\.+[\-\w]+/g);
    const [name, setName] = useState("");
    const [mail, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gen, setGen] = useState('male');
    const [dob, setDob] = useState("");
    const username = localStorage.getItem("username")


    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        // await handleUpdateInfoUser
        if (!pattern.test(mail)) {
            setLoading(false);
            showError("Sai định dạng email!")
        }
        else {
            const user = {
                "username": username,
                "email": mail,
                "name": name,
                "phone": String(phone),
                "dob": Date.parse(dob).toString(),
                "gender": (gen === 'male' ? 'Nam' : (gen === 'fermale' ? 'Nữ' : 'Khác'))
            }
            console.log(user);
            await handleUpdateInfoUser(user).then(res => {
                console.log(res);
                if (res?.status === 200) {
                    setLoading(false);
                    showSuccess("Cập nhật thành công")
                }
                else {
                    setLoading(false);
                    showError("Cập nhật thất bại!")
                }
            })

        }
    }

    useEffect(() => {
        async function getData() {
            await handleGetInfoUser(username).then((res) => {
                console.log(res);
                if (res?.status === 200) {
                    setEmail(res?.data?.data?.email);
                    setPhone(res?.data?.data?.phone ?? null);
                    setGen(res?.data?.data?.gender
                        ? (
                            res?.data?.data?.gender === 'Nam'
                                ? 'male'
                                : (
                                    res?.data?.data?.gender === 'Nữ'
                                        ? 'fermale'
                                        : 'orther'
                                )
                        )
                        : 'male');
                    setName(res?.data?.data?.name ?? '');
                    setDob(Date(res?.data?.data?.dob).toString() ?? "");
                }
            })
        }
        getData();
    }, [])
    return <div className={clsx(styles.DetailBox)}>
        <h3>Thông tin tài khoản</h3>
        <form onSubmit={submitHandler} className={clsx(styles.FormBox)}>

            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Họ và tên</label>
                <InputText value={name} required id="name" onChange={(e) => setName(e.target.value)} />

            </fieldset>
            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Email</label>
                <InputText value={mail} keyfilter="email" required id="mail" onChange={(e) => {
                    setEmail(e.target.value)
                }
                } />

            </fieldset>
            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Số điện thoại</label>
                <InputText value={phone} keyfilter="int" required id="phone" 
                onChange={(e) => setPhone(e.target.value)} />

            </fieldset>
            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Ngày sinh</label>
                <input type="date" value={dob} onChange={(e) => {
                    setDob(e.target.value);
                    console.log(dob);
                }}
                />
            </fieldset>
            <fieldset className={clsx(styles.FormField, styles.gen)}>
                <label htmlFor="">Giới tính</label>
                <div className={clsx(styles.ratio)}>
                    <RadioButton inputId="male" name="male" value="male" onChange={(e) => setGen(e.value)} checked={gen === 'male'} />
                    <label htmlFor="">Nam</label>
                </div>
                <div className={clsx(styles.ratio)}>
                    <RadioButton inputId="fermale" name="fermale" value="fermale" onChange={(e) => setGen(e.value)} checked={gen === 'fermale'} />
                    <label htmlFor="">Nữ</label>
                </div>
                <div className={clsx(styles.ratio)}>
                    <RadioButton inputId="orther" name="orther" value="orther" onChange={(e) => setGen(e.value)} checked={gen === 'orther'} />
                    <label htmlFor="">Khác</label>
                </div>
            </fieldset>
            <div>
                <Button label="Cập nhật" />
            </div>
        </form>
    </div>
}

export default Info;