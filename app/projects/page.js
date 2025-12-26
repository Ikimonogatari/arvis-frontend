import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout cta={false}>
      <Pagebanner pageName="Our Projects" />
      <CaseStudy wrapperClass="case-study-wrapper case-study-2 section-padding" />
      <CTA wrapperClass="cta-wrapper cta-2 style-3 section-padding pb-0" />
    </ZotechLayout>
  );
};
export default page;
