// src/app/[slug]/page.jsx
import { fetchRoutes } from "@/lib/fetchRoutes";

export default async function DynamicPage({ params }) {
  const { slug } = params;

  // Static data simulating the backend response
  const routes = await fetchRoutes();
  const routeData = routes.find((route) => route.slug === slug);

  if (!routeData) {
    return <div>Page not found</div>;
  }

  const componentsToRender = routeData.component;
  const loadedComponents = [];

  // Dynamically import all components
  for (const component of componentsToRender) {
    try {
      const { default: Component } = await import(
        `@/components/index/${component}`
      );
      loadedComponents.push(<Component key={component} />);
    } catch (error) {
      console.error(`Component "${component}" not found:`, error);
      loadedComponents.push(<div key={component}>Component not found</div>);
    }
  }

  return (
    <div>
      {/* <h1>{slug.charAt(0).toUpperCase() + slug.slice(1)} Page</h1> */}
      {loadedComponents.length > 0 ? (
        loadedComponents
      ) : (
        <div>No components to render</div>
      )}
    </div>
  );
}
