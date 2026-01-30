"use client";

import { useGetProductsQuery } from "@/lib/api/directusApi";
import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

const resolveImageId = (value) => {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (value.id) return value.id;
  if (value.directus_files_id) return value.directus_files_id;
  return null;
};

const getImageUrl = (product) => {
  const candidates = [
    product.image,
    product.images,
    product.thumbnail,
    product.featured_image,
    product.photo,
    product.gallery,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const imageValue = Array.isArray(candidate) ? candidate[0] : candidate;
    const imageId = resolveImageId(imageValue);
    if (imageId) {
      return `${baseUrl}/assets/${imageId}`;
    }
  }

  return "assets/img/service/01.jpg";
};

const getBrandLogoUrl = (product) => {
  const logoId = resolveImageId(product.brand_logo);
  if (logoId) {
    return `${baseUrl}/assets/${logoId}`;
  }
  return null;
};

const formatPrice = (price, currency) => {
  if (price === null || price === undefined || price === "") return null;
  // If price is already a formatted string (e.g., "1,200,000"), return it with currency symbol
  if (typeof price === "string") {
    // Check if it's already formatted with commas
    if (price.includes(",")) {
      return `${currency || ""} ${price}`.trim();
    }
    // Try to parse as number
    const numPrice = parseFloat(price);
    if (!isNaN(numPrice)) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency || "USD",
        maximumFractionDigits: 2,
      }).format(numPrice);
    }
    return price;
  }
  if (typeof price === "number") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
      maximumFractionDigits: 2,
    }).format(price);
  }
  return price;
};

const normalizeText = (value) => {
  if (value === null || value === undefined) return null;
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    const first = value.find((item) => typeof item === "string");
    return first || null;
  }
  return null;
};

const getProductTitle = (product) =>
  normalizeText(
    product.title || product.name || product.product_name || product.product,
  ) || "Untitled Product";

const getProductDescription = (product) =>
  normalizeText(
    product.short_description ||
      product.description ||
      product.summary ||
      product.excerpt,
  ) || "";

const getProductCategory = (product) => {
  if (Array.isArray(product.category) && product.category.length > 0) {
    const firstCategory = product.category[0];
    if (typeof firstCategory === "object" && firstCategory !== null) {
      return (
        normalizeText(firstCategory.name) ||
        normalizeText(firstCategory.title) ||
        normalizeText(firstCategory.label)
      );
    }
  }
  // Handle category as array of numbers (from Directus relation)
  if (Array.isArray(product.category) && product.category.length > 0) {
    return `Category ${product.category[0]}`;
  }
  return normalizeText(
    product.category || product.type || product.brand || product.collection,
  );
};

const getProductPrice = (product) => {
  const price =
    product.price ??
    product.amount ??
    product.cost ??
    product.sale_price ??
    null;
  // If price is already a formatted string, return it as-is
  if (typeof price === "string" && price.includes(",")) {
    return price;
  }
  return price;
};

const ProductsGrid = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  const productList = products || [];

  // Debug: Log the response to understand the structure
  if (products && !isLoading) {
    console.log("Products API Response:", {
      productsCount: productList.length,
      products: productList,
      firstProduct: productList[0],
    });
  }

  if (error) {
    console.error("Products API Error:", error);
  }

  // Update getImageUrl for GraphQL
  const getImageUrlGraphQL = (imageData) => {
    if (!imageData || !imageData.id) return "assets/img/service/01.jpg";
    return `${baseUrl}/assets/${imageData.id}`;
  };

  if (isLoading) {
    return (
      <div className="row g-4 product-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay={`${(index % 4) * 100 + 200}ms`}
          >
            <div className="product-card">
              <div className="product-image placeholder-glow">
                <div className="placeholder w-100 h-100" />
              </div>
              <div className="product-content">
                <h4 className="product-title placeholder-glow">
                  <span className="placeholder col-8" />
                </h4>
                <p className="product-description placeholder-glow">
                  <span className="placeholder col-12" />
                  <span className="placeholder col-10" />
                </p>
                <div className="product-meta placeholder-glow">
                  <span className="placeholder col-4" />
                  <span className="placeholder col-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="row product-grid">
        <div className="col-12 text-center">
          <p>Unable to load products right now. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!productList.length) {
    return (
      <div className="row product-grid">
        <div className="col-12 text-center">
          <p>No products are available yet. Please check back soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4 product-grid">
      {productList.map((product, index) => {
        const title = product.name || product.title || "Untitled Product";
        const description = product.description || "";
        const category = product.category || "Technology";
        const productId = product.id || index;
        const imageUrl = product.image
          ? getImageUrlGraphQL(product.image)
          : "assets/img/service/01.jpg";
        return (
          <div
            key={productId}
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay={`${(index % 4) * 100 + 200}ms`}
          >
            <Link
              href={`/products-details?id=${productId}`}
              className="product-card d-block text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div className="product-image">
                {category ? (
                  <span className="product-badge">{category}</span>
                ) : null}
                <img
                  src={imageUrl}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="product-content">
                <h4 className="product-title">{title}</h4>
                {description ? (
                  <p className="product-description">{description}</p>
                ) : (
                  <p className="product-description">
                    Discover reliable hardware and solutions tailored for modern
                    infrastructure.
                  </p>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
