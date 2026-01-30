"use client";

import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetProductByIdQuery } from "@/lib/api/directusApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

const getImageUrl = (imageData) => {
  if (!imageData || !imageData.id) return "assets/img/service/01.jpg";
  return `${directusUrl}/assets/${imageData.id}`;
};

const getProductContent = (product) => {
  if (!product?.translations?.length) {
    return {
      name: product?.name || "Product",
      description: product?.description || "",
      body: "",
    };
  }
  const en = product.translations.find((t) => t.languages_code?.code === "en");
  const t = en || product.translations[0];
  return {
    name: t.name || product.name || "Product",
    description: t.description || product.description || "",
    body: t.body || "",
  };
};

const stripHtml = (html) => {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, " ")
    .trim();
};

const ProductDetailsContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(id, {
    skip: !id,
  });

  if (isLoading) {
    return (
      <ZotechLayout>
        <Pagebanner pageName="Product Details" />
        <section className="blog-wrapper section-padding">
          <div className="container">
            <div className="text-center py-5">
              <p>Loading product...</p>
            </div>
          </div>
        </section>
      </ZotechLayout>
    );
  }

  if (error || !product) {
    return (
      <ZotechLayout>
        <Pagebanner pageName="Product Details" />
        <section className="blog-wrapper section-padding">
          <div className="container">
            <div className="text-center py-5">
              <p>Product not found. Please try again later.</p>
              <Link href="/products" className="theme-btn mt-3">
                Back to Products
              </Link>
            </div>
          </div>
        </section>
      </ZotechLayout>
    );
  }

  const content = getProductContent(product);
  const coverImage = product.cover_image || product.image;
  const coverImageUrl = getImageUrl(coverImage);
  const bodyText = content.body ? stripHtml(content.body) : "";
  const bodyParagraphs = bodyText ? bodyText.split("\n").filter(Boolean) : [];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: content.name },
  ];

  return (
    <ZotechLayout>
      <Pagebanner pageName={content.name} breadcrumbs={breadcrumbs} />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-xxl-8 col-xl-7">
                <div className="blog-post-details border-wrap mt-0">
                  <div
                    className="blog-details-image wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <img
                      src={coverImageUrl}
                      alt={content.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    className="single-blog-post post-details mt-0 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="post-content pt-0">
                      <h3 className="mt-0">{content.name}</h3>
                      {content.description && (
                        <p className="mt-3 mb-0">{content.description}</p>
                      )}
                      {bodyParagraphs.length > 0 && (
                        <div className="mt-4">
                          {bodyParagraphs.map((paragraph, index) => (
                            <p key={index} className={index > 0 ? "mt-3" : ""}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                      {content.body && !bodyText && (
                        <div
                          className="mt-4 product-body-html"
                          dangerouslySetInnerHTML={{ __html: content.body }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};

export default function ProductDetailsPage() {
  return (
    <Suspense
      fallback={
        <ZotechLayout>
          <Pagebanner pageName="Product Details" />
          <section className="blog-wrapper section-padding">
            <div className="container">
              <div className="text-center py-5">
                <p>Loading...</p>
              </div>
            </div>
          </section>
        </ZotechLayout>
      }
    >
      <ProductDetailsContent />
    </Suspense>
  );
}
