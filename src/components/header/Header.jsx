import React from 'react';

const Header = () => {
    return (
        <>
            <div className='bg-[url("https://i.ibb.co.com/m5KXh7kP/Banner-min.jpg")] bg-cover bg-center h-[500px]'>

                <div className='py-50 pl-32 '>

                    <h1 className='text-5xl text-white font-semibold '>Bid on Unique Items from <br /> Around the World</h1>

                    <p className='text-2xl font-light text-[#ffffffbe] my-6'>Discover rare collectibles, luxury goods, and vintage <br />  treasures in our curated auctions</p>

                    <a href='#auctions' className='btn bg-white text-black px-4 py-2 rounded-3xl hover:bg-[#003EA4] hover:text-white'>Explore Auctions</a>

                </div>

            </div>
        </>
    );
};

export default Header;