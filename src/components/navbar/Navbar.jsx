import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">

                <div className="navbar-start">
                    <div><h1 className='text-[#003EA4] text-3xl'>Auction<span className='text-[#FFD337] font-bold'>Gallery</span></h1></div>
                </div>

                <div className="navbar-center gap-8">
                    <h1 className=" text-xl">Home</h1>
                    <h1 className=" text-xl">Auctions</h1>
                    <h1 className=" text-xl">Categories</h1>
                    <h1 className=" text-xl">How to works</h1>
                </div>

                <div className="navbar-end gap-4 pr-10">
                    <div className="btn btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </div>
                    <div className="btn  btn-circle ">
                        <img
                            className='rounded-full'
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;