
const GRAPHQL_ENDPOINT = "https://cms.arvisys.com/graphql";

const introspectionQuery = `
  query IntrospectionQuery {
    __schema {
      types {
        name
        fields {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
`;

const runQuery = async () => {
  try {
    console.log(`Fetching schema...`);
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: introspectionQuery }),
    });

    if (!response.ok) {
        console.error(`FAILED: ${response.status} ${response.statusText}`);
        return;
    }
    
    const result = await response.json();
    if (result.errors) {
        console.error("GraphQL Errors:", JSON.stringify(result.errors, null, 2));
    } else {
        const types = result.data.__schema.types;
        const interestingTypes = [
            "article", "article_translations", 
            "partner", "partner_translations",
            "product", "product_translations", "product_category", "product_product_category",
            "project", "project_translations", "project_category",
            "service", "service_translations",
            "team_members", "team_members_translations"
        ];
        
        const filteredTypes = types.filter(t => interestingTypes.includes(t.name));
        
        filteredTypes.forEach(t => {
            console.log(`\nType: ${t.name}`);
            console.log(t.fields.map(f => `  - ${f.name} (${f.type.kind} ${f.type.name || f.type.ofType?.name})`).join("\n"));
        });
    }

  } catch (error) {
    console.error("Request failed:", error);
  }
};

runQuery();
