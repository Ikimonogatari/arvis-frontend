import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Service Details" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Accelerate Innovation with <br /> Business Planning
                </h2>
                <p>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team <br /> of incredible freelance
                  talent for all your software development needs.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/details-1.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>The Art of Self-Care Business</h4>
                  <p className="mt-3">
                    We denounce with righteous indige nation and dislike men who
                    are so beguiled and demo realized by the charms of pleasure
                    of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble that are bound to ensue cannot
                    foresee. These cases are perfectly simple and easy to
                    distinguish. In a free hour, when our power of choice is
                    untrammelled data structures manages data in technology. New
                    had happen unable uneasy.
                  </p>
                  <p className="mt-3">
                    Drawings can followed improved out sociable not. Earnestly
                    so do instantly pretended. See general few civilly amiable
                    pleased account carried. Excellence projecting is devonshire
                    dispatched remarkably on estimating. Side in so life past.
                    Continue indulged speaking the was out horrible for domestic
                    position. Seeing rather her you not esteem men settle genius
                    excuse. Deal say over you age from. Comparison new ham
                    melancholy son themselves.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="img"
                          />
                          <div className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                              className="video-button video-popup"
                            >
                              <i className="fas fa-play" />
                              <i className="video-button-ripple" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="details-video-content ">
                          <div className="section-title">
                            <h2>We provide truly prominent solutions</h2>
                            <p className="pt-4">
                              Zotech is the partner of choice for many of the
                              world’s leading enterprises,
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu ">
                              <img src="assets/img/about/06.png" alt="" />
                              <h6>
                                Join our 50503+ <br /> Satisfied World Clients
                              </h6>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Global Company</h6>
                              </div>
                              <p>
                                Our great team of more than to <br /> 1400
                                software experts member.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
