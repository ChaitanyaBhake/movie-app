import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <div className="lg:w-[20%] md:w-[20%] xl:w-[20%] lg:block md:block xl:block hidden h-full  border-r-2 border-zinc-400 p-10 overflow-auto ">
            {/*  Vertical Nav     */}
            <h1 className="text-2xl text-white font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
                <span className="text-2xl ">Movie App</span>
            </h1>

            <nav className="lg:flex lg:flex-col flex flex-col md:items-center text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className="text-[#e6893d] ri-fire-fill"></i>{' '}
                    <span className="text-2xl">Trending</span>
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className="mr-2 text-[#cc46ba] ri-bard-fill"></i>
                    <span className="text-2xl">Popular</span>
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className="mr-2 text-[#4cd1e2] ri-movie-2-fill"></i>
                    <span className="text-2xl">Movies</span>
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className=" mr-2 text-[#e64b4b] ri-tv-2-line"></i>
                    <span className="text-2xl">Tv Shows</span>
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className=" mr-2 text-[#47be6f] ri-team-line"></i>
                    <span className="text-2xl">People</span>
                </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400" />

            <nav className="flex flex-col md:items-center text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-2xl mt-10 mb-5">
                    Website Information
                </h1>
                <Link
                    to="/about"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className="mr-2 text-[#c47830] ri-information-line"></i>
                    <span className="text-2xl">About Movie App</span>
                </Link>
                <Link
                    to="/contact"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5"
                >
                    <i className="mr-2 text-[#35b335] ri-phone-fill"></i><span className="text-2xl">Contact Us</span>
                  
                </Link>
            </nav>
        </div>
    );
};

export default Sidenav;
