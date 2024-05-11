import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Error404 from './Error404';

const TrailerMobile = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const ytvideo = useSelector((state) => state[category].info.videos);
    return (
        <div className="absolute z-[100] top-0 left-0 bg-[rgba(0,0,0,.9)] h-screen w-screen flex flex-col items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] absolute ri-close-fill text-3xl text-white right-[5%] top-[5%]"
            ></Link>

            {ytvideo ? (
                <div className="w-full">
                    <ReactPlayer
                        style={{ borderRadius: '40px', overflow: 'hidden' }}
                        controls={true}
                        width="100%"
                        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                    />
                </div>
            ) : (
                <Error404 />
            )}
        </div>
    );
};

export default TrailerMobile;
