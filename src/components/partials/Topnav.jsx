import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import noImage from '/noImage.jpg';
import { useSelector } from 'react-redux';
import SidenavMobile from './SidenavMobile';

const Topnav = () => {
    const { isSmallScreen } = useSelector((state) => state.layout);
    const [query, setQuery] = useState('');
    const [searches, setSearches] = useState([]);
    const [hamburgerClick, setHamburgerClick] = useState(false);

    const handleHamburgerClick = () => {
        setHamburgerClick(!hamburgerClick);
    };

    // Reset hamburgerClick state when screen size changes
    useEffect(() => {
        setHamburgerClick(false); // Reset to false when screen size changes
    }, [isSmallScreen]);

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
        <div className="lg:w-[80%] w-[90%] h-[10vh] relative lg:flex  flex justify-between mx-auto items-center  ">
            {/* Search Icon */}
            <i className="text-zinc-400  lg:text-3xl text-xl ri-search-line"></i>

            {/* Input Box */}
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                className="lg:w-[50%] w-[80%] text-zinc-200 lg:mx-10 p-5 text-xl outline-none border-none bg-transparent "
                type="text"
                placeholder="Search anything.."
            />

            {/* Close Button */}
            {query.length > 0 && (
                <i
                    onClick={() => setQuery('')}
                    className=" text-zinc-400  lg:text-3xl text-xl ri-close-fill right-0 mr-10 lg:mr-[20%] "
                ></i>
            )}

            {/* HamburgerMenu */}
            {/* HamburgerMenu */}
            {isSmallScreen ? (
                <div onClick={() => handleHamburgerClick()}>
                    {hamburgerClick ? (
                        <i className="text-white ri-menu-unfold-2-line text-2xl" ></i>
                    ) : (
                        <i className="text-white ri-menu-line text-2xl " ></i>
                    )}
                </div>
            ) : (
                ''
            )}

            {hamburgerClick && <SidenavMobile />}

            <div className="absolute z-20 lg:w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
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
