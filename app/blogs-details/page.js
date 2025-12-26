import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Blog Details" />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-xxl-8 col-xl-7">
                <div className="blog-post-details border-wrap mt-0">
                  <div
                    className="blog-details-image wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <img src="assets/img/blog/details-1.jpg" alt="" />
                  </div>
                  <div
                    className="single-blog-post post-details mt-0 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="post-content pt-0">
                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-calendar-alt" />
                          4th February 2025
                        </span>
                        |<span>Technology</span>
                      </div>
                      <h3 className="mt-0">
                        The whimsically named Egg Canvas brainchild{" "}
                      </h3>
                      <p>
                        he whimsically named Egg Canvas is the brainchild of
                        Erica Choi, a design director and photo Sit amet consect
                        velit integer tincidunt scelerisque volutpat neque
                        fermeny massa lacus. grapher based in York. Why the name
                        “Egg Canvas Erica was inspired by her Korean childhood
                        nickname, which means egg while “canvas” medium with wh
                        art is created. “Egg Canvas therefore, is her
                        life—creating beautiful things each day a blank canvas.
                      </p>
                      <p className="mt-4">
                        We have covered many special events such as fireworks,
                        fairs, parades, races, walks, awards ceremonies, fashion
                        shows, sporting events, and even a memorial service.
                      </p>
                      <p className="mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vulputate vestibulum rhon cus, dolor eget
                        viverra pretium, dolor tellus aliquet nunc, vitae
                        ultricies erat elit eu lacus. Vestibulum non justo fun
                        consectetur, cursus ante, tincidunt sapien. Nulla quis
                        diam sit amet turpis interd enim. Vivamus fauc ex sed
                        nibh egestas elementum. Mauris et bibendum
                      </p>
                      <div className="wp-block-quote">
                        <blockquote>
                          Your time is limited, so don’t waste it living someone
                          else’s life. Don’t be trapped by dogma – which is
                          living with the results
                        </blockquote>
                        <div className="title d-flex align-items-center justify-content-between">
                          <span>John Mehedii</span>
                          <div className="icon">
                            <i className="flaticon-quote" />
                          </div>
                        </div>
                      </div>
                      <h2 className="mt-0">
                        Let our investment management team{" "}
                      </h2>
                      <div className="row">
                        <div className="col-xl-7 col-lg-6 col-12">
                          <ul className="checked-list">
                            <li>
                              Lorem Ipsum generators on the tend to repeat.
                            </li>
                            <li>If you are going to use a passage.</li>
                            <li>
                              Lorem Ipsum generators on the tend to repeat.
                            </li>
                            <li>
                              Lorem Ipsum generators on the tend to repeat.
                            </li>
                            <li> If you are going to use a passage.</li>
                          </ul>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-12">
                          <div className="image-2 mt-3">
                            <img src="assets/img/blog/details-2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 g-4">
                        <div className="col-lg-6 col-12">
                          <div className="image-3">
                            <img src="assets/img/blog/details-3.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="image-3">
                            <img src="assets/img/blog/details-4.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p className="mt-4">
                        We have covered many special events such as fireworks,
                        fairs, parades, races, walks, awards ceremonies, fashion
                        shows, sporting events, and even a memorial
                        service.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. vestibulum rhoncus, dolor eget viverra
                        pretium, dolor ellus aliquet nunc,
                      </p>
                    </div>
                  </div>
                  <div
                    className="row tag-share-wrap wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="col-lg-8 col-12">
                      <div className="tagcloud d-flex ">
                        <h4>Tag:</h4>
                        <Link href="/blog-details">Business</Link>
                        <Link href="/blog-details">Design</Link>
                        <Link href="/blog-details">apps</Link>
                        <Link href="/blog-details">data</Link>
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
                  {/* comments section wrap start */}
                  <div
                    className="comments-section-wrap mt-5 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="comments-heading">
                      <h3>03 Comments</h3>
                    </div>
                    <ul className="comments-item-list">
                      <li className="single-comment-item">
                        <div className="author-img">
                          <img
                            src="assets/img/blog/author_img1.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="author-info-comment">
                          <div className="info">
                            <h5>
                              <a href="#">Rohan De Spond</a>
                            </h5>
                            <span>21th Feb 2025</span>
                            <a href="#" className="reply-btn">
                              <i className="fal fa-reply-all" />
                            </a>
                          </div>
                          <div className="comment-text">
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available, but the leap into electronic type
                              setting, remaining essentiallyuncha opularisedthe
                              with the release of Letrasetsheets containingth
                              leap electrtypesetting
                            </p>
                          </div>
                        </div>
                        <ul className="replay-comment ms-xxl-5 ps-xxl-5">
                          <li className="single-comment-item">
                            <div className="author-img">
                              <img
                                src="assets/img/blog/author_img2.jpg"
                                alt="img"
                              />
                            </div>
                            <div className="author-info-comment">
                              <div className="info">
                                <h5>
                                  <a href="#">Johan Ritaxon</a>
                                </h5>
                                <span>29th Jan 2021</span>
                              </div>
                              <div className="comment-text">
                                <p>
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have. There
                                  are many variations of passages
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="comment-form-wrap d-block mt-3 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <h3>Post Comment</h3>
                    <form action="#" className="comment-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="single-form-input">
                            <input type="text" placeholder="Enter your name*" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-form-input">
                            <input
                              type="email"
                              placeholder="Enter your mail*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-form-input">
                            <input
                              type="text"
                              placeholder="Enter your  number*"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="single-form-input">
                            <input type="text" placeholder="Website*" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <textarea
                              placeholder="Enter your Massage*"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Click the box and agree to our&nbsp;terms and conditions
                      </label>
                    </div>
                    <button className="theme-btn black-btn mt-4" type="submit">
                      Post A Comment
                    </button>
                  </div>
                </div>
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
                      <h5 className="mt-3">Rosalina D. Willaim</h5>
                      <p className="mt-1">Blogger/Photographer</p>
                      <p className="mt-3">
                        he whimsically named Egg Canvas is the design director
                        and photographer in New York. Why the nam
                      </p>
                      <div className="social-link mt-3">
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
                            <Link href="/blog-details">
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
                            <Link href="/blog-details">
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
                            <Link href="/blog-details">
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
                          <Link href="/news">
                            Data Visualization <span>02</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news">
                            Product Development <span>06</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news">
                            Security System <span>11</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news">
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
                      <Link href="/news">Tourist</Link>
                      <Link href="/news-details">Traveling</Link>
                      <Link href="/news-details">Cave</Link>
                      <Link href="/news-details">Sky Dive</Link>
                      <Link href="/news-details">hill Climb</Link>
                      <Link href="/news-details">Oppos</Link>
                      <Link href="/news-details">landing </Link>
                      <Link href="/news-details">Oppos</Link>
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
