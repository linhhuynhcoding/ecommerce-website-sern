import clsx from 'clsx';
import styles from './header.module.scss';
import MainMenu from '../MainMenu'
import { useEffect, useState } from 'react';
function Header() {
    const [img_url, setImg_url] = useState("/logo.png");
    const [menu, setMenu] = useState(false);
    const handleCloseHomeMenu = () => {
        console.log('called')
    }


    useEffect(() => {
        const handle = () => {
            if (menu == false) {
                homeMenu.classList.add('is-disable');
                cover.classList.add('is-disable');

            }
            else {
                homeMenu.classList.remove('is-disable');
                cover.classList.remove('is-disable');
            }
        }
        let homeMenu = document.getElementById('homeMenu');
        let cover = document.getElementById('cover');

        handle();
        console.log(menu);
    }, [menu]);



    useEffect(() => {
        // const handleClickHomeMenu = () => {            
        //     setMenu(!menu);
        // }
        // let btnMenu = document.getElementById('buttonMenu');
        // btnMenu.addEventListener('click', handleClickHomeMenu);
        let cover = document.getElementById('cover');
        cover.addEventListener('click', () => { setMenu(false) });


        const handleScroll = () => {
            // console.log(window.scrollY);
            if (window.scrollY >= 200) {
                setImg_url('/icon.png');
                document.getElementById('buttonMenu').classList.remove('is-disable');
            }
            else {
                document.getElementById('buttonMenu').classList.add('is-disable');
                setImg_url('/logo.png');
                setMenu(false);
            }
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll)
            cover.removeEventListener('click', () => { setMenu(false) });

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
                            <div onClick={() => { setMenu(!menu); }} className={clsx(styles.button__menuContainer)}>
                                <i class="fi fi-br-list"></i>
                                <span>Danh mục sản phẩm</span>
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
            <div id="homeMenu" className={clsx('is-disable', styles.mainmenuContainer)}>
                <MainMenu _id='headMenu'/>
            </div>
        </header>
    );
}

export default Header;