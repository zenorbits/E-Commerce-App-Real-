import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const GeneralMainBody = () => {
  const cards = ['Card One', 'Card Two', 'Card Three']

  // Refs for custom buttons
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="h-screen">
      <main className="min-h-full w-screen overflow-x-hidden bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center px-12 relative">

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          initialSlide={1}
          className="w-full h-116"
          onBeforeInit={(swiper) => {
            // Bind navigation before Swiper initializes
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card}>
              <div className="h-full bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 shadow-2xl rounded-2xl flex items-center justify-center text-white text-3xl font-semibold border border-white/20 transition-transform duration-500 ease-in-out hover:scale-105">
                {card}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div
          ref={prevRef}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-50 
                     bg-gray-800 text-white rounded-full p-4 shadow-lg cursor-pointer 
                     hover:bg-black hover:scale-110 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
        </div>

        <div
          ref={nextRef}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-50 
                     bg-gray-800 text-white rounded-full p-4 shadow-lg cursor-pointer 
                     hover:bg-black hover:scale-110 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
        </div>
      </main>
    </div>
  )
}

export default GeneralMainBody