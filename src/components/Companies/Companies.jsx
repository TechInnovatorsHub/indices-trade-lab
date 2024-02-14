import Amazon from './assets/amazon.svg'
import down from './assets/down.svg'
import Forbes from './assets/forbes.svg'
import Tesla from './assets/tesla.svg'
import up from './assets/up.svg'

import Google from './assets/google.svg'
import Microsoft from './assets/microsoft.svg'

function Companies() {

    const companies = [
        {id: 1, title: 'Amazon', logo: `${Amazon}`, value: "20,330.7", status: 'up'},
        {id: 2, title: 'Forbes', logo: `${Forbes}`, value: "60,330.7", status: 'down'},
        {id: 3, title: 'Tesla', logo: `${Tesla}`, value: "2,030.7", status: 'up'},
        {id: 4, title: 'Google', logo: `${Google}`, value: "203,300.7", status: 'down'},
        {id: 5, title: 'Microsoft', logo: `${Microsoft}`, value: "10,000.1", status: 'down'}
    ]

    return (
        <section 
            style={{
                background: 'linear-gradient(0deg, rgb(33, 34, 36) 65%, rgba(33, 34, 36, 0.3) 100%)',
            }}
            className="pl-[5rem] pt-[6rem] w-full  z-20 h-[13rem] p-2 flex gap-[4rem] relative bottom-[5.8rem] "
        >

            {companies.map(item => (
                <div key={item.id} className="relative flex align-center flex-wrap h-[2rem]">
                    <img src={item.logo} className="w-[5rem]" />
                    <div className={`${item.status === 'up' ? 'bg-[#2ecc71] text-[#176639]' : 'bg-[#ee4f6f] text-[#772838]'} w-[fit-content] p-[0.1rem] flex justify-center items-center rounded h-[1.5rem] relative left-4 top-7`}>
                        {item.status === 'up' ?
                            <img src={up} className="w-3 opacity-70 mr-2 ml-1"/>
                            :
                            <img src={down} className="w-3 opacity-70 mr-2 ml-2" />
                        }
                        <span className="mr-2 text-sm ">{item.value}</span>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Companies
