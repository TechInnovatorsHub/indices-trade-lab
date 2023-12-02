import { FaArrowLeft, FaRegCircleUser } from "react-icons/fa6"
import Payment from "./Payment"
import { useState } from "react"

const Deposit = () => {

  const [amount, setAmount] = useState(null)
  const [isSum, setIsSum] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const sum = [
    { id: 1, amount: 50.0 },
    { id: 2, amount: 30.0 },
    { id: 3, amount: 20.0 },
    { id: 4, amount: 10.0 },
  ]

  const handleClickAmount = (id, amount) => {
    setAmount(amount)
    setSelectedButton(id);
    setIsSum(true)

  }

  return (
    <section
      className="min-h-screen bg-[#8B91A8] flex items-center justify-center relative">
      <FaArrowLeft className="absolute left-0 top-2 cursor-pointer" />
      <section
        className="bg-gradient-to-tl from-[#424A61] to-[#253043] p-6 w-fit rounded-[20px] relative m-5">
        <div
          className="flex items-center">
          <FaRegCircleUser className="text-white w-10 h-10" />
          <h3
            className="text-white text-[1.5rem]">
            Account Name
          </h3>
        </div>
        <div
          className="flex justify-between mt-2">
          <p
            className="text-[#929292] text-[1.3rem]"
          >Your Balance</p>
          <h1
            className="text-[1.4rem] text-white font-['Inter'] font-black"
          >$0.00</h1>
        </div>
        <div className="mt-10">
          <h1 className="text-white text-xl">Deposit</h1>
          <p className="text-[#929292] p-3 pb-1">Choose sum</p>
          <div className="grid grid-cols-2 gap-4">
            {sum.map(Amount =>
              <div
                className={`w-[10rem] h-[4rem] border hover:bg-[#929292]/30 cursor-pointer text-white font-black ${selectedButton === Amount.id ? 'bg-yellow-400 border-yellow-500' : '' // Apply bg-yellow-400 to the selected button
                  }`}
                key={Amount.id}
                onClick={(e) => handleClickAmount(Amount.id, Amount.amount)}
              >
                <p className="text-center p-3 text-2xl">
                  ${Amount.amount}
                </p>
              </div>
            )}
          </div>
        </div>
        <div style={isSum ? {}: { pointerEvents: "none", opacity: "0.4" }}>
          <Payment amount={amount} />
        </div>
      </section>
    </section>
  )
}

export default Deposit;
