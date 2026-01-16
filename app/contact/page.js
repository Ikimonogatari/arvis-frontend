"use client";

import { Contact2 } from "@/components/Contact";
import CTA from "@/components/CTA";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const page = () => {
  const t = useSafeTranslations("footer");
  const tContact = useSafeTranslations("contact");
  return (
    <ZotechLayout cta={false}>
      <Pagebanner pageName="Contact Us" />
      {/* Contact Info Section Start */}
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="single-contact-card">
                <div className="d-flex align-items-center mb-3 gap-3">
                  <div className="icon">
                    <i className="flaticon-telephone" />
                  </div>
                  <div className="title">
                    <span>{t("contactUs")}</span>
                  </div>
                </div>
                <div className="phone-numbers">
                  <div className="row g-3">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="phone-item">
                        <p className="mb-1">{t("phones.equipmentSales.label")}</p>
                        <h5><a href={`tel:${t("phones.equipmentSales.number").replace(/[‐-]/g, "")}`}>{t("phones.equipmentSales.number")}</a></h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="phone-item">
                        <p className="mb-1">{t("phones.dataCenterNetwork.label")}</p>
                        <h5><a href={`tel:${t("phones.dataCenterNetwork.number").replace(/[‐-]/g, "")}`}>{t("phones.dataCenterNetwork.number")}</a></h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="phone-item">
                        <p className="mb-1">{t("phones.businessPartnership.label")}</p>
                        <h5><a href={`tel:${t("phones.businessPartnership.number").replace(/[‐-]/g, "")}`}>{t("phones.businessPartnership.number")}</a></h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="phone-item">
                        <p className="mb-1">{t("phones.automation.label")}</p>
                        <h5><a href={`tel:${t("phones.automation.number").replace(/[‐-]/g, "")}`}>{t("phones.automation.number")}</a></h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="phone-item">
                        <p className="mb-1">{t("phones.ups.label")}</p>
                        <h5><a href={`tel:${t("phones.ups.number").replace(/[‐-]/g, "")}`}>{t("phones.ups.number")}</a></h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="phone-item">
                        <p className="mb-1">{t("phones.itServices.label")}</p>
                        <h5><a href={`tel:${t("phones.itServices.number").replace(/[‐-]/g, "")}`}>{t("phones.itServices.number")}</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="title">
                  <span>{t("ourLocation")}</span>
                  <h4>{t("addressText")}</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="title">
                  <span>{t("mailUsLabel")}</span>
                  <h4>info@arvisys.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact-us Section Start */}
      <Contact2 />
      {/* Map Section Start */}
      <div className="office-google-map-wrapper wow fadeInUp">
        <iframe
          src="https://www.google.com/maps?q=47.925744,106.9269199&hl=en&z=17&output=embed"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arvis IT Store Location"
        />
      </div>
      <CTA wrapperClass="cta-wrapper cta-2 style-3 section-bg" />
    </ZotechLayout>
  );
};
export default page;
