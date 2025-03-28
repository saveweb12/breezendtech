"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
import { AlignJustify, CircleX, ChevronDown, SquareChevronRight } from 'lucide-react';


const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
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
          console.error("Invalid response format: `pages` is not an array");
        }
      } catch (error) {
        console.error('Create Page API Error:', error.response?.data || 'Something went wrong');
      }
    };

    fetchData();
  }, []);

  const aboutPages = pages.filter((page) => page.parent === "About Us");
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
                      <button className="flex justify-start items-center mb-3 !important">
                        <a href="#" className="hover-text  font-sans font-semibold text-xl">
                          {items.title}
                        </a>
                      </button>
                    }
                  </div>
                ))
              }

              <button className="flex justify-start items-center gap-8 mb-3 !important">
                <a href="#" className="hover-text  font-sans font-semibold text-xl">
                  About Us
                </a>
                <SquareChevronRight size={25} />
              </button>
              <button className="flex justify-start items-center gap-10 mb-3 !important">
                <a href="#" className="hover-text  font-sans font-semibold text-xl">
                  Services
                </a>
                <SquareChevronRight size={25} />
              </button>
              <button className="flex justify-start items-center mb-3 gap-8 !important">
                <a href="#" className="hover-text  font-sans font-semibold text-xl">
                  Our Work
                </a>
                <SquareChevronRight size={25} />
              </button>

              {
                pages.map((item) => (
                  <div key={item.id}>
                    {
                      item.title !== "Home" && item.parent !== "About Us" && item.parent !== "Services" && item.parent !== "Our Work" &&
                      <button className="flex justify-start items-center mb-3 !important">
                        <a href="#" className="hover-text  font-sans font-semibold text-xl">
                          {item.title}
                        </a>
                      </button>
                    }
                  </div>
                ))
              }
            </ul>
          </nav>



          {/* <nav className="mt-16 !w-30">
            <ul className="flex flex-col gap-4 px-6">
              {navLink.map((lin, index) => (
                <li key={index} className="text-lg w-20% ">
                  <a href={lin.slug} className=" w-30 hover-text inline-flex items-center text-2xl gap-4">
                    {lin.name}
                    {lin.parent !== "None" && <SquareChevronRight size={20} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav> 
          */}


          {/* 
          <nav className="mt-16 px-6 relative">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.dropdown ? (
                    <div className="group">

                      <button
                        className="hover-text inline-flex items-center justify-start w-30 text-left text-2xl py-2 bg-gray-900"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        {link.name}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${openDropdown === link.name ? "-rotate-90" : ""}`}
                        />
                      </button>


                      <ul
                        className={`w-3/4 h-screen absolute left-0 top-0 px-4 py-2 justify-between gap-10 transition-transform duration-700 ease-linear ${openDropdown === link.name ? "translate-x-52 after:opacity-0" : "-translate-x-full "
                          }`}
                      >
                        {link.subLinks.map((sub, i) => (
                          <li key={i}>
                            <Link href={`/${sub.toLowerCase().replace(" ", "-")}`}>
                              <span className="hover-text">{sub}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link href={link.path}>
                      <span className="hover-text text-2xl py-2 z-100 bg-gray-900 inline-block">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul >
          </nav>
           */}
        </div >
      </div >
    </>
  )
}
export default header