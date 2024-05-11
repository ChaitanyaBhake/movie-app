import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    // console.log(data);

    const {isSmallScreen} = useSelector((state) => state.layout)
    
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path || data.poster_path
                })`,
                backgroundPosition: 'top 20%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
        >
            {/* Heading for Hero Movie */}
            <h1 className="lg:w-[70%] lg:text-5xl text-2xl font-black text-white">
                {data.name ||
                    data.title ||
                    data.orignal_name ||
                    data.orignal_title}
            </h1>

            {/* Overview of Hero Section Movie */}
            <p className="lg:w-[70%] mt-3 text-white mb-3 ">
                {isSmallScreen ? data.overview.slice(0, 100) : data.overview.slice(0, 200)}
                <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">...more</Link>
            </p>

            <p className='text-white'>
                <i className="text-yellow-500 ri-megaphone-fill"></i>{data.release_date || data.first_air_date}
                <i className="ml-5 text-yellow-500 ri-album-fill"></i>{data.media_type.toUpperCase()}
            </p>

            {/* Trailer Button of Hero Section */}
            <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='lg:p-4 lg:mt-5 p-2 mt-4 rounded text-white bg-[#6556CD]'>
                    Watch Trailer
            </Link>
        </div>
    );
};

export default Header;
