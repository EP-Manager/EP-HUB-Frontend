import { useEffect, useState } from 'react'
import jobSeeker from '../assets/job-seeker.jpg'
import sell from '../assets/sell.png'
import buy from '../assets/buy.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Roles = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [noSlides, setNoSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 800) {
        setNoSlides(1);
      } else if (width >= 800 && width <=1250) {
        setNoSlides(2);
      } else {
        setNoSlides(3);
      }

      setWindowWidth(width);
    };

    handleResize(); // Initial setup

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);                          
  
  return (
    <section className="h-screen w-full flex flex-col items-center mt-24">
        
        <div className="space-grotesk text-[45px] w-2/3 text-center font-bold mt-4 max-sm:text-3xl max-md:text-3xl max-lg:text-3xl">THE ROLES</div>
        <div className="uppercase font-semibold tracking-widest text"><span>Choose the roles given below</span></div>
        <div className='flex flex-row h-92 mt-20 w-2/3 justify-center  overflow-hidden'>


        <Swiper
      // install Swiper modules
    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={noSlides}
      //navigation
      spaceBetween={10}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='flex items-center max-sm:ml-16 max-md:ml-32 mt-12'
    >
      <SwiperSlide>
        <div className='flex flex-col w-56 h-full pb-5 justify-center '>
              <img className='h-48 rounded-t-lg' src={jobSeeker} alt="image" />
              <div className='flex  flex-col w-56 p-3'>
                <p className='text-md font-bold'>JOB SEEKER</p>
                <p className='text-xs font-light'>We provide you with a job opprotunity and get the rewards on the go. </p>
              </div>
            </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='flex flex-col w-56 h-full pb-5 justify-center '>
              <img className='h-48 rounded-t-lg' src={buy} alt="image" />
              <div className='flex  flex-col w-56 p-3'>
                <p className='text-md font-bold'>BUYER</p>
                <p className='text-xs font-light'>Buy from varieties of e-plastics we provide</p>
              </div>
            </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='flex flex-col w-56 h-full pb-5 justify-center '>
              <img className='h-48 rounded-t-lg' src={sell} alt="image" />
              <div className='flex  flex-col w-56 p-3'>
                <p className='text-md font-bold'>SELLER</p>
                <p className='text-xs font-light'>You can also sell the e-plastics from your homes.</p>
              </div>
            </div>
      </SwiperSlide>
      
    </Swiper>
    </div>

      </section>
  )
}

export default Roles