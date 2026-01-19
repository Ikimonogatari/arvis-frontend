"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { useGetProjectsQuery } from "@/lib/api/articlesApi";

const CaseStudy = ({
  wrapperClass = "case-study-wrapper case-study-2  section-padding pb-0",
}) => {
  const { data: projects, error, isLoading } = useGetProjectsQuery();

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/case/09.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  const projectList = projects || [];

  // Render project item
  const renderProjectItem = (project, index) => {
    const styles = ["style-1", "style-2", "style-2", "style-2", "style-2", "style-1"];
    const styleClass = styles[index % styles.length] || "style-2";
    
    return (
      <div
        key={project.id}
        className={`single-case-item ${styleClass} filter-item branding wow fadeInUp`}
        data-wow-delay=".5s"
      >
        <img 
          src={getImageUrl(project.image)} 
          alt={project.name || project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="hover d-flex align-items-center justify-content-between">
          <div className="title">
            <span>PROJECT</span>
            <h4>{project.name || project.title || "Project"}</h4>
            <h4>{project.description ? project.description.substring(0, 40) + '...' : ""}</h4>
          </div>
          <Link href={`/projects-details?id=${project.id}`} className="icon">
            <i className="far fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    );
  };

  // Fallback projects data
  const fallbackProjects = [
    { img: "assets/img/case/09.jpg", title: "Every software solution be integrated" },
    { img: "assets/img/case/10.jpg", title: "IT infrastructure management" },
    { img: "assets/img/case/11.jpg", title: "Data center solutions" },
    { img: "assets/img/case/12.jpg", title: "Network optimization" },
    { img: "assets/img/case/13.jpg", title: "Security implementation" },
    { img: "assets/img/case/14.jpg", title: "Cloud migration" },
  ];

  // Render fallback project item
  const renderFallbackItem = (item, index) => {
    const styles = ["style-1", "style-2", "style-2", "style-2", "style-2", "style-1"];
    const styleClass = styles[index % styles.length] || "style-2";
    
    return (
      <div
        key={index}
        className={`single-case-item ${styleClass} filter-item branding wow fadeInUp`}
        data-wow-delay=".5s"
      >
        <img src={item.img} alt="img" />
        <div className="hover d-flex align-items-center justify-content-between">
          <div className="title">
            <span>PROJECT</span>
            <h4>{item.title}</h4>
          </div>
          <Link href="/projects-details" className="icon">
            <i className="far fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    );
  };

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
            </Nav>
          </div>
        </div>
        <div className="container-fluid ">
          <Tab.Content className="tab-content">
            <Tab.Pane eventKey="all" id="all" className="tab-pane fade ">
              <div className="case-study-grid">
                {projectList.length > 0 
                  ? projectList.slice(0, 3).map((project, index) => renderProjectItem(project, index))
                  : fallbackProjects.slice(0, 3).map((item, index) => renderFallbackItem(item, index))
                }
              </div>
              <div className="case-study-grid">
                {projectList.length > 0 
                  ? projectList.slice(3, 6).map((project, index) => renderProjectItem(project, index + 3))
                  : fallbackProjects.slice(3, 6).map((item, index) => renderFallbackItem(item, index + 3))
                }
              </div>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </section>
  );
};
export default CaseStudy;
