import { MdOutlineCancel } from "react-icons/md";

const FavCard = ({ card, handleCancleCart }) => {


    return (

        <div>
            <div className='flex gap-2  p-2 border-t-2  
            border-[#EBF0F5] text-[14px] '>


                <div className="max-w-[60px] flex items-center justify-center ">
                    <img className=' w-full mx-auto '
                        src={card.image} alt="" />
                </div>


                <div className='w-[80%]'>
                    <h1>{card.title}</h1>
                    <div className='flex  items-center mt-1 gap-10 '>
                        <h1> ${card.currentBidPrice}</h1>
                        <h1>Bids: {card.bidsCount}</h1>
                    </div>
                </div>

                <button className='w-[5%] cursor-pointer'>
                    <MdOutlineCancel
                        onClick={() => handleCancleCart(card)} />
                </button>

            </div>
        </div>

    );
};

export default FavCard;