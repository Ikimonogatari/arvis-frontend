"use client";
import Pagebanner from "@/components/Pagebanner";
import QuoteForm from "@/components/QuoteForm";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import ZotechLayout from "@/layout/ZotechLayout";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const QuoteContent = () => {
  const t = useSafeTranslations("quote");
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || null;
  const serviceId = searchParams.get("serviceId") || null;
  const serviceName = searchParams.get("serviceName") || null;

  return (
    <ZotechLayout>
      <Pagebanner pageName={t("title")} />
      {/* Quote Form Section Start */}
      <section className="quote-wrapper section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="quote-form-container">
                <QuoteForm
                  preselectedService={preselectedService}
                  serviceId={serviceId}
                  serviceName={serviceName}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};

const page = () => {
  return (
    <Suspense
      fallback={
        <ZotechLayout>
          <Pagebanner pageName="Quote" />
          <section className="quote-wrapper section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12">
                  <div className="quote-form-container">
                    <p>Loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ZotechLayout>
      }
    >
      <QuoteContent />
    </Suspense>
  );
};

export default page;
