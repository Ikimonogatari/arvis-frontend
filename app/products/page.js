import Pagebanner from "@/components/Pagebanner";
import ProductsGrid from "@/components/ProductsGrid";
import ZotechLayout from "@/layout/ZotechLayout";

export default function Products() {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Products" />

      <section className="service-section fix section-padding">
        <div className="container">
          <ProductsGrid />
        </div>
      </section>
    </ZotechLayout>
  );
}
