const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "https://cms.arvisys.com/graphql";

export const graphqlRequest = async (query, variables = {}) => {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("GraphQL Error Body:", errorBody);
      throw new Error(`GraphQL request failed: ${response.statusText} - ${errorBody}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL Errors:", JSON.stringify(result.errors, null, 2));
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
  } catch (error) {
    console.error("GraphQL request error:", error);
    throw error;
  }
};
