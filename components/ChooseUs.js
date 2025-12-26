const ChooseUs = ({
  wrapperclass = "choose-us-wrapper choose-us-3 section-padding",
}) => {
  return (
    <section className={wrapperclass}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xl-6 col-lg-12 col-md-12 mt-xl-4 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="sub-title">
                  <span>WHY CHOOSE US</span>
                </div>
                <h2 className="split-text right">
                  We provide truly <br /> prominent IT solutions <br /> for your
                  success
                </h2>
              </div>
              <p className="mt-4">
                Zotech is the partner of choice for many of the world’s <br />{" "}
                leading enterprises,
              </p>
              <div className="reviews d-flex mt-4 pt-3">
                <div className="infu">
                  <img src="assets/img/why-choose/04.png" alt />
                  <h4>
                    Join our 50503+ <br /> Satisfied World Clients
                  </h4>
                </div>
                <div className="infu">
                  <div className="head d-flex align-items-center">
                    <div className="icon">
                      <i className="flaticon-world" />
                    </div>
                    <h4>Global Company</h4>
                  </div>
                  <p>
                    Our great team of more than to <br /> 1400 software experts
                    member.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="choose-us-images">
              <img className="shape-1" src="assets/img/world.png" alt />
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div className="single-choose-item active bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-graphic" />
                    </div>
                    <h4>Our Mission</h4>
                    <div className="single-choose-hover active bg-cover">
                      <div className="icon">
                        <i className="flaticon-graphic" />
                      </div>
                      <h4>Our Mission</h4>
                      <p>
                        Back up your database, store in a safe and secure place
                        while still maintaining.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 ">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-view" />
                    </div>
                    <h4>Our Vision</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-view" />
                      </div>
                      <h4>Our Vision</h4>
                      <p>
                        Back up your database, store in a safe and secure place
                        while still maintaining.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-rocket" />
                    </div>
                    <h4>Our Strategy</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-rocket" />
                      </div>
                      <h4>Our Strategy</h4>
                      <p>
                        Back up your database, store in a safe and secure place
                        while still maintaining.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="single-choose-item bg-cover mt-4 mt-xl-0">
                    <div className="shape">
                      <img
                        className="shape-2"
                        src="assets/img/shape/shape-10.png"
                        alt
                      />
                      <img
                        className="shape-3"
                        src="assets/img/shape/shape-11.png"
                        alt
                      />
                    </div>
                    <div className="icon">
                      <i className="flaticon-wallet" />
                    </div>
                    <h4>Our Philosophy</h4>
                    <div className="single-choose-hover bg-cover">
                      <div className="icon">
                        <i className="flaticon-wallet" />
                      </div>
                      <h4>Our Philosophy</h4>
                      <p>
                        Back up your database, store in a safe and secure place
                        while still maintaining.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;
