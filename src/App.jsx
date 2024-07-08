// import Swiper from 'swiper';
import 'swiper/css';
import CardSm from './components/card'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/official';
import ShopPr from './pages/shop/boxster';
import ShopTr from './pages/shop/911';
import ShopTy from './pages/shop/taycan';
import ShopPn from './pages/shop/panamera';
import ShopMc from './pages/shop/macan';
import ShopCy from './pages/shop/cayenne';



function App() {
  // const swiper = new Swiper('.swiper', {
  //   breakpoints: {
  //     550: {
  //       slidesPerView:2
  //     }
  //   }
  // })
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shop/boxster' element={<ShopPr></ShopPr>}></Route>
      <Route path='/shop/911' element={<ShopTr></ShopTr>}></Route>
      <Route path='/shop/taycan' element={<ShopTy></ShopTy>}></Route>
      <Route path='/shop/panamera' element={<ShopPn></ShopPn>}></Route>
      <Route path='/shop/macan' element={<ShopMc></ShopMc>}></Route>
      <Route path='/shop/cayenne' element={<ShopCy></ShopCy>}></Route>
    </Routes>
  )
}

export default App
