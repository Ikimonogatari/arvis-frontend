"use client";

import Link from "next/link";
import { useGetTeamMembersQuery } from "@/lib/api/articlesApi";

const TeamMember = () => {
  const { data: teamMembers, error, isLoading } = useGetTeamMembersQuery();

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/team/05.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  const membersList = teamMembers || [];
  const delays = ["200ms", "400ms", "600ms", "800ms"];

  return (
    <section className="team-wrapper team-2 section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TEAM MEMBER</span>
          </div>
          <h2 className="split-text right">Meet with Our Expert</h2>
          <p className="text-center">
            Accelerate innovation with world-class tech teams We'll match you{" "}
            <br /> to an entire remote team of incredible freelance.
          </p>
        </div>
        <div className="row mt-4">
          {membersList.length > 0 ? (
            membersList.map((member, index) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay={delays[index % 4]}
              >
                <div className="single-team-item">
                  <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
                  <div className="team-image">
                    <img 
                      src={getImageUrl(member.image)} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="content">
                    <p>{member.role || member.position || "Team Member"}</p>
                    <h4>
                      <Link href={`/teams-details?id=${member.id}`}>{member.name}</Link>
                    </h4>
                    <div className="social d-flex align-items-center justify-content-center">
                      {member.social_facebook && (
                        <a href={member.social_facebook} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      )}
                      {member.social_twitter && (
                        <a href={member.social_twitter} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      )}
                      {member.social_linkedin && (
                        <a href={member.social_linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      )}
                      {member.social_instagram && (
                        <a href={member.social_instagram} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No team members found.</p>
            </div>
          )}
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
  const { data: teamMembers, error, isLoading } = useGetTeamMembersQuery();

  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/team/01.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  const membersList = teamMembers || [];
  const delays = ["200ms", "400ms", "600ms", "800ms"];

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
          Accelerate innovation with world-class tech teams We'll match you{" "}
          <br /> to an entire remote team of incredible freelance.
        </p>
        <div className="row">
          {membersList.length > 0 ? (
            membersList.slice(0, 4).map((member, index) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={delays[index % 4]}
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
                      <img 
                        src={getImageUrl(member.image)} 
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                    <div className="social-icon">
                      {member.social_facebook && (
                        <a href={member.social_facebook} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                      )}
                      {member.social_twitter && (
                        <a href={member.social_twitter} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      )}
                      {member.social_linkedin && (
                        <a href={member.social_linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      )}
                      {member.social_instagram && (
                        <a href={member.social_instagram} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="content text-center pt-3">
                    <p>{member.role || member.position || "Team Member"}</p>
                    <h3>
                      <Link href={`/teams-details?id=${member.id}`}>{member.name}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No team members found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
