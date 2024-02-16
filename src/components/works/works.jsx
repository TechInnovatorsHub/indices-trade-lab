import { useState,useEffect } from 'react';
import './Works.css';
import {Each} from './Each';
import im1 from './assets/1.svg';
import im2 from './assets/2.svg';
import im3 from './assets/3.svg';
import im4 from './assets/4.svg';

const Works=()=>{
    const companie = [
        {id: 1, title: 'Expert Guidance',  text: "Our team comprises seasoned professionals with years of experience in forex trading.", image: ⁠ ${im1} ⁠},
        {id: 2, title: 'Comprehensive Resources',  text: "Gain access to a wealth of educational materials, including tutorials, webinars, and market analysis reports.", image: ⁠ ${im2} ⁠},
        {id: 3, title: 'Cutting-Edge Technology',  text: "Take advantage of state-of-the-art trading platforms and tools designed to optimize your trading experience.", image: ⁠ ${im3} ⁠},
        {id: 4, title: '24/7 Support',  text: "Our dedicated support team is available round-the-clock to address any questions or concerns you may have.", image: ⁠ ${im4} ⁠}
        
    ]

    const start = [
        {id: 1, text: 'Register account'},
        {id: 2, text: 'Fund your account'},
        {id: 3, text: 'Start your trade'}
    ]


    return(
        // <h1>HI</h1>
        <div className='flex justify-center flex-col items-center'>
        <ul className=" flex flex-wrap justify-center" >
            <Each of={companie} render = {(item, index) =>
            <div className="flex items-center text-center max-[30rem] lg:items-start lg:text-left lg:w-[35rem] mb-[5rem] tex-center  w-4/5 flex-col  lg:flex-row  sm:justify-center" >
                <img className="w-[4rem] mx-10 h-[4rem]" src={⁠ ${item.image} ⁠}/>
                <div>
                 <li className='font-bold text-[30px]'>{` ${item.title}`}</li>
                 <li className='text-neutral-500'>{` ${item.text}`}</li>
                 <a href=''><h3 className='font-bold text-neutral-400'>Learn more --</h3></a>
                </div>
            </div>
            
             } />
            </ul>
            <div className='start mb-20 flex flex-col w-4/5 lg:w-3/5 items-center  border-solid border-2 border-neutral-300 rounded-lg text-center'>
                
                <h1 className='absolute text-red-600 bg-white px-5 py-2 max-w-4/5 m-[-1rem] font-bold text-2xl'>Simple steps to start trade.</h1>
                
                <div className='w-4/5 flex flex-wrap justify-center  lg:justify-between items-center'>
                <Each of={start} render = {(item, index)=>
                    <div className='m-[1rem]'>
                        <h1 className='border-2 border-red-400 mb-5 rounded-full text-center w-[3rem] h-[3rem] font-black flex items-center justify-center text-red-400 text-xl m-10'>{⁠ ${item.id} ⁠}</h1>
                        <h1 className='text-black opacity-100s text-l mb-5 font-bold'>{⁠ ${item.text} ⁠}</h1>
                    </div>
                
            }/>
            </div>
            </div>
            </div>
    );
}

export default Works;