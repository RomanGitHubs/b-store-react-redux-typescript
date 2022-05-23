import React from 'react';
import logo  from '../assets/logo-footer.svg';
import map  from '../assets/map.svg';

type Props = {

}


const Footer: React.FC<Props> = (props) => {
  return (
<footer className="footer-wrapper">
            <div className="footer">
            <div className="footer__contacts">
                <img className="footer__logo" alt='' src={logo}/>
                <p>tranthuy.nute@gmail.com</p>
                <p>(480) 555-0103</p>
            </div>
            <nav className="footer__nav">
                <a href="#">Home Page</a>
                <a href="#">Catalog</a>
                <a href="#">My Account</a>
                <a href="#">Cart</a>
            </nav>
            <div className="footer__location">
                <p>6391 Elgin St. Celina, Delaware 10299</p>
                <div className="footer__map">
                    <img alt='' src={map}/>
                </div>
            </div>
            </div>
        </footer>
  )
}

export default Footer;

