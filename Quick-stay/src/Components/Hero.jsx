import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center min-h-screen'>
  <p className="bg-[#49B9FF]/50 pl-4 pr-5 py-1.5 w-max rounded-full text-sm shadow-md mt-20">
    The Ultimate Hotel Experience
  </p>

  <h1 className="font-playfair text-4xl sm:text-5xl md:text-[56px] leading-tight font-extrabold max-w-3xl mt-5">
    Discover Your Perfect Getaway Destination
  </h1>

  <p className="max-w-xl mt-3 text-sm md:text-base text-gray-200">
    Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
  </p>

  <form className="bg-white text-gray-700 rounded-xl shadow-lg px-6 py-6 mt-10 flex flex-col md:flex-row gap-6 md:gap-4 w-full max-w-3xl">
    {/* Destination */}
    <div className="flex-1">
      <label htmlFor="destinationInput" className="flex items-center gap-2 text-sm font-medium mb-1">
        <img src={assets.calenderIcon} alt="icon" className="h-4" />
        Destination
      </label>
      <input
        list="destinations"
        id="destinationInput"
        type="text"
        placeholder="Type here"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
      <datalist id='destinations'>
        {cities.map((city, index) => (
          <option value={city} key={index} />
        ))}
      </datalist>
    </div>

    {/* Check-in */}
    <div>
      <label htmlFor="checkIn" className="flex items-center gap-2 text-sm font-medium mb-1">
        <img src={assets.calenderIcon} alt="icon" className="h-4" />
        Check In
      </label>
      <input
        id="checkIn"
        type="date"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Check-out */}
    <div>
      <label htmlFor="checkOut" className="flex items-center gap-2 text-sm font-medium mb-1">
        <img src={assets.calenderIcon} alt="icon" className="h-4" />
        Check Out
      </label>
      <input
        id="checkOut"
        type="date"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Guests */}
    <div>
      <label htmlFor="guests" className="text-sm font-medium mb-1 block">
        Guests
      </label>
      <input
        min={1}
        max={8}
        id="guests"
        type="number"
        placeholder="0"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Search Button */}
    <button
      type="submit"
      className="flex items-center justify-center gap-2 rounded-lg bg-black px-6  text-white hover:bg-gray-900 transition-all duration-300 max-md:w-full"
    >
      <img src={assets.searchIcon} alt="search" className="h-5" />
      <span className="text-sm font-medium">Search</span>
    </button>
  </form>
</div>

  );
};

export default Hero;
