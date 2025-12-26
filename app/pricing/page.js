import Pagebanner from "@/components/Pagebanner";
import Pricing from "@/components/Pricing";
import BrandSlider from "@/components/slider/BrandSlider";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Our Pricing" />
      {/* Pricing Section Start */}
      <section className="pricing-wrapper pricing-1 style-2 section-padding pb-0">
        <div className="shape">
          <div className="light-shape" />
          <img className="shape-1" src="assets/img/world.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>PRICING PLAN</span>
            </div>
            <h2 className="split-text right">
              Pricing That Suits <br /> Your Needs
            </h2>
          </div>
          <Pricing />
        </div>
      </section>
      {/* Brand Section Start */}
      <div className="brand-wrapper brand-1 style-3 section-padding">
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
      </div>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
