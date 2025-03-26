// "use client";
// import "../../assets/css/style.css";
// import { useState, useEffect } from "react";
// import axios from "axios";


// import React from 'react'
// import { AlignJustify, CircleX, SquareChevronRight } from 'lucide-react';
// //import { data } from "autoprefixer";


// const header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isAboutVisible, setIsAboutVisible] = useState(false);
//   const [isServicesVisible, setIsServicesVisible] = useState(false);
//   const [isOurWorkVisible, setIsOurWorkVisible] = useState(false);
//   const handleAboutVisible = () => {
//     setIsAboutVisible(!isAboutVisible);
//     setIsServicesVisible(false);
//     setIsOurWorkVisible(false);
//   };

//   const handleServicesVisible = () => {
//     setIsServicesVisible(!isServicesVisible);
//     setIsAboutVisible(false);
//     setIsOurWorkVisible(false);
//   };

//   const handleOurWorkVisible = () => {
//     setIsOurWorkVisible(!isOurWorkVisible);
//     setIsAboutVisible(false);
//     setIsServicesVisible(false);
//   };
//   const handleMenuToggle = () => {
//     setMenuOpen((prev) => !prev);
//   };
//   //const [pages, setpages] = useState([])

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get('https://breezend-backend-2.onrender.com/api/get-all-page');
//   //       // console.log(response.data)
//   //       setapages(response)
//   //       return response.data;
//   //     } catch (error) {
//   //       console.error('Create Page API Error:', error.response?.data || 'Something went wrong');
//   //       return rejectWithValue(error.response?.data || 'Something went wrong');
//   //     }
//   //   }
//   //   fetchData()
//   // }, [])

//   // useEffect(() => {
//   //   axios
//   //     .get("https://breezend-backend-2.onrender.com/api/get-all-page")
//   //     .then((response) => {
//   //       // Access the `pages` array correctly
//   //       let pagesData = response.data.pages;
//   //       if (!Array.isArray(pagesData)) {
//   //         pagesData = [pagesData]; // Wrap the non-array value in an array
//   //       }
//   //       setpages(pagesData);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching pages:", error);
//   //     });
//   // }, []);

//   // useEffect(()=>{
//   //   const fetchdata=async()=>{
//   //     const {data}=await axios.get('https://breezend-backend-2.onrender.com/api/get-all-page')
//   //     setapages(data)
//   //   }
//   //   fetchdata()
//   // },[])


//   return (
//     <>

//       <div className="" style={{ display: "flex", padding: "25px", background: "white", zIndex: "100", justifyContent: "space-between", position: "fixed", width: "100%", height: "5rem" }}>
//         <div >
//           <img src="/images/logo-default.png" alt="" style={{ height: "3rem", mixBlendMode: "multiply" }} />
//         </div>

//         <div className="" onClick={handleMenuToggle} style={{ cursor: "pointer" }}>
//           <AlignJustify size={40} />
//         </div>

//         <div className={`side-menu ${menuOpen ? "open" : ""}`} >
//           <div onClick={handleMenuToggle} style={{ cursor: "pointer", display: "inline", float: "right", marginTop: "1rem", marginRight: "1rem" }}>
//             <CircleX size={50} />
//           </div>

//           <div style={{ marginTop: "5rem", marginLeft: "3rem", display: "inline", }}>
//             <div style={{ margin: "12px", fontSize: "x-large", display: "flex", cursor: "pointer" }}>

//               <div className="hover-text"> Home</div>

//             </div>
//             <div style={{ margin: "12px", fontSize: "x-large", display: "flex" }}>
//               <div className="flex hover-text" style={{ cursor: "pointer" }} onClick={handleAboutVisible}>About Us<SquareChevronRight size={30} style={{ marginLeft: "1rem" }} /></div>
//               <div style={{ marginLeft: "170px", overflow: "hidden", position: "absolute" }}>
//                 <ul style={{
//                   display: "flex",
//                   listStyle: "none",
//                   marginLeft: isAboutVisible ? "0px" : "-20px", // Moves in from left
//                   opacity: isAboutVisible ? 1 : 0, // Fades in
//                   transition: "all 0.5s ease-in-out",
//                 }}>
//                   <li className="hover-text" style={{ margin: "0px  15px", cursor: "pointer" }}>Who We Are</li>
//                   <li className="hover-text" style={{ margin: "0px  15px", cursor: "pointer" }}>Why Choose Us</li>
//                   <li className="hover-text" style={{ margin: "0px  15px", cursor: "pointer" }}>Client Testimonials</li>
//                 </ul>
//               </div>
//             </div>


//             <div style={{ margin: "12px", fontSize: "x-large", }}>
//               <div className="flex hover-text" onClick={handleServicesVisible} style={{ cursor: "pointer" }}>Services<SquareChevronRight size={30} style={{ marginLeft: "1rem" }} /></div>

