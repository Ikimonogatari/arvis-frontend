import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

// Custom baseQuery that handles both Directus and Next.js API routes
const customBaseQuery = fetchBaseQuery({
  baseUrl: typeof window !== "undefined" ? window.location.origin : "",
});

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Articles", "Projects", "Products"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (params = {}) => {
        // Build query string for Directus
        const queryParams = new URLSearchParams();

        // Add common Directus query parameters
        if (params.limit) queryParams.append("limit", params.limit);
        if (params.offset) queryParams.append("offset", params.offset);

        // Handle sort parameter - Directus accepts comma-separated string or array
        if (params.sort) {
          if (Array.isArray(params.sort)) {
            queryParams.append("sort", params.sort.join(","));
          } else {
            queryParams.append("sort", params.sort);
          }
        }

        // Handle fields parameter
        if (params.fields) {
          if (Array.isArray(params.fields)) {
            queryParams.append("fields", params.fields.join(","));
          } else {
            queryParams.append("fields", params.fields);
          }
        }

        // Handle filter parameter
        if (params.filter) {
          // Directus filter format: filter[field][_eq]=value
          Object.keys(params.filter).forEach((key) => {
            queryParams.append(`filter[${key}][_eq]`, params.filter[key]);
          });
        }

        const queryString = queryParams.toString();
        return {
          url: `${baseUrl}/items/Articles${
            queryString ? `?${queryString}` : ""
          }`,
          method: "GET",
        };
      },
      providesTags: ["Articles"],
    }),
    getArticleById: builder.query({
      query: (id) => `${baseUrl}/items/Articles/${id}`,
      providesTags: (result, error, id) => [{ type: "Articles", id }],
    }),
    getProjects: builder.query({
      query: (params = {}) => {
        // Build query string for Directus
        const queryParams = new URLSearchParams();

        // Add common Directus query parameters
        if (params.limit) queryParams.append("limit", params.limit);
        if (params.offset) queryParams.append("offset", params.offset);

        // Handle sort parameter - Directus accepts comma-separated string or array
        if (params.sort) {
          if (Array.isArray(params.sort)) {
            queryParams.append("sort", params.sort.join(","));
          } else {
            queryParams.append("sort", params.sort);
          }
        }

        // Handle fields parameter
        if (params.fields) {
          if (Array.isArray(params.fields)) {
            queryParams.append("fields", params.fields.join(","));
          } else {
            queryParams.append("fields", params.fields);
          }
        }

        // Handle filter parameter
        if (params.filter) {
          // Directus filter format: filter[field][_operator]=value
          Object.keys(params.filter).forEach((key) => {
            const filterValue = params.filter[key];
            if (typeof filterValue === "object") {
              // Handle nested filters like { status: { _neq: 'archived' } }
              Object.keys(filterValue).forEach((operator) => {
                queryParams.append(
                  `filter[${key}][${operator}]`,
                  filterValue[operator]
                );
              });
            } else {
              // Simple equality filter
              queryParams.append(`filter[${key}][_eq]`, filterValue);
            }
          });
        }

        const queryString = queryParams.toString();
        return {
          url: `${baseUrl}/items/Projects${
            queryString ? `?${queryString}` : ""
          }`,
          method: "GET",
        };
      },
      providesTags: ["Projects"],
    }),
    getProducts: builder.query({
      query: (params = {}) => {
        // Build query string for Directus
        const queryParams = new URLSearchParams();

        // Add common Directus query parameters
        if (params.limit) queryParams.append("limit", params.limit);
        if (params.offset) queryParams.append("offset", params.offset);

        // Handle sort parameter - Directus accepts comma-separated string or array
        if (params.sort) {
          if (Array.isArray(params.sort)) {
            queryParams.append("sort", params.sort.join(","));
          } else {
            queryParams.append("sort", params.sort);
          }
        }

        // Handle fields parameter
        if (params.fields) {
          if (Array.isArray(params.fields)) {
            queryParams.append("fields", params.fields.join(","));
          } else {
            queryParams.append("fields", params.fields);
          }
        }

        // Handle filter parameter
        if (params.filter) {
          // Directus filter format: filter[field][_operator]=value
          Object.keys(params.filter).forEach((key) => {
            const filterValue = params.filter[key];
            if (typeof filterValue === "object") {
              // Handle nested filters like { status: { _neq: 'archived' } }
              Object.keys(filterValue).forEach((operator) => {
                queryParams.append(
                  `filter[${key}][${operator}]`,
                  filterValue[operator]
                );
              });
            } else {
              // Simple equality filter
              queryParams.append(`filter[${key}][_eq]`, filterValue);
            }
          });
        }

        const queryString = queryParams.toString();
        // Use Next.js API route to avoid CORS issues
        return {
          url: `/api/products${queryString ? `?${queryString}` : ""}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),
    getProjectById: builder.query({
      query: (id) => `${baseUrl}/items/Projects/${id}`,
      providesTags: (result, error, id) => [{ type: "Projects", id }],
    }),
    getProductById: builder.query({
      query: (id) => `/api/products/${id}`,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleByIdQuery,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
} = articlesApi;
