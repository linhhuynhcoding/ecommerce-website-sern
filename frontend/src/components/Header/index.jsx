import clsx from 'clsx';
import styles from './header.module.scss';
import MainMenu from '../MainMenu'
import { useEffect, useState, useRef } from 'react';

import { carts, getCart} from '../../utils/HelperCart';

import { handleAuth } from '../../service/UserService';
import { 
    handleAddtoCart,
    handleRemovefromCart,
    handleGetCart,
} from '../../service/CartService';
import CartPopUp from '../CartPopUp';

function Header({ onMenu = false}) {
    const [img_url, setImg_url] = useState("/logo.png");
    const [menu, setMenu] = useState(false);
    const [CPU, setCPU] = useState(false);
    const [auth, setAuth] = useState(false);

    // const carts = useRef({
    //     totalPrice: 0,
    //     products: []
    // });

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
    }, [menu]);
    
    
    
    useEffect(() => {
        let cover = document.getElementById('cover');

        async function handleProfileBox() {
            await handleAuth().then((res) => {
                if (res?.status === 200) {
                    setAuth(true);
                }
                else {
                    setAuth(false);
                    
                }
            })
        }

        // async function getCart() {
        //     await handleGetCart(localStorage.getItem('username')).then((res) => {
        //         console.log(res);
        //         if (res?.status === 200) {
        //             carts.current['totalPrice'] = res?.data['totalPrices'] ?? 0;
        //             carts.current['products'] = res?.data['cart'] ?? [];
        //         }
        //         console.log(carts.current)
        //     })            
        // }
        
        
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

        cover.addEventListener('click', () => { setMenu(false) });

        if (!onMenu) {
            document.addEventListener("scroll", handleScroll);
        }
        if (onMenu === true) {
            setImg_url('/icon.png');
            document.getElementById('buttonMenu').classList.remove('is-disable');
        }
        
        handleProfileBox();
        getCart();
        return () => {
            if (!onMenu) {
                document.removeEventListener("scroll", handleScroll)
            }
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



                    <a href="https://zalo.me/0966126449" className={clsx(styles.about__box)}>
                        <div className={clsx(styles.about__boxIcon)}>
                            <i className={clsx('fi fi-tr-shipping-fast')}></i>

                        </div>
                        <div className={clsx(styles.about__boxContent)}>
                            <p>
                                Hotline<br />
                                0966.126.449
                            </p>
                        </div>
                    </a>
                    <a  href="/cart" className={clsx(styles.about__box)}>
                        <div onMouseEnter={() => setCPU(true)} onMouseLeave={() => setCPU(false)} className={clsx(styles.about__box)}>
                            <div className={clsx(styles.about__boxIcon)}>
                                <i className={clsx('fi fi-tr-cart-shopping-fast')}></i>

                            </div>
                            <div  className={clsx(styles.about__boxContent)}>
                                <p>
                                    Giỏ<br />
                                    hàng
                                </p>
                            </div>

                        </div>
                        {CPU ? <CartPopUp cart={carts.current ?? null} handle={(v) => {setCPU(v)}} /> : null} 

                    </a>
                    <a href="/" className={clsx(styles.about__box)}>
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
                    {auth
                        ?
                        <a href="/profile" className={clsx(styles.about__box, styles.signin__box)}>
                            <div className={clsx(styles.about__boxIcon)}>
                                <i className={clsx('fi fi-rr-user')}></i>
                            </div>
                            <div className={clsx(styles.about__boxContent)}>
                                <p>
                                    Trang<br />
                                    cá nhân
                                </p>
                            </div>
                        </a>
                        :
                        <a href="/login" className={clsx(styles.about__box, styles.signin__box)}>
                            <div className={clsx(styles.about__boxIcon)}>
                                <i className={clsx('fi fi-rr-user')}></i>
                            </div>
                            <div className={clsx(styles.about__boxContent)}>
                                <div className={clsx(styles.about__boxContent)}>
                                    <p>
                                        Đăng nhập<br />
                                        Đăng ký
                                    </p>
                                </div>
                            </div>
                        </a>

                    }
                </nav>
            </div>
            <div id="homeMenu" className={clsx('is-disable', styles.mainmenuContainer)}>
                <MainMenu _id='headMenu' />
            </div>
        </header>
    );
}

export default Header;