import Header from './Header';
import './DefaultLayout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram,
  faConnectdevelop,




} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelopeCircleCheck,
  faFace


} from '@fortawesome/free-solid-svg-icons';
import Footer from './DefaultFooter/Footer';
import zalo from './zalo.png'
import facebook from './facebook.png'
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import ScrollToTop from 'react-scroll-to-top';

function DefaultLayout({ children, ...props }) {
  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <div>
      <Header />
      <ScrollToTop smooth component={<p style={{ color: "white", backgroundColor: "#0795df", fontWeight: "600" }}>TOP</p>} top="500" />
      <div className='loading'>
        {isLoading && <PuffLoader loading color='blue' />}
      </div>
      <div className="container">{children}</div>
      <Footer />
      <div class="hotline-phone-ring-wrap">
        <div class="hotline-phone-ring">
          <div class="hotline-phone-ring-circle"></div>
          <div class="hotline-phone-ring-circle-fill"></div>
          <div class="hotline-phone-ring-img-circle">
            <a href="tel:0987654321" class="pps-btn-img">
              <img src="https://nguyenhung.net/wp-content/uploads/2019/05/icon-call-nh.png" alt="Gọi điện thoại" width="50"></img>
            </a>
          </div>
          <div className='InforHotline'>



            <a href='https://www.facebook.com/laptopnhapkhauUSAchinhhang' target="_blank" className='iconLinkHotline iconLinkHotlineFacebook'>

              <img src={facebook} className='facebook'></img>
              <span className='InfoIcon'>Facebook</span>
            </a>
            <a href='https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F' target="_blank" className='iconLinkHotline'>

              {/* <FontAwesomeIcon icon={faPhone} className="iconHotline" /> */}
              <img src={zalo} className='zalo'></img>
              <span className='InfoIcon'>Chat Zalo</span>
            </a>
            <a href='#' target="_blank" className='iconLinkHotline'>

              <FontAwesomeIcon icon={faEnvelopeCircleCheck} className="iconHotline iconHotlineEmail" />
              <span className='InfoIcon'>laptopbku@gmail.com</span>
            </a>
            <a href='#' className='iconLinkHotline'>

              <FontAwesomeIcon icon={faPhone} className="iconHotline iconHotlineCall" />
              <span className='InfoIcon'>Hotline: 0339 094 095</span>
            </a>


          </div>
        </div>

      </div>



    </div>
  );
}
export default DefaultLayout;
