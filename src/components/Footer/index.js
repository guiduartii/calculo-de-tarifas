import React from 'react';
import LogoSenai from "../../assets/images/logo-senai-NEGATIVO.jpg";
import "./footer.less";

const Footer = ({ className }) => {

  const classStyle = className ? className : 'footer';

  return (
   <footer  className={classStyle}>
      <p>&copy; Cálculo de Tarifas 2018 - Iniciativa <b>SENAI</b> </p>
    </footer>
  )
};

export default Footer;