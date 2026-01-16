"use client";

import PriceRanger from "./PriceRanger";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";

const Contact = ({
  wrapperClass = "contact-us-wrapper contact-us-1 section-padding pt-0",
}) => {
  const t = useSafeTranslations("footer");
  const tContact = useSafeTranslations("contact");
  return (
    <section className={wrapperClass}>
      <div className="shape">
        <img className="shape-1" src="assets/img/world.png" alt="" />
        <img className="shape-2" src="assets/img/shape/shape-15.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 mt-4 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="section-title">
              <div className="sub-title">
                <span>{tContact("subtitle")}</span>
              </div>
              <h2 className="split-text right">
                {tContact("heading1")}
              </h2>
            </div>
            <div className="contact-us-content pt-4 mt-3">
              <div className="infu-box d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="infu">
                  <p>{t("callUs")}</p>
                  <h3>+976-75750077</h3>
                </div>
              </div>
              <div className="infu-box d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="infu">
                  <p>{t("ourLocation")}</p>
                  <h3>{t("addressText")}</h3>
                </div>
              </div>
              <div className="infu-box d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="infu">
                  <p>{t("mailUsLabel")}</p>
                  <h3>info@arvisys.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12  wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="contact-right mt-4 mt-md-0">
              <h3>{tContact("form.sendMessage")}</h3>
              <form action="#" id="contact-form" method="POST">
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={tContact("form.firstName")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder={tContact("form.yourEmail")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder={tContact("form.phoneNumber")}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">{tContact("form.subject")}</span>
                        <ul className="list">
                          <li data-value="general" className="option selected">
                            {tContact("subjects.general")}
                          </li>
                          <li data-value="dataCenter" className="option">
                            {tContact("subjects.dataCenter")}
                          </li>
                          <li data-value="ups" className="option">
                            {tContact("subjects.ups")}
                          </li>
                          <li data-value="network" className="option">
                            {tContact("subjects.network")}
                          </li>
                          <li data-value="security" className="option">
                            {tContact("subjects.security")}
                          </li>
                          <li data-value="quote" className="option">
                            {tContact("subjects.quote")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt-big form-clt">
                      <textarea
                        name="message"
                        id="message"
                        placeholder={tContact("form.writeMessage")}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="theme-btn black-btn">
                      {tContact("form.sendMessageBtn")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

export const Contact2 = () => {
  const tContact = useSafeTranslations("contact");
  const tServices = useSafeTranslations("footer");
  return (
    <section className="contact-us-wrapper contact-us-2 section-padding">
      <div className="shape">
        <img className="shape-1" src="assets/img/shape/shape-21.png" alt />
        <img className="shape-2" src="assets/img/shape/shape-11.png" alt />
        <img className="shape-3" src="assets/img/shape/shape-22.png" alt />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>{tContact("subtitle")}</span>
          </div>
          <h2 className="split-text right">
            {tContact("heading2")}
          </h2>
        </div>
        <div className="contact-us-inner">
          <div className="row g-5">
            <div
              className="col-xl-6 col-lg-12 col-md-12 pe-xl-0 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="contact-left">
                <form action="#" id="contact-form" method="POST">
                  <div className="row g-4">
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".2"
                    >
                      <span>{tContact("form.firstName")}</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder={tContact("form.firstName")}
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".6"
                    >
                      <span>{tContact("form.lastName")}</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder={tContact("form.lastName")}
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12 pe-0 wow fadeInUp"
                      data-wow-delay=".4"
                    >
                      <span>{tContact("form.yourEmail")}</span>
                      <div className="form-clt">
                        <input type="email" name="email" placeholder={tContact("form.yourEmail")} />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".2"
                    >
                      <span>{tContact("form.phoneNumber")}</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          placeholder={tContact("form.phoneNumber")}
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".6"
                    >
                      <span>{tContact("form.country")}</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="country"
                          placeholder={tContact("form.country")}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="categories mt-4 pt-3">
                  <span className="fw-semibold">
                    {tContact("form.companyType")}
                  </span>
                  <div className="categories-items mt-2">
                    <div className="single-item">{tContact("companyTypes.itCompany")}</div>
                    <div className="single-item">{tContact("companyTypes.manufacturing")}</div>
                    <div className="single-item">{tContact("companyTypes.retail")}</div>
                    <div className="single-item">{tContact("companyTypes.healthcare")}</div>
                    <div className="single-item">{tContact("companyTypes.education")}</div>
                    <div className="single-item">{tContact("companyTypes.government")}</div>
                    <div className="single-item">{tContact("companyTypes.other")}</div>
                  </div>
                </div>
                <div className="checked-box mt-4 pt-3">
                  <span className="fw-semibold">{tContact("form.needFromUs")}</span>
                  <div className="checked-box-items mt-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">{tServices("services.dataCenter")}</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">
                        {tServices("services.ups")}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">{tServices("services.cooling")}</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">{tServices("services.network")}</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">{tServices("services.cabling")}</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">{tServices("services.cctv")}</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">{tServices("services.security")}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="contact-right ps-xl-5 ms-xl-3">
                <PriceRanger />
                <div
                  className="col-lg-12 wow fadeInUp mt-4"
                  data-wow-delay=".8"
                >
                  <span>{tContact("form.yourMessage")}</span>
                  <div className="form-clt-big form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder={tContact("form.writeMessage")}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                  />
                  <label className="form-check-label">
                    {tContact("form.agreeTerms")}
                  </label>
                </div>
                <div className="contact-btn d-flex align-items-center justify-content-between flex-wrap  mt-4">
                  <button type="submit" className="theme-btn black-btn">
                    {tContact("form.sendBtn")}
                  </button>
                  <div className="infu pt-xxl-0 pt-3">
                    <img src="assets/img/Avatar.png" alt />
                    <p>{tContact("form.meetExpert")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
