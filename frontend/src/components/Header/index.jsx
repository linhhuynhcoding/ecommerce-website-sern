import clsx from 'clsx';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
function Header() {
    const [img_url, setImg_url] = useState("/logo.png");


    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            if (window.scrollY >= 200) {
                setImg_url('/icon.png');     
                document.getElementById('buttonMenu').classList.remove('is-disable');           
            }
            else {
                document.getElementById('buttonMenu').classList.add('is-disable');           
                setImg_url('/logo.png');
            }
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, []);

    // console.log('render')
    
    return (
        <header className={clsx(styles.webHeader)}>
            <div id='topBanner' className={clsx(styles.topBanner)}>
                <h4>
                    SỐC : KHÔNG GIẢM !!!
                </h4>
            </div>

            <div id='navTopBar' className={clsx(styles.navContainer)}>
                <nav className={styles.navbar}>
                    <div className={styles.button__home}>
                        <a href="/">
                            <div className={clsx(styles.logo)}>
                                {/* <img src="https://shopfront-cdn.tekoapis.com/static/phongvu/logo-full.svg" alt="" /> */}
                                {/* <img src="/logo.png" alt="" /> */}
                                <img src={img_url} alt="" />

                            </div>
                        </a>
                        <div id="buttonMenu" className={clsx(styles.button__menu, 'is-disable')}>
                            <div className={clsx(styles.button__menuContainer)}>
                                <i class="fi fi-br-list"></i>                                
                                <a href="">Danh mục sản phẩm</a>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(styles.searchContainer, 'is-flex')}>
                        <div className={clsx(styles.searchBar)}>
                            <input type="text" placeholder='Bạn muốn mua gì hôm nay?' />
                            <div className={clsx(styles.searchBar__button)}>
                                <button id="searchButton">
                                    {/* <span className={clsx(styles.searchIcon)}></span> */}
                                    <i className={clsx('fi fi-br-search')}></i>
                                </button>
                            </div>
                        </div>
                    </div>



                    <a href="/" className={clsx(styles.abour__box)}>
                        <div className={clsx(styles.about__boxIcon)}>
                            <i className={clsx('fi fi-tr-shipping-fast')}></i>

                        </div>
                        <div className={clsx(styles.about__boxContent)}>
                            <p>
                                Tra cứu<br />
                                đơn hàng
                            </p>
                        </div>
                    </a>
                    <a href="/" className={clsx(styles.abour__box)}>
                        <div className={clsx(styles.about__boxIcon)}>
                            <i className={clsx('fi fi-tr-cart-shopping-fast')}></i>

                        </div>
                        <div className={clsx(styles.about__boxContent)}>
                            <p>
                                Giỏ<br />
                                hàng
                            </p>
                        </div>
                    </a>
                    <a href="/" className={clsx(styles.abour__box)}>
                        <div className={clsx(styles.about__boxIcon)}>
                            <i className={clsx('fi fi-rs-bell-notification-social-media')}></i>

                        </div>
                        <div className={clsx(styles.about__boxContent)}>
                            <p>
                                Thông<br />
                                báo
                            </p>
                        </div>
                    </a>
                    <a href="/" className={clsx(styles.abour__box, styles.signin__box)}>
                        <div className={clsx(styles.about__boxIcon)}>
                            <i className={clsx('fi fi-rr-user')}></i>

                        </div>
                        <div className={clsx(styles.about__boxContent)}>
                            <p>
                                Đăng nhập<br />
                                Đăng ký
                            </p>
                        </div>
                    </a>

                </nav>
            </div>
        </header>
    );
}

export default Header;