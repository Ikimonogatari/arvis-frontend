"use client";

import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetEventByIdQuery } from "@/lib/api/directusApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const EventDetailsContent = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");

  const idToFetch = eventId || "1";

  const {
    data: event,
    error,
    isLoading,
  } = useGetEventByIdQuery(idToFetch, {
    skip: !idToFetch,
  });

  // Helper function to get image URL from GraphQL response
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) {
      return "assets/img/blog/details-1.jpg";
    }
    return `http://217.154.145.65:8055/assets/${imageData.id}`;
  };

  // Get event content from translations
  const getEventContent = (event) => {
    if (!event || !event.translations || event.translations.length === 0) {
      return {
        title: "Event Title",
        description: "Event description goes here...",
        body: "",
      };
    }

    const englishTranslation = event.translations.find(
      (t) => t.languages_code?.code === "en",
    );
    const translation = englishTranslation || event.translations[0];

    return {
      title: translation.title || "Event Title",
      description: translation.description || "Event description goes here...",
      body: translation.body || "",
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

  // Extract related events
  const relatedEvents =
    event?.related_events?.map((rel) => rel.related_event_id).filter(Boolean) ||
    [];

  const coverImageUrl = getImageUrl(event?.cover_image || event?.image);
  const eventContent = event ? getEventContent(event) : null;
  const eventDate = event
    ? formatDate(event.event_date || event.date_created)
    : "";

  const pageTitle = eventContent ? eventContent.title : "Event Details";
  const breadcrumbs = eventContent
    ? [
        { label: "Home", href: "/" },
        { label: "Events Grid", href: "/events-grid" },
        { label: eventContent.title },
      ]
    : undefined;

  return (
    <ZotechLayout>
      <Pagebanner pageName={pageTitle} breadcrumbs={breadcrumbs} />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-xxl-8 col-xl-7">
                {isLoading ? (
                  <div className="text-center py-5">
                    <p>Loading event...</p>
                  </div>
                ) : error || !event || !eventContent ? (
                  <div className="text-center py-5">
                    <p>Event not found. Please try again later.</p>
                  </div>
                ) : (
                  <>
                    <div className="blog-post-details border-wrap mt-0">
                      <div
                        className="blog-details-image wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <img src={coverImageUrl} alt={eventContent.title} />
                      </div>
                      <div
                        className="single-blog-post post-details mt-0 wow fadeInUp"
                        data-wow-delay="200ms"
                      >
                        <div className="post-content pt-0">
                          <div className="post-meta mt-3">
                            <span>
                              <i className="fal fa-calendar-alt" />
                              {eventDate || "Upcoming Event"}
                            </span>
                            {event.location && (
                              <>
                                |
                                <span>
                                  <i className="fal fa-map-marker-alt" />{" "}
                                  {event.location}
                                </span>
                              </>
                            )}
                          </div>
                          <h3 className="mt-0">{eventContent.title}</h3>
                          {eventContent.body && (
                            <div className="mt-4">
                              {eventContent.body
                                .split("\n")
                                .map((paragraph, index) => (
                                  <p
                                    key={index}
                                    className={index > 0 ? "mt-4" : ""}
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                            </div>
                          )}
                          {!eventContent.body && eventContent.description && (
                            <div className="mt-4">
                              {eventContent.description
                                .split("\n")
                                .map((paragraph, index) => (
                                  <p
                                    key={index}
                                    className={index > 0 ? "mt-4" : ""}
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className="row tag-share-wrap wow fadeInUp"
                        data-wow-delay="300ms"
                      >
                        <div className="col-lg-8 col-12">
                          <div className="tagcloud d-flex ">
                            <h4>Tag:</h4>
                            <Link href="/events-details">Event</Link>
                            <Link href="/events-details">Technology</Link>
                            <Link href="/events-details">Conference</Link>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-3 mt-lg-0">
                          <div className="social-share d-flex align-items-center">
                            <h4>Share:</h4>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Related Events Section */}
                    {relatedEvents.length > 0 && (
                      <div
                        className="related-articles mt-5 wow fadeInUp"
                        data-wow-delay="400ms"
                      >
                        <h3 className="mb-4">Related Events</h3>
                        <div className="row">
                          {relatedEvents.map((relatedEvent) => {
                            const relatedImageUrl = getImageUrl(
                              relatedEvent.cover_image || relatedEvent.image,
                            );
                            const relatedContent =
                              getEventContent(relatedEvent);
                            return (
                              <div
                                key={relatedEvent.id}
                                className="col-lg-6 col-md-6 col-12 mb-4"
                              >
                                <div className="single-blog-item">
                                  {relatedImageUrl && (
                                    <div className="image">
                                      <img
                                        src={relatedImageUrl}
                                        alt={relatedContent.title}
                                      />
                                    </div>
                                  )}
                                  <div className="content">
                                    <h4>
                                      <Link
                                        href={`/events-details?id=${relatedEvent.id}`}
                                      >
                                        {relatedContent.title}
                                      </Link>
                                    </h4>
                                    {relatedContent.description && (
                                      <p>
                                        {relatedContent.description.length > 150
                                          ? relatedContent.description.substring(
                                              0,
                                              150,
                                            ) + "..."
                                          : relatedContent.description}
                                      </p>
                                    )}
                                    <Link
                                      href={`/events-details?id=${relatedEvent.id}`}
                                      className="link-btn"
                                    >
                                      Read More{" "}
                                      <i className="far fa-long-arrow-right" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="col-12 col-xxl-4 col-xl-5">
                <div className="main-sidebar">
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="blog-author-info text-center">
                      <div className="image">
                        <img src="assets/img/blog/pp4.jpg" alt="" />
                      </div>
                      <h5 className="mt-3">Arvis Systems</h5>
                      <p className="mt-1">Event Organizer</p>
                      <p className="mt-3">
                        Professional IT infrastructure solutions for data
                        centers, power protection, cooling, networking, and
                        security.
                      </p>
                      <div className="social-link mt-3">
                        <a
                          href="https://www.facebook.com/Arvis.Systems"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://x.com/ArvisSystems"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="wid-title">
                      <h3>Search here</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
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

const page = () => {
  return (
    <Suspense
      fallback={
        <ZotechLayout>
          <Pagebanner pageName="Event Details" />
          <section className="blog-details-section fix section-padding">
            <div className="container">
              <p>Loading...</p>
            </div>
          </section>
        </ZotechLayout>
      }
    >
      <EventDetailsContent />
    </Suspense>
  );
};

export default page;
