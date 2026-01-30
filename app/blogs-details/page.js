"use client";

import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import { useGetArticleByIdQuery } from "@/lib/api/directusApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const BlogDetailsContent = () => {
  const searchParams = useSearchParams();
  const articleId = searchParams.get("id");

  // Ensure we always have an ID, default to "1" if not provided
  const idToFetch = articleId || "1";

  const {
    data: article,
    error,
    isLoading,
  } = useGetArticleByIdQuery(idToFetch, {
    skip: !idToFetch, // Skip if no ID
  });

  const directusUrl =
    process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

  // Helper function to get image URL from GraphQL response
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.id) {
      return "assets/img/blog/details-1.jpg"; // Fallback image
    }
    return `${directusUrl}/assets/${imageData.id}`;
  };

  // Debug logging
  if (typeof window !== "undefined") {
    console.log("Article ID from URL:", articleId);
    console.log("ID to fetch:", idToFetch);
    console.log("Article data:", article);
    console.log("Error:", error);
    console.log("Is loading:", isLoading);
  }

  // Extract related articles
  const relatedArticles =
    article?.related_articles
      ?.map((rel) => rel.related_article_id)
      .filter(Boolean) || [];

  // Get cover image URL (use cover_image first, then image, then fallback)
  const coverImageUrl = getImageUrl(article?.cover_image || article?.image);

  const pageTitle = article ? article.title || "Blog Details" : "Blog Details";
  const breadcrumbs = article
    ? [
        { label: "Home", href: "/" },
        { label: "Blog Grid", href: "/blogs-grid" },
        { label: article.title || "Blog Details" },
      ]
    : undefined;

  return (
    <ZotechLayout>
      <Pagebanner pageName={pageTitle} breadcrumbs={breadcrumbs} />
      <section className="blog-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-xxl-8 col-xl-7">
                {isLoading ? (
                  <div className="text-center py-5">
                    <p>Loading article...</p>
                  </div>
                ) : error || !article ? (
                  <div className="text-center py-5">
                    <p>Article not found. Please try again later.</p>
                  </div>
                ) : (
                  <>
                    <div className="blog-post-details border-wrap mt-0">
                      <div
                        className="blog-details-image wow fadeInUp"
                        data-wow-delay="100ms"
                      >
                        <img src={coverImageUrl} alt={article.title} />
                      </div>
                      <div
                        className="single-blog-post post-details mt-0 wow fadeInUp"
                        data-wow-delay="200ms"
                      >
                        <div className="post-content pt-0">
                          <div className="post-meta mt-3">
                            <span>
                              <i className="fal fa-calendar-alt" />
                              Latest
                            </span>
                            |<span>Technology</span>
                          </div>
                          <h3 className="mt-0">{article.title}</h3>
                          {article.body && (
                            <div className="mt-4">
                              {article.body
                                .split("\n")
                                .map((paragraph, index) => (
                                  <p
                                    key={index}
                                    className={index > 0 ? "mt-4" : ""}
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                            </div>
                          )}
                          {!article.body && article.description && (
                            <div className="mt-4">
                              {article.description
                                .split("\n")
                                .map((paragraph, index) => (
                                  <p
                                    key={index}
                                    className={index > 0 ? "mt-4" : ""}
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        className="row tag-share-wrap wow fadeInUp"
                        data-wow-delay="300ms"
                      >
                        <div className="col-lg-8 col-12">
                          <div className="tagcloud d-flex ">
                            <h4>Tag:</h4>
                            <Link href="/blog-details">Business</Link>
                            <Link href="/blog-details">Design</Link>
                            <Link href="/blog-details">Technology</Link>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12 mt-3 mt-lg-0">
                          <div className="social-share d-flex align-items-center">
                            <h4>Share:</h4>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Related Articles Section */}
                    {relatedArticles.length > 0 && (
                      <div
                        className="related-articles mt-5 wow fadeInUp"
                        data-wow-delay="400ms"
                      >
                        <h3 className="mb-4">Related Articles</h3>
                        <div className="row">
                          {relatedArticles.map((relatedArticle) => {
                            const relatedImageUrl = getImageUrl(
                              relatedArticle.cover_image ||
                                relatedArticle.image,
                            );
                            return (
                              <div
                                key={relatedArticle.id}
                                className="col-lg-6 col-md-6 col-12 mb-4"
                              >
                                <div className="single-blog-item">
                                  {relatedImageUrl && (
                                    <div className="image">
                                      <img
                                        src={relatedImageUrl}
                                        alt={relatedArticle.title}
                                      />
                                    </div>
                                  )}
                                  <div className="content">
                                    <h4>
                                      <Link
                                        href={`/blogs-details?id=${relatedArticle.id}`}
                                      >
                                        {relatedArticle.title}
                                      </Link>
                                    </h4>
                                    {relatedArticle.description && (
                                      <p>
                                        {relatedArticle.description.length > 150
                                          ? relatedArticle.description.substring(
                                              0,
                                              150,
                                            ) + "..."
                                          : relatedArticle.description}
                                      </p>
                                    )}
                                    <Link
                                      href={`/blogs-details?id=${relatedArticle.id}`}
                                      className="link-btn"
                                    >
                                      Read More{" "}
                                      <i className="far fa-long-arrow-right" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="col-12 col-xxl-4 col-xl-5">
                <div className="main-sidebar">
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="blog-author-info text-center">
                      <div className="image">
                        <img src="assets/img/blog/pp4.jpg" alt="" />
                      </div>
                      <h5 className="mt-3">Arvis Systems</h5>
                      <p className="mt-1">IT Solutions Provider</p>
                      <p className="mt-3">
                        Professional IT infrastructure solutions for data
                        centers, power protection, cooling, networking, and
                        security.
                      </p>
                      <div className="social-link mt-3">
                        <a
                          href="https://www.facebook.com/Arvis.Systems"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://x.com/ArvisSystems"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="wid-title">
                      <h3>Search here</h3>
                    </div>
                    <div className="search_widget">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
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

const page = () => {
  return (
    <Suspense
      fallback={
        <ZotechLayout>
          <Pagebanner pageName="Blog Details" />
          <section className="blog-details-section fix section-padding">
            <div className="container">
              <p>Loading...</p>
            </div>
          </section>
        </ZotechLayout>
      }
    >
      <BlogDetailsContent />
    </Suspense>
  );
};

export default page;
