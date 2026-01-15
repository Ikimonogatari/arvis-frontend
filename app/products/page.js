import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";

export default function Products() {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Products" />
      
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Products</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Quality Products & Solutions
            </h2>
          </div>
          
          <div className="row">
            <div className="col-12">
              <div className="service-content text-center">
                <p className="mb-4">
                  This page will showcase our products and solutions. Content coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
}

