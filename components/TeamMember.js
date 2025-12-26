import Link from "next/link";

const teamMembers = [
  {
    role: "Marketing Manager",
    name: "Emma Taylor",
    image: "assets/img/team/05.jpg",
    delay: "200ms",
  },
  {
    role: "Fleet Supervisor",
    name: "James Anderson",
    image: "assets/img/team/06.jpg",
    delay: "400ms",
  },
  {
    role: "Warehouse Manager",
    name: "Sophia Brown",
    image: "assets/img/team/07.jpg",
    delay: "600ms",
  },
  {
    role: "Marketing Manager",
    name: "Christopher Mark",
    image: "assets/img/team/08.jpg",
    delay: "800ms",
  },
];

const TeamMember = () => {
  return (
    <section className="team-wrapper team-2 section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TEAM MEMBER</span>
          </div>
          <h2 className="split-text right">Meet with Our Expert</h2>
          <p className="text-center">
            Accelerate innovation with world-class tech teams We’ll match you{" "}
            <br /> to an entire remote team of incredible freelance.
          </p>
        </div>
        <div className="row mt-4">
          <Team teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;

export const Team = ({ teamMembers }) => {
  return (
    <div className="row mt-4">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
          data-wow-delay={member.delay}
        >
          <div className="single-team-item">
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="team-image">
              <img src={member.image} alt />
            </div>
            <div className="content">
              <p>{member.role}</p>
              <h4>
                <Link href="/teams-details">{member.name}</Link>
              </h4>
              <div className="social d-flex align-items-center justify-content-center">
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
      ))}
    </div>
  );
};

export const TeamMember2 = () => {
  return (
    <section className="team-wrapper team-1 section-padding">
      <div className="shape-1">
        <img src="assets/img/shape/shape-15.png" alt />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TEAM MEMBER</span>
          </div>
          <h2 className="split-text left">Meet with Our Expert</h2>
        </div>
        <p className="text-center">
          Accelerate innovation with world-class tech teams We’ll match you{" "}
          <br /> to an entire remote team of incredible freelance.
        </p>
        <div className="row">
          {[
            {
              image: "assets/img/team/01.jpg",
              role: "Warehouse Manager",
              name: "Christopher Donovan",
              delay: "200ms",
            },
            {
              image: "assets/img/team/02.jpg",
              role: "Operations Manager",
              name: "Michael Carter",
              delay: "400ms",
            },
            {
              image: "assets/img/team/03.jpg",
              role: "Fleet Supervisor",
              name: "James Anderson",
              delay: "600ms",
            },
            {
              image: "assets/img/team/04.jpg",
              role: "Project Manager",
              name: "Daniel Thompson",
              delay: "800ms",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="single-team-item">
                <div className="shape">
                  <img
                    className="shape-2"
                    src="assets/img/team/shape-1.png"
                    alt
                  />
                  <img
                    className="shape-3"
                    src="assets/img/team/shape-2.png"
                    alt
                  />
                </div>
                <div className="team-image">
                  <div className="image">
                    <img src={member.image} alt="team-img" />
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="content text-center pt-3">
                  <p>{member.role}</p>
                  <h3>
                    <Link href="/teams-details">{member.name}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
