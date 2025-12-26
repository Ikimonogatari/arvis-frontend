import Contact from "@/components/Contact";
import Pagebanner from "@/components/Pagebanner";
import { Home2Accordion } from "@/components/ZotechAccordion";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="FAQ’s Page" />
      {/* FAQ Section Start */}
      <section className="faq-wrapper faq-1 style-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>CONTACT US</span>
            </div>
            <h2>
              Frequently Asked <br /> Questions About Us
            </h2>
          </div>
          <div className="row g-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="faq-content me-xl-4 mt-xl-5">
                <div className="faq-accordion mt-4 mt-md-0 ">
                  <Home2Accordion />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="faq-content ms-xl-4 mt-xl-5">
                <div className="faq-accordion mt-4 mt-md-0 ">
                  <Home2Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <Contact />
    </ZotechLayout>
  );
};
export default page;
