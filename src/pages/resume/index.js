import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaDownload, FaFileAlt, FaEye } from "react-icons/fa";

export const Resume = () => {
  const { t } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/HUST_NguyenPhucThanh_CV.pdf`;
    link.download = 'NguyenPhucThanh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open(`${process.env.PUBLIC_URL}/HUST_NguyenPhucThanh_CV.pdf`, '_blank');
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t('resume.title')} | {t('meta.title')}</title>
          <meta name="description" content={t('resume.description')} />
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
                className="download-cv-btn me-3"
                onClick={handleDownload}
              >
                <FaDownload className="me-2" />
                <span>{t('resume.downloadCV')}</span>
                <div className="btn-glow"></div>
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                className="view-pdf-btn"
                onClick={handleViewPDF}
              >
                <FaEye className="me-2" />
                {t('View Full CV')}
              </Button>
            </div>
          </Col>
        </Row>

        {/* Simple PDF Preview */}
        <Row>
          <Col lg="12">
            <div className="simple-pdf-preview">
              <div className="preview-header">
                <h5 className="mb-0">
                  <FaFileAlt className="me-2" />
                  {t('resume.previewTitle')}
                </h5>
              </div>
              <div className="preview-content">
                <iframe
                  src={`${process.env.PUBLIC_URL}/HUST_NguyenPhucThanh_CV.pdf#zoom=85&toolbar=0&navpanes=0&scrollbar=1`}
                  title="Resume Preview"
                  className="simple-pdf-iframe"
                  frameBorder="0"
                />
              </div>
              <div className="preview-footer">
                <p className="text-muted mb-0">
                  {t('resume.previewNote')}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="mt-4 mb-5 pb-5">
          <Col lg="12" className="text-center">
            <p className="resume-info">
              {t('resume.lastUpdated')}: {t('resume.updateDate')}
            </p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
