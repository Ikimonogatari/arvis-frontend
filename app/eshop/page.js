import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";

export default function Eshop() {
  return (
    <ZotechLayout>
      <Pagebanner pageName="E-shop" />
      
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Online Store</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Shop Our Products Online
            </h2>
          </div>
          
          <div className="row">
            <div className="col-12">
              <div className="service-content text-center">
                <p className="mb-4">
                  Our online shop will be available soon. Browse and purchase our products and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
}

