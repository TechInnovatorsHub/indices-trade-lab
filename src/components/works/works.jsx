import './works.css'
import { Each } from './Each'
import im1 from './assets/1.svg'
import im2 from './assets/2.svg'
import im3 from './assets/3.svg'
import im4 from './assets/4.svg'

const Works=()=>{
    const companie = [
        {
            id: 1,
            title: 'Expert Guidance',
            text: "Our team comprises seasoned professionals with years of experience in\
            forex trading. We provide personalized guidance tailored to your specific goals and risk \
            tolerance, ensuring you make informed decisions every step of the way..",
            image: `${im1}`
        },
        { 
            id: 2, 
            title: 'Comprehensive Resources', 
            text: "Gain access to a wealth of educational materials, including \
            tutorials, webinars, and market analysis reports. Whether you're a \
            novice trader or an experienced investor, our resources will empower you to \
            enhance your trading skills and stay ahead of the curve.", 
            image: `${im2}` 
        },
        { 
            id: 3, 
            title: 'Cutting-Edge Technology', 
            text: "Take advantage of state-of-the-art \
            trading platforms and tools designed to optimize \
            your trading experience. From advanced charting \
            features to real-time market data, our technology ensures \
            you have the competitive edge necessary to succeed in the \
            forex market.", 
            image: `${im3}` 
        },
        { 
            id: 4, 
            title: '24/7 Support', 
            text: "Our dedicated support team is available \
            round-the-clock to address any questions or concerns \
            you may have. Whether you need assistance with platform \
            navigation or market analysis, we're here to provide timely\
            and responsive support whenever you need it.", 
            image: `${im4}` 
        }
        
    ]


    return(
        // <h1>HI</h1>
        <div className='flex justify-center p-4'>
        <ul className=" flex flex-wrap justify-center" >
            <Each of={companie} render = {(item, index) =>
            <div className="lg:flex lg:w-[35rem] m-5 " >
                <img className="w-[4rem] mx-10 h-[4rem]" src={`${item.image}`}/>
                <div>
                <li className='font-bold text-[30px]'>{` ${item.title}`}</li>
                <li>{` ${item.text}`}</li>
                </div>
            </div>
            
            } />
            </ul>
            </div>
    )
}

export default Works