import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { FaHome, FaBriefcase, FaUser, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import LanguageToggle from "../components/languasetoggle";

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const menuButtonRef = useRef(null);
  const navigationRef = useRef(null);
  const wasOpenRef = useRef(false);
  const shouldRestoreFocusRef = useRef(true);

  const handleToggle = () => {
    shouldRestoreFocusRef.current = true;
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = () => {
    shouldRestoreFocusRef.current = false;
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (
      e.target === navigationRef.current ||
      (!e.target.closest(".bg__menu") && !e.target.closest(".menu_footer"))
    ) {
      shouldRestoreFocusRef.current = true;
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current && shouldRestoreFocusRef.current) {
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
      wasOpenRef.current = false;
      return undefined;
    }

    wasOpenRef.current = true;
    document.body.classList.add("ovhidden");

    const pageContent = document.getElementById("main-content");
    pageContent?.setAttribute("inert", "");
    pageContent?.setAttribute("aria-hidden", "true");
    const inactiveHeaderControls = Array.from(
      document.querySelectorAll(
        ".site__header .navbar-brand, .site__header .language-toggle, .site__header .theme-toggle"
      )
    );
    inactiveHeaderControls.forEach((element) => {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        shouldRestoreFocusRef.current = true;
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const navigationFocusables = navigationRef.current
        ? Array.from(
            navigationRef.current.querySelectorAll(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];
      const focusableElements = [menuButtonRef.current, ...navigationFocusables].filter(Boolean);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (!focusableElements.includes(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("ovhidden");
      pageContent?.removeAttribute("inert");
      pageContent?.removeAttribute("aria-hidden");
      inactiveHeaderControls.forEach((element) => {
        element.removeAttribute("inert");
        element.removeAttribute("aria-hidden");
      });
    };
  }, [isOpen]);

  const menuItems = [
    { path: "/", label: t('nav.home'), icon: FaHome },
    { path: "/portfolio", label: t('nav.portfolio'), icon: FaBriefcase },
    { path: "/about", label: t('nav.about'), icon: FaUser },
    { path: "/resume", label: t('nav.resume'), icon: FaFileAlt },
    { path: "/contact", label: t('nav.contact'), icon: FaEnvelope }
  ];

  return (
    <>
      <header className={`fixed-top site__header ${isOpen ? "menu-is-open" : ""}`}>
        <div className="header__nav-bar d-flex align-items-center justify-content-between w-100">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <LanguageToggle />
          <Themetoggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="menu__button nav_ac"
            onClick={handleToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
          >
            {isOpen ? <VscClose aria-hidden="true" /> : <VscGrabber aria-hidden="true" />}
          </button>
          
          </div>
        </div>

        <div
          ref={navigationRef}
          id="site-navigation"
          className={`site__navigation ${isOpen ? "menu__opend" : ""}`}
          role="dialog"
          aria-label="Primary navigation"
          aria-hidden={!isOpen}
          onClick={handleBackdropClick}
        >
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
                      <NavLink
                        onClick={handleNavigation}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                          `my-3 d-flex align-items-center menu_link${isActive ? " menu_link_active" : ""}`
                        }
                      >
                        <item.icon className="me-3" aria-hidden="true" />
                        {item.label}
                      </NavLink>
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
