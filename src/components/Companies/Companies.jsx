import Amazon from './assets/amazon.svg'
import down from './assets/down.svg'
import Forbes from './assets/forbes.svg'
import Tesla from './assets/tesla.svg'
import up from './assets/up.svg'

import Google from './assets/google.svg'
import Microsoft from './assets/microsoft.svg'

function Companies() {
    return (
        <section 
        style={{
            background: 'linear-gradient(0deg, rgb(33, 34, 36) 65%, rgba(33, 34, 36, 0.3) 100%)',
        }}
        className="pl-[5rem] pt-[6rem] w-full  z-20 h-[13rem] p-2 flex gap-[4rem] relative bottom-[5.8rem] ">
            <div className="relative flex align-center flex-wrap h-[2rem]">
                <img src={Tesla} className="w-[5rem]" />
                <div className="bg-[#ee4f6f] text-[#772838] w-[fit-content] p-[0.1rem] flex justify-center items-center rounded h-[1.5rem] relative left-4 top-7">
                    <img src={down} className="w-3 opacity-70 mr-2 ml-2" />
                    <span className="mr-2 text-sm ">20,330.7</span>
                </div>
            </div>

            <div className="relative flex align-center flex-wrap h-[2rem]">
                <img src={Amazon} className="w-[5rem]" />
                <div className="bg-[#2ecc71] text-[#176639] w-[fit-content] p-[0.1rem] flex justify-center items-center rounded h-[1.5rem] relative left-4 top-7">
                    <img src={up} className="w-5 opacity-70 mr-2 ml-1" />
                    <span className="mr-2 text-sm ">60,330.7</span>
                </div>
            </div>
            <div className="relative flex align-center flex-wrap h-[2rem]">
                <img src={Forbes} className="w-[5rem]" />
                <div className="bg-[#ee4f6f] text-[#772838] w-[fit-content] p-[0.1rem] flex justify-center items-center rounded h-[1.5rem] relative left-4 top-7">
                    <img src={down} className="w-3 opacity-70 mr-2 ml-2" />
                    <span className="mr-2 text-sm ">20,330.7</span>
                </div>
            </div>
            <div className="relative flex align-center flex-wrap h-[2rem]">
                <img src={Google} className="w-[5rem]" />
                <div className="bg-[#ee4f6f] text-[#772838] w-[fit-content] p-[0.1rem] flex justify-center items-center rounded h-[1.5rem] relative left-4 top-7">
                    <img src={down} className="w-3 opacity-70 mr-2 ml-2" />
                    <span className="mr-2 text-sm ">20,330.7</span>
                </div>
            </div>
            <div className="relative flex align-center flex-wrap h-[2rem]">
                <img src={Microsoft} className="w-[5rem]" />
                <div className="bg-[#2ecc71] text-[#176639] w-[fit-content] p-[0.1rem] flex justify-center items-center rounded h-[1.5rem] relative left-4 top-7">
                    <img src={up} className="w-5 opacity-70 mr-2 ml-1" />
                    <span className="mr-2 text-sm ">20,330.7</span>
                </div>
            </div>
        </section>
    )
}

export default Companies
