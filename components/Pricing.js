import Link from "next/link";

const Pricing = () => {
  return (
    <div className="row g-4 align-items-center mt-4">
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
        data-wow-delay="200ms"
      >
        <div className="single-pricing-item">
          <div className="header">
            <h4>Standard</h4>
            <span>Ideal for Growing Businesses.</span>
          </div>
          <div className="price">
            $399 <span> / Per month </span>
          </div>
          <Link href="pricing" className="theme-btn trasparent-btn-2 black-btn">
            <span>Start Free Trial</span>
          </Link>
          <ul className="list">
            <li>
              <i className="fas fa-check-circle" />
              Managed IT Services
            </li>
            <li>
              <i className="fas fa-check-circle" />
              No Migration Consultation
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Data Backup Recovery
            </li>
            <li>
              <i className="fas fa-check-circle" />
              24/7 Remote Support
            </li>
          </ul>
          <div className="price-img">
            <img src="assets/img/price-1.jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
        data-wow-delay="400ms"
      >
        <div className="single-pricing-item border-style">
          <div className="price-btn">BEST CHOCE</div>
          <div className="header">
            <h4>Standard</h4>
            <span>Ideal for Growing Businesses.</span>
          </div>
          <div className="price">
            $399 <span> / Per month </span>
          </div>
          <Link href="pricing" className="theme-btn theme-btn-2 black-btn">
            <span>Start Free Trial</span>
          </Link>
          <ul className="list">
            <li>
              <i className="fas fa-check-circle" />
              Managed IT Services
            </li>
            <li>
              <i className="fas fa-check-circle" />
              No Migration Consultation
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Data Backup Recovery
            </li>
            <li>
              <i className="fas fa-check-circle" />
              24/7 Remote Support
            </li>
          </ul>
          <div className="price-img">
            <img src="assets/img/price-2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-4 col-lg-6 col-md-6 col-12 wow fadeInUp"
        data-wow-delay="600ms"
      >
        <div className="single-pricing-item">
          <div className="header">
            <h4>Standard</h4>
            <span>Ideal for Growing Businesses.</span>
          </div>
          <div className="price">
            $399 <span> / Per month </span>
          </div>
          <Link href="pricing" className="theme-btn trasparent-btn-2 black-btn">
            <span>Start Free Trial</span>
          </Link>
          <ul className="list">
            <li>
              <i className="fas fa-check-circle" />
              Managed IT Services
            </li>
            <li>
              <i className="fas fa-check-circle" />
              No Migration Consultation
            </li>
            <li>
              <i className="fas fa-check-circle" />
              Data Backup Recovery
            </li>
            <li>
              <i className="fas fa-check-circle" />
              24/7 Remote Support
            </li>
          </ul>
          <div className="price-img">
            <img src="assets/img/price-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
