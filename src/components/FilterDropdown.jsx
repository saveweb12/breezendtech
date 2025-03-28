'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByName } from '@/libAdmin/features/filterSlice';
import { BiChevronDown } from 'react-icons/bi';
import useOutsideClick from './custom hooks/Closedropdown';
// import { fetchComponentsBySlug } from '@/libAdmin/features/filterSlice';

const FilterDropdown = () => {
  const { selectedItems } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("Home");
  // console.log(selectedCategory);                 

  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // State to track selected category
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // // State to handle dropdown visibility
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);

    dispatch(filterByName(category));
    // if (category === "Home") {
    //     dispatch(filterByName('Home'));
    // } else {
    //     dispatch(filterByName(category));
    // }


    //for sending slug to api 

    // if (category === "Home") {
    //   dispatch(fetchComponentsBySlug("/"))
    // } else {
    //   dispatch(fetchComponentsBySlug(category.toLowerCase()));
    // }

    // Close dropdown after selection
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    dispatch(filterByName('Home'));
  }, [dispatch])

  const dropdownRef = useOutsideClick(() => setIsDropdownOpen(false));

  return (
    <section className="filter-Container relative w-[20%] mx-auto" ref={dropdownRef}>
      {/* Custom dropdown trigger */}
      {/* <div className="dropdown-toggle min-w-70 flex justify-between items-center px-1 mx-1 ring-1 ring-black text-xs cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}> */}
      {/* <div className="dropdown-toggle min-w-[100px] max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap flex justify-between items-center px-1 mx-1 ring-1 ring-black text-xs cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}> */}
      <div className="dropdown-toggle min-w-[80px] whitespace-nowrap overflow-hidden text-ellipsis flex justify-between items-center gap-1 p-1 mx-1 ring-1 ring-black text-xs cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>

        <span className="truncate max-w-[80%]">{selectedCategory}</span>
        <BiChevronDown
          className={`transition-transform duration-400 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
          size={16}
        />
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="dropdown-menu absolute w-full ml-[2.5] mt-1 bg-white 
             border border-slate-300 rounded-sm shadow-lg overflow-auto 
             max-h-60 sm:max-h-72 md:max-h-72 lg:max-h-72 
             sm:border-2 md:border-3 lg:border-4 xl:border-4"
          style={{ zIndex: 100 }}
        >
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="text-sm pl-2 dropdown-item cursor-pointer 
                 hover:bg-sky-500 hover:text-white transition-all 
                 sm:text-base md:text-sm lg:text-sm"
              onClick={() => handleFilterChange(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>

      )}
    </section>
  );
};

export default FilterDropdown;
