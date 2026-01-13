"use client";

import Link from "next/link";
import { useGetArticlesQuery } from "@/lib/api/articlesApi";

const Blog = ({
  wrapperClass = "blog-wrapper blog-1 section-padding section-bg about-page-blog",
}) => {
  // Fetch articles from Directus API
  const { data, error, isLoading } = useGetArticlesQuery({
    limit: 3,
    sort: ['-date_created'], // Sort by date created descending
    fields: ['*'], // Get all fields
  });

  // Format date helper function
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Get image URL from Directus
  const getImageUrl = (image) => {
    if (!image) return 'assets/img/blog/01.jpg'; // Fallback image
    
    // If image is a string (UUID), construct Directus URL
    if (typeof image === 'string') {
      const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
      return `${baseUrl}/assets/${image}`;
    }
    
    // If image is an object with id property
    if (image.id) {
      const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
      return `${baseUrl}/assets/${image.id}`;
    }
    
    return 'assets/img/blog/01.jpg'; // Fallback
  };

  // Extract articles from Directus response
  // Directus typically returns { data: [...] } or just an array
  const articles = data?.data || data || [];

  // Loading state
  if (isLoading) {
    return (
      <section className={wrapperClass}>
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
            <div className="row">
              <div className="col-12 text-center">
                <p>Loading articles...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.error('Error fetching articles:', error);
    return (
      <section className={wrapperClass}>
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
            <div className="row">
              <div className="col-12 text-center">
                <p>Unable to load articles. Please try again later.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If no articles, show empty state or fallback
  const displayArticles = articles.length > 0 ? articles : [];

  // Animation delays
  const delays = ['200ms', '400ms', '600ms'];

  return (
    <section className={wrapperClass}>
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
          <div className="row">
            {displayArticles.length > 0 ? (
              displayArticles.map((article, index) => {
                const imageUrl = getImageUrl(article.image || article.featured_image);
                const articleDate = formatDate(article.date_created || article.date || article.created_at);
                const category = article.category || article.tags?.[0] || 'Technology';
                const excerpt = article.excerpt || article.description || article.content?.substring(0, 100) + '...' || "Accelerate innovation with world-class tech teams We'll match you to an entire remote team of incredible";
                const title = article.title || article.name || 'Article Title';
                const articleId = article.id || index;
                const articleSlug = article.slug || `blogs-details?id=${articleId}`;

                return (
                  <div
                    key={articleId}
                    className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                    data-wow-delay={delays[index] || '200ms'}
                  >
                    <div className="single-blog-item">
                      <div className="image">
                        <img src={imageUrl} alt={title} />
                        <img src={imageUrl} alt={title} />
                      </div>
                      <div className="content">
                        <ul>
                          <li>{category}</li>
                          <li>
                            {" "}
                            <i className="fas fa-circle" />
                          </li>
                          <li>{articleDate}</li>
                        </ul>
                        <h3>
                          <Link href={articleSlug}>
                            {title}
                          </Link>
                        </h3>
                        <p>{excerpt}</p>
                        <Link href={articleSlug} className="link-btn">
                          Read More <i className="far fa-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // Fallback to default content if no articles
              <>
                <div
                  className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="single-blog-item">
                    <div className="image">
                      <img src="assets/img/blog/01.jpg" alt="" />
                      <img src="assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="content">
                      <ul>
                        <li>Technology</li>
                        <li>
                          {" "}
                          <i className="fas fa-circle" />
                        </li>
                        <li>12 January, 2025</li>
                      </ul>
                      <h3>
                        <Link href="blogs-details">
                          Planning your online business goals with a specialist
                        </Link>
                      </h3>
                      <p>
                        Accelerate innovation with world-class tech teams We'll
                        match you to an entire remote team of incredible
                      </p>
                      <Link href="blogs-details" className="link-btn">
                        Read More <i className="far fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
