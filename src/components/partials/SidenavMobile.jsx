import React from 'react';
import { Link } from 'react-router-dom';

const SidenavMobile = () => {
    return (
        <div
            className=" absolute top-[100%] z-50  w-[100%] h-[50vh] p-10 overflow-auto rounded-3xl "
            style={{
                background:
                    'black',
                transition: 'background-color 0.3s, color 0.3s',
            }}
        >
            {/*  Vertical Nav     */}
            <h1 className="text-2xl text-white font-bold text-center">
                <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
                <span className="text-2xl">Movie App</span>
            </h1>

            <nav className="flex flex-col items-center justify-center text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className="mr-2 text-[#e6893d] ri-fire-fill "> </i>
                    <h1 className="text-white"> Trending</h1>
                </Link>

                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className="mr-2 text-[#cc46ba] ri-bard-fill"></i>
                    <h1 className="text-white"> Popular</h1>
                </Link>

                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className="mr-2 text-[#4cd1e2] ri-movie-2-fill "></i>{' '}
                    <h1 className="text-white"> Movies</h1>
                </Link>

                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className=" mr-2 text-[#e64b4b] ri-tv-2-line"></i>
                    <h1 className="text-white">Tv Shows</h1>
                </Link>

                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className=" mr-2 text-[#47be6f] ri-team-line"></i>
                    <h1 className="text-white">People</h1>
                </Link>
            </nav>

            <hr className="border-none h-[1px] bg-zinc-400" />

            <nav className="flex flex-col text-zinc-400 text-xl gap-3 items-center">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5 text-center">
                    Website Information
                </h1>

                <Link
                    to="/about"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className="mr-2 text-[#c47830] ri-information-line"></i>{' '}
                    <h1 className="text-white">About Movies App</h1>
                </Link>

                <Link
                    to="/contact"
                    className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex"
                >
                    <i className="mr-2 text-[#35b335] ri-phone-fill"></i>
                    <h1 className="text-white">Contact Us</h1>
                </Link>
            </nav>
        </div>
    );
};

export default SidenavMobile;
