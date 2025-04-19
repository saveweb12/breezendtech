
import Image from 'next/image'
import "../../assets/css/swiper.min.css"
//import { useState } from 'react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const CustomerSatisfaction = () => {


  return (
    <div>

      <section className="py-10 bg-gray-100">
        <div className='flex justify-center items-center'>
          <div><h4 className='text-blue-400'>Customer Satisfaction Drives Us To Do Better</h4>
            <h1 className='flex justify-center items-center'>TESTIMONIALS</h1>
            <p className='flex justify-center items-center pt-3 pb-5 text-xl'>Take a look at words of appreciation from our loyal customers.</p>
          </div>
        </div>
        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/banner-five-bg.jpg"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="h-[90vh]"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 p-8 space-y-4">
                  <Image src="/images/icons/123.png" alt="icon" height={100} width={100} />
                  <h1 className="text-2xl font-bold">Midway Travels</h1>
                  <h6 className="text-lg font-semibold text-gray-600">Breeze End Technology Team Fulfilled My Expectations</h6>
                  <p className="text-gray-700">
                    It has been a great professional experience working with Breeze End Technology as their team was very cooperative and gave valuable insights for the successful completion of projects.
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <Image src="/images/icons/placeholder.png" className="rounded-full" alt="profile" height={40} width={40} />
                    <div>
                      <h4 className="font-bold text-gray-800">Alis Borison</h4>
                      <p className="text-sm text-gray-500">CMO</p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="fa fa-star fill" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/banner-four-bg.jpg"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="h-[90vh]"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 p-8 space-y-4">
                  <Image src="/images/icons/1234.png" alt="icon" height={100} width={100} />
                  <h1 className="text-2xl font-bold">Midway Travels</h1>
                  <h6 className="text-lg font-semibold text-gray-600">Breeze End Technology Team Fulfilled My Expectations</h6>
                  <p className="text-gray-700">
                    It has been a great professional experience working with Breeze End Technology as their team was very cooperative and gave valuable insights for the successful completion of projects.
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <Image src="/images/icons/placeholder.png" className="rounded-full" alt="profile" height={40} width={40} />
                    <div>
                      <h4 className="font-bold text-gray-800">Alis Borison</h4>
                      <p className="text-sm text-gray-500">CMO</p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="fa fa-star fill" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/banner-four-bg.jpg"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="h-[90vh]"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 p-8 space-y-4">
                  <Image src="/images/icons/123.png" alt="icon" height={100} width={100} />
                  <h1 className="text-2xl font-bold">  Main IT Services, Inc </h1>
                  <h6 className="text-lg font-semibold text-gray-600">Feedback on Main IT Services, Inc</h6>
                  <p className="text-gray-700">
                    It has been a great professional experience working with Breeze End Technology as their team was very cooperative and gave valuable insights for the successful completion of projects.
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <Image src="/images/icons/placeholder.png" className="rounded-full" alt="profile" height={40} width={40} />
                    <div>
                      <h4 className="font-bold text-gray-800">Kevin Coasta</h4>
                      <p className="text-sm text-gray-500">Director</p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="fa fa-star fill" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/banner-four-bg.jpg"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="h-[90vh]"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 p-8 space-y-4">
                  <Image src="/images/icons/salonegoo_logo.png" alt="icon" height={100} width={100} />
                  <h1 className="text-2xl font-bold">Salone Goo</h1>
                  <h6 className="text-lg font-semibold text-gray-600">Feedback on Salone Goo</h6>
                  <p className="text-gray-700">
                    It has been a great professional experience working with Breeze End Technology as their team was very cooperative and gave valuable insights for the successful completion of projects.
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <Image src="/images/icons/placeholder.png" className="rounded-full" alt="profile" height={40} width={40} />
                    <div>
                      <h4 className="font-bold text-gray-800">Zainab Koroma</h4>
                      <p className="text-sm text-gray-500">Founder</p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="fa fa-star fill" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row items-center max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/banner-five-bg.jpg"
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="h-[90vh]"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 p-8 space-y-4">
                  <Image src="/images/icons/salonegoo_logo.png" alt="icon" height={100} width={100} />
                  <h1 className="text-2xl font-bold">Midway Travels</h1>
                  <h6 className="text-lg font-semibold text-gray-600">Breeze End Technology Team Fulfilled My Expectations</h6>
                  <p className="text-gray-700">
                    It has been a great professional experience working with Breeze End Technology as their team was very cooperative and gave valuable insights for the successful completion of projects.
                  </p>

                  <div className="flex items-center space-x-4 pt-2">
                    <Image src="/images/icons/placeholder.png" className="rounded-full" alt="profile" height={40} width={40} />
                    <div>
                      <h4 className="font-bold text-gray-800">Jacques Philippe</h4>
                      <p className="text-sm text-gray-500">Sales Manager</p>
                    </div>
                  </div>

                  <div className="text-yellow-500 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="fa fa-star fill" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>

  )
};

export default CustomerSatisfaction;
