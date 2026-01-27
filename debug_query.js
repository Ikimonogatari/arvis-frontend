
const GRAPHQL_ENDPOINT = "https://cms.arvisys.com/graphql";

const runQuery = async (queryName, query) => {
  try {
    console.log(`\nTesting ${queryName}...`);
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        const text = await response.text();
        console.error(`FAILED: ${response.status} ${response.statusText}`);
        try {
            const json = JSON.parse(text);
            if (json.errors) console.error(JSON.stringify(json.errors, null, 2));
        } catch (e) {
            console.error(text);
        }
        return;
    }
    
    const result = await response.json();
    if (result.errors) {
        console.error("GraphQL Errors:", JSON.stringify(result.errors, null, 2));
    } else {
        console.log("SUCCESS");
    }

  } catch (error) {
    console.error("Request failed:", error);
  }
};

const main = async () => {
    // 1. Article Fix
    await runQuery("Article", `
    query {
      article {
        id
        translations {
          languages_code {
            code
          }
          title
        }
      }
    }
    `);
    
    // 2. Partner Fix
    await runQuery("Partner", `
    query {
      partner {
        id
        translations {
          languages_code {
            code
          }
          name
        }
      }
    }
    `);

    // 3. Product Fix
    await runQuery("Product", `
    query {
      product {
        id
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
        }
      }
    }
    `);

    // 4. Project Fix
    await runQuery("Project", `
    query {
      project {
        id
        category {
            id
            name
        }
        translations {
          languages_code {
            code
          }
          name
        }
      }
    }
    `);

    // 5. Service Fix
    await runQuery("Service", `
    query {
      service {
        id
        slug { id }
        translations {
          languages_code {
            code
          }
          name
        }
      }
    }
    `);

    // 6. Team Members Fix
    await runQuery("Team Members", `
    query {
      team_members {
        id
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
    `);
};

main();
