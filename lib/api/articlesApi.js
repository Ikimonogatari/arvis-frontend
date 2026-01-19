import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { graphqlRequest } from "../graphqlClient";

const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

// Custom baseQuery that handles both Directus and Next.js API routes
const customBaseQuery = fetchBaseQuery({
  baseUrl: typeof window !== "undefined" ? window.location.origin : "",
});

// GraphQL query for articles - fetch all available fields
const GET_ARTICLES_QUERY = `
  query {
    article {
      id
      title
      description
      body
      date_created
      date_updated
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        type
        width
        height
      }
      related_articles {
        related_article_id {
          id
          title
          description
          body
          date_created
          date_updated
          image {
            id
            filename_download
            title
            type
          }
          cover_image {
            id
            filename_download
            title
            type
          }
        }
      }
    }
  }
`;

// GraphQL query for single article by ID - fetch all available fields
// Note: ID type should be GraphQLStringOrFloat (can be String or Number)
const GET_ARTICLE_BY_ID_QUERY = `
  query GetArticle($id: GraphQLStringOrFloat!) {
    article(filter: { id: { _eq: $id } }) {
      id
      title
      description
      body
      date_created
      date_updated
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      cover_image {
        id
        filename_download
        title
        type
        width
        height
      }
      related_articles {
        related_article_id {
          id
          title
          description
          body
          date_created
          date_updated
          image {
            id
            filename_download
            title
            type
          }
          cover_image {
            id
            filename_download
            title
            type
          }
        }
      }
    }
  }
`;

// Fallback: Get all articles and filter client-side if filter doesn't work
const GET_ALL_ARTICLES_QUERY = GET_ARTICLES_QUERY;

// GraphQL query for partners
const GET_PARTNERS_QUERY = `
  query {
    partner {
      id
      name
      description
      logo {
        id
        filename_download
        title
        type
      }
      website
      status
      sort
    }
  }
`;

// GraphQL query for products
const GET_PRODUCTS_QUERY = `
  query {
    product {
      id
      name
      title
      description
      price
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      category
      status
      sort
    }
  }
`;

// GraphQL query for single product by ID
const GET_PRODUCT_BY_ID_QUERY = `
  query GetProduct($id: GraphQLStringOrFloat!) {
    product(filter: { id: { _eq: $id } }) {
      id
      name
      title
      description
      price
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      category
      status
    }
  }
`;

// GraphQL query for projects
const GET_PROJECTS_QUERY = `
  query {
    project {
      id
      name
      title
      description
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      logo {
        id
        filename_download
        title
        type
      }
      status
      sort
    }
  }
`;

// GraphQL query for single project by ID
const GET_PROJECT_BY_ID_QUERY = `
  query GetProject($id: GraphQLStringOrFloat!) {
    project(filter: { id: { _eq: $id } }) {
      id
      name
      title
      description
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      logo {
        id
        filename_download
        title
        type
      }
      status
    }
  }
`;

// GraphQL query for services
const GET_SERVICES_QUERY = `
  query {
    service {
      id
      name
      title
      description
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      icon
      status
      sort
    }
  }
`;

// GraphQL query for single service by ID
const GET_SERVICE_BY_ID_QUERY = `
  query GetService($id: GraphQLStringOrFloat!) {
    service(filter: { id: { _eq: $id } }) {
      id
      name
      title
      description
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      icon
      status
    }
  }
`;

// GraphQL query for team members
const GET_TEAM_MEMBERS_QUERY = `
  query {
    team_members {
      id
      name
      role
      position
      bio
      email
      phone
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      social_facebook
      social_twitter
      social_linkedin
      social_instagram
      status
      sort
    }
  }
`;

