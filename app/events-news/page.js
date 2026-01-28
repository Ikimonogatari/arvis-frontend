import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Events and News" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-xl-8 col-lg-12">
                <div className="blog-posts">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/blog/blog-1.jpg")',
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar" />
                          Event Date
                        </span>
                        -
                        <span>
                          <i className="fal fa-map-marker-alt" />
                          Location
                        </span>
                        -
                        <span>
                          <i className="fal fa-clock" />3 min Read
                        </span>
                      </div>
                      <h3>
                        <Link href="events-details">
                          Upcoming Technology Conference 2025
                        </Link>
                      </h3>
                      <p>
                        Join us for an exciting technology conference featuring
                        industry leaders, innovative solutions, and networking
                        opportunities. Don't miss this chance to connect with
                        professionals and learn about the latest trends.
                      </p>
                      <Link
                        href="events-details"
                        className="theme-btn black-btn mt-4 line-height"
                      >
                        Read Details
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover"
                      style={{
                        backgroundImage: 'url("assets/img/blog/blog-2.jpg")',
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                        className="video-button video-popup"
                      >
                        <i className="fas fa-play" />
                        <i className="video-button-ripple" />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-calendar" />
                          Event Date
                        </span>
                        -
                        <span>
                          <i className="fal fa-map-marker-alt" />
                          Location
                        </span>
                        -
                        <span>
                          <i className="fal fa-clock" />3 min Read
                        </span>
                      </div>
                      <h3>
                        <Link href="events-details">
                          Workshop: Cloud Infrastructure Best Practices
                        </Link>
                      </h3>
                      <p>
                        Learn from experts about cloud infrastructure best
                        practices, security, and optimization strategies. This
                        hands-on workshop will provide practical insights for
                        your IT infrastructure.
                      </p>
                      <Link
                        href="events-details"
                        className="theme-btn black-btn mt-4 line-height"
                      >
                        Read Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-4 col-lg-12">
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
                        We organize technology events, workshops, and
                        conferences to bring together professionals and share
                        knowledge.
                      </p>
                      <div className="author-social-link mt-3">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-vimeo-v" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
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
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="wid-title">
                      <h3>Recent Events</h3>
                    </div>
                    <div className="popular-posts">
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/blog/pp1.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <div className="post-date">
                            <i className="fal fa-calendar" />
                            29 August, 2025
                          </div>
                          <h5>
                            <Link href="events-details">
                              Technology Summit 2025
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/blog/pp2.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <div className="post-date">
                            <i className="fal fa-calendar" />
                            15 September, 2025
                          </div>
                          <h5>
                            <Link href="events-details">
                              Cloud Infrastructure Workshop
                            </Link>
                          </h5>
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
    </ZotechLayout>
  );
};
export default page;
