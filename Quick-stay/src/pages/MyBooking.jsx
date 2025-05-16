import React, { useState } from "react";
import Title from "../Components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBooking = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 m:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />

      <div className="max-w-6Xl mt-8 w-full text-gray-800">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotel</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>
        {bookings.map((bookings) => (
          <div
            key={bookings._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >
            {/* hotel details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={bookings.room.images[0]}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-xl">
                  {bookings.hotel.name}
                  <span className="font-inter text-sm">
                    ({bookings.room.roomType})
                  </span>
                </p>

                {/* address detail  */}
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{bookings.hotel.address}</span>
                </div>

                {/* guest detail */}
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guests-icon" />
                  <span>Guests: {bookings.guests}</span>
                </div>
                <p className="text-base">Total: ${bookings.totalPrice}</p>
              </div>
            </div>
            {/* date & timing */}

            <div className="flex flex-col justify-center gap-1">
              <p className="text-sm font-medium">
                Check-in: {new Date(bookings.checkInDate).toDateString()}
              </p>
              <p className="text-sm">
                Check-out: {new Date(bookings.checkInDate).toDateString()}
              </p>
            </div>

            {/* Payment */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${
                    bookings.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <p
                  className={`text-sm ${
                    bookings.isPaid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {bookings.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!bookings.isPaid && (
                <button className="px-2 py-1.5 mx-2 my-2 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
