import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {

  const navigate = useNavigate()
    return (
        <div className="w-[100vh] h-[80vh] flex justify-center items-center flex-col  m-auto">
            <h1 className="text-5xl font-semibold text-zinc-400 mb-5 ">
                About Movie App
            </h1>
            <div className="w-full h-full shadow-lg shadow-[rgba(101,86,205,.3)] mt-5 border-2 border-zinc-700 p-5 list-disc text-zinc-400 overflow-y-auto">
                <div className="hover:bg-zinc-900 hover:text-[#6556CD] rounded-md duration-300 p-2 mb-3">
                    <h1 className="text-3xl hover:text-[#7765f0]">Intro</h1>
                    <p className="mb-3 text-2xl hover:bg-zinc-900 duration-[800ms]  p-5 rounded-lg">
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
                    <h1 className="text-3xl mt-2 hover:text-[#63e6eb]">
                        Cool Stuff
                    </h1>
                    <p className="text-2xl p-5  hover:bg-zinc-900 duration-[800ms] rounded-md">
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
                    <h2 className="text-3xl mt-2 hover:text-[#e9e963]">
                        Let's Get Trendy
                    </h2>
                    <p className="text-2xl p-5  hover:bg-zinc-900 duration-[800ms] rounded-md">
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
            <button onClick={()=>navigate(-1)} className="mt-4 px-4 py-3 bg-[#6556CD] rounded-lg hover:text-white text-2xl">Explore Now! <i className="ri-arrow-right-line"></i></button>
            
        </div>
    );
};

export default About;
