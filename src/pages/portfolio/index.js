import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { dataportfolio } from "../../content_option";

export const Portfolio = () => {
  const { t } = useTranslation();
  const projects = t('portfolio.projects', { returnObjects: true });

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t('portfolio.title')} | {t('meta.title')}</title>
          <meta name="description" content={t('meta.description')} />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={`${t('portfolio.title')} | ${t('meta.title')}`} />
          <meta property="og:description" content={t('meta.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thanhng224.github.io/react-portfolio/portfolio" />
          <meta property="og:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Nguyen Phuc Thanh - Portfolio Projects" />
          <meta property="og:site_name" content="Nguyen Phuc Thanh Portfolio" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('portfolio.title')} | ${t('meta.title')}`} />
          <meta name="twitter:description" content={t('meta.description')} />
          <meta name="twitter:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta name="twitter:image:alt" content="Nguyen Phuc Thanh - Portfolio Projects" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t('portfolio.title')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={projects[i]?.description || data.description} loading="lazy" />
                <div className="content">
                  <p>{projects[i]?.description || data.description}</p>
                  <div className="project-buttons">
                    {data.isPrivate ? (
                      <a href="/react-portfolio/contact" className="project-btn private-btn">
                        {t('portfolio.contactForCode')}
                      </a>
                    ) : (
                      <a href={data.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                        {data.ctaLabel || t('portfolio.viewProject')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
