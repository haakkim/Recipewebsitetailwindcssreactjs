import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../data/data';

const TopPics = () => {
  return (
    <>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Pics</h1>
      <div className='hidden lg:flex max-w-[1520px] py-2 px-2'>
        <Splide options={{ perPage: 4, gap: '0.5rem', grag: 'free', arrows: false }}>
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className='rounded-3xl relative'>
                  <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                    <p className='px-2 pt-4 font-bold text-2xl'>{item.title}</p>
                    <p className='px-2'>{item.price}</p>
                    <button className='border border-dotted border-r-2 rounded-md text-white mx-2 absolute bottom-4'>
                      Add To Cart
                    </button>

                  </div>
                  <img
                    className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                    src={item.img}
                    alt={item.title}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default TopPics;
