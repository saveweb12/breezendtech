
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
import { AlignJustify, CircleX, ChevronDown, SquareChevronRight } from 'lucide-react';
import Image from 'next/image'


const Header = () => {
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
        const response = await axios.get('https://breezend-backend-2.onrender.com/api/get-all-page');
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
  const ourWorkPages = pages.filter((page) => page.parent === "Our Work");

  console.log(ourWorkPages);
  console.log(aboutPages);
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-20 bg-white shadow-md flex items-center justify-between px-6 z-50 !rounded-none !border-none">
        <div >
          <Image src="/images/logo-default.png" alt="logo" width={200} height={50} className="h-12 mix-blend-multiply" />
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
              {/* {
                pages.map((items) => (
                  <div key={items.id}>
                    {items.title === "Home" &&
                      <button className="flex justify-start items-center mb-4 !important">
                        <Link href="/" className="hover-text  font-sans font-semibold text-2xl">
                          {items.title}
                        </Link>
                      </button>
                    }
                  </div>
                ))
              } */}

              {
                pages.map((items) => (
                  <div key={items.id}>
                    {items.title === "Home" && (
                      <Link href="/" className="hover-text font-sans font-semibold text-2xl flex justify-start items-center mb-4">
                        {items.title}
                      </Link>
                    )}
                  </div>
                ))
              }

              <button className="flex justify-start items-center gap-8 mb-4 !important">
                <h1 onClick={handleAboutVisible} className="hover-text font-sans font-semibold text-2xl">About Us</h1>
                <SquareChevronRight size={25} />
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
                <h1 onClick={handleServicesVisible} className="hover-text  font-sans font-semibold text-2xl ">Service</h1>
                <SquareChevronRight size={25} />
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
                <h1 onClick={handleOurWorkVisible} className="hover-text  font-sans font-semibold text-2xl">Our work</h1>
                <SquareChevronRight size={25} />
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
                        <Link href={item.slug} className="hover-text  font-sans font-semibold text-2xl">
                          {item.title}
                        </Link>
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
export default Header