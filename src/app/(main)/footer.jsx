import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/scss/elements/theme-css.css";
import { MoveRight } from 'lucide-react';
import { FaFacebook, FaTwitterSquare, FaWhatsapp, FaInstagram, FaSkype } from "react-icons/fa";
import Image from "next/image"
import { PiPhoneCallDuotone } from "react-icons/pi";
//import { MessageCircleReply, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <div className="flex justify-center p-20">
        <div className="flex flex-col items-center space-y-4 max-w-lg mx-auto ">
          <Image src="/images/saveasweb-logo.png" alt="logo" width={200} height={50} className="h-14 mix-blend-multiply" />
          <p className="text-center text-gray-700 text-base leading-relaxed" >Save As Web - Software Development Company in Mumbai | Website Development | e-Commerce Website</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-md w-full">
          <h2 className="text-lg font-semibold">Location</h2>
          <p>Address: 306,3rd Floor, Crescent Business Park, Behind Sakinaka Telephone Exchange, Samhita Industrial Estate, Andheri Kurla Road, Andheri (East), Mumbai - 400072</p>
          <p className="text-red-500 hover:text-blue-600 cursor-pointer flex items-center justify-center flex-wrap text-center">
            Contact Us&nbsp;<MoveRight />
            &nbsp;Highweb Gives Back&nbsp;<MoveRight />
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
          <div>
            <span className="font-bold">Phone:</span>
            <span className="flex"> <FaWhatsapp className="text-xl" /> +91 976 906 1842</span><span className="flex"><PiPhoneCallDuotone className="text-xl" /> +91 976 909 8183</span>
          </div>
          <div>
            <span className="font-bold flex justify-center">Mail Us:</span> 
          <span>saveasweb18@gmail.com</span> {" "} <strong>or</strong> {" "} <span>info@saveasweb.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black w-full">
        <div className="py-8 text-center space-y-2">
          <h1 className="text-white text-lg">Growing Businesses Since 2008</h1>
          <p className="text-white text-base">Made with ❤️ around the world</p>
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