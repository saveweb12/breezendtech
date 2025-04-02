"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const section04Ref = useRef(null);

  // GSAP Animation (Client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!headingRef.current || !sectionRef.current || !section04Ref.current) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 28%",
      endTrigger: section04Ref.current,
      end: "top+=200%",
      onEnter: () => gsap.set(headingRef.current, { 
        position: "fixed", 
        transform: "translate(10%, -50%)", 
        zIndex: 3000 
      }),
      onLeave: () => gsap.set(headingRef.current, { 
        position: "relative", 
        transform: "none" 
      }),
      onEnterBack: () => gsap.set(headingRef.current, { 
        position: "fixed", 
        transform: "translate(10%, -50%)", 
        zIndex: 3000 
      }),
      onLeaveBack: () => gsap.set(headingRef.current, { 
        position: "relative", 
        transform: "none" 
      })
    });

    return () => scrollTrigger.kill();
  }, []);

  // Data Fetching
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://breezend-backend-2.onrender.com/api/get-page", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: "/" })
        });
        if (!response.ok) throw new Error("Failed to fetch");
        setData(await response.json());
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const { components: componentData, page } = data;
  if (!page?.status) return <div>Page not found</div>;

  // Dynamic Component Loader
  const loadComponent = (componentName) => {
    return dynamic(() => 
      import(`@/components/index/${componentName}`).catch(() => () => null),
      { loading: () => <p>Loading {componentName}...</p> }
    );
  };

  return (
    <>
      {/* Your existing JSX */}
      <section ref={sectionRef}>...</section>
      <section ref={section04Ref} className="row section04"></section>
      
      {/* Render components safely */}
      {page.components.map((componentName) => {
        const Component = loadComponent(componentName);
        return Component ? (
          <Component key={componentName} data={componentData[componentName]} />
        ) : null;
      })}
    </>
  );
};

export default Index;