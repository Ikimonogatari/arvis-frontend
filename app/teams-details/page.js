"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import { useGetTeamMemberByIdQuery } from "@/lib/api/directusApi";

const TeamDetailsContent = () => {
  const t = useSafeTranslations("footer");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: member, error, isLoading } = useGetTeamMemberByIdQuery(id, {
    skip: !id,
  });

  // Helper to get image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/team/details-1.jpg";
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  if (isLoading) {
    return (
      <ZotechLayout>
        <Pagebanner pageName="Team Details" />
        <section className="team-details-section fix section-padding pb-0">
          <div className="container">
            <p>Loading team member details...</p>
          </div>
        </section>
      </ZotechLayout>
    );
  }

  const name = member?.name || "Team Member";
  const role = member?.role || member?.position || "IT Specialist";
  const bio = member?.bio || "Professional IT expert with extensive experience in technology solutions.";
  const email = member?.email || "info@arvisys.com";
  const phone = member?.phone || "+976-75750077";
  const memberImage = getImageUrl(member?.image);

  return (
    <ZotechLayout>
      <Pagebanner pageName="Team Details" />
      <section className="team-details-section fix section-padding pb-0">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-image">
                  <img 
                    src={memberImage} 
                    alt={name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                <div className="team-details-content ps-xxl-4 pt-4">
                  <span>{role}</span>
                  <h3>{name}</h3>
                  <p className="mt-3">{bio}</p>
                </div>
              </div>
              <div className="col-lg-4  wow fadeInUp" data-wow-delay=".5s">
                <div className="team-details-contact ms-xxl-5">
                  <div className="team-content-box">
                    <ul className="team-infobox">
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Email:</span>
                        <span className="white-clr">{email}</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Phone:</span>
                        <span className="white-clr">{phone}</span>
                      </li>
                      <li className="d-flex align-items-center gap-4">
                        <span className="white-clr">Location:</span>
                        <span className="white-clr">
                          {t("addressText")}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="social">
                    {member?.social_facebook && (
                      <a href={member.social_facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                    )}
                    {member?.social_twitter && (
                      <a href={member.social_twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                    )}
                    {member?.social_linkedin && (
                      <a href={member.social_linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    )}
                    {member?.social_instagram && (
                      <a href={member.social_instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    )}
                    {!member?.social_facebook && !member?.social_twitter && !member?.social_linkedin && !member?.social_instagram && (
                      <>
                        <a href="https://www.facebook.com/Arvis.Systems" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="https://x.com/ArvisSystems" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter" />
                        </a>
                      </>
                    )}
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
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                <div className="team-skill-content pe-xxl-5">
                  <h3>About {name}</h3>
                  <p className="mt-2">{bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};

const page = () => {
  return (
    <Suspense fallback={
      <ZotechLayout>
        <Pagebanner pageName="Team Details" />
        <section className="team-details-section fix section-padding pb-0">
          <div className="container">
            <p>Loading...</p>
          </div>
        </section>
      </ZotechLayout>
    }>
      <TeamDetailsContent />
    </Suspense>
  );
};

export default page;
