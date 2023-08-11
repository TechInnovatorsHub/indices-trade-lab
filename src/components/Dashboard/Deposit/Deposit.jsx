import userLogo from "../Assets/user.svg"
import paypal from "../Assets/paypal.svg"
import mpesa from "../Assets/mpesa.svg"
import back from "../Assets/back.svg"

const Deposit = () => {
  
  const sum = [
    {amount: "$50.0"},
    {amount: "$30.0"},
    {amount: "$20.0"},
    {amount: "$10.0"},
  ] 
  
  return (
    <section 
      className="w-full h-[contain] bg-[#8B91A8] absolute">
        <img src={back} width="40px" className="mt-3 mb-0"/>
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
          <h1 className="text-white text-xl ml-12 p-5 pt-3">Deposit</h1> 
          <p className="text-[#929292] p-3 pb-1 ml-12">Choose sum</p>
          <div className="grid grid-cols-2 gap-4 ml-12">  
          {sum.map(Amount => 
              <div
              className="w-[10rem] h-[4rem] border hover:bg-[#929292]/30  cursor-pointer text-white font-black"
              key={Amount.amount}
              >
                <p className="text-center p-3 text-2xl">
                  {Amount.amount}
                </p>
              </div>
          )}
          </div>
        </div>
        <p className="text-[#929292] p-3 pb-1 ml-12">Card  Number</p>
        <input type="password" placeholder="**************" className="text-2 w-[20rem] h-10 ml-14 outline-none border-[.1rem] caret-white text-white border-white bg-[#929292]/30 "/>
        <div className="inline-flex justify-between w-[20rem] ml-14 mt-3">
          <div>
            <p className="text-[#929292] ">Expired</p>
            <input placeholder="MM/WW" className="w-[10rem] mr-11 h-10 mt-2 bg-[#929292]/30 text-white caret-white outline-none border-[.1rem]"/>
          </div>
          <div>
            <p className="text-[#929292]">CXTZWER</p>
            <input placeholder="0000" className="w-[10rem] h-10 mt-2 bg-[#929292]/30 text-white caret-white outline-none border-[.1rem]"/>
          </div>
        </div>
        <div className="inline-flex w-full  mt-10">
          <img src={mpesa} className="w-[5rem] ml-7 cursor-pointer"/>
          <img src={paypal} className="w-[5rem]  ml-[7rem] cursor-pointer"/>
        </div>
      </section>
    </section>
  )
}

export default Deposit;