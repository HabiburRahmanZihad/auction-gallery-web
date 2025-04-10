import { FaHeart } from "react-icons/fa";

const Auction = ({ card, handleCart, bookedmark }) => {

    return (
        <div>
            <div className='flex justify-between items-center p-8 text-xl border-t-2  
            border-[#EBF0F5] text-[#0E2954] font-semibold'>

                <div className='w-[320px] flex items-center gap-5'>

                    <div className="max-w-[45px] ">
                        <img className=' w-full mx-auto ' src={card.image} alt="" />
                    </div>

                    <h1>{card.title}</h1>

                </div>

                <h1>${card.currentBidPrice}</h1>

                <h1>{card.timeLeft}</h1>

                <button className={`
                    ${bookedmark.find((item) => item.id === card.id)
                        ? 'text-red-600 cursor-not-allowed'
                        : 'text-black cursor-pointer'
                    }
                    `}


                    disabled={bookedmark.find((item) =>
                        item.id === card.id) ? true : false
                    }

                    pointerDisabled={bookedmark.find((item) =>
                        item.id === card.id) ? true : false
                    }
                    onClick={() => handleCart(card)}
                >
                    <FaHeart size={28} />
                </button>

            </div>
        </div>
    );
};

export default Auction;