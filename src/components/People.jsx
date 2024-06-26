import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import Loading from './partials/Loading';
import Cards from './partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './partials/Topnav';

const People = () => {
    document.title = 'Movie App | People';

    const navigate = useNavigate();

    const [category, setCategory] = useState('popular');

    const [person, setPerson] = useState([]);

    const [page, setPage] = useState(1);

    const [hasMore, setHasMore] = useState(true);

    const getPerson = async () => {
        try {
            //calling the Api
            const { data } = await axios.get(
                `/person/${category}?page=${page}`
            );

            //saving the new data from api to previous state
            if (data.results.length > 0) {
                setPerson((prevState) => [...prevState, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            // setPerson(data.results);
            // console.log(data);
        } catch (error) {
            console.log('Error:  ', error);
        }
    };

    const refreshHandler = () => {
        if (person.length === 0) {
            getPerson();
        } else {
            setPage(1);
            setPerson([]);
            getPerson();
        }
    };

    useEffect(() => {
        refreshHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

    return person.length > 0 ? (
        <div className=" w-screen h-screen ">
            <div className="px-[5%] w-full  flex items-center justify-between">
                <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{' '}
                    <span className='lg:text-2xl  top-14 left-5 text-sm  '>People</span>
                </h1>

                <div className="flex items-center w-[80%]">
                    <Topnav />

                    <div className="w-[2%]"></div>
                </div>
            </div>

            <InfiniteScroll
                dataLength={person.length}
                next={getPerson}
                hasMore={hasMore}
                loader={<h1>Loading..</h1>}
            >
                <Cards data={person} title="person" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default People;
