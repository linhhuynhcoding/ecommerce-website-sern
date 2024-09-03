import clsx from "clsx";
import styles from './rightbanner.module.scss'


const bannerRights = [
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/m55-gia-moi-right-banner-30-8-2024.png',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/right-banner-macbook-cto-09-08-new-new.jpg',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/b2s-2024-right-banner-laptop.jpg',
]

function ChildBanner({url_img}) {
    return (
        <>
        <div className={clsx(styles.banner)} >
            <img src={url_img} alt="" />
        </div>
        </>
    );
}

function RightBanner() {
    return (
        <>
            <div className={clsx(styles.rightBanner)}>
                <div className={clsx(styles.Container)}>
                    {
                        bannerRights.map((i, index) => {
                            return (
                                <>
                                    <ChildBanner url_img={i} key={index}/>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}


export {RightBanner, ChildBanner};