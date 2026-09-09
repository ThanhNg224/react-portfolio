import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  FaDownload,
  FaFileAlt,
  FaExpand,
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaUndo,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { isCvFresh } from "../../utils/cvFreshness";
import { CV_FILE_NAME, CV_UPDATE_DATE, getCvPublicUrl, CV_PAGES } from "../../config/cv";

export const Resume = () => {
  const { t } = useTranslation();
  const updateDate = CV_UPDATE_DATE;
  const isCvUpToDate = isCvFresh(updateDate);
  const cvUrl = getCvPublicUrl();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLightbox = (index = 0) => {
    setActivePageIndex(index);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoomLevel(1);
  }, []);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(parseFloat((z + 0.25).toFixed(2)), 2.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(parseFloat((z - 0.25).toFixed(2)), 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const handlePrevPage = useCallback(() => {
    setActivePageIndex((i) => (i > 0 ? i - 1 : CV_PAGES.length - 1));
    setZoomLevel(1);
  }, []);

  const handleNextPage = useCallback(() => {
    setActivePageIndex((i) => (i < CV_PAGES.length - 1 ? i + 1 : 0));
    setZoomLevel(1);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        handlePrevPage();
      } else if (e.key === "ArrowRight") {
        handleNextPage();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, handlePrevPage, handleNextPage]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (lightboxOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxOpen]);

  return (
    <HelmetProvider>
      <Container className="About-header resume-container-main">
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
        
        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-3">
              <FaFileAlt className="me-3" />
              {t('resume.title')}
            </h1>
            <hr className="t_border my-3 ml-0 text-left" />
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row className="mb-4">
          <Col lg="12">
            <div className="resume-actions">
              <div className="resume-actions-group">
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
                </Button>

                {isCvUpToDate && (
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="resume-fullscreen-btn"
                    onClick={() => openLightbox(0)}
                    title={t("resume.fullscreenView")}
                  >
                    <FaExpand className="me-2" />
                    <span>{t('resume.fullscreenView')}</span>
                  </Button>
                )}
              </div>

              {!isCvUpToDate && (
                <p className="resume-action-note">{t("resume.outdatedDownloadHint")}</p>
              )}
            </div>
          </Col>
        </Row>

        {/* Direct Document Stacking Layout */}
        <Row className="resume-document-row">
          <Col lg="12">
            {isCvUpToDate ? (
              <div className="cv-document-container">
                {CV_PAGES.map((pageSrc, index) => (
                  <div
                    key={index}
                    className="cv-page-card"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                    aria-label={`${t('resume.title')} - ${t('resume.pageCount', { current: index + 1, total: CV_PAGES.length })}`}
                  >
                    <div className="cv-page-card-header">
                      <span className="cv-page-number">
                        {t('resume.pageCount', { current: index + 1, total: CV_PAGES.length })}
                      </span>
                      <span className="cv-page-expand-hint">
                        <FaExpand className="me-1" />
                        {t('resume.clickToExpand')}
                      </span>
                    </div>

                    <div className="cv-page-img-wrapper">
                      <img
                        src={pageSrc}
                        alt={`Nguyen Phuc Thanh Resume - Page ${index + 1}`}
                        className="cv-page-img"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cv-stale-card">
                <div className="cv-stale-badge">{t("resume.previewStatusLabel")}</div>
                <h2>{t("resume.outdatedPreviewTitle")}</h2>
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

        {/* Footer Info */}
        {isCvUpToDate && (
          <Row className="mt-4 mb-5 pb-4">
            <Col lg="12" className="text-center">
              <p className="resume-info">
                {t("resume.lastUpdated")}: {updateDate}
              </p>
            </Col>
          </Row>
        )}

        {/* Fullscreen Lightbox Overlay */}
        {lightboxOpen && (
          <div
            className="cv-lightbox-backdrop"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={t("resume.fullscreenView")}
          >
            {/* Top Toolbar */}
            <div
              className="cv-lightbox-topbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cv-lightbox-info">
                <span className="cv-lightbox-page-indicator">
                  {t('resume.pageCount', { current: activePageIndex + 1, total: CV_PAGES.length })}
                </span>
              </div>

              <div className="cv-lightbox-controls">
                <button
                  type="button"
                  className="cv-lightbox-btn"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.75}
                  title={t("resume.zoomOut")}
                  aria-label={t("resume.zoomOut")}
                >
                  <FaSearchMinus />
                </button>

                <button
                  type="button"
                  className="cv-lightbox-btn cv-lightbox-zoom-reset"
                  onClick={handleResetZoom}
                  title={t("resume.resetZoom")}
                  aria-label={t("resume.resetZoom")}
                >
                  <FaUndo className="me-1" />
                  <span>{Math.round(zoomLevel * 100)}%</span>
                </button>

                <button
                  type="button"
                  className="cv-lightbox-btn"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 2.5}
                  title={t("resume.zoomIn")}
                  aria-label={t("resume.zoomIn")}
                >
                  <FaSearchPlus />
                </button>

                <button
                  type="button"
                  className="cv-lightbox-btn"
                  onClick={handleDownload}
                  title={t("resume.downloadCV")}
                  aria-label={t("resume.downloadCV")}
                >
                  <FaDownload />
                </button>

                <button
                  type="button"
                  className="cv-lightbox-btn cv-lightbox-close"
                  onClick={closeLightbox}
                  title={t("resume.closeModal")}
                  aria-label={t("resume.closeModal")}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            {CV_PAGES.length > 1 && (
              <>
                <button
                  type="button"
                  className="cv-lightbox-nav cv-lightbox-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevPage();
                  }}
                  aria-label={t("resume.prevPage")}
                  title={t("resume.prevPage")}
                >
                  <FaChevronLeft />
                </button>

                <button
                  type="button"
                  className="cv-lightbox-nav cv-lightbox-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextPage();
                  }}
                  aria-label={t("resume.nextPage")}
                  title={t("resume.nextPage")}
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            {/* Viewport for image */}
            <div
              className="cv-lightbox-viewport"
              onClick={closeLightbox}
            >
              <div
                className="cv-lightbox-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "top center",
                }}
              >
                <img
                  src={CV_PAGES[activePageIndex]}
                  alt={`Nguyen Phuc Thanh Resume - Page ${activePageIndex + 1}`}
                  className="cv-lightbox-img"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
