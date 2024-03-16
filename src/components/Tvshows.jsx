import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import Loading from './partials/Loading';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';

const Tvshows = () => {
    document.title = 'Movie App | TvShows';

    const navigate = useNavigate();

    const [category, setCategory] = useState('airing_today');

    const [tv, setTv] = useState([]);

    const [page, setPage] = useState(1);

    const [hasMore, setHasMore] = useState(true);

    const getTv = async () => {
        try {
            //calling the Api
            const { data } = await axios.get(`/tv/${category}?page=${page}`);

            //saving the new data from api to previous state
            if (data.results.length > 0) {
                setTv((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            // setTv(data.results);
            // console.log(data);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    const refreshHandler = () => {
        if (tv.length === 0) {
            getTv();
        } else {
            setPage(1);
            setTv([]);
            getTv();
        }
    };

    useEffect(() => {
        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return tv.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items-center justify-between">
                <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{' '}
                    TV{' '}
                    <small className="text-sm text-zinc-500">
                        ({category})
                    </small>
                </h1>

                <div className="flex items-center w-[80%]">
                    <Topnav />

                    <Dropdown
                        title="Category"
                        options={[
                          'on_the_air',
                          'popular',
                          'top_rated',
                          'airing_today',
                        ]}
                        func={(e) => setCategory(e.target.value)}
                    />

                    <div className="w-[2%]"></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={tv.length}
                next={getTv}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={tv} title='tv' />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Tvshows;
