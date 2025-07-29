import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import LanguageToggle from "../components/languasetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const { t } = useTranslation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const menuItems = [
    { path: "/", label: t('nav.home'), icon: FaHome },
    { path: "/portfolio", label: t('nav.portfolio'), icon: FaBriefcase },
    { path: "/about", label: t('nav.about'), icon: FaUser },
    { path: "/contact", label: t('nav.contact'), icon: FaEnvelope }
  ];

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <LanguageToggle />
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {menuItems.map((item, index) => (
                    <li 
                      key={index} 
                      className="menu_item" 
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Link 
                        onClick={handleToggle} 
                        to={item.path} 
                        className="my-3 d-flex align-items-center"
                      >
                        <item.icon className="me-3" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">{t('footer.copyright')} {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
