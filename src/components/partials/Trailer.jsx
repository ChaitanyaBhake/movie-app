import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Error404 from './Error404';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const ytvideo = useSelector((state) => state[category].info.videos);
    console.log(ytvideo);

    return (
        <div className="absolute z-[100] top-0 left-0 bg-[rgba(0,0,0,.9)] h-screen w-screen flex items-center justify-center">
            <Link
                onClick={() => navigate(-1)}
                className="hover:text-[#6556CD] absolute ri-close-fill text-3xl text-white right-[5%] top-[5%]"
            ></Link>

            {ytvideo ? (
                <ReactPlayer
                    style={{ borderRadius: '40px', overflow: 'hidden' }}
                    controls={true}
                    height={800}
                    width={1500}
                    url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
                />
            ) : (
                <Error404 />
            )}
        </div>
    );
};

export default Trailer;
