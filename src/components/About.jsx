import React from 'react';
import { useNavigate } from 'react-router-dom';
import TvImg from '../../public/tv-fill.svg';

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="w-[100vh] h-[80vh] flex justify-center items-center flex-col  m-auto">
            <h1 className="flex items-center justify-center lg:text-5xl text-3xl font-semibold text-zinc-400 mb-5 ">
                About Movie App{' '}
                <img src={TvImg} className="lg:w-[3rem] w-[2rem] ml-[1rem]" />
            </h1>

            <div className="w-full h-full shadow-lg shadow-[rgba(101,86,205,.3)] mt-5 border-2 border-zinc-700 p-5 list-disc text-zinc-400 overflow-y-auto">
                <div className="hover:bg-zinc-900 hover:text-[#6556CD] rounded-md duration-300 p-2 mb-3">
                    <h1 className="lg:text-3xl text-2xl hover:text-[#7765f0]">
                        Intro
                    </h1>
                    <p className="lg:mb-3 lg:text-2xl text-xl hover:bg-zinc-900 duration-[800ms]  p-5 rounded-lg">
                        Introducing my Movie React app—a one-stop destination
                        for all your cinematic cravings! Say goodbye to endless
                        scrolling and wasted hours hunting for the perfect film
                        or TV show. With the user-friendly interface,
                        discovering your next favorite flick is as easy as a few
                        clicks.
                    </p>
                </div>

                <hr className=" border-none h-[2px] bg-zinc-500" />

                <div className="hover:bg-zinc-900 hover:text-[#53bcc0] rounded-lg duration-300 mt-3 p-2 mb-3">
                    <h1 className="lg:text-3xl text-2xl mt-2 hover:text-[#63e6eb]">
                        Cool Stuff
                    </h1>
                    <p className="lg:text-2xl text-xl p-5  hover:bg-zinc-900 duration-[800ms] rounded-md">
                        Explore a vast library of trailers for movies and TV
                        shows tailored to your tastes. Whether you're into
                        heartwarming romances, gripping thrillers, or
                        laugh-out-loud comedies, I've got you covered. Simply
                        search, find, and start watching the trailers—no hassle,
                        no fuss.
                    </p>
                </div>

                <hr className=" border-none h-[2px] bg-zinc-500" />

                <div className="hover:bg-zinc-900 hover:text-[#c6d634c7] rounded-md duration-300 mt-5 p-2">
                    <h2 className="lg:text-3xl text-2xl mt-2 hover:text-[#e9e963]">
                        Let's Get Trendy
                    </h2>
                    <p className="lg:text-2xl text-xl p-5  hover:bg-zinc-900 duration-[800ms] rounded-md">
                        Stay up-to-date with the latest trends and popular
                        releases, and dive into previous seasons of your
                        favorite TV series for those immersive binge-watching
                        sessions. Plus, with the People Section, discovering
                        your favorite actors' work has never been simpler.
                        Explore their filmography, characters, and more—all in
                        one place.
                    </p>
                </div>
            </div>
            <button
                onClick={() => navigate(-1)}
                className="lg:mt-4 lg:px-4 lg:py-3 mt-3 px-2 py-2 bg-[#6556CD] rounded-lg hover:text-white text-2xl"
            >
                Explore Now! <i className="ri-arrow-right-line"></i>
            </button>
        </div>
    );
};

export default About;
