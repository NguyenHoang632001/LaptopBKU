import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useDispatch } from 'react-redux';
import {
  faMagnifyingGlass,
  faComputer,
  faScrewdriverWrench,

  faNewspaper,
  faPhoneVolume,

  faFolderOpen,
  faLaptopMedical,
  faFileLines,
  faLaptop,
  faBars,
  faXmark,

  faHeadphonesSimple

} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ItemHeader from './ItemHeader';
import './Header.scss';
import image from '../../../../access/image/LOGO_OFFICIAL.png';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import { useState } from 'react';
function Header(props) {
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [showMenu,setShowMenu]=useState(false);
  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  // console.log(searchInput)
  const handleOnClickSearchBtn = () => {
    if (searchInput) {
      navigate(`../search?q=${searchInput}`, { replace: true });
    }
  };
  const handleRedirectHome = () => {
    navigate(`../`);
  }
  const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      handleOnClickSearchBtn();

    }
  }


  return (
    <div className='containerMainBody'>


      <div className="header-wrapper">

        <div className="header-content_left">


          <img onClick={handleRedirectHome} className="header-logo" src={image}>

          </img>
          <div className="header-search">
            <input
              className="search_input"
              value={searchInput}
              onChange={handleOnChangeInput}
              placeholder="Tìm kiếm "
              onKeyPress={enterPressed.bind(this)}

            />
           
            <button className="search-button" onClick={handleOnClickSearchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

            </button>
          </div>
        </div>
        {console.log(showMenu)}
        <div className='menu' onClick={()=>setShowMenu(!showMenu)} >
         <ItemHeader to="" link="" icon={showMenu==false?faBars:faXmark} />
        </div>
        <div className={showMenu==false?'header-content_right':'header-content_right-show'}>
          <div className='productMain'>

            <ItemHeader to="/product" link="" icon={faLaptop} title="SẢN PHẨM" />

            <ul className='listProductRecomment'>
              <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=dell">Dell</Link></li>
              <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=thinkpad">ThinkPad</Link></li>
              <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=hp">HP</Link></li>
              <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=microsoft">Microsoft </Link></li>
              <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=macbook">Apple</Link></li>
              {/* <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=asus">Asus</Link></li>
              <li className='listProductRecomment_Item'><Link className="Link" to="/search?q=acer">Acer</Link></li> */}
            </ul>
          </div>
          <ItemHeader to="/software" link="" icon={faScrewdriverWrench} title="KHO PHẦN MỀM" />
          <ItemHeader to="/ensurrance" link="" icon={faNewspaper} title="TRA CỨU BẢO HÀNH" />
          <ItemHeader to="/news" link="" icon={faFileLines} title="TIN TỨC" />
          <ItemHeader to="/accessory" link="" icon={faHeadphonesSimple} title="PHỤ KIỆN" />
          <ItemHeader to="/contact" link="" icon={faPhoneVolume} title="LIÊN HỆ" />
        </div>
      </div >
      <div className='headerMainMobile'>
        <div className='headerLogoMobile'>
          <img onClick={handleRedirectHome} className="header-logoMobile" src={image} />
        </div>
        <div className='HeaderMenuMobile'>Menu ở đây</div>

      </div>
      <div className="header-searchMobile">
        <input
          className="search_inputMobile"
          value={searchInput}
          onChange={handleOnChangeInput}
          placeholder="Tìm kiếm sản phẩm tại đây"
          onKeyPress={enterPressed.bind(this)}

        />
        <button className="search-buttonMobile" onClick={handleOnClickSearchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-iconMobile" />

        </button>
      </div>
    </div>
  );
}


export default Header;
