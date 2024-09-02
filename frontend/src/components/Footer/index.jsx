import clsx from 'clsx';
import styles from './footer.module.scss';

function Footer() {
    return (
        <>
            <footer className={clsx(styles.footerContainer)}>
                <div className={clsx(styles.footer__top)}>
                    <div className={clsx(styles.footer__topContainer)}>
                        <div className={clsx('is-block')}>
                            <h3> Hỗ trợ Khách hàng </h3> 
                            <a href="">Thẻ ưu đãi</a> <br />
                            <a href="">Hướng dẫn mua online</a> <br />
                            <a href="">Ưu đãi dành cho Doanh nghiệp</a> <br />
                            <a href="">Chính sách trả góp</a> <br />
                            <a href="">Dịch vụ sửa chữa</a> <br />
                        </div>
                        <div>
                        <h3>Chính sách mua hàng</h3> 
                        <a href="">Điều kiện giao dịch chung</a> <br />
                        <a href="">Chính sách bảo hành</a> <br />
                        <a href="">Chính sách đổi trả</a> <br />
                        <a href="">Chính sách thanh toán</a> <br />
                        <a href="">Giao hàng và Lắp đặt tại nhà</a> <br />
                        <a href="">Dịch vụ lắp đặt và nâng cấp PC/ Laptop<br /> tại cửa hàng & TTBH</a> <br />
                        <a href="">Chính sách bảo mật thanh toán</a> <br />
                        </div>
                        <div>
                        <h3>Thông tin cửa hàng</h3>
                        <a href="">Giới thiệu </a> <br />
                        <a href="">Hệ thống cửa hàng</a> <br />
                        <a href="">Trung tâm bảo hành</a> <br />
                        <a href="">Chính sách bảo mật</a> <br />
                        <a href="">Tin công nghệ</a> <br />
                        <a href="">Hỏi đáp</a> <br />
                        <a href="">Tuyển dụng</a> <br />
                        </div>
                        <div>
                        <h3>Cộng đồng</h3>
                        <a href="https://www.facebook.com/hvnhatlinh3004">Facebook Nhật Linh</a> <br />
                        <a href="https://www.youtube.com/@younglungling">Youtube Nhật Linh</a> <br />
                        <a href="https://zalo.me/0966126449">Nhật Linh (zalo)</a> <br />
                        <a href="https://www.linkedin.com/in/vu-nhat-linh-huynh-b67b96219">LinkedIn</a> <br />
                        <a href="https://github.com/linhhuynhcoding">Github</a> <br />
                        </div>
                        <div>
                        <h3>Email Liên hệ</h3>

                        <p>Hỗ trợ Khách hàng: <br /><a href="">cskh@xx.vn</a></p>
                        <p>Liên hệ báo giá: <br /><a href="">baogia@xx.vn</a></p>
                        
                        <p>Hợp tác phát triển: <br /><a href="">hoptac@xx.vn</a></p>
                        
                        </div>
                    </div>

                </div>
                <div className={clsx(styles.footer__bottom)}>
                    <div className={clsx(styles.footer__bottomContainer)}>
                        <div>
                            <h2>Công ty cổ phần thương mại - dịch vụ ABC_XYZ</h2>
                            <br />
                            © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ ABC_XYZ <br />
                            Giấy chứng nhận đăng ký doanh nghiệp: XXXXXXX do Sở KH-ĐT TP.HCM cấp lần đầu ngày XX tháng X năm XXXX <br />
                            Website này chỉ phục vụ mục đích học tập <br />
                        </div>
                        <div>
                            <strong>Địa chỉ trụ sở chính:</strong> <br />
                            2 Võ Oanh, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh<br />
                            <strong>Văn phòng điều hành miền Bắc:</strong> <br />
                            XXX, Phường XXX, Quận XXX, Thành phố Hà Nội<br />
                            <strong>Văn phòng điều hành miền Nam:</strong> <br />
                            XXX, Phường XXX , Quận XXX , TP. Hồ Chí Minh<br />
                        </div>
                        <div>
                            <a href="http://online.gov.vn/Home/WebDetails/4549" rel="noreferrer noopener" target="_blank" class="css-1p9dqzw">
                                <img src="https://shopfront-cdn.tekoapis.com/common/da-dang-ky.png" alt="verified logo" class="css-t5rvn4"></img>
                            </a>
                            <div class="css-nyd45u"><a href="//www.dmca.com/Protection/Status.aspx?ID=73ee7811-7aa7-44d0-bb06-6c0df0da41d8&amp;refurl=https://phongvu.vn" title="DMCA.com Protection Status" class="dmca-badge"><img src="https://images.dmca.com/Badges/dmca-badge-w150-2x1-02.png?ID=73ee7811-7aa7-44d0-bb06-6c0df0da41d8" alt="DMCA.com Protection Status"></img></a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;