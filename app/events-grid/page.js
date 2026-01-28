"use client";

import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetEventsQuery } from "@/lib/api/directusApi";
import Link from "next/link";

const page = () => {
  const { data: events, error, isLoading } = useGetEventsQuery();

  // Helper function to get image URL from GraphQL response
  const getImageUrl = (imageData) => {
    if (!imageData) {
      return "assets/img/blog/01.jpg"; // Fallback image
    }
    if (!imageData.id) {
      return "assets/img/blog/01.jpg"; // Fallback image
    }
    const imageUrl = `http://217.154.145.65:8055/assets/${imageData.id}`;
    return imageUrl;
  };

  // Get event content from translations
  const getEventContent = (event) => {
    if (!event || !event.translations || event.translations.length === 0) {
      return {
        title: "Event Title",
        description: "Event description goes here...",
      };
    }

    const englishTranslation = event.translations.find(
      (t) => t.languages_code?.code === "en",
    );
    const translation = englishTranslation || event.translations[0];

    return {
      title: translation.title || "Event Title",
      description: translation.description || "Event description goes here...",
    };
  };

  // Format date helper function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <ZotechLayout>
      <Pagebanner pageName="Events Grid" />
      <section className="blog-wrapper blog-1 blog-page section-padding section-bg">
        <div className="shape">
          <img
            className="shape-1"
            src="assets/img/shape/shape-5-black.png"
            alt=""
          />
          <img className="shape-2" src="assets/img/shape/shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR EVENTS</span>
            </div>
            <h2>Our Latest Events &amp; Activities</h2>
          </div>
          <p className="text-center mt-3">
            Join us for exciting events, workshops, and networking opportunities{" "}
            <br />
            Stay updated with our latest activities and happenings
          </p>
          <div className="blog-inner">
            {isLoading ? (
              <div className="text-center py-5">
                <p>Loading events...</p>
              </div>
            ) : error ? (
              <div className="text-center py-5">
                <p>Error loading events. Please try again later.</p>
              </div>
            ) : (
              <div className="row">
                {events && events.length > 0 ? (
                  events.map((event, index) => {
                    const delay = `${((index % 3) + 1) * 200}ms`;
                    const eventContent = getEventContent(event);
                    const description = eventContent.description || "";
                    const truncatedDescription =
                      description.length > 100
                        ? description.substring(0, 100) + "..."
                        : description;

                    const imageToUse = event.image || event.cover_image;
                    const imageUrl = getImageUrl(imageToUse);
                    const eventDate = formatDate(
                      event.event_date || event.date_created,
                    );

                    return (
                      <div
                        key={event.id}
                        className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                        data-wow-delay={delay}
                      >
                        <div className="single-blog-item">
                          <div className="image">
                            <img
                              src={imageUrl}
                              alt={eventContent.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                              onError={(e) => {
                                e.target.src = "assets/img/blog/01.jpg";
                              }}
                            />
                          </div>
                          <div className="content">
                            <ul>
                              <li>Event</li>
                              <li>
                                {" "}
                                <i className="fas fa-circle" />
                              </li>
                              <li>{eventDate || "Upcoming"}</li>
                            </ul>
                            <h3>
                              <Link href={`/events-details?id=${event.id}`}>
                                {eventContent.title}
                              </Link>
                            </h3>
                            <p>
                              {truncatedDescription ||
                                "Learn more about this event..."}
                            </p>
                            {event.location && (
                              <p
                                style={{
                                  fontSize: "14px",
                                  color: "#666",
                                  marginTop: "10px",
                                }}
                              >
                                <i className="fas fa-map-marker-alt" />{" "}
                                {event.location}
                              </p>
                            )}
                            <Link
                              href={`/events-details?id=${event.id}`}
                              className="link-btn"
                            >
                              Read More{" "}
                              <i className="far fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-12 text-center py-5">
                    <p>No events found.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