//               <div style={{
//                 position: "absolute",
//                 marginTop: "-120px",
//                 width: "80vw",
//                 right: "73px",
//                 overflow: "hidden",
//                 maxHeight: isServicesVisible ? "500px" : "0px", // Expands down
//                 opacity: isServicesVisible ? 1 : 0, // Fade in
//                 transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
//               }}>
//                 <ul style={{
//                   display: "flex",
//                   listStyle: "none",
//                   justifyContent: "space-evenly",
//                   transform: isServicesVisible ? "translateX(0)" : "translateX(-20px)", // Moves down smoothly
//                   transition: "transform 0.5s ease-in-out",
//                 }}>
//                   <div style={{ margin: "" }}>
//                     <span className="hover-text" style={{ fontSize: "x-large", cursor: "pointer", fontWeight: "bold" }}>Digital Marketing</span>
//                     <li style={{ fontSize: "medium", margin: "12px 0px", cursor: "pointer" }}> Digital Marketing Strategy
//                       Developpment</li>
//                     <li style={{ fontSize: "medium", margin: "15px 0px", cursor: "pointer" }}> Enterprise Digital Marketing</li>
//                     <li style={{ fontSize: "medium", margin: "15px 0px", cursor: "pointer" }}>Franchise Digital Marketing  </li>
//                   </div>

//                   <div>
//                     <span className="hover-text" style={{ fontSize: "x-large", fontWeight: "bold" }}>Social Meadia Advertising</span>
//                     <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy Developpment</li>
//                     <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy
//                       Developpment</li>
//                     <li style={{ fontSize: "medium", margin: "15px 0px" }}>Franchise Digital Marketing  </li>
//                   </div>
//                   <div>
//                     <span className="hover-text" style={{ fontSize: "x-large", fontWeight: "bold" }}>Content Marketing</span>
//                     <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy Developpment</li>
//                     <li style={{ fontSize: "medium", margin: "15px 0px" }}>Digital Marketing Strategy
//                       Developpment</li>
//                     <li style={{ fontSize: "medium", margin: "15px 0px" }}>Franchise Digital Marketing  </li>
//                   </div>
//                 </ul>
//               </div>
//             </div>


//             <div style={{ margin: "12px", fontSize: "x-large", display: "flex" }}>
//               <div className="flex hover-text" style={{ cursor: "pointer" }} onClick={handleOurWorkVisible} > Our Work<SquareChevronRight size={30} style={{ marginLeft: "1rem" }} /></div>
//               <div style={{
//                 marginLeft: "60px",
//                 overflow: "hidden",
//                 maxHeight: isOurWorkVisible ? "200px" : "0px", // Expands height smoothly
//                 opacity: isOurWorkVisible ? 1 : 0, // Fades in
//                 transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
//               }}>
//                 <ul style={{
//                   display: "flex",
//                   position: "absolute",
//                   listStyle: "none",
//                   marginLeft: "-22px",
//                   cursor: "pointer",
//                   transform: isOurWorkVisible ? "translateX(0)" : "translateX(-20px)", // Moves down smoothly
//                   transition: "transform 0.5s ease-in-out",
//                 }}>
//                   <li className="hover-text" style={{ margin: "0px  15px" }}>Case Studies</li>
//                   <li className="hover-text" style={{ margin: "0px  15px" }}>Web Portfolio</li>
//                   <li className="hover-text" style={{ margin: "0px  15px" }}>Logo Design</li>
//                   <li className="hover-text" style={{ margin: "0px  15px" }}>Video Production</li>

//                 </ul>
//               </div>
//             </div>
//             <div className="hover-text" style={{ margin: "12px", fontSize: "x-large", cursor: "pointer" }}><a href="/careers">Careers</a></div>
//             <div className="hover-text" style={{ margin: "12px", fontSize: "x-large", cursor: "pointer" }}><a href="#">Blogs</a></div>
//             <div className="hover-text" style={{ margin: "12px", fontSize: "x-large", cursor: "pointer" }}><a href="#">Contact Us</a></div>
//           </div>


//         </div>
//       </div>




//     </>
//   )
// }

// export default header



"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
import { AlignJustify, CircleX, ChevronDown, SquareChevronRight } from 'lucide-react';


