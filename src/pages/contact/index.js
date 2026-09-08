import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const { t } = useTranslation();
  const errorSummaryRef = useRef(null);
  const shouldFocusErrorSummaryRef = useRef(false);
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateField = (fieldName, fieldValue) => {
    const value = (fieldValue || "").trim();

    if (fieldName === "name") {
      if (!value) return t("contact.form.validation.required");
      if (value.length < 2) return t("contact.form.validation.nameMin");
      return "";
    }

    if (fieldName === "email") {
      if (!value) return t("contact.form.validation.required");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return t("contact.form.validation.emailInvalid");
      return "";
    }

    if (fieldName === "message") {
      if (!value) return t("contact.form.validation.required");
      if (value.length < 10) return t("contact.form.validation.messageMin");
      return "";
    }

    return "";
  };

  const validateAllFields = () => {
    const nextErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    setFieldErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const validationErrors = Object.entries(fieldErrors).filter(([, error]) => Boolean(error));

  useEffect(() => {
    if (shouldFocusErrorSummaryRef.current && validationErrors.length > 0) {
      errorSummaryRef.current?.focus();
      shouldFocusErrorSummaryRef.current = false;
    }
  }, [validationErrors.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!validateAllFields()) {
      shouldFocusErrorSummaryRef.current = true;
      setFormdata((prev) => ({
        ...prev,
        loading: false,
        show: true,
        variant: "warning",
        alertmessage: t("contact.form.validation.fixBeforeSubmit"),
      }));
      return;
    }

    setFormdata(prev => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: t('contact.form.success'),
            variant: "success",
            show: true,
          });
          setFieldErrors({ name: "", email: "", message: "" });
          setTouched({ name: false, email: false, message: false });
        },
        (error) => {
          console.log(error.text);
          setFormdata((prev) => ({
            ...prev,
            loading: false,
            alertmessage: t('contact.form.error'),
            variant: "danger",
            show: true,
          }));
          document.getElementsByClassName("co_alert")[0]?.scrollIntoView({ behavior: "smooth" });
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t('contact.title')} | {t('meta.title')}</title>
          <meta name="description" content={t('meta.description')} />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={`${t('contact.title')} | ${t('meta.title')}`} />
          <meta property="og:description" content={t('meta.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thanhng224.github.io/react-portfolio/contact" />
          <meta property="og:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Nguyen Phuc Thanh - Contact" />
          <meta property="og:site_name" content="Nguyen Phuc Thanh Portfolio" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${t('contact.title')} | ${t('meta.title')}`} />
          <meta name="twitter:description" content={t('meta.description')} />
          <meta name="twitter:image" content="https://thanhng224.github.io/react-portfolio/images/my_image_low_res.jpg?v=1" />
          <meta name="twitter:image:alt" content="Nguyen Phuc Thanh - Contact" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{t('contact.title')}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show && formData.variant !== "warning" ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata((prev) => ({ ...prev, show: false }))}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h2 className="color_sec py-4">{t('contact.title')}</h2>
            <address>
              <strong>{t('contact.info.email')}:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.YOUR_FONE ? (
                <p>
                  <strong>{t('contact.info.phone')}:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : null}
            </address>
            <p>{t('contact.description')}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100" noValidate aria-busy={formData.loading}>
              {formData.show && formData.variant === "warning" && validationErrors.length > 0 && (
                <div
                  className="form-error-summary"
                  role="alert"
                  tabIndex="-1"
                  ref={errorSummaryRef}
                  aria-labelledby="form-error-summary-title"
                >
                  <h2 id="form-error-summary-title" className="form-error-summary__title">
                    {formData.alertmessage}
                  </h2>
                  <ul>
                    {validationErrors.map(([field, error]) => (
                      <li key={field}>
                        <a
                          href={`#${field}`}
                          onClick={(event) => {
                            event.preventDefault();
                            document.getElementById(field)?.focus();
                          }}
                        >
                          {error}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Row>
                <Col lg="6" className="form-group">
                  <label className="form-label" htmlFor="name">{t('contact.form.name')}</label>
                  <input
                    className={`form-control ${touched.name && fieldErrors.name ? "is-invalid" : ""}`}
                    id="name"
                    name="name"
                    value={formData.name || ""}
                    type="text"
                    autoComplete="name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.name && fieldErrors.name)}
                    aria-describedby={touched.name && fieldErrors.name ? "name-error" : undefined}
                  />
                  {touched.name && fieldErrors.name && (
                    <div id="name-error" className="field-error">{fieldErrors.name}</div>
                  )}
                </Col>
                <Col lg="6" className="form-group">
                  <label className="form-label" htmlFor="email">{t('contact.form.email')}</label>
                  <input
                    className={`form-control rounded-0 ${touched.email && fieldErrors.email ? "is-invalid" : ""}`}
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email || ""}
                    autoComplete="email"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.email && fieldErrors.email)}
                    aria-describedby={touched.email && fieldErrors.email ? "email-error" : undefined}
                  />
                  {touched.email && fieldErrors.email && (
                    <div id="email-error" className="field-error">{fieldErrors.email}</div>
                  )}
                </Col>
              </Row>
              <label className="form-label" htmlFor="message">{t('contact.form.message')}</label>
              <textarea
                className={`form-control rounded-0 ${touched.message && fieldErrors.message ? "is-invalid" : ""}`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.message && fieldErrors.message)}
                aria-describedby={touched.message && fieldErrors.message ? "message-error" : undefined}
                required
              ></textarea>
              {touched.message && fieldErrors.message && (
                <div id="message-error" className="field-error">{fieldErrors.message}</div>
              )}
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button
                    className="btn ac_btn"
                    type="submit"
                    disabled={formData.loading}
                  >
                    {formData.loading ? t('contact.form.sending') : t('contact.form.send')}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
