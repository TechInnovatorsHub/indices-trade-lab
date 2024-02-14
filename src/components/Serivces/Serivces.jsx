import Business from './assets/BusinessPlan.svg'
import Business1 from './assets/BusinessPlan1.svg'
import Business2 from './assets/BusinessPlan2.svg'

const Serivces = () => {

  const Businez = [
    {
      id: 1,
      title: 'Various assets',
      image: `${Business}`,
      content: "Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat\
      nulla pariatur."
    },

    {
      id: 2,
      title: 'Market analysis',
      image: `${Business1}`,
      content: "Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat\
      nulla pariatur"
    },

    {
      id: 3,
      title: 'Enhanced tools',
      image: `${Business2}`,
      content: "Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat\
      nulla pariatur"
    },
  ]

  return (
    <section className="relative bottom-[5.8rem] bg-[#101112] h-[fit-content] p-3 overflow-hidden">
      <section className="flex justify-between p-3 h-[7rem] items-center">
        <h1 className="ml-7 text-2xl font-extrabold w-[26rem] text-white">
          Save time. <span className="text-[#fc5b3f]">Get higher return. </span>Multiply wealth.
        </h1>
        <button className="border-2 rounded-lg border-[#fc5b3f] p-2 w-[10rem] h-[3rem] text-[#fc5b3f]">
          Learn More
        </button>
      </section>

      <section className="flex flex-1 flex-wrap p-[1rem] gap-6 ml-7">
        {Businez.map(item => (
          <div key={item.id} className="relative w-[25rem] h-[25rem] rounded-lg overflow-hidden bg-[#212224]">
            <img src={item.image} className="w-[19rem] absolute top-[-10%] right-[-15%]" />
            <div className="absolute bottom-10 p-3 z-10">
              <h4 className="text-2xl font-extrabold text-white">{item.title}</h4>
              <p className="text-lg font-bold text-white/60">{item.content}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Serivces