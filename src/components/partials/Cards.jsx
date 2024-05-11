import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '/noImage.jpg';


const Cards = ({ data, title }) => {
    return (
        <div className="lg:flex lg:flex-wrap flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24] justify-center mt-5 ">
            {data.map((card, index) => (
                <Link
                    to={`/${card.media_type || title}/details/${card.id}`}
                    className="relative lg:w-[25vh] md:w-[25%] w-[75%] mr-[5%]  mb-[5%]"
                    key={index}
                >
                    <img
                        className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[auto]  object-cover rounded-lg"
                        src={
                            card.poster_path ||
                            card.backdrop_path ||
                            card.profile_path
                                ? `https://image.tmdb.org/t/p/original/${
                                      card.poster_path ||
                                      card.backdrop_path ||
                                      card.profile_path
                                  }`
                                : noImage
                        }
                        alt=""
                    />

                    <h1 className="lg:text-2xl text-xl text-zinc-300 mt-3 font-semibold">
                        {card.name ||
                            card.title ||
                            card.orignal_name ||
                            card.orignal_title}
                    </h1>

                    {card.vote_average && (
                        <div className="review absolute lg:right-[-10%] lg:bottom-[25%] right-[0.1rem] bottom-[4rem] text-xl font-semibold text-white bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center rounded-full ">
                            {(card.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default Cards;
