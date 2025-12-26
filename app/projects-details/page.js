import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Projects Details" />
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="row g-4">
              <div className="col-xxl-8 col-lg-12">
                <div className="project-details-content pe-xl-4">
                  <div className="project-details-image">
                    <img src="assets/img/case/details-1.jpg" alt="img" />
                  </div>
                  <h3 className="mt-4">Software Development Analysis</h3>
                  <p className="mb-3">
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible freelance
                    talent for all your software development needs.
                  </p>
                  <p>
                    Building a powerful brand is essential to standing out in
                    today's competitive market. Our Brand Development service
                    focuses on crafting a unique identity that resonates with
                    your target audience, strengthens your brand’s presence, and
                    drives long-term success. We dive deep into understanding
                    your business values, vision, and goals to create a brand
                    that reflects your core essence. Contact us today to
                    schedule a free consultation!
                  </p>
                  <div className="row ">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/img/case/details-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image">
                        <img src="assets/img/case/details-3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-4">Project Challenges</h4>
                  <p className="mb-3 mt-3">
                    We denounce with righteous indige nation and dislike men who
                    are so beguiled and demo realized by the charms of pleasure
                    of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble that are bound to ensue cannot
                    foresee. These cases are perfectly simple and easy to
                    distinguish. In a free hour, when our power of choice is
                    untrammelled.
                  </p>
                  <div className="list">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        Managed IT Services
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        60+ Remove background/mon
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Data Backup Recovery
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        New had happen unable uneasy
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        &nbsp;Drawings can followed improved out sociable not
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Comparison new ham melancholy son themselves.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-8">
                <div className="project-sidebar-widget">
                  <div className="wid-title">
                    <h3>Project Information</h3>
                  </div>
                  <div className="case-content-box">
                    <ul className="case-infobox">
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Client:</span>
                        <span className="white-clr">James Mary</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Category:</span>
                        <span className="white-clr">Business Consulting</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Start date:</span>
                        <span className="white-clr">1 September 2025</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">End date:</span>
                        <span className="white-clr">1 December 2025</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Budget:</span>
                        <span className="white-clr">$7854,66</span>
                      </li>
                    </ul>
                  </div>
                  <div className="social text-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
