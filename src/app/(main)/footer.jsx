import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/scss/elements/theme-css.css";
import { MoveRight } from 'lucide-react';
import { FaFacebook, FaTwitterSquare, FaInstagram, FaSkype } from "react-icons/fa";
import Image from "next/image"

const Footer = () => {
  return (
    <>
      {/* Top Footer Section */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center px-4 md:px-10 py-10 gap-10 bg-white">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-md w-full">
          <Image src="/images/logo-default.png" alt="logo" width={200} height={50} className="h-14 mix-blend-multiply" />
          <p className="text-gray-700 text-base leading-relaxed">
            Breeze End Technology offers a wide range of IT services by implementing the latest technological developments.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-md w-full">
          <h2 className="text-lg font-semibold">Location</h2>
          <p>6383 Little River Turnpike Alexandria, VA 22312, United States</p>
          <p className="text-red-500 hover:text-blue-600 cursor-pointer flex items-center justify-center flex-wrap text-center">
            Contact Us&nbsp;<MoveRight />
            &nbsp;Breezendtech Gives Back&nbsp;<MoveRight />
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-md w-full">
          <div className="flex gap-4 text-3xl justify-center">
            <FaFacebook className="hover:text-red-500" />
            <FaTwitterSquare className="hover:text-red-500" />
            <FaInstagram className="hover:text-red-500" />
            <FaSkype className="hover:text-red-500" />
          </div>
          <p><span className="font-bold">Phone:</span> +1 (703) 712-7808</p>
          <p><span className="font-bold">Mail Us:</span> info@breezendtechs.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black w-full">
        <div className="py-8 text-center space-y-2">
          <h1 className="text-white text-lg">Growing Businesses Since 2008</h1>
          <p className="text-white text-base">Made with ❤️ in 25 cities around the world</p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 md:px-20 pb-10 text-white text-base">
          {[
            "Arlington", "Atlanta", "Austin", "Baltimore", "Chicago",
            "Cleveland", "Dallas", "Denver", "Houston", "Jacksonville",
            "Kansas City", "Las Vegas", "Los Angeles", "Louisville", "New York City",
            "Miami", "Minneapolis", "Phoenix", "New Orleans", "Orlando",
            "Philadelphia", "Portland", "San Antonio", "San Diego", "Seattle"
          ].map((city, index) => (
            <div key={index} className="hover:text-red-500 cursor-pointer">
              {city}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Footer