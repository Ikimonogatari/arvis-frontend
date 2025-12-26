const CTA = ({
  wrapperClass = "cta-wrapper cta-2 style-3 section-padding pb-0 section-bg",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
          <div className="icon">
            <i className="flaticon-customer-support" />
          </div>
          <div className="title">
            <h3 className="split-text right">
              Looking for the Best IT Business Solutions?
            </h3>
            <p>As a app web crawler expert, We will help to organize.</p>
          </div>
          <a href className="theme-btn white-btn">
            Take a Consultant
          </a>
        </div>
      </div>
    </section>
  );
};
export default CTA;
