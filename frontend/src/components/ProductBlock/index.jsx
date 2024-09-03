import clsx from 'clsx';
import styles from './productblock.module.scss';
import Product from '../Product';

// Import Swiper........
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
//_____________________________

const data = [
    {code: 'lap', title: 'LAPTOP', href: '/c/laptop', },
    {code: 'monitor', title: 'MÀN HÌNH', href: '/c/monitor', },
    {code: 'pc', title: 'PC', href: '/c/', }
]


//_____________________________

function ProductBlock({backgroundColor}) {
    return (
        <>
            <div className={clsx(styles.ProductBlock, '')}>

                <div className={clsx(backgroundColor, styles.Container)}>
                    <div className={clsx(styles.ProductBlockTitle)}>
                        <a href="" className={clsx(styles.title)}>
                            <div>MÀN HÌNH</div>
                        </a>
                        <a href="" className={clsx(styles.more)}>
                            <div>Xem tất cả
                                <i class="fi fi-rr-angle-small-right"></i>
                            </div>
                        </a>
                    </div>

                </div>
                <div className={clsx(backgroundColor ,styles.ContainerProduct, styles.Container)}>
                    <div className={clsx(styles.SwiperContainer)}>
                        <Swiper
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Scrollbar]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div  className={clsx(styles.ContainerProduct)}>
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div  className={clsx(styles.ContainerProduct)}>
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div  className={clsx(styles.ContainerProduct)}>
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                </div>
            </div>
        </>
    );
}

export default ProductBlock;