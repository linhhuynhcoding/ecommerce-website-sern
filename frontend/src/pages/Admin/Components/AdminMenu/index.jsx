import clsx from 'clsx';
import styles from './AdminMenu.module.scss';
import { useNavigate } from "react-router-dom";

import { useDeferredValue, useEffect, useState } from 'react';

function AdminMenu({_id}) {
    const navigate = useNavigate();


    return (
        <>
            <div className={clsx(styles.adminMenu)}>
                <div className={clsx(styles.headContainer)}>
                    <div className={clsx(styles.logo)}>
                        <img src="/logo.png" alt="" />
                    </div>

                </div>
                <div className={clsx(styles.container)}>
                    <div onClick={() => {navigate('/admin/dashboard')}} className={clsx(styles.navBox, {[styles.active] : _id === 'dashboardBox'})}>
                        <a className={clsx(styles.nav)} href="#">
                            <div className={clsx(styles.nav__icon)}>
                                <i class="fi fi-sr-dashboard-panel"></i>                            
                                </div>
                            <div className={clsx(styles.nav__title)}>Danh mục</div>
                        </a></div>
                    <div  onClick={() => {navigate('/admin/products')}} id={'productBox'} className={clsx(styles.navBox, {[styles.active] : _id === 'productBox'})}>
                        <a className={clsx(styles.nav)} href="#">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-box-open"></i>
                            </div>  
                            <div className={clsx(styles.nav__title)}>Sản phẩm</div>
                        </a></div>
                    <div  onClick={() => {navigate('/admin/dashboard')}} id={'addproductBox'} className={clsx(styles.navBox, {[styles.active] : _id === 'addproductBox'})}>
                        <a className={clsx(styles.nav)} href="#">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-add"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Thêm mới sản phẩm</div>
                        </a></div>
                    <div  onClick={() => {navigate('/admin/dashboard')}} id={'customerBox'} className={clsx(styles.navBox, {[styles.active] : _id === 'customerBox'})}>
                        <a className={clsx(styles.nav)} href="#">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-review"></i>
                                                        </div>
                            <div className={clsx(styles.nav__title)}>Người dùng</div>
                        </a></div>
                    <div  onClick={() => {navigate('/admin/dashboard')}} id={'customerDetailBox'} className={clsx(styles.navBox, {[styles.active] : _id === 'customerDetailBox'})}>
                        <a className={clsx(styles.nav)} href="#">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-ss-user-headset"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Thông tin người dùng</div>
                        </a></div>
                    <div  onClick={() => {navigate('/admin/orders')}} id={'orderBox'} className={clsx(styles.navBox, {[styles.active] : _id === 'orderBox'})}>
                        <a className={clsx(styles.nav)} href="#">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-order-history"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Đơn hàng</div>
                        </a></div>
                    
                </div>
            </div>
        </>


    );
}

export default AdminMenu;
