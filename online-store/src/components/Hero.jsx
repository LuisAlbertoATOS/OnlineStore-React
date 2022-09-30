import React from 'react';

const Hero = () => {
  return (
    <section class="relative overflow-hidden ">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 mx-auto lg:mt-28">
        {/* <!-- Content --> */}
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-bookmark-blue font-bold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            Check the new headphones!
          </h2>
          <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            HyperX Cloud Stinger is the ideal headset for gamers looking for
            lightweight comfort, superior sound quality and added convenience.
          </p>
        </div>
        {/* <!-- Image --> */}
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            class="w-5/6 h-5/6 sm:w-3/4"
            src="https://i.postimg.cc/KcBqRbtp/unknown-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      {/* <!-- Rounded Rectangle --> */}
      <div
        class="
          hidden
          md:block
          overflow-hidden
          bg-blue-800
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
      ></div>
    </section>
  );
};

export default Hero;
