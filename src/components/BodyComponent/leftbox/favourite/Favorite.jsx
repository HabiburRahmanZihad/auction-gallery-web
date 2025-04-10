import { CiHeart } from "react-icons/ci";
import FavCard from '../favCard/FavCard';

const Favorite = ({ bookedmark, handleCancleCart, price }) => {

    return (
        <div>

            <div className='flex justify-center items-center p-7 text-3xl  text-[#0f3779] font-semibold'>

                <CiHeart size={25} />

                <h1>Favorite Items</h1>
            </div>

            <div id='initialDiv'>
                <div className=' flex justify-center items-center  text-xl flex-col text-center py-12 gap-4 border-t-2  border-[#EBF0F5] '>
                    <h1 className='text-2xl fon'>No favorites yet</h1>

                    <p className='text-[#0a111dab]'>Click the heart icon on any item <br /> to add it to your favorites</p>
                </div>
            </div>

            <div id='bookedmarkDiv' className='hidden'>
                {
                    bookedmark.map((card) => <FavCard
                        card={card}
                        key={card.id}
                        handleCancleCart={handleCancleCart}
                    ></FavCard>)
                }
            </div>

            <div className='flex justify-between items-center p-7 border-t-2 border-[#EBF0F5] text-xl font-semibold'>
                <h1>Total bids Amount</h1>
                <h1 className='text-3xl font-semibold'>$ {price}</h1>
            </div>

        </div>
    );
};

export default Favorite;