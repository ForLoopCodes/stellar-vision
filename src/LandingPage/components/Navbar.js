import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  const navigation = [
    { navi: "Home", to: "/" },
    // { navi: "Work", to: "/work" },
    // { navi: "Contact", to: "/contact" },
    { navi: "Register", to: "/register"},
    { navi: "Location", to: "/location"}
    
  ];
  const socials =[
    {  soc : "ri-facebook-circle-fill" ,src : "https://www.facebook.com" },
    { soc : "ri-twitter-fill" ,src : "https://www.twitter.com"}
  ]
  return (
    <>
    <nav className="top-0 left-0 grid col-span-12 justify-between items-center bg-[#333] px-2 z-1000">
        <div className="grid grid-cols-4 col-start-3 px-2 ">
          <div className="flex justify-center items-center px-4 py-2 border-r-[1px] border-[#47433D] hover:bg-[#000]">
            <img
              src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png"
              className="w-[90px]"
            />
          </div>
          {navigation.map((element) => (
            <Link to={element.to} className="flex justify-center items-center px-8 border-r-[1px] border-[#47433D] hover:bg-[#000]">
              <div className="text-white text-base uppercase font-[300]">{element.navi}</div>
            </Link>

          ))}
        </div>
        <div className="grid grid-cols-4 col-start-10 col-span-3">
          {
            socials.map((element)=>(
              <Link
						   to={element.src}
						   className="flex justify-center items-center px-2 border-[#47433D] hover:bg-[#000] hover:rounded-3xl">
						   <div className="text-white text-xl uppercase">
							  <i class={element.soc}></i>
						   </div>
					    </Link>
            ))
          }
        </div>
      </nav>
      </>
  )
}

export default Navbar
