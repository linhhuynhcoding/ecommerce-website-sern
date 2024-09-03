import clsx from "clsx";
import styles from './slidehome.module.scss'


// Swiper Libs
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
// --------------------

const bannerTops = [
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/fold-6-km-moi-home-30-8.png',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/T%E1%BA%B7ng%20b%E1%BA%A3o%20h%C3%A0nh%2012%20th%C3%A1ng%20Vip.png',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/lg-gram-2024-home-27-08.jpg',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/may-choi-game-sony-playstation-5-slim-home.jpg',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/vivo-v30e-home-thang8.png',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-laptop.jpg',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-slide-macbook.jpg',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/b2s-ipad-update-new-25-06.jpg',
    // 'https://lh3.googleusercontent.com/DgksWnNTDXSm7SZsC_c7iouUmrlBDIGaLNOtge3ggX73Wyg73hNBSoPU3yz0s0s-Isfh6dXfij9OLw7g7AZ5x9nwi_ffUR8=w1920-rw',
    // 'https://lh3.googleusercontent.com/njqHarznqkvVKxUqMMvzYIIrpf1VfdlkVGEbNq02zWv7vpelY88Zl2ov7Awmjjr52R5ALjive6TnBqRdLVoEBxa7qYSUlV8z=w1920-rw',
    // 'https://lh3.googleusercontent.com/ourQbUh5x_qOtLqkqURngvERqVSP9BdSf84gDkdvomg11oZ0QZKBh_uwPeBEOwRkwzxoB9CcH-AwLoN6HZammrdXii52xXxFow=w1920-rw',
    // 'https://lh3.googleusercontent.com/vVHMfr4FsOlgWYvJhRDO2v2Qd7lFD2OpT6UCK6ft2W11-dEmNiwlbWAJ3VZK3qYi50fG9jtAl1T5CU1BmMXmOeINPxNiA3QwOQ=w1920-rw',
    // 'https://lh3.googleusercontent.com/qq91kGR2WGe6SFk4Di0DUNrCDdToA1kfj3VXrv-5MFNI3jFRjplvGqsIaSMFb6Mm1QhouxASgFSZFPj-5Sr2iM9NX03tCjr6oA=w1920-rw',
]

function SlideHome() {
    return (
        <>
            <div className={clsx(styles.imageSlider)}>
                <div className={clsx(styles.Container)}>
                    <div className={clsx(styles.SwiperContainer)}>
                        <Swiper
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                bannerTops.map((i, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <img src={i} alt="" />
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    );
}


export default SlideHome;