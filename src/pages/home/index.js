import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { introdata } from "../../content_option";
import { Link } from "react-router-dom";
import { isCvFresh } from "../../utils/cvFreshness";
import { CV_FILE_NAME, CV_UPDATE_DATE, getCvPublicUrl } from "../../config/cv";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const updateDate = CV_UPDATE_DATE;
  const isCvUpToDate = isCvFresh(updateDate);
  
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t('meta.title')}</title>
          <meta name="description" content={t('meta.description')} />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={t('meta.title')} />
          <meta property="og:description" content={t('meta.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thanhng224.github.io/react-portfolio/" />
          <meta property="og:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Nguyen Phuc Thanh - Portfolio Preview" />
          <meta property="og:site_name" content="Nguyen Phuc Thanh Portfolio" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={t('meta.title')} />
          <meta name="twitter:description" content={t('meta.description')} />
          <meta name="twitter:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta name="twitter:image:alt" content="Nguyen Phuc Thanh - Portfolio Preview" />
          
          {/* Additional SEO Meta Tags */}
          <meta name="author" content="Nguyen Phuc Thanh" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://thanhng224.github.io/react-portfolio/" />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-2 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-1 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{t('home.title')}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    key={i18n.language}
                    options={{
                      strings: [
                        t('home.animated.first'),
                        t('home.animated.second'),
                        t('home.animated.third'),
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 20,
                      pauseFor: 1800,
                    }}
                  />
                </h1>
                <p className="mb-1x">{t('home.description')}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      {t('home.buttons.portfolio')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_a" className="ac_btn btn">
                      {t('home.buttons.about')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/resume">
                    <div id="button_r" className="ac_btn btn">
                      {t('home.buttons.resume')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      {t('home.buttons.contact')}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
                <div className="cv_download_section text-center mt-4">
                  {isCvUpToDate ? (
                    <a
                      href={getCvPublicUrl()}
                      download={CV_FILE_NAME}
                      className="cv_download_btn"
                    >
                      <div id="button_cv" className="ac_btn btn">
                        {t("home.buttons.downloadCV")}
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  ) : (
                    <div
                      id="button_cv"
                      className="ac_btn btn cv-download-disabled"
                      aria-disabled="true"
                      title={t("home.cvOutdatedHint")}
                    >
                      {t("home.buttons.downloadCV")}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  )}
                  {!isCvUpToDate && <p className="cv-status-note">{t("home.cvOutdatedHint")}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
