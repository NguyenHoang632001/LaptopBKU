import { Link } from 'react-router-dom';
import './Footer.scss';
import LOGO_RUN from './LOGO_RUN.png'


function Footer() {
    return (
        <div className='containerFooterMain'>
            <div className='containerFooter'>
                <div className='footer-img'>
                    <img src={LOGO_RUN} className="footer-imgItem"></img>
                    {/* <img src="footerlogomain.png" className="footer-imgItem"></img> */}
                    <h2 className='discriptionShop'>Laptop BKU <br></br>Chuyên hàng xách tay USA</h2>

                </div>
                <div className='containerFooterList'>



                    <div className="footer-wrapper">
                        <div className="footer-column">
                            <h2 className="footer-title"> CHÍNH SÁCH CHUNG</h2>
                            <ul className="footer-list">
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>

                            </ul>
                        </div>
                        <div className="footer-column">
                            <h2 className="footer-title">GIỚI THIỆU</h2>
                            <ul className="footer-list">
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>

                            </ul>
                        </div>
                        <div className="footer-column">
                            <h2 className="footer-title">LIÊN HỆ</h2>
                            <ul className="footer-list">
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                                <Link to='/search?q=dell'><h2>click here</h2></Link>
                            </ul>

                        </div>
                    </div>


                    <div className='modifierFooter'>
                        <h2 className='shopeSystem'>Hệ thống cửa hàng</h2>
                        <h3 className='place'>Cơ sở 1: ...</h3>
                        <h3 className='place' >Cơ sở 2: ...</h3>
                    </div>
                </div>



            </div >
        </div>



    )
}
export default Footer;