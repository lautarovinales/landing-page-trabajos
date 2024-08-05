import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="left-right">
      <div className="left">
        <img src="./images/logo.png" alt="" srcset="" />
      <p>&copy; 2024 - CreamHelados</p>
      </div>
      <div className="right">
        <ul>
          <li>San Nicolás de los arroyos, Calle 123</li>
          <li>+54 9 336 4123456</li>
          <li>cremhelado@crem.com</li>
        </ul>
      </div>
      </div>
      <div className="copy">
        <p>&copy; 2024 - Landing page realizada por lautaro viñales.</p>
      </div>
    </footer>
  );
};

export default Footer;
