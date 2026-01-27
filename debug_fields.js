
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
    // 10. Test Related Articles
    await runQuery("Related Articles", `query { article { id related_articles { related_article_id { id } } } }`);

    // 11. Test Product Fields
    await runQuery("Product Fields", `query { product { id brand_logo { id } catalog { id } } }`);

    // 12. Test Service Icon
    await runQuery("Service Icon", `query { service { id icon } }`);

    // 13. Test Team Member Socials
    await runQuery("Team Member Socials", `query { team_members { id socials } }`);

    // 14. Test Partner Logo
    await runQuery("Partner Logo", `query { partner { id logo { id } } }`);
};

main();
