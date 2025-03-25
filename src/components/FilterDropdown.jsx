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
      <div className="dropdown-toggle w-[95%] flex justify-between items-center px-1 mx-1 ring-1 ring-black text-xs cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedCategory}
        {/* <BiChevronDown
                    className={`transition-transform duration-400 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                /> */}
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="dropdown-menu absolute w-full ml-[2.5] mt-1 bg-white border border-slate-300 rounded-sm shadow-lg overflow-auto"
          style={{ zIndex: 100 }}
        >
          {selectedItems.map((item) => (
            <div
              key={item.id}
              className="text-sm pl-1 dropdown-item cursor-pointer hover:bg-sky-500 hover:text-white"
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
