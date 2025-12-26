import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Blog and News" />
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
                          <i className="fal fa-user" />
                          Mehedii .Ha
                        </span>
                        -
                        <span>
                          <i className="fal fa-comments" />
                          Coments (03)
                        </span>
                        -
                        <span>
                          <i className="fal fa-clock" />3 min Read
                        </span>
                      </div>
                      <h3>
                        <Link href="blogs-details">
                          The whimsically named Egg Canvas brainchesiko
                        </Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="blogs-details"
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
                          <i className="fal fa-user" />
                          Mehedii .Ha
                        </span>
                        -
                        <span>
                          <i className="fal fa-comments" />
                          Coments (03)
                        </span>
                        -
                        <span>
                          <i className="fal fa-clock" />3 min Read
                        </span>
                      </div>
                      <h3>
                        <Link href="blogs-details">
                          The whimsically named Egg Canvas brainchesiko
                        </Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="blogs-details"
                        className="theme-btn black-btn mt-4 line-height"
                      >
                        Read Details
                      </Link>
                    </div>
                  </div>
                  <div className="single-blog-post">
                    <div className="swiper blog-post-slider">
                      <div className="swiper-wrapper ">
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/blog/blog-3.jpg")',
                            }}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/blog/blog-3.jpg")',
                            }}
                          ></div>
                        </div>
                        <div className="swiper-slide">
                          <div
                            className="post-featured-thumb bg-cover"
                            style={{
                              backgroundImage:
                                'url("assets/img/blog/blog-3.jpg")',
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="array-button">
                        <button className="array-prev">
                          <i className="fal fa-long-arrow-left" />
                        </button>
                        <button className="array-next">
                          <i className="fal fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <i className="fal fa-user" />
                          Mehedii .Ha
                        </span>
                        -
                        <span>
                          <i className="fal fa-comments" />
                          Coments (03)
                        </span>
                        -
                        <span>
                          <i className="fal fa-clock" />3 min Read
                        </span>
                      </div>
                      <h3>
                        <Link href="blogs-details">
                          The whimsically named Egg Canvas brainchesiko
                        </Link>
                      </h3>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered teration in some
                        form, by injected humour, or randomised words which
                        don't look even slight believable. If you are going to
                        use a passage of Lorem Ipsum.
                      </p>
                      <Link
                        href="blogs-details"
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
                      <h5 className="mt-3">Rosalina D. Willaim</h5>
                      <p className="mt-1">Blogger/Photographer</p>
                      <p className="mt-3">
                        he whimsically named Egg Canvas is the design director
                        and photographer in New York. Why the nam
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
                      <h3>Recent News</h3>
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
                            <Link href="blogs-details">
                              Smart About Packaging, Product Design
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
                            29 August, 2025
                          </div>
                          <h5>
                            <Link href="blogs-details">
                              Drivers Deliver Much More Than Products
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="single-post-item">
                        <div
                          className="thumb bg-cover"
                          style={{
                            backgroundImage: 'url("assets/img/blog/pp3.jpg")',
                          }}
                        />
                        <div className="post-content">
                          <div className="post-date">
                            <i className="fal fa-calendar" />
                            29 August, 2025
                          </div>
                          <h5>
                            <Link href="blogs-details">
                              Tips to Lowering Freight Shipping Costs
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        <li>
                          <Link href="news">
                            Data Visualization <span>02</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Product Development <span>06</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            Security System <span>11</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="news">
                            UI/UX Designing <span>05</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud-2">
                      <Link href="news">Tourist</Link>
                      <Link href="news-details">Traveling</Link>
                      <Link href="news-details">Cave</Link>
                      <Link href="news-details">Sky Dive</Link>
                      <Link href="news-details">hill Climb</Link>
                      <Link href="news-details">Oppos</Link>
                      <Link href="news-details">landing </Link>
                      <Link href="news-details">Oppos</Link>
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
