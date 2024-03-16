import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from '../utils/axios';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import Cards from './partials/Cards';
import Loading from './partials/Loading';

const Trending = () => {
    document.title = 'Movie App | Trending'
    const navigate = useNavigate();
    const [category, setCategory] = useState('all');
    const [duration, setDuration] = useState('day');
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    

    const getTrending = async () => {
        try {
            //calling the Api
            const { data } = await axios.get(
                `/trending/${category}/${duration}?page=${page}`
            );
            
            //saving the new data from api to previous state
            if (data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            // setTrending(data.results);
            // console.log(data);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    const refreshHandler = () => {
        if (trending.length === 0) {
            getTrending();
        } else {
            setPage(1);
            setTrending([]);
            getTrending();
        }
    };

    useEffect(() => {
        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, duration]);

    // console.log(trending);

    return trending.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items-center justify-between">
                <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{' '}
                    Trending
                </h1>

                <div className="flex items-center w-[80%]">
                    
                    <Topnav />

                    <Dropdown
                        title="Category"
                        options={['movie', 'tv', 'all']}
                        func={(e) => setCategory(e.target.value)}
                    />

                    <div className="w-[2%]"></div>

                    <Dropdown
                        title="Duration"
                        options={['week', 'day']}
                        func={(e) => setDuration(e.target.value)}
                    />
                </div>
            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={getTrending}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Trending;
