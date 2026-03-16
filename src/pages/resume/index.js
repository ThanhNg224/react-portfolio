import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaDownload, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { isCvFresh } from "../../utils/cvFreshness";

// Set up PDF.js worker
export const Resume = () => {
  const { t } = useTranslation();
  const updateDate = t("resume.updateDate");
  const isCvUpToDate = isCvFresh(updateDate);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/HUST_NguyenPhucThanh_CV.pdf`;
    link.download = 'NguyenPhucThanh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t('resume.title')} | {t('meta.title')}</title>
          <meta name="description" content={t('resume.description')} />
          
          {/* Open Graph meta tags */}
          <meta property="og:title" content={`${t('resume.title')} | ${t('meta.title')}`} />
          <meta property="og:description" content={t('resume.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thanhng224.github.io/react-portfolio/resume" />
          <meta property="og:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          
          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('resume.title')} | ${t('meta.title')}`} />
          <meta name="twitter:description" content={t('resume.description')} />
          <meta name="twitter:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">
              <FaFileAlt className="me-3" />
              {t('resume.title')}
            </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row className="mb-5">
          <Col lg="12" className="text-center">
            <div className="resume-actions">
              <Button 
                variant="primary" 
                size="lg" 
                className="download-cv-btn"
                onClick={handleDownload}
                disabled={!isCvUpToDate}
                title={!isCvUpToDate ? t("resume.outdatedDownloadHint") : ""}
              >
                <FaDownload className="me-2" />
                <span>{t('resume.downloadCV')}</span>
                <div className="btn-glow"></div>
              </Button>
              {!isCvUpToDate && (
                <p className="resume-action-note">{t("resume.outdatedDownloadHint")}</p>
              )}
            </div>
          </Col>
        </Row>

        {/* Inline PDF Display */}
        <Row>
          <Col lg="12">
            {isCvUpToDate ? (
              <div className="pdf-container">
                <div className="pdf-page-wrapper">
                  <div className="pdf-page">
                    <iframe
                      src={`${process.env.PUBLIC_URL}/HUST_NguyenPhucThanh_CV.pdf#zoom=100&toolbar=0&navpanes=0&scrollbar=0`}
                      title="Resume PDF"
                      className="pdf-iframe"
                      frameBorder="0"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="cv-stale-card">
                <div className="cv-stale-badge">{t("resume.previewStatusLabel")}</div>
                <h3>{t("resume.outdatedPreviewTitle")}</h3>
                <p>{t("resume.outdatedPreviewDescription")}</p>
                <Link to="/contact" className="cv-stale-contact-link">
                  {t("resume.contactForLatestCv")}
                </Link>
                <div className="cv-stale-meta">
                  {t("resume.lastUpdated")}: {updateDate}
                </div>
              </div>
            )}
          </Col>
        </Row>

        {/* Additional Info */}
        {isCvUpToDate && (
          <Row className="mt-4 mb-5 pb-5">
            <Col lg="12" className="text-center">
              <p className="resume-info">
                {t("resume.lastUpdated")}: {updateDate}
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </HelmetProvider>
  );
};