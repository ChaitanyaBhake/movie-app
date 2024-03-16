import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noImage from '/noImage.jpg';

const Topnav = () => {
    const [query, setQuery] = useState('');

    const [searches, setSearches] = useState([]);

    const getSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            // console.log(data.results);
            setSearches(data.results);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    useEffect(() => {
        getSearches();
       // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [query]);

    return (
        <div className="w-[80%] h-[10vh]  relative flex mx-auto items-center ">
            <i className="text-zinc-400  text-3xl ri-search-line"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent "
                type="text"
                placeholder="Search anything.."
            />
            {query.length > 0 && (
                <i
                    onClick={() => setQuery('')}
                    className=" text-zinc-400  text-3xl ri-close-fill right-0"
                ></i>
            )}

            <div className="absolute z-20 w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
                {searches.map((search, index) => (
                    <Link
                        to={`/${search.media_type}/details/${search.id}`}
                        key={index}
                        className="hover:text-black hover:bg-zinc-300 duration-300  font-semibold text-zinc-600 p-10  w-full flex justify-start items-center border-b-2 border-zinc-100"
                    >
                        <img
                            className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                            src={
                                search.backdrop_path ||
                                search.profile_path ||
                                search.poster_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          search.backdrop_path ||
                                          search.profile_path ||
                                          search.poster_path
                                      }`
                                    : noImage
                            }
                            alt=""
                        />
                        <span>
                            {search.name ||
                                search.title ||
                                search.orignal_name ||
                                search.orignal_title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Topnav;
