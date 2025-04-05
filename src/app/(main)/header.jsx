
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
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 py-3">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <Image
      src="/images/logo-default.png"
      alt="logo"
      width={200}
      height={50}
      className="h-12 w-auto mix-blend-multiply"
    />

    {/* Mobile Menu Button */}
    <button onClick={handleMenuToggle} className="md:hidden">
      <AlignJustify size={32} />
    </button>

    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-8 text-lg font-medium">
      <li><Link href="/">Home</Link></li>

      <li className="relative group">
        <button onClick={handleAboutVisible}>About Us</button>
        {isAboutVisible && (
          <ul className="absolute top-full left-0 bg-white shadow-lg rounded p-4 space-y-2 z-50">
            {aboutPages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      <li className="relative group">
        <button onClick={handleServicesVisible}>Services</button>
        {isServicesVisible && (
          <ul className="absolute top-full left-0 bg-white shadow-lg rounded p-4 space-y-2 z-50">
            {servicesPages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      <li className="relative group">
        <button onClick={handleOurWorkVisible}>Our Work</button>
        {isOurWorkVisible && (
          <ul className="absolute top-full left-0 bg-white shadow-lg rounded p-4 space-y-2 z-50">
            {ourWorkPages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      {pages.map((item) => {
        const notGrouped = !["Home", "About Us", "Services", "Our Work"].includes(item.parent);
        return notGrouped ? (
          <li key={item.id}>
            <Link href={item.slug}>{item.title}</Link>
          </li>
        ) : null;
      })}
    </ul>
  </div>

  {/* Mobile Drawer */}
  <div
    className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 z-50 transform transition-transform duration-300 ease-in-out ${
      menuOpen ? "translate-x-0" : "-translate-x-full"
    } md:hidden`}
  >
    <div className="flex justify-end">
      <CircleX size={30} onClick={handleMenuToggle} className="cursor-pointer" />
    </div>
    <nav className="mt-8 space-y-4">
      <Link href="/" className="block text-xl font-semibold" onClick={handleMenuToggle}>Home</Link>

      <div>
        <button onClick={handleAboutVisible} className="text-xl font-semibold">About Us</button>
        {isAboutVisible && (
          <ul className="pl-4 mt-2 space-y-2">
            {aboutPages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug} onClick={handleMenuToggle}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button onClick={handleServicesVisible} className="text-xl font-semibold">Services</button>
        {isServicesVisible && (
          <ul className="pl-4 mt-2 space-y-2">
            {servicesPages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug} onClick={handleMenuToggle}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button onClick={handleOurWorkVisible} className="text-xl font-semibold">Our Work</button>
        {isOurWorkVisible && (
          <ul className="pl-4 mt-2 space-y-2">
            {ourWorkPages.map((page) => (
              <li key={page.id}>
                <Link href={page.slug} onClick={handleMenuToggle}>{page.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {pages.map((item) => {
        const notGrouped = !["Home", "About Us", "Services", "Our Work"].includes(item.parent);
        return notGrouped ? (
          <Link key={item.id} href={item.slug} className="block text-xl font-semibold" onClick={handleMenuToggle}>
            {item.title}
          </Link>
        ) : null;
      })}
    </nav>
  </div>
</div>
    </>
  )
}
export default Header