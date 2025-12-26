import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import ChooseUs from "@/components/ChooseUs";
import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import BrandSlider from "@/components/slider/BrandSlider";
import TextSlider, { TextSlider2 } from "@/components/slider/TextSlider";
import { TeamMember2 } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="About Company" />
      <AboutMe />
      <div className="marquee-section section-padding pt-4">
        <div className="marque-wrapper">
          <TextSlider />
        </div>
        <div className="marque-wrapper style-2 mt-3 ">
          <TextSlider2 />
        </div>
      </div>
      {/* Team Section Start */}
      <TeamMember2 />
      {/* Choose-us Section Start */}
      <ChooseUs wrapperclass="choose-us-wrapper choose-us-3 section-padding section-bg choose-us-page" />
      {/* Video Section Start */}
      <section className="video-wrapper video-1 style-2 video-page">
        <div className="container">
          <div
            className="video-image bg-cover wow fadeInUp"
            data-wow-delay="300ms"
            style={{ backgroundImage: "url(assets/img/video-02.jpg)" }}
          >
            <a
              href="https://www.youtube.com/watch?v=h9MbznbxlLc"
              className="video-button video-popup"
            >
              <i className="fas fa-play" />
              <i className="video-button-ripple" />
            </a>
          </div>
        </div>
      </section>
      {/* Pricing Section Start */}
      <section className="pricing-wrapper pricing-1 style-2 section-padding pb-0">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>PRICING PLAN</span>
            </div>
            <h2>
              Pricing That Suits <br /> Your Needs
            </h2>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Brand Section Start */}
      <section className="brand-wrapper brand-1 style-3 section-padding">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-20.png" alt="" />
        </div>
        <div className="container">
          <div className="brand-inner">
            <p className="text-center mb-5 title">
              Trusted by&nbsp;3450+&nbsp;happy customers from the whole world
            </p>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/* Blog Section Start */}
      <Blog />
    </ZotechLayout>
  );
};
export default page;
