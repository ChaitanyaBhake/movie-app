import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './partials/Loading';

const Home = () => {
    document.title = 'Movie App | Homepage';
    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState('all');

    const getHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomData =
                data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomData);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    useEffect(() => {
        !wallpaper && getHeaderWallpaper();
        getTrending();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    // console.log(trending);

    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className="lg:w-[80%] w-full h-full overflow-auto  overflow-x-hidden">
                <Topnav />
                <Header data={wallpaper} />

                {/* Trending Heading Hero Section */}
                <div className="lg:flex lg:justify-between lg:p-10 flex justify-between p-8 gap-20  ">
                    <h1 className=" lg:text-3xl text-2xl font-semi-bold text-zinc-400">
                        Trending
                    </h1>

                    {/* Filter DropDown */}
                    <Dropdown
                        title="Filter"
                        options={['tv', 'movie', 'all']}
                        func={(e) => setCategory(e.target.value)}
                    />
                </div>
                
                {/* Horizontal Cards */}
                <HorizontalCards data={trending} />
            </div>
        </>
    ) : (
        <h1><Loading/></h1>
    );
};

export default Home;
