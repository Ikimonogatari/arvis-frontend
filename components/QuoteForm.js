"use client";
import { useState } from "react";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const QuoteForm = ({ preselectedService = null }) => {
  const t = useSafeTranslations("quote");
  const tServices = useSafeTranslations("services");
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    interestedSolution: preselectedService || "",
    projectDescription: "",
    siteLocation: "",
    targetTimeline: "",
    budgetRange: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: "dataCenter", label: tServices("dataCenter.title") },
    { value: "ups", label: tServices("ups.title") },
    { value: "cooling", label: tServices("cooling.title") },
    { value: "network", label: tServices("network.title") },
    { value: "cabling", label: tServices("cabling.title") },
    { value: "cctv", label: tServices("cctv.title") },
    { value: "security", label: tServices("security.title") },
  ];

  const timelineOptions = [
    { value: "asap", label: t("timelineOptions.asap") },
    { value: "1-2weeks", label: t("timelineOptions.1-2weeks") },
    { value: "1month", label: t("timelineOptions.1month") },
    { value: "2-3months", label: t("timelineOptions.2-3months") },
    { value: "3-6months", label: t("timelineOptions.3-6months") },
    { value: "6+months", label: t("timelineOptions.6+months") },
  ];

  const budgetOptions = [
    { value: "under10k", label: t("budgetOptions.under10k") },
    { value: "10k-50k", label: t("budgetOptions.10k-50k") },
    { value: "50k-100k", label: t("budgetOptions.50k-100k") },
    { value: "100k-250k", label: t("budgetOptions.100k-250k") },
    { value: "250k-500k", label: t("budgetOptions.250k-500k") },
    { value: "500k+", label: t("budgetOptions.500k+") },
    { value: "notDisclosed", label: t("budgetOptions.notDisclosed") },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create FormData for file upload
    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "file" && formData[key]) {
        submitData.append(key, formData[key]);
      } else if (key !== "file") {
        submitData.append(key, formData[key]);
      }
    });

    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch("/api/quote", {
      //   method: "POST",
      //   body: submitData,
      // });
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        interestedSolution: preselectedService || "",
        projectDescription: "",
        siteLocation: "",
        targetTimeline: "",
        budgetRange: "",
        file: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById("file");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="quote-form-wrapper" style={{ 
      background: '#fff', 
      padding: '50px 60px', 
      borderRadius: '12px',
      boxShadow: '7px 11px 50px 52px rgba(2, 8, 66, 0.03)'
    }}>
      {/* Tag/Badge */}
      <div style={{
        background: 'linear-gradient(84deg, #0066CC 0%, #004499 100%)',
        color: '#fff',
        padding: '8px 20px',
        borderRadius: '4px',
        display: 'inline-block',
        marginBottom: '20px',
        fontSize: '14px',
        fontWeight: '500'
      }}>
        {t("subtitle")}
      </div>

      {/* Title */}
      <h2 style={{
        color: '#004499',
        fontSize: '36px',
        fontWeight: '700',
        marginBottom: '40px',
        marginTop: '10px'
      }}>
        {t("title")}
      </h2>

      {submitStatus === "success" && (
        <div className="alert alert-success mb-4" role="alert">
          <h4>{t("success.title")}</h4>
          <p>{t("success.message")}</p>
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="alert alert-danger mb-4" role="alert">
          <h4>{t("error.title")}</h4>
          <p>{t("error.message")}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} id="quote-form" encType="multipart/form-data">
        <div className="row g-4">
          {/* Required Fields - Two Column Layout */}
          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="name" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.name")} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("form.name")}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="company" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.company")} <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder={t("form.company")}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="phone" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.phone")} <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("form.phone")}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="email" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.email")} <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.email")}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-clt">
              <label htmlFor="interestedSolution" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.interestedSolution")} <span className="text-danger">*</span>
              </label>
              <select
                name="interestedSolution"
                id="interestedSolution"
                required
                value={formData.interestedSolution}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 15px center',
                  paddingRight: '40px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              >
                <option value="">{t("form.interestedSolution")}</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-clt-big form-clt">
              <label htmlFor="projectDescription" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.projectDescription")} <span className="text-danger">*</span>
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                required
                rows="5"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder={t("form.projectDescription")}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          </div>

          {/* Optional Fields */}
          <div className="col-lg-12">
            <hr style={{ margin: '40px 0 30px', borderColor: '#e2e8f0' }} />
            <h5 style={{
              fontWeight: '700',
              color: '#4a5568',
              marginBottom: '30px',
              fontSize: '18px'
            }}>
              {t("form.optionalFields")}
            </h5>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="siteLocation" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.siteLocation")} <span style={{ color: '#718096', fontSize: '13px' }}>({t("form.optional")})</span>
              </label>
              <input
                type="text"
                name="siteLocation"
                id="siteLocation"
                value={formData.siteLocation}
                onChange={handleChange}
                placeholder={t("form.siteLocation")}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="targetTimeline" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.targetTimeline")} <span style={{ color: '#718096', fontSize: '13px' }}>({t("form.optional")})</span>
              </label>
              <select
                name="targetTimeline"
                id="targetTimeline"
                value={formData.targetTimeline}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 15px center',
                  paddingRight: '40px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              >
                <option value="">{t("form.targetTimeline")}</option>
                {timelineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="budgetRange" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.budgetRange")} <span style={{ color: '#718096', fontSize: '13px' }}>({t("form.optional")})</span>
              </label>
              <select
                name="budgetRange"
                id="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23333\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 15px center',
                  paddingRight: '40px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0066CC'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              >
                <option value="">{t("form.budgetRange")}</option>
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="file" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#1a202c',
                fontSize: '15px'
              }}>
                {t("form.attachFile")} <span style={{ color: '#718096', fontSize: '13px' }}>({t("form.optional")})</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg,.dxf"
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#fff'
                }}
              />
              <small style={{ 
                display: 'block', 
                marginTop: '8px', 
                color: '#718096', 
                fontSize: '13px' 
              }}>
                {t("form.filePlaceholder")}
              </small>
              {formData.file && (
                <div style={{ marginTop: '10px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '4px',
                    fontSize: '13px',
                    color: '#4a5568'
                  }}>
                    {formData.file.name} ({(formData.file.size / 1024).toFixed(2)} KB)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-12" style={{ marginTop: '30px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: 'linear-gradient(84deg, #0066CC 0%, #004499 100%)',
                color: '#fff',
                border: 'none',
                padding: '14px 40px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => !isSubmitting && (e.target.style.opacity = '0.9')}
              onMouseLeave={(e) => !isSubmitting && (e.target.style.opacity = '1')}
            >
              {isSubmitting ? "Submitting..." : t("form.submit")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;