const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isOurWorkVisible, setIsOurWorkVisible] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleAboutVisible = () => {
    setIsAboutVisible(!isAboutVisible);
    setIsServicesVisible(false);
    setIsOurWorkVisible(false);
  };
  const handleServicesVisible = () => {
    setIsServicesVisible(!isServicesVisible);
    setIsAboutVisible(false);
    setIsOurWorkVisible(false);
  };
  const handleOurWorkVisible = () => {
    setIsOurWorkVisible(!isOurWorkVisible);
    setIsAboutVisible(false);
    setIsServicesVisible(false);
  };

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https:breezend-backend-2.onrender.com/api/get-all-page');
        console.log(response.data.success);

        if (Array.isArray(response.data.pages)) {
          setPages(response.data.pages);
        } else {
          console.error("Invalid response format: pages is not an array");
        }
      } catch (error) {
        console.error('Create Page API Error:', error.response?.data || 'Something went wrong');
      }
    };

    fetchData();
  }, []);

  const aboutPages = pages.filter((page) => page.parent === "About Us");
  const servicesPages = pages.filter((page) => page.parent === "Services");
  const ourWorkPages = pages.filter((page) => page.parent === "Our work");

  console.log(aboutPages);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-20 bg-white shadow-md flex items-center justify-between px-6 z-50 !rounded-none !border-none">
        <div >
          <img src="/images/logo-default.png" alt="logo" className="h-12 mix-blend-multiply" />
        </div>
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          <AlignJustify size={40} />
        </div>
        <div className={`fixed top-0 left-0 h-full w-full bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`} >
          < div onClick={handleMenuToggle} style={{ cursor: "pointer", display: "inline", float: "right", marginTop: "1rem", marginRight: "1rem" }}>
            <CircleX size={50} />
          </div>
          <nav className="mt-24 w-30">
            <ul>
              {
                pages.map((items) => (
                  <div key={items.id}>
                    {items.title === "Home" &&
                      <button className="flex justify-start items-center mb-4 !important">
                        <a href="#" className="hover-text  font-sans font-semibold text-2xl">
                          {items.title}
                        </a>
                      </button>
                    }
                  </div>
                )) 
              }
              <button className="flex justify-start items-center gap-8 mb-4 !important">
                <h1 className="hover-text font-sans font-semibold text-2xl">About Us</h1>
                <SquareChevronRight onClick={handleServicesVisible} size={25} />
                <div className={`ml-[60px] overflow-hidden transition-all duration-500 ease-in-out ${isAboutVisible ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <ul className={`flex absolute -ml-[22px] cursor-pointer transition-transform duration-500 ease-in-out ${isAboutVisible ? "translate-x-0" : "-translate-x-5"}`}>
                    <span className="mt-[-18px] flex gap-4">
                      {aboutPages.map((page) => (
                        <a href={page.slug} className="text-2xl hover-text" key={page.id}>{page.title}</a>
                      ))}
                    </span>
                  </ul>
                </div>
              </button>

              <button className="flex  justify-start items-center gap-10 mb-4 !important">
                <h1  className="hover-text  font-sans font-semibold text-2xl ">Service</h1>
                <SquareChevronRight onClick={handleOurWorkVisible} size={25} />
                <div className={`ml-[60px] overflow-hidden transition-all duration-500 ease-in-out ${isServicesVisible ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <ul className={`flex absolute -ml-[22px] cursor-pointer transition-transform duration-500 ease-in-out ${isServicesVisible ? "translate-x-0" : "-translate-x-5"
                    }`}>
                    <span className="mt-[-18px] flex gap-4" >
                      {servicesPages.map((page) => (
                        <a href={page.slug} className="text-2xl hover-text" key={page.id}>{page.title}</a>
                      ))}
                    </span>

                  </ul>
                </div>
              </button>

              <button className="flex justify-start items-center mb-4 gap-8 !important">
                <h1  className="hover-text  font-sans font-semibold text-2xl">Our work</h1>
                <SquareChevronRight onClick={handleOurWorkVisible} size={25} />
                <div className={`ml-[60px] overflow-hidden transition-all duration-500 ease-in-out ${isOurWorkVisible ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <ul className={`flex absolute list-none -ml-[22px] cursor-pointer transition-transform duration-500 ease-in-out ${isOurWorkVisible ? "translate-x-0" : "-translate-x-5"
                    }`}>
                    <span className="mt-[-18px] flex gap-4">
                      {ourWorkPages.map((page) => (
                        <a href={page.slug} className="text-2xl hover-text" key={page.id}>{page.title}</a>
                      ))}
                    </span>

                  </ul>
                </div>
              </button>
              {
                pages.map((item) => (
                  <div key={item.id}>
                    {
                      item.title !== "Home" && item.parent !== "About Us" && item.parent !== "Services" && item.parent !== "Our Work" &&
                      <button className="flex justify-start items-center mb-4 !important">
                        <a href="#" className="hover-text  font-sans font-semibold text-2xl">
                          {item.title}
                        </a>
                      </button>
                    }
                  </div>
                ))
              }
            </ul>
          </nav>
        </div >
      </div >
    </>
  )
}
export default header