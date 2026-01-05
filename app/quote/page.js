"use client";
import QuoteForm from "@/components/QuoteForm";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import { useSearchParams } from "next/navigation";

const page = () => {
  const t = useSafeTranslations("quote");
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || null;

  return (
    <ZotechLayout>
      <Pagebanner pageName={t("title")} />
      {/* Quote Form Section Start */}
      <section className="quote-wrapper section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="quote-form-container">
                <QuoteForm preselectedService={preselectedService} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};

export default page;



