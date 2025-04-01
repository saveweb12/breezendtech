import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/scss/elements/theme-css.css";
import { MoveRight } from 'lucide-react';
import { FaFacebook, FaTwitterSquare, FaInstagram, FaSkype } from "react-icons/fa";
import Image from "next/image"

const Footer = () => {
  return (
    <>
      <div className="flex justify-center p-20">
        <div className="flex flex-col items-center justify-center p-6 space-y-4 max-w-lg mx-auto ">
          <Image src="/images/logo-default.png" alt="logo" className="h-14 mix-blend-multiply" />
          <p className="text-center text-gray-700 text-base leading-relaxed" >Breeze End Technology offers a wide range of IT services by implementing the latest technological developments.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 space-y-4 max-w-lg mx-auto ">
          <h2>Location</h2>
          <p >6383 Little River Turnpike Alexandria, VA 22312, United States</p>
          <p className="text-red-500 hover:text-blue-600 flex cursor-pointer ">Contact Us&nbsp;<MoveRight />&nbsp; Breezendtech Gives Back&nbsp;<MoveRight />&nbsp; </p>

        </div>

        <div className="flex flex-col items-center justify-center p-6 space-y-4 max-w-lg mx-auto ">
          <div className="flex text-4xl">
            <FaFacebook className=" hover:text-red-500" />
            <FaTwitterSquare className=" hover:text-red-500" />
            <FaInstagram className=" hover:text-red-500" />
            <FaSkype className=" hover:text-red-500" />
          </div>
          <p><span className="font-bold text-lg">Phone :</span> +1 (703) 712-7808</p>
          <p><span className="font-bold text-lg">Mail Us :</span>  info@breezendtechs.com</p>
        </div>
      </div>

      <div className="bg-black">
        <div className="pt-10">
          <h1 className=" flex justify-center text-white" >Growing Businesses Since 2008</h1>
          <p className=" flex justify-center text-xl text-white">Made with in 25 cities around the world</p>
        </div>
        <div className="flex justify-between pb-10 pt-10 ml-40 mr-40 ">
          <ul className="text-white text-xl cursor-pointer ">
            <li className="hover:text-red-500 ">Arlington</li>
            <li className="hover:text-red-500">Atlanta</li>
            <li className="hover:text-red-500">Austin</li>
            <li className="hover:text-red-500 ">Baltimore</li>
            <li className="hover:text-red-500 ">Chicago</li>
          </ul>
          <ul className="text-white text-xl cursor-pointer">
            <li className="hover:text-red-500">Cleveland</li>
            <li className="hover:text-red-500">Dallas</li>
            <li className="hover:text-red-500">Denver</li>
            <li className="hover:text-red-500">Houston</li>
            <li className="hover:text-red-500">Jacksonville</li>
          </ul>
          <ul className="text-white text-xl cursor-pointer">
            <li className="hover:text-red-500">Kansas City</li>
            <li className="hover:text-red-500" >Las Vegas</li>
            <li className="hover:text-red-500">Los Angeles</li>
            <li className="hover:text-red-500">Louisville</li>
            <li className="hover:text-red-500">New York City</li>
          </ul>
          <ul className="text-white text-xl cursor-pointer">
            <li className="hover:text-red-500">Miami</li>
            <li className="hover:text-red-500">Minneapolis</li>
            <li className="hover:text-red-500">Phoenix</li>
            <li className="hover:text-red-500">New Orleans</li>
            <li className="hover:text-red-500">Orlando</li>
          </ul>
          <ul className="text-white text-xl cursor-pointer">
            <li className="hover:text-red-500">Philadelphia</li>
            <li className="hover:text-red-500">Portland</li>
            <li className="hover:text-red-500">San Antonio</li>
            <li className="hover:text-red-500">San Diego</li>
            <li className="hover:text-red-500">Seattle</li>
          </ul>
        </div>
      </div>
    </>
  )

}
export default Footer