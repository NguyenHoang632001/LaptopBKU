import Header from './Header';
import './DefaultLayout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookMessenger,
  faInstagram

} from '@fortawesome/free-brands-svg-icons';
import Footer from './DefaultFooter/Footer';
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import ScrollToTop from 'react-scroll-to-top';

function DefaultLayout({ children, ...props }) {
  const isLoading = useSelector(state => state.app.isLoading);

  return (
    <div>
      <Header />
      <ScrollToTop smooth component={<p style={{ color: "black", fontWeight: "600" }}>TOP</p>} top="500" />
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



            <a href='https://www.facebook.com/profile.php?id=100074526639454' className='iconLinkHotline'>

              <FontAwesomeIcon icon={faFacebook} className="iconHotline" />
              <span className='InfoIcon'>Facebook</span>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100074526639454' className='iconLinkHotline'>

              <FontAwesomeIcon icon={faFacebookMessenger} className="iconHotline" />
              <span className='InfoIcon'>Facebook</span>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100074526639454' className='iconLinkHotline'>

              <FontAwesomeIcon icon={faInstagram} className="iconHotline iconHotlineInstar" />
              <span className='InfoIcon'>Facebook</span>
            </a>


          </div>
        </div>

      </div>



    </div>
  );
}
export default DefaultLayout;
