// src/pages/About/index.js

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  
  const education = t('about.education', { returnObjects: true });
  const certifications = t('about.certifications', { returnObjects: true });
  const worktimeline = t('about.workTimeline', { returnObjects: true });
  const skills = t('about.skills', { returnObjects: true });
  const services = t('about.services', { returnObjects: true });

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t('about.title')} | {t('meta.title')}</title>
          <meta name="description" content={t('meta.description')} />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={`${t('about.title')} | ${t('meta.title')}`} />
          <meta property="og:description" content={t('meta.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thanhng224.github.io/react-portfolio/about" />
          <meta property="og:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Nguyen Phuc Thanh - About Page" />
          <meta property="og:site_name" content="Nguyen Phuc Thanh Portfolio" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('about.title')} | ${t('meta.title')}`} />
          <meta name="twitter:description" content={t('meta.description')} />
          <meta name="twitter:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta name="twitter:image:alt" content="Nguyen Phuc Thanh - About Page" />
        </Helmet>

        {/* Page Title */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t('about.title')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* About Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.personalTitle')}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{t('about.personalDescription')}</p>
            </div>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.sections.education')}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((edu, idx) => (
                  <tr key={idx}>
                    <th scope="row">{edu.institution}</th>
                    <td>{edu.degree}</td>
                    <td>{edu.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Certifications Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.sections.certifications')}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {certifications.map((cert, idx) => (
                  <tr key={idx}>
                    <th scope="row">{cert.name}</th>
                    <td>{cert.issuer}</td>
                    <td>{cert.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Work Timeline Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.sections.workTimeline')}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.sections.skills')}</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        {/* Services Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{t('about.sections.services')}</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
