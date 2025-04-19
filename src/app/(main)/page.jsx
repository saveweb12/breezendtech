"use client";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
  if (!page) return <div>Page not found</div>;

  // Dynamic Component Loader
  const loadComponent = (componentName) => {
    return dynamic(() =>
      import(`@/components/index/${componentName}`).catch(() => () => null),
      { loading: () => <p>Loading {componentName}...</p> }
    );
  };

  return (
    <>
      <div id="content" className="site-content ">

      </div>
      <section
        ref={sectionRef}
        className="process-section fixed-background bg_op_1"
        style={{ backgroundImage: "url(/images/background-img3.jpg)" }}
      >
        <div className="pd_top_60" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mountain-guide-trust text-fixed-background">
                <div ref={headingRef} className="max-fixed">
                  <h4 className="title-small">Let&apos;s Get</h4>
                  <h2 className="title-big">DIGITAL</h2>
                </div>
                <div className="mr_bottom_0 " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="process-section fixed-title bg_op_1 "
        style={{ backgroundImage: "url(/images/image-mountain2.png)" }}
      >
        <div className="pd_top_60" />
        <div className="container ">
          <div className="row section04"></div>
        </div>
      </section>
      <section className="w-full h-56 bg-slate-200 flex justify-center items-center">
        <div className="max-w-6xl m-auto p-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={40}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Image
                src="/images/icons/partners-01.jpg"
                alt="clients-logo"
                width={200}
                height={150}
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-02.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-03.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-04.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-05.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-06.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-07.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-08.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-09.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-10.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-11.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md shadow-md">
                <Image
                  src="/images/icons/partners-12.jpg"
                  alt="clients-logo"
                  width={200}
                  height={150}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

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