import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '/noImage.jpg';
import { useSelector } from 'react-redux';

const HorizontalCards = ({ data }) => {

    const {isSmallScreen} = useSelector((state)=> state.layout)
    console.log(isSmallScreen);
    return (
        <div className="w-[100%] flex gap-7  overflow-y-hidden mb-5 p-5">
            {data.length > 0 ? (
                data.map((data, index) => (
                    <Link
                        to={`/${data.media_type}/details/${data.id}`}
                        key={index}
                        className="lg:min-w-[15%] bg-zinc-900  rounded-lg  min-w-[65%]  overflow-auto "
                    >
                        {/* Card Image */}
                        <img
                            className="w-full h-[55%] object-cover rounded-lg"
                            src={
                                data.backdrop_path ||
                                data.profile_path ||
                                data.poster_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          data.backdrop_path ||
                                          data.profile_path ||
                                          data.poster_path
                                      })`
                                    : noImage
                            }
                            alt="Card Image"
                        />

                        {/* Card Heading and Description */}
                        <div className="text-white lg:p-3 lg:h-[45%] p-5  overflow-y-auto">
                            <h1 className="lg:text-[1.3rem]  lg:font-semibold text-[1.rem] font-semibold">
                                {data.name ||
                                    data.title ||
                                    data.orignal_name ||
                                    data.orignal_title}
                            </h1>
                            <p className="mt-3">
                                {isSmallScreen ?data.overview.slice(0,45): data.overview.slice(0, 50)}
                                <span className="text-zinc-500">...more</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <h1 className="text-3xl text-white font-black text-center mt-5">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

export default HorizontalCards;
