"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const CaseStudy = ({
  wrapperClass = "case-study-wrapper case-study-2  section-padding pb-0",
}) => {
  return (
    <section className={wrapperClass}>
      <Tab.Container defaultActiveKey={"all"} id="case-study-tab">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>Case studies section</span>
              </div>
              <h2 className="split-text right">Introduce Our Projects</h2>
            </div>
            <Nav as={"ul"} className="nav">
              <Nav.Item as={"li"}>
                <Nav.Link
                  as={"a"}
                  eventKey="all"
                  href="#all"
                  data-bs-toggle="tab"
                  className="nav-link theme-btn trasparent-btn"
                >
                  all
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link
                  as={"a"}
                  eventKey="Design"
                  href="#Design"
                  data-bs-toggle="tab"
                  className="nav-link theme-btn trasparent-btn"
                >
                  Design
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link
                  as={"a"}
                  eventKey="Company"
                  href="#Company"
                  data-bs-toggle="tab"
                  className="nav-link theme-btn trasparent-btn"
                >
                  IT Company
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link
                  as={"a"}
                  eventKey={"Photography"}
                  href="#Photography"
                  data-bs-toggle="tab"
                  className="nav-link theme-btn trasparent-btn"
                >
                  Photography
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link
                  as={"a"}
                  eventKey={"Security"}
                  href="#Security"
                  data-bs-toggle="tab"
                  className="nav-link theme-btn trasparent-btn"
                >
                  Cyber Security
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {/* /.list-unstyledf */}
          </div>
        </div>
        <div className="container-fluid ">
          <Tab.Content className="tab-content">
            <Tab.Pane eventKey="all" id="all" className="tab-pane fade ">
              <div className="case-study-grid">
                <div
                  className="single-case-item style-1 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/09.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/10.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/11.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="case-study-grid">
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/12.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/13.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-1 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/14.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Design" id="Design" className="tab-pane fade">
              <div className="case-study-grid">
                <div
                  className="single-case-item style-1 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/09.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/10.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/11.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="case-study-grid">
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/12.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/13.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-1 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/14.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Company" id="Company" className="tab-pane fade">
              <div className="case-study-grid">
                <div
                  className="single-case-item style-1 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/09.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/10.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/11.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="case-study-grid">
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/12.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/13.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-1 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/14.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane
              eventKey="Photography"
              id="Photography"
              className="tab-pane fade"
            >
              <div className="case-study-grid">
                <div
                  className="single-case-item style-1 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/09.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/10.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/11.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="case-study-grid">
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/12.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/13.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-1 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/14.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane
              eventKey="Security"
              id="Security"
              className="tab-pane fade"
            >
              <div className="case-study-grid">
                <div
                  className="single-case-item style-1 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/09.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/10.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/11.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="case-study-grid">
                <div
                  className="single-case-item style-2 filter-item branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/12.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-2 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/13.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div
                  className="single-case-item style-1 filter-item web-design branding wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <img src="assets/img/case/14.jpg" alt="img" />
                  <div className="hover d-flex align-items-center justify-content-between">
                    <div className="title">
                      <span>FINANCE</span>
                      <h4>Every software</h4>
                      <h4>solution be integrated</h4>
                    </div>
                    <Link href="projects-details" className="icon">
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </section>
  );
};
export default CaseStudy;
