import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='py-24 text-center space-y-4'>
                
                <div className='space-y-2'>
                    <h1 className='text-[#003EA4] text-3xl'>Auction<span className='text-[#FFD337] font-bold'>Gallery</span></h1>
                    <h1>Bid. Win. Own.</h1>
                </div>

                <div className='flex justify-center text-[14px] gap-8 '>
                    <p>Home</p>
                    <p>Auctions</p>
                    <p>Categories</p>
                    <p>How to works</p>
                </div>

                <h1 className='text-[14px]'>© 2025 AuctionHub. All rights reserved.</h1>

            </div>
        </div>
    );
};

export default Footer;