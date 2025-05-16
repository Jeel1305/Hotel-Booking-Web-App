import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelRegister = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl w-full mx-4 md:mx-2'>
        {/* Left Image */}
        <img 
          src={assets.regImage} 
          alt="reg-image" 
          className='w-1/2 rounded-l-xl hidden md:block object-cover' 
        />

        {/* Form Content */}
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
          {/* Close Button */}
          <img 
            src={assets.closeIcon} 
            alt="close-icon" 
            className='absolute top-4 right-4 h-5 w-5 cursor-pointer' 
          />

          {/* Title */}
          <p className='text-2xl font-semibold mt-6 mb-8'>
            Register Your Hotel
          </p>

          {/* Hotel Name Field */}
          <div className='w-full mb-4'>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
              Hotel Name
            </label>
            <input 
              id="name"
              type="text" 
              placeholder="Type here..." 
              className="border border-gray-300 rounded w-full px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400" 
              required 
            />
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="contact" className="block mb-2 font-medium text-gray-700">
              Phone
            </label>
            <input 
              id="contact"
              type="text" 
              placeholder="Type here..." 
              className="border border-gray-300 rounded w-full px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400" 
              required 
            />
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="address" className="block mb-2 font-medium text-gray-700">
              Address
            </label>
            <input 
              id="address"
              type="text" 
              placeholder="Type here..." 
              className="border border-gray-300 rounded w-full px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400" 
              required 
            />
          </div>

          <div className='w-full mb-4'>
            <label htmlFor="city" className="block mb-2 font-medium text-gray-700">
              City
            </label>
            <select 
              id="city"
              className="border border-gray-300 rounded w-full px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400" 
              required
            >
            <option value="">Select City</option>
            {cities.map((city) => (
            <option key={city} value={city}>
            {city}
            </option>
            ))}

            </select>
          </div>

          {/* You can add more fields here: Location, Email, Phone, etc */}
          
          {/* Submit Button */}
          <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2.5 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default HotelRegister
