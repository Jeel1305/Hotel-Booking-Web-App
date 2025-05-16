import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './Components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBooking from './pages/MyBooking';
import HotelRegister from './Components/HotelRegister';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import Addroom from './pages/hotelOwner/Addroom';
import Listroom from './pages/hotelOwner/Listroom';


const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
     {!isOwnerPath &&  <Navbar /> }
     {false && <HotelRegister />}
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rooms' element={<AllRooms />}></Route>
        <Route path='/rooms/:id' element={<RoomDetails />}></Route>
        <Route path='/my-bookings' element={<MyBooking />}></Route>
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='add-room' element={<Addroom />}/>
          <Route path='list-room' element={<Listroom />}/>
        </Route>
      </Routes>
     </div>
     <Footer />
    </div>
  )
}

export default App