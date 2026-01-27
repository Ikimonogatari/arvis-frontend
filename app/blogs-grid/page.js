"use client";

import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { useGetArticlesQuery } from "@/lib/api/directusApi";

const page = () => {
  const { data: articles, error, isLoading } = useGetArticlesQuery();

  // Helper function to get image URL from GraphQL response
  const getImageUrl = (imageData) => {
    if (!imageData) {
      console.log("No imageData provided");
      return "assets/img/blog/01.jpg"; // Fallback image
    }
    if (!imageData.id) {
      console.log("ImageData exists but no id:", imageData);
      return "assets/img/blog/01.jpg"; // Fallback image
    }
    const imageUrl = `http://217.154.145.65:8055/assets/${imageData.id}`;
    console.log("Image data:", imageData);
    console.log("Constructed image URL:", imageUrl);
    return imageUrl;
  };

  return (
    <ZotechLayout>
      <Pagebanner pageName="Blog Grid" />
      <section className="blog-wrapper blog-1 blog-page section-padding section-bg">
        <div className="shape">
          <img
            className="shape-1"
            src="assets/img/shape/shape-5-black.png"
            alt=""
          />
          <img className="shape-2" src="assets/img/shape/shape-1.png" alt="" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR BLOG</span>
            </div>
            <h2>Our Latest Insights &amp; Blog</h2>
          </div>
          <p className="text-center mt-3">
            Accelerate innovation with world-class tech teams We'll match <br />
            you to an entire remote team of incredible
          </p>
          <div className="blog-inner">
            {isLoading ? (
              <div className="text-center py-5">
                <p>Loading articles...</p>
              </div>
            ) : error ? (
              <div className="text-center py-5">
                <p>Error loading articles. Please try again later.</p>
              </div>
            ) : (
              <div className="row">
                {articles && articles.length > 0 ? (
                  articles.map((article, index) => {
                    const delay = `${(index % 3 + 1) * 200}ms`;
                    const description = article.description || "";
                    const truncatedDescription = description.length > 100 
                      ? description.substring(0, 100) + "..." 
                      : description;
                    
                    // Use image field for list pages
                    const imageToUse = article.image;
                    const imageUrl = getImageUrl(imageToUse);
                    
                    // Debug for first article
                    if (index === 0 && typeof window !== "undefined") {
                      console.log("=== Article Image Debug ===");
                      console.log("Article:", article);
                      console.log("cover_image:", article.cover_image);
                      console.log("image:", article.image);
                      console.log("imageToUse:", imageToUse);
                      console.log("Final imageUrl:", imageUrl);
                    }

                    return (
                      <div
                        key={article.id}
                        className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                        data-wow-delay={delay}
                      >
                        <div className="single-blog-item">
                          <div className="image">
                            <img 
                              src={imageUrl} 
                              alt={article.title}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                              onError={(e) => {
                                console.error("Image failed to load:", imageUrl);
                                e.target.src = "assets/img/blog/01.jpg";
                              }}
                            />
                            <img 
                              src={imageUrl} 
                              alt={article.title}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                              onError={(e) => {
                                e.target.src = "assets/img/blog/01.jpg";
                              }}
                            />
                          </div>
                          <div className="content">
                            <ul>
                              <li>Technology</li>
                              <li>
                                {" "}
                                <i className="fas fa-circle" />
                              </li>
                              <li>Latest</li>
                            </ul>
                            <h3>
                              <Link href={`/blogs-details?id=${article.id}`}>
                                {article.title}
                              </Link>
                            </h3>
                            <p>{truncatedDescription || "Read more about this article..."}</p>
                            <Link href={`/blogs-details?id=${article.id}`} className="link-btn">
                              Read More <i className="far fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-12 text-center py-5">
                    <p>No articles found.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
