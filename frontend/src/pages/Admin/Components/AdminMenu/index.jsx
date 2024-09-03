import clsx from 'clsx';
import styles from './AdminMenu.module.scss';

function AdminMenu() {
    return (
        <>
            <div className={clsx(styles.adminMenu)}>
                <div className={clsx(styles.headContainer)}>
                    <div className={clsx(styles.logo)}>
                        <img src="/logo.png" alt="" />
                    </div>

                </div>
                <div className={clsx(styles.container)}>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                                <i class="fi fi-sr-dashboard-panel"></i>                            
                                </div>
                            <div className={clsx(styles.nav__title)}>Dashboard</div>
                        </a></div>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-box-open"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Products</div>
                        </a></div>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-add"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Add New Product</div>
                        </a></div>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-review"></i>
                                                        </div>
                            <div className={clsx(styles.nav__title)}>Customers</div>
                        </a></div>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-ss-user-headset"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Customers Details</div>
                        </a></div>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-sr-order-history"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Orders</div>
                        </a></div>
                    <div className={clsx(styles.navBox)}>
                        <a className={clsx(styles.nav)} href="">
                            <div className={clsx(styles.nav__icon)}>
                            <i class="fi fi-br-list"></i>
                            </div>
                            <div className={clsx(styles.nav__title)}>Orders Details</div>
                        </a></div>
                </div>
            </div>
        </>


    );
}

export default AdminMenu;
