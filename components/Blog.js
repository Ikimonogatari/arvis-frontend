import Link from "next/link";

const Blog = ({
  wrapperClass = "blog-wrapper blog-1 section-padding section-bg about-page-blog",
}) => {
  return (
    <section className={wrapperClass}>
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
            <span>OUR BLOG</span>
          </div>
          <h2>Our Latest Insights &amp; Blog</h2>
        </div>
        <p className="text-center mt-3">
          Accelerate innovation with world-class tech teams We’ll match <br />
          you to an entire remote team of incredible
        </p>
        <div className="blog-inner ">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-blog-item">
                <div className="image">
                  <img src="assets/img/blog/01.jpg" alt="" />
                  <img src="assets/img/blog/01.jpg" alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Technology</li>
                    <li>
                      {" "}
                      <i className="fas fa-circle" />
                    </li>
                    <li>12 January, 2025</li>
                  </ul>
                  <h3>
                    <Link href="blogs-details">
                      Planning your online business goals with a specialist
                    </Link>
                  </h3>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible
                  </p>
                  <Link href="blogs-details" className="link-btn">
                    Read More <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-blog-item">
                <div className="image">
                  <img src="assets/img/blog/02.jpg" alt="" />
                  <img src="assets/img/blog/02.jpg" alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Technology</li>
                    <li>
                      {" "}
                      <i className="fas fa-circle" />
                    </li>
                    <li>12 January, 2025</li>
                  </ul>
                  <h3>
                    <Link href="blogs-details">
                      Planning your online business goals with a specialist
                    </Link>
                  </h3>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible
                  </p>
                  <Link href="blogs-details" className="link-btn">
                    Read More <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-blog-item">
                <div className="image">
                  <img src="assets/img/blog/03.jpg" alt="" />
                  <img src="assets/img/blog/03.jpg" alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Technology</li>
                    <li>
                      {" "}
                      <i className="fas fa-circle" />
                    </li>
                    <li>12 January, 2025</li>
                  </ul>
                  <h3>
                    <Link href="blogs-details">
                      Planning your online business goals with a specialist
                    </Link>
                  </h3>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible
                  </p>
                  <Link href="blogs-details" className="link-btn">
                    Read More <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
