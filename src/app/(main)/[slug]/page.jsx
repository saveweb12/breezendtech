// src/app/[slug]/page.jsx
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  if (slug === "favicon.ico") {
    return null;
  }
  if (slug === "admin") {
    redirect("/dashboard/admin/home");
  }
  if (slug === "/") {
    redirect("/");
  }


  let data;

  try {
    const response = await fetch(
      "https://breezend-backend-2.onrender.com/api/get-page",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch page data");
    }

    data = await response.json();
  } catch (error) {
    console.error("Error fetching page data:", error);
    // redirect('/');
    return <div>Error loading page: {error.message}</div>;

  }

  const { components: componentData, page } = data;

  if (!page || !page.status) {
    return <div>Page not found</div>;
  }

  // Render each component dynamically with associated data
  const loadedComponents = page.components.map((componentName) => {
    const componentProps = componentData[componentName];

    // Dynamically import the component based on the component name
    try {

      const Component = dynamic(() => import(`@/components/index/${componentName}`).catch(() => null), {
        ssr: true,
        loading: () => <P>Loading...</P>,
      });
      return <Component key={componentName} data={componentProps} />;
    } catch (error) {
      console.error(`Component "${componentName}" not found:`, error);
      return <div key={componentName}>Component not found</div>;
    }
  });

  return (
    <div>
      {loadedComponents.length > 0 ? (
        loadedComponents
      ) : (
        <div>No components to render</div>
      )}
    </div>
  );
}
