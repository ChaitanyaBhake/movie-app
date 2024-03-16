import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import Loading from './partials/Loading';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';

const Movies = () => {
    document.title = 'Movie App | Movies';

    const navigate = useNavigate();

    const [category, setCategory] = useState('now_playing');

    const [movie, setMovie] = useState([]);

    const [page, setPage] = useState(1);

    const [hasMore, setHasMore] = useState(true);

    const getMovie = async () => {
        try {
            //calling the Api
            const { data } = await axios.get(
                `/movie/${category}?page=${page}`
            );

            //saving the new data from api to previous state
            if (data.results.length > 0) {
                setMovie((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            // setmovie(data.results);
            // console.log(data);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    const refreshHandler = () => {
        if (movie.length === 0) {
            getMovie();
        } else {
            setPage(1);
            setMovie([]);
            getMovie();
        }
    };

    useEffect(() => {
        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return movie.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items-center justify-between">
                <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{' '}
                    Movie <small className='text-sm text-zinc-500'>({category})</small>
                </h1>

                <div className="flex items-center w-[80%]">
                    <Topnav />

                    <Dropdown
                        title="Category"
                        options={['popular','top_rated','upcoming','now_playing']}
                        func={(e) => setCategory(e.target.value)}
                    />

                    <div className="w-[2%]"></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={getMovie}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={movie} title= 'movie' />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Movies;
