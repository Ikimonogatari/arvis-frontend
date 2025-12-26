import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Team Details" />
      <section className="team-details-section fix section-padding pb-0">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-image">
                  <img src="assets/img/team/details-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <div className="team-details-content ps-xxl-4 pt-4">
                  <span>Marketing Manager</span>
                  <h3>Sophia Brown</h3>
                  <p className="mt-3">
                    We help ambitious businesses like yours generate more
                    profits by building awareness, driving web traffic,
                    connecting with customers.
                  </p>
                  <p className="mt-3">
                    We help ambitious businesses like yours generate more
                    profits by building awareness, driving web traffic,
                    connecting with customers.
                  </p>
                  <p className="mt-3">
                    Yours generate more profits by building awareness, driving
                    web traffic, connecting with customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4  wow fadeInUp" data-wow-delay=".5s">
                <div className="team-details-contact ms-xxl-5">
                  <div className="team-content-box">
                    <ul className="team-infobox">
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Experience:</span>
                        <span className="white-clr">12 years</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Email:</span>
                        <span className="white-clr">zotech@gmail.com</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Phone:</span>
                        <span className="white-clr">+91 258 754 523</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Website:</span>
                        <span className="white-clr">www.zotech.com</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Location:</span>
                        <span className="white-clr">
                          60 East 65th Street, NY
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
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
      <section className="team-skill fix section-padding pt-5">
        <div className="container">
          <div className="team-skill-wrapper">
            <div className="row">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-skill-content pe-xxl-5">
                  <h3>About Me</h3>
                  <p className="mt-2">
                    Prior to joining, James taught at The Hebrew University, the
                    Jerusalem Institute of Management, and served in my
                    country’s Army. Active in civic and professional affairs,
                    Orit Most recently, I led Galvanize’s SF’s 6 month immersive
                    program as Lead Instructor and Curriculum Director. After
                    graduating from my class,
                  </p>
                  <p className="mt-4">
                    I’ve since focused my time on bringing my teaching
                    experience to an online environment. In 2021 I launched
                    my&nbsp;Web Developer Bootcamp course.
                  </p>
                </div>
              </div>
              <div className="col-lg-5  wow fadeInUp" data-wow-delay=".5s">
                <div className="team-skill-content">
                  <h3>Expertise area</h3>
                  <div className="progress-items">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="95%"
                      />
                    </div>
                    <div className="point">
                      <p>IT Management</p>
                      <span>95%</span>
                    </div>
                  </div>
                  <div className="progress-items pt-4">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="90%"
                      />
                    </div>
                    <div className="point">
                      <p>Data Security</p>
                      <span>90%</span>
                    </div>
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
