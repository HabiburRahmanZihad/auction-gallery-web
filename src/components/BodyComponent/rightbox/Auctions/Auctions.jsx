import Auction from '../Auction/Auction';



const Auctions = ({ promiseData, handleCart, bookedmark }) => {

    return (
        <div>

            <div className='flex justify-between p-8 text-xl font-bold'>
                <div className='w-[320px]'>Items</div>
                <h1>Current Bid</h1>
                <h1>Time Left</h1>
                <h1>Bid Now</h1>
            </div>

            {
                promiseData.map((card) => <Auction
                    key={card.id}
                    card={card}
                    handleCart={handleCart}
                    bookedmark={bookedmark}
                ></Auction>)
            }
        </div>
    );
};

export default Auctions;