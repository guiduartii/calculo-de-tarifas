import React from 'react';
import { Link } from "react-router-dom";
import LogoTipo from '../../assets/images/LogoTipo.png';
import './header.less';

const Header = () => {
  return (
    <header className="container header row -justify-content-center _margin">
      <div className="logo-header">
        <img src={LogoTipo} alt="Logo Cálculo de Tarifas" className="logo"/>
      </div>
    </header>
  )
};

export default Header;