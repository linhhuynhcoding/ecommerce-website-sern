import clsx from 'clsx';
import styles from './Profile.module.scss';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//---------------PRIME REACT
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';

//________API SERVICE

import {
    handleGetAddressUser,
    handleUpdateAddressUser,
} from '../../service/UserService.js'


function Address({ setLoading, showSuccess, showError }) {
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [detail, setDetail] = useState("");
    const username = localStorage.getItem("username")


    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        // await handleUpdateInfoUser

        await handleUpdateAddressUser(username, city, district, ward, detail).then(res => {
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

    useEffect(() => {
        async function getData() {
            await handleGetAddressUser(username).then((res) => {
                console.log(res);
                if (res?.status === 200) {
                    setCity(res?.data?.data?.city_province ?? "")
                    setDistrict(res?.data?.data?.district ?? "")
                    setWard(res?.data?.data?.ward_communce ?? "")
                    setDetail(res?.data?.data?.addressDetail ?? "")
                }
                //     setCity(res?.data?.data?.email ?? "");
                //     setDistrict(res?.data?.data?.phone ?? "");
                //     setWard(res?.data?.data?.gender ?? "");
                //     setDetail(res?.data?.data?.name ?? "");
                //     setDob(Date(res?.data?.data?.dob).toString() ?? "");
                // }
            })
        }
        getData();
    }, [])


    return <div className={clsx(styles.DetailBox)}>
        <h3>Địa chỉ giao hàng</h3>
        <form onSubmit={submitHandler} className={clsx(styles.FormBoxAddress)}>

            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Tỉnh thành</label>
                <InputText required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />


            </fieldset>

            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Quận/ Huyện</label>
                <InputText required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                />
            </fieldset>

            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Phường/ Xã</label>
                <InputText required
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                />
            </fieldset>

            <fieldset className={clsx(styles.FormField)}>
                <label htmlFor="">Địa chỉ cụ thể </label>
                <InputText required
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                />
            </fieldset>
            <div>
                <Button label="Cập nhật" />
            </div>
        </form>
    </div>
}

export default Address;