import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { graphqlRequest } from "../graphqlClient";

const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";

const customBaseQuery = fetchBaseQuery({
  baseUrl: typeof window !== "undefined" ? window.location.origin : "",
});

// GraphQL query for articles
const GET_ARTICLES_QUERY = `
  query {
    article {
      id
      status
      sort
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
          date_created
          image {
            id
            filename_download
            title
            type
          }
          translations {
            languages_code { code }
            title
            description
            body
          }
        }
      }
      translations {
        languages_code {
          code
        }
        title
        description
        body
      }
    }
  }
`;

// GraphQL query for single article by ID
const GET_ARTICLE_BY_ID_QUERY = `
  query GetArticle($id: GraphQLStringOrFloat!) {
    article(filter: { id: { _eq: $id } }) {
      id
      status
      sort
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
          date_created
          image {
            id
            filename_download
            title
            type
          }
          translations {
            languages_code { code }
            title
            description
            body
          }
        }
      }
      translations {
          languages_code {
            code
          }
          title
          description
          body
      }
    }
  }
`;

const GET_ALL_ARTICLES_QUERY = GET_ARTICLES_QUERY;

// GraphQL query for events
const GET_EVENTS_QUERY = `
  query {
    event {
      id
      status
      sort
      date_created
      date_updated
      event_date
      location
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
      related_events {
        related_event_id {
          id
          date_created
          event_date
          image {
            id
            filename_download
            title
            type
          }
          translations {
            languages_code { code }
            title
            description
            body
          }
        }
      }
      translations {
        languages_code {
          code
        }
        title
        description
        body
      }
    }
  }
`;

// GraphQL query for single event by ID
const GET_EVENT_BY_ID_QUERY = `
  query GetEvent($id: GraphQLStringOrFloat!) {
    event(filter: { id: { _eq: $id } }) {
      id
      status
      sort
      date_created
      date_updated
      event_date
      location
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
      related_events {
        related_event_id {
          id
          date_created
          event_date
          image {
            id
            filename_download
            title
            type
          }
          translations {
            languages_code { code }
            title
            description
            body
          }
        }
      }
      translations {
        languages_code {
          code
        }
        title
        description
        body
      }
    }
  }
`;

const GET_ALL_EVENTS_QUERY = GET_EVENTS_QUERY;

// GraphQL query for partners
const GET_PARTNERS_QUERY = `
  query {
    partner {
      id
      status
      sort
      partnership_startdate
      logo {
        id
        filename_download
        title
        type
      }
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      translations {
          languages_code {
            code
          }
          name
          description
      }
    }
  }
`;

// GraphQL query for products
const GET_PRODUCTS_QUERY = `
  query {
    product {
      id
      status
      sort
      price
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      brand_logo {
          id
          filename_download
          title
          type
      }
      catalog {
          id
          filename_download
          title
          type
      }
      link
      category {
        product_category_id {
            id
            name
        }
      }
      translations {
          languages_code {
            code
          }
          name
          description
      }
    }
  }
`;

// GraphQL query for single product by ID
const GET_PRODUCT_BY_ID_QUERY = `
  query GetProduct($id: GraphQLStringOrFloat!) {
    product(filter: { id: { _eq: $id } }) {
      id
      status
      sort
      price
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      brand_logo {
          id
          filename_download
          title
          type
      }
      catalog {
          id
          filename_download
          title
          type
      }
      link
      category {
        product_category_id {
            id
            name
        }
      }
      translations {
          languages_code {
            code
          }
          name
          description
      }
    }
  }
`;

// GraphQL query for product categories
const GET_PRODUCT_CATEGORIES_QUERY = `
  query {
    product_category {
      id
      status
      sort
      name
      slug
    }
  }
`;

// GraphQL query for projects
const GET_PROJECTS_QUERY = `
  query {
    project {
      id
      status
      sort
      date_started
      date_ended
      category {
          id
          name
      }
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
      translations {
          languages_code {
            code
          }
          name
          description
          body
      }
    }
  }
`;

// GraphQL query for single project by ID
const GET_PROJECT_BY_ID_QUERY = `
  query GetProject($id: GraphQLStringOrFloat!) {
    project(filter: { id: { _eq: $id } }) {
      id
      status
      sort
      date_started
      date_ended
      category {
          id
          name
      }
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
      translations {
          languages_code {
            code
          }
          name
          description
          body
      }
    }
  }
`;

// GraphQL query for project categories
const GET_PROJECT_CATEGORIES_QUERY = `
    query {
        project_category {
            id
            status
            sort
            name
            slug
        }
    }
`;

// GraphQL query for services
const GET_SERVICES_QUERY = `
  query {
    service {
      id
      status
      sort
      slug {
        id
      }
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      translations {
          languages_code {
            code
          }
          name
          description
      }
    }
  }
`;

// GraphQL query for single service by ID
const GET_SERVICE_BY_ID_QUERY = `
  query GetService($id: GraphQLStringOrFloat!) {
    service(filter: { id: { _eq: $id } }) {
      id
      status
      sort
      slug {
        id
      }
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      translations {
          languages_code {
            code
          }
          name
          description
      }
    }
  }
`;

// GraphQL query for team members
const GET_TEAM_MEMBERS_QUERY = `
  query {
    team_members {
      id
      status
      sort
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      socials
      translations {
          languages_code {
            code
          }
          name
          position
          about
      }
    }
  }
`;

// GraphQL query for single team member by ID
const GET_TEAM_MEMBER_BY_ID_QUERY = `
  query GetTeamMember($id: GraphQLStringOrFloat!) {
    team_members(filter: { id: { _eq: $id } }) {
      id
      status
      image {
        id
        filename_download
        title
        type
        width
        height
      }
      socials
      translations {
          languages_code {
            code
          }
          name
          position
          about
      }
    }
  }
`;

export const directusApi = createApi({
  reducerPath: "directusApi",
  baseQuery: customBaseQuery,
  tagTypes: [
    "Articles",
    "Events",
    "Projects",
    "Products",
    "Partners",
    "Services",
    "TeamMembers",
    "ProductCategories",
    "ProjectCategories",
  ],
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
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: "Article ID is required",
              },
            };
          }

          const idValue = isNaN(Number(id)) ? String(id) : Number(id);

          try {
            const data = await graphqlRequest(GET_ARTICLE_BY_ID_QUERY, {
              id: idValue,
            });
            const article = data?.article?.[0] || null;
            if (article) {
              return { data: article };
            }
          } catch (filterError) {
            // Fallback
          }

          const allData = await graphqlRequest(GET_ALL_ARTICLES_QUERY);
          const allArticles = allData?.article || [];
          const article = allArticles.find((a) => {
            const articleId = isNaN(Number(a.id)) ? String(a.id) : Number(a.id);
            return (
              articleId === idValue || String(articleId) === String(idValue)
            );
          });

          if (!article) {
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: `Article with ID ${idValue} not found`,
              },
            };
          }

          return { data: article };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Articles", id }],
    }),
    getEvents: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_EVENTS_QUERY);
          return { data: data?.event || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Events"],
    }),
    getEventById: builder.query({
      queryFn: async (id) => {
        try {
          if (!id) {
            return {
              error: { status: "CUSTOM_ERROR", error: "Event ID is required" },
            };
          }

          const idValue = isNaN(Number(id)) ? String(id) : Number(id);

          try {
            const data = await graphqlRequest(GET_EVENT_BY_ID_QUERY, {
              id: idValue,
            });
            const event = data?.event?.[0] || null;
            if (event) {
              return { data: event };
            }
          } catch (filterError) {
            // Fallback
          }

          const allData = await graphqlRequest(GET_ALL_EVENTS_QUERY);
          const allEvents = allData?.event || [];
          const event = allEvents.find((e) => {
            const eventId = isNaN(Number(e.id)) ? String(e.id) : Number(e.id);
            return eventId === idValue || String(eventId) === String(idValue);
          });

          if (!event) {
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: `Event with ID ${idValue} not found`,
              },
            };
          }

          return { data: event };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Events", id }],
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
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: "Project ID is required",
              },
            };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_PROJECT_BY_ID_QUERY, {
            id: idValue,
          });
          const project = data?.project?.[0] || null;
          if (!project) {
            return {
              error: { status: "CUSTOM_ERROR", error: "Project not found" },
            };
          }
          return { data: project };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Projects", id }],
    }),
    getProjectCategories: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_PROJECT_CATEGORIES_QUERY);
          return { data: data?.project_category || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["ProjectCategories"],
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
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: "Product ID is required",
              },
            };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_PRODUCT_BY_ID_QUERY, {
            id: idValue,
          });
          const product = data?.product?.[0] || null;
          if (!product) {
            return {
              error: { status: "CUSTOM_ERROR", error: "Product not found" },
            };
          }
          return { data: product };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
    getProductCategories: builder.query({
      queryFn: async () => {
        try {
          const data = await graphqlRequest(GET_PRODUCT_CATEGORIES_QUERY);
          return { data: data?.product_category || [] };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["ProductCategories"],
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
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: "Service ID is required",
              },
            };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_SERVICE_BY_ID_QUERY, {
            id: idValue,
          });
          const service = data?.service?.[0] || null;
          if (!service) {
            return {
              error: { status: "CUSTOM_ERROR", error: "Service not found" },
            };
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
            return {
              error: {
                status: "CUSTOM_ERROR",
                error: "Team member ID is required",
              },
            };
          }
          const idValue = isNaN(Number(id)) ? String(id) : Number(id);
          const data = await graphqlRequest(GET_TEAM_MEMBER_BY_ID_QUERY, {
            id: idValue,
          });
          const teamMember = data?.team_members?.[0] || null;
          if (!teamMember) {
            return {
              error: { status: "CUSTOM_ERROR", error: "Team member not found" },
            };
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
  useGetEventsQuery,
  useGetEventByIdQuery,
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useGetProjectCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductCategoriesQuery,
  useGetPartnersQuery,
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useGetTeamMembersQuery,
  useGetTeamMemberByIdQuery,
} = directusApi;
