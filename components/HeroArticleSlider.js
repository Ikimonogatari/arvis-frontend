"use client";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import { useGetArticlesQuery } from "@/lib/api/directusApi";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroArticleSlider = () => {
  const t = useSafeTranslations("home");
  const { data: articles, error, isLoading } = useGetArticlesQuery();

  // Get image URL from GraphQL response
  const getImageUrl = (imageData) => {
    if (!imageData) return "assets/img/hero/hero-1-1-bg.png";
    if (imageData.id) {
      return `http://217.154.145.65:8055/assets/${imageData.id}`;
    }
    return "assets/img/hero/hero-1-1-bg.png";
  };

  // Format date helper function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Get article translations (default to first available or English)
  const getArticleContent = (article) => {
    if (
      !article ||
      !article.translations ||
      article.translations.length === 0
    ) {
      return {
        title: "Article Title",
        description: "Article description goes here...",
        body: "",
      };
    }

    // Try to find English translation first, otherwise use first available
    const englishTranslation = article.translations.find(
      (t) => t.languages_code?.code === "en",
    );
    const translation = englishTranslation || article.translations[0];

    // Strip HTML tags from body if present, and limit length
    const getPlainText = (html) => {
      if (!html) return "";
      // Remove HTML tags using regex (works in both server and client)
      const text = html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ");
      return text.trim();
    };

    // Get body text - prefer body over description, show more content
    const bodyText = translation.body
      ? getPlainText(translation.body)
      : translation.description
        ? getPlainText(translation.description)
        : "";

    // Limit body text length for display
    const truncatedBody =
      bodyText.length > 400 ? bodyText.substring(0, 400) + "..." : bodyText;

    return {
      title: translation.title || "Article Title",
      description:
        translation.description ||
        translation.body?.substring(0, 150) + "..." ||
        "Article description goes here...",
      body: truncatedBody,
    };
  };

  // Prepare articles for display
  const displayArticles =
    articles && articles.length > 0
      ? articles.slice(0, 5) // Limit to 5 articles for hero
      : [];

  // Fallback article if no articles available
  const fallbackArticle = {
    id: "fallback",
    image: null,
    cover_image: null,
    date_created: new Date().toISOString(),
    translations: [
      {
        title: t("hero.title"),
        description: t("hero.subtitle"),
      },
    ],
  };

  const articlesToShow =
    displayArticles.length > 0 ? displayArticles : [fallbackArticle];

  return (
    <section className="hero-wrapper hero-1 mx-xl-5">
      <div className="shape">
        <img className="shape-1" src="assets/img/world.png" alt />
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        effect="fade"
        speed={2000}
        allowTouchMove={true}
        simulateTouch={true}
        touchRatio={1}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".hero-article-slider .array-prev",
          prevEl: ".hero-article-slider .array-next",
        }}
        pagination={{
          el: ".hero-article-slider .hero-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        className="swiper hero-article-slider"
      >
        {articlesToShow.map((article, index) => {
          const articleContent = getArticleContent(article);
          const coverImage = article.cover_image || article.image;
          const imageUrl = getImageUrl(coverImage);
          const articleDate = formatDate(
            article.date_created || article.date_updated,
          );
          const articleId = article.id || index;
          const articleSlug = `/blogs-details?id=${articleId}`;

          return (
            <SwiperSlide key={articleId} className="swiper-slide">
              <div
                className="hero-bg bg-cover"
                style={{
                  backgroundImage: `url("${imageUrl}")`,
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                    <div className="hero-content pe-xl-3 text-lg-start text-center">
                      {articleDate && (
                        <span
                          className="article-date"
                          style={{
                            color: "rgba(255, 255, 255, 0.9)",
                            fontSize: "14px",
                            display: "block",
                            marginBottom: "10px",
                            fontWeight: "500",
                          }}
                        >
                          {articleDate}
                        </span>
                      )}
                      {/* Title with backdrop */}
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "8px",
                            padding: "15px 20px",
                            margin: "-15px -20px",
                            zIndex: -1,
                          }}
                        />
                        <h1
                          style={{ position: "relative", zIndex: 1, margin: 0 }}
                        >
                          {articleContent.title}
                        </h1>
                      </div>
                      {/* Description/Body with backdrop */}
                      {(articleContent.body || articleContent.description) && (
                        <div
                          style={{
                            position: "relative",
                            display: "inline-block",
                            width: "100%",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "rgba(0, 0, 0, 0.5)",
                              borderRadius: "8px",
                              padding: "15px 20px",
                              margin: "-15px -20px",
                              zIndex: -1,
                            }}
                          />
                          <div style={{ position: "relative", zIndex: 1 }}>
                            {articleContent.body ? (
                              <p
                                style={{
                                  color: "#fff",
                                  fontSize: "18px",
                                  lineHeight: "1.8",
                                  margin: 0,
                                }}
                              >
                                {articleContent.body}
                              </p>
                            ) : (
                              <p
                                style={{
                                  color: "#fff",
                                  fontSize: "18px",
                                  lineHeight: "1.8",
                                  margin: 0,
                                }}
                              >
                                {articleContent.description}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                      <div className="hero-button mt-4">
                        <Link href={articleSlug} className="theme-btn">
                          {t("hero.exploreMore")}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-12 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="hero-image">
                      <img
                        src={imageUrl}
                        alt={articleContent.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="array-button">
          <button className="array-next" aria-label="Previous article">
            <i className="fas fa-long-arrow-left" />
          </button>
          <button className="array-prev" aria-label="Next article">
            <i className="fas fa-long-arrow-right" />
          </button>
        </div>
        <div className="hero-pagination"></div>
      </Swiper>
    </section>
  );
};

export default HeroArticleSlider;
