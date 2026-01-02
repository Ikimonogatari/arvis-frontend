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
    <div className="quote-form-wrapper">
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
        <div className="row g-3">
          {/* Required Fields */}
          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="name">
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
              />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="company">
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
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="phone">
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
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="email">
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
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-clt">
              <label htmlFor="interestedSolution">
                {t("form.interestedSolution")} <span className="text-danger">*</span>
              </label>
              <select
                name="interestedSolution"
                id="interestedSolution"
                required
                value={formData.interestedSolution}
                onChange={handleChange}
                className="form-select"
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
              <label htmlFor="projectDescription">
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
              />
            </div>
          </div>

          {/* Optional Fields */}
          <div className="col-lg-12">
            <hr className="my-4" />
            <h5 className="mb-3 text-muted">{t("form.optionalFields")}</h5>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="siteLocation">
                {t("form.siteLocation")} <span className="text-muted">({t("form.optional")})</span>
              </label>
              <input
                type="text"
                name="siteLocation"
                id="siteLocation"
                value={formData.siteLocation}
                onChange={handleChange}
                placeholder={t("form.siteLocation")}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-clt">
              <label htmlFor="targetTimeline">
                {t("form.targetTimeline")} <span className="text-muted">({t("form.optional")})</span>
              </label>
              <select
                name="targetTimeline"
                id="targetTimeline"
                value={formData.targetTimeline}
                onChange={handleChange}
                className="form-select"
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

          <div className="col-lg-12">
            <div className="form-clt">
              <label htmlFor="budgetRange">
                {t("form.budgetRange")}
              </label>
              <select
                name="budgetRange"
                id="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="form-select"
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

          <div className="col-lg-12">
            <div className="form-clt">
              <label htmlFor="file">
                {t("form.attachFile")} <span className="text-muted">({t("form.optional")})</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg,.dxf"
                onChange={handleChange}
                className="form-control"
              />
              <small className="text-muted">{t("form.filePlaceholder")}</small>
              {formData.file && (
                <div className="mt-2">
                  <span className="badge bg-secondary">
                    {formData.file.name} ({(formData.file.size / 1024).toFixed(2)} KB)
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-12">
            <button
              type="submit"
              className="theme-btn black-btn"
              disabled={isSubmitting}
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