// GraphQL query for single team member by ID
const GET_TEAM_MEMBER_BY_ID_QUERY = `
  query GetTeamMember($id: GraphQLStringOrFloat!) {
    team_members(filter: { id: { _eq: $id } }) {
      id
      name
      role
      position
      bio
      email
      phone
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      social_facebook
      social_twitter
      social_linkedin
      social_instagram
      status
    }
  }
`;

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: customBaseQuery,
  tagTypes: ["Articles", "Projects", "Products", "Partners", "Services", "TeamMembers"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_ARTICLES_QUERY);
          return { data: data?.article || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Articles"],
    }),
    getArticleById: builder.query({
      queryFn: async (id) => {
        try {
          if (!id) {
            return { error: { status: "CUSTOM_ERROR", error: "Article ID is required" } };
          }
          
          // Convert ID to number if it's a numeric string, otherwise keep as string
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          console.log("Fetching article with ID:", idValue, "Type:", typeof idValue);
          
          // Try the filtered query first
          try {
            console.log("Attempting filtered GraphQL query...");
            const data = await graphqlRequest(GET_ARTICLE_BY_ID_QUERY, { id: idValue });
            console.log("GraphQL response:", data);
            const article = data?.article?.[0] || null;
            if (article) {
              console.log("Article found via filter:", article);
              return { data: article };
            }
            console.log("No article found in filtered response, trying fallback...");
          } catch (filterError) {
            console.warn("Filter query failed, trying fallback:", filterError);
          }
          
          // Fallback: Get all articles and filter client-side
          console.log("Fetching all articles as fallback...");
          const allData = await graphqlRequest(GET_ALL_ARTICLES_QUERY);
          const allArticles = allData?.article || [];
          console.log("All articles:", allArticles);
          const article = allArticles.find((a) => {
            const articleId = isNaN(Number(a.id)) ? String(a.id) : Number(a.id);
            return articleId === idValue || String(articleId) === String(idValue);
          });
          
          if (!article) {
            console.error("Article not found. Available IDs:", allArticles.map(a => a.id));
            return { error: { status: "CUSTOM_ERROR", error: `Article with ID ${idValue} not found` } };
          }
          
          console.log("Article found via fallback:", article);
          return { data: article };
        } catch (error) {
          console.error("Error fetching article by ID:", error);
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Articles", id }],
    }),
    getProjects: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_PROJECTS_QUERY);
          return { data: data?.project || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Projects"],
    }),
    getProjectById: builder.query({
      queryFn: async (id) => {
        try {
          if (!id) {
            return { error: { status: "CUSTOM_ERROR", error: "Project ID is required" } };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_PROJECT_BY_ID_QUERY, { id: idValue });
          const project = data?.project?.[0] || null;
          if (!project) {
            return { error: { status: "CUSTOM_ERROR", error: "Project not found" } };
          }
          return { data: project };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Projects", id }],
    }),
    getProducts: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_PRODUCTS_QUERY);
          return { data: data?.product || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      queryFn: async (id) => {
        try {
          if (!id) {
            return { error: { status: "CUSTOM_ERROR", error: "Product ID is required" } };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_PRODUCT_BY_ID_QUERY, { id: idValue });
          const product = data?.product?.[0] || null;
          if (!product) {
            return { error: { status: "CUSTOM_ERROR", error: "Product not found" } };
          }
          return { data: product };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
    getPartners: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_PARTNERS_QUERY);
          return { data: data?.partner || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Partners"],
    }),
    getServices: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_SERVICES_QUERY);
          return { data: data?.service || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Services"],
    }),
    getServiceById: builder.query({
      queryFn: async (id) => {
        try {
          if (!id) {
            return { error: { status: "CUSTOM_ERROR", error: "Service ID is required" } };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_SERVICE_BY_ID_QUERY, { id: idValue });
          const service = data?.service?.[0] || null;
          if (!service) {
            return { error: { status: "CUSTOM_ERROR", error: "Service not found" } };
          }
          return { data: service };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Services", id }],
    }),
    getTeamMembers: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_TEAM_MEMBERS_QUERY);
          return { data: data?.team_members || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["TeamMembers"],
    }),
    getTeamMemberById: builder.query({
      queryFn: async (id) => {
        try {
          if (!id) {
            return { error: { status: "CUSTOM_ERROR", error: "Team member ID is required" } };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_TEAM_MEMBER_BY_ID_QUERY, { id: idValue });
          const teamMember = data?.team_members?.[0] || null;
          if (!teamMember) {
            return { error: { status: "CUSTOM_ERROR", error: "Team member not found" } };
          }
          return { data: teamMember };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "TeamMembers", id }],
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
  useGetPartnersQuery,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useGetTeamMembersQuery,
  useGetTeamMemberByIdQuery,
} = articlesApi;
