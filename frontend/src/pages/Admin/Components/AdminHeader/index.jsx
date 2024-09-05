import clsx from 'clsx';
import styles from './AdminHeader.module.scss';

function AdminHeader() {
    return (
        <>
            <div className={clsx(styles.AdminHeader)}>
                <a href="/admin" className={clsx(styles.about__box)}>
                    <div className={clsx(styles.about__boxIcon)}>
                        <i className={clsx('fi fi-rs-bell-notification-social-media')}></i>

                    </div>
                </a>
                <a href="/admin" className={clsx(styles.about__box)}>
                    <div className={clsx(styles.about__boxIcon)}>
                        <i className={clsx('fi fi-rr-user')}></i>

                    </div>
                </a>
            </div>
        </>
    );
}

export default AdminHeader;