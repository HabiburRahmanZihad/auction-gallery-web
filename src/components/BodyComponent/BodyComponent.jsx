import React, { useEffect, useState } from 'react';


import Auctions from './rightbox/Auctions/Auctions';
import Favorite from './leftbox/favourite/Favorite';
import { ToastContainer, toast } from 'react-toastify';


const BodyComponent = () => {

    // const promiseData = fetch('data.json')
    //     .then((res) => res.json())

    const [promiseData, setPromiseData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setPromiseData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])


    const [bookedmark, setBookedmark] = useState([]);
    const [price, setPrice] = useState(0);


    const bookedmarkDiv = document.getElementById('bookedmarkDiv');
    const initialDiv = document.getElementById('initialDiv');

    const handleCart = (card) => {
        const newBookedmark = [...bookedmark, card];
        setBookedmark(newBookedmark);
        initialDiv.style.display = 'none';
        bookedmarkDiv.style.display = 'block';

        const totalPrice = newBookedmark.reduce((acc, item) =>
            acc + item.currentBidPrice, 0);
        setPrice(totalPrice);

        // const newAmount = price + card.currentBidPrice;
        // setPrice(newAmount);
        toast.success(' 🦄 Item Added to Your Favourite Lists', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleCancleCart = (card) => {
        const newBookedmark = bookedmark.filter((item) => item.id !== card.id);
        setBookedmark(newBookedmark);
        if (newBookedmark.length === 0) {
            bookedmarkDiv.style.display = 'none';
            initialDiv.style.display = 'block';
        }

        const totalPrice = newBookedmark.reduce((acc, item) =>
            acc + item.currentBidPrice, 0);
        setPrice(totalPrice);

        // const newAmount = price - card.currentBidPrice;
        // setPrice(newAmount);
        toast.warn(' 🦄 Item Removed From Favourites', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }





    return (
        <div className='max-w-[90%] mx-auto'>
            <div className='space-y-2'>
                <h1 id='auctions' className='text-3xl font-medium text-[#0a111dd0]'>Active Auctions</h1>
                <p className='text-xl'>Discover and bid on extraordinary items</p>
            </div>



            <div className='flex justify-center  gap-10 mt-10'>

                <div className='w-[70%] bg-white rounded-3xl'>
                    <Auctions
                        promiseData={promiseData}
                        handleCart={handleCart}
                        bookedmark={bookedmark}
                    ></Auctions>
                    <ToastContainer />
                </div>


                <div className='w-[30%] bg-white rounded-3xl'>
                    <div >
                        <Favorite
                            bookedmark={bookedmark}
                            handleCancleCart={handleCancleCart}
                            price={price}

                        ></Favorite>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BodyComponent;