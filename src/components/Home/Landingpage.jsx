// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'
import Works from '../Companies/Companies'
import bgImage from "./assets/hero-bg.svg"
import heroImage1 from "./assets/heroImage1.svg"



const Landingpage = () => {

  return (
    <section
      className="hero1 h-[105vh] bg-zinc-950/90 text-xl text-white pt-[7rem] pl-[4rem] after:content[''] 
        after:absolute after:top-0 after:left-0
        after:z-10 after:w-[100%] after:h-[100%] after:opacity-100
        after:bg-[url('src/components/Home/assets/in-liquid-slide-bg.png')] 
        after:bg-no-repeat after:bg-cover overflow-hidden"
    >
      <section className="slider flex">
        <div className="content relative top-[8rem]">
          <h1 className="text-5xl mb-3 font-bold">
            New standard <br />in stock broker.
          </h1>
          <p className="text-2xl">
            Trade forex, commodities, synthetic <br /> and
            stock indices from a single account
          </p>
          <NavLink
            to="/signup"
            className="flex bg-none w-[15rem] hover:bg-[#FC5B3F] hover:text-white text-[#FC5B3F]
                      text-lg border border-[#FC5B3F] rounded-lg p-[0.5rem] 
                      justify-center items-center h-[3rem] relative top-4 z-20"
          >
            Get Started
          </NavLink>
        </div>

        <div className="image">
          <img src={heroImage1} className="w-[50rem] relative right-[-10%] bottom-[5%] z-20" />
        </div>
      </section>
    </section>

  )
}

export default Landingpage;