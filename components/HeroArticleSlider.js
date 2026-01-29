"use client";
import { useSafeTranslations } from "@/hooks/useSafeTranslations";
import { useGetArticlesQuery } from "@/lib/api/directusApi";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
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
    <section
      className="hero-wrapper hero-1"
      style={{
        marginLeft: 0,
        marginRight: 0,
        width: "100%",
        overflow: "hidden",
        minHeight: "800px",
        position: "relative",
      }}
    >
      <div className="shape">
        <img className="shape-1" src="assets/img/world.png" alt />
      </div>
      <Swiper
        key={`hero-slider-${articlesToShow.length}`}
        loop={articlesToShow.length > 1}
        slidesPerView={1}
        effect="fade"
        speed={2000}
        allowTouchMove={true}
        simulateTouch={true}
        touchRatio={1}
        grabCursor={true}
        watchSlidesProgress={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".hero-article-slider .hero-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="swiper hero-article-slider"
      >
        {articlesToShow.map((article, index) => {
          // Get article content for this specific article FIRST
          const articleContent = getArticleContent(article);

          // Use cover_image for background, image for right side
          const coverImageUrl = getImageUrl(article.cover_image);
          const sideImageUrl = getImageUrl(article.image);
          const articleDate = formatDate(
            article.date_created || article.date_updated,
          );
          const articleId = article.id || `fallback-${index}`;
          const articleSlug = `/blogs-details?id=${articleId}`;

          return (
            <SwiperSlide
              key={`article-${articleId}-${index}`}
              className="swiper-slide"
              style={{ position: "relative" }}
              data-article-id={articleId}
            >
              <div
                className="hero-bg bg-cover hero-bg-zoom"
                style={{
                  backgroundImage: `url("${coverImageUrl}")`,
                  borderRadius: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: "800px",
                }}
              ></div>
              <div
                className="container"
                style={{ paddingTop: "100px", paddingBottom: "120px" }}
              >
                <div className="row" style={{ position: "relative" }}>
                  {/* Single backdrop for entire row */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      left: 0,
                      right: 0,
                      bottom: "20px",
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "12px",
                      zIndex: 0,
                    }}
                  />
                  <div
                    className="col-xl-5 col-lg-5 col-md-12 col-12"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      padding: "60px 30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="hero-content pe-xl-3 text-lg-start text-center"
                      key={`content-${articleId}`}
                      style={{ width: "100%" }}
                    >
                      <h1 style={{ margin: 0 }} key={`title-${articleId}`}>
                        {articleContent.title}
                      </h1>
                      {articleContent.description && (
                        <p
                          key={`desc-${articleId}`}
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            lineHeight: "1.8",
                            marginTop: "20px",
                            marginBottom: 0,
                          }}
                        >
                          {articleContent.description}
                        </p>
                      )}
                      <div className="hero-button mt-4">
                        <Link href={articleSlug} className="theme-btn">
                          {t("hero.exploreMore")}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-7 col-lg-7 col-md-12 col-12"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      padding: "60px 30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="hero-image"
                      style={{
                        width: "100%",
                        maxHeight: "500px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        key={`img-${articleId}`}
                        src={sideImageUrl}
                        alt={articleContent.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "500px",
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="hero-pagination"></div>
      </Swiper>
    </section>
  );
};

export default HeroArticleSlider;
