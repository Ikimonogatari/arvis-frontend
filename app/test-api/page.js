"use client";
import {
    useGetArticlesQuery,
    useGetPartnersQuery,
    useGetProductCategoriesQuery,
    useGetProductsQuery,
    useGetProjectCategoriesQuery,
    useGetProjectsQuery,
    useGetServicesQuery,
    useGetTeamMembersQuery,
} from "../../lib/api/directusApi";

const TestApiPage = () => {
  const { data: articles, error: articlesError } = useGetArticlesQuery();
  const { data: partners, error: partnersError } = useGetPartnersQuery();
  const { data: products, error: productsError } = useGetProductsQuery();
  const { data: productCategories, error: productCategoriesError } =
    useGetProductCategoriesQuery();
  const { data: projects, error: projectsError } = useGetProjectsQuery();
  const { data: projectCategories, error: projectCategoriesError } =
    useGetProjectCategoriesQuery();
  const { data: services, error: servicesError } = useGetServicesQuery();
  const { data: teamMembers, error: teamMembersError } =
    useGetTeamMembersQuery();

  const renderSection = (title, data, error) => (
    <div className="mb-8 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {error ? (
        <div className="text-red-500">Error: {JSON.stringify(error)}</div>
      ) : (
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96 text-xs">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-10">API Test Page</h1>
      {renderSection("Articles", articles, articlesError)}
      {renderSection("Partners", partners, partnersError)}
      {renderSection("Products", products, productsError)}
      {renderSection("Product Categories", productCategories, productCategoriesError)}
      {renderSection("Projects", projects, projectsError)}
      {renderSection("Project Categories", projectCategories, projectCategoriesError)}
      {renderSection("Services", services, servicesError)}
      {renderSection("Team Members", teamMembers, teamMembersError)}
    </div>
  );
};

export default TestApiPage;
