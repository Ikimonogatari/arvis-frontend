import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName={"404 Page"} />
      <section className="error-section section-padding fix">
        <div className="container">
          <div className="error-content text-center">
            <img src="assets/img/404.png" alt />
            <h3 className="wow fadeInUp" data-wow-delay=".3s">
              Page Not Found
            </h3>
            <p className="text-center w-50 w-sm-100 mx-auto">
              Prior to joining, James taught at The Hebrew University, the
              Jerusalem Institute of Management, and served in my country’s
              Army. Active in civic and professional affairs, Orit Most
              recently.
            </p>
            <Link
              href="/"
              className="theme-btn black-btn mt-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
