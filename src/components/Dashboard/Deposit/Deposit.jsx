import userLogo from "../Assets/user.svg"

const Deposit = () => {
  
  const sum = [
    {amount: "$50.0"},
    {amount: "$30.0"},
    {amount: "$50.0"},
    {amount: "$10.0"},
  ] 
  
  return (
    <section 
      className="w-full h-[contain] bg-[#8B91A8] absolute">
      <section 
        className="bg-gradient-to-tl from-[#424A61] to-[#253043] w-[500px] ml-[450px] mt-4 rounded-[20px] mb-5 h-[750px] relative">
        <div 
          className="inline-flex flex-row flex-space">
          <img 
            className="w-10 m-4 mr-2" 
            src={userLogo}
          />
          <h3 
            className="text-white text-[1.5rem] mt-6">
              Account Name
          </h3>
        </div>
        <div 
          className="inline-flex justify-between mt-[70px] absolute ml-[-160px] w-full">
          <p
            className="text-[#929292] text-[1.3rem]"
          >Your Balance</p>
          <h1
            className="mr-[200px] text-[1.4rem] text-white font-['Inter'] font-black relative"
          >$0.00</h1>
        </div>
        <div className="mt-[60px] relative">
          <h1>Deposit</h1> 
          <div className="grid grid-cols-2 gap-4 ml-12">  
          {sum.map(Amount => 
              <div
              className="w-[10rem] h-[4rem] border"
              key={Amount.amount}
              >
                {Amount.amount}
              </div>
          )}
          </div>
        </div>
        <p>Card  Number</p>
        <input type="text"/>
        <p>Expired</p>
        <p>MM/WW</p>
        <p>CXTZWER</p>
        <p>0000</p>
      </section>
    </section>
  )
}

export default Deposit;