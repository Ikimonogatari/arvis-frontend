"use client";

import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetTeamMembersQuery } from "@/lib/api/directusApi";
import Link from "next/link";

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

const page = () => {
  const { data: teamMembers, error, isLoading } = useGetTeamMembersQuery();

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/team/05.jpg";
    return `${directusUrl}/assets/${imageData.id}`;
  };

  const membersList = teamMembers || [];
  const delays = ["200ms", "400ms", "600ms", "800ms"];

  return (
    <ZotechLayout>
      <Pagebanner pageName="Our Team" />
      {/* <!-- Team Section Start --> */}
      <section className="team-wrapper team-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR TEAM MEMBER</span>
            </div>
            <h2>Meet with Our Expert</h2>
            <p className="text-center">
              Accelerate innovation with world-class tech teams We'll match you{" "}
              <br /> to an entire remote team of incredible freelance.
            </p>
          </div>
          <div className="row mt-4">
            {isLoading ? (
              <div className="col-12 text-center">
                <p>Loading team members...</p>
              </div>
            ) : membersList.length > 0 ? (
              membersList.map((member, index) => (
                <div
                  key={member.id}
                  className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
                  data-wow-delay={delays[index % 4]}
                >
                  <div className="single-team-item">
                    <img
                      className="shape-1"
                      src="assets/img/shape/shape-11.png"
                      alt
                    />
                    <div className="team-image">
                      <img
                        src={getImageUrl(member.image)}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="content">
                      <p>{member.role || member.position || "Team Member"}</p>
                      <h4>
                        <Link href={`/teams-details?id=${member.id}`}>
                          {member.name}
                        </Link>
                      </h4>
                      <div className="social d-flex align-items-center justify-content-center">
                        {member.social_facebook && (
                          <a
                            href={member.social_facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        )}
                        {member.social_twitter && (
                          <a
                            href={member.social_twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        )}
                        {member.social_linkedin && (
                          <a
                            href={member.social_linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        )}
                        {member.social_instagram && (
                          <a
                            href={member.social_instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        )}
                        {!member.social_facebook &&
                          !member.social_twitter &&
                          !member.social_linkedin &&
                          !member.social_instagram && (
                            <>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </>
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
    </ZotechLayout>
  );
};
export default page;
