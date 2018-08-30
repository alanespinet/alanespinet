import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer__front">
      <div className="container">
        <div className="footer__front__content">
          <div className="footer__front__content__left">
            <h2>Alan Espinet</h2>
            <p>web and videogames developer</p>

            <div className="footer__socials">
              <ul>
                <li><a href="https://www.linkedin.com/in/alan-espinet" target="_blank" className="footer__socials__linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                <li><a href="mailto:aelluvetaa@gmail.com" target="_blank" className="footer__socials__email"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                <li><a href="tel:7866225314" target="_blank" className="footer__socials__phone"><i className="fa fa-phone-square" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="footer__front__content__right">
            <a href="#">acknowledgments</a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer__back">
    </div>
  </div>
);

export default Footer;
