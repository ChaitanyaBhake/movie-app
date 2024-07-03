import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadMovie, removeMovie } from '../store/actions/movieActions';
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import Loading from './partials/Loading';
import HorizontalCards from './partials/HorizontalCards';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { info } = useSelector((state) => state.movie);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(asyncLoadMovie(id));
        return () => {
            dispatch(removeMovie());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    function convertMinutesToHoursAndMinutes(minutes) {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;
        return hours + ' hours and ' + remainingMinutes + ' minutes';
    }

    return info ? (
        <div
            style={{
                position: "absolute",
                top:0,
                left:0,
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
                    info.detail.backdrop_path || info.detail.poster_path
                })`,
                backgroundPosition: 'top 20%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                
            }}
            className="relative w-screen  lg:px-[10%] px-[5%]"
        >
            {/* //Part-1 Navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-xl items-center">
                {/* BackArrow */}
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>

                {/* Movie Official Page */}
                <a target="_blank" href={info.detail.homepage}>
                    <i className="hover:text-[#56cd5c] ri-external-link-fill"></i>
                </a>

                {/* WikiPedia */}
                <a
                    target="_blank"
                    href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                    <i className="hover:text-[#3caed1] ri-earth-fill"></i>
                </a>

                {/* IMDB rating */}
                <a
                    target="_blank"
                    href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
                    className='lg:w-12 lg:h-12 w-10 h-10'
                >
                    <img src="/imdb.png" alt="" />
                </a>
            </nav>

            {/* //Part-2 Poster and Details */}
            <div className="w-full lg:flex-row inline-flex flex-col items-center ">
                <img
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover rounded-lg "
                    src={`https://image.tmdb.org/t/p/original/${
                        info.detail.poster_path ||
                        info.detail.backdrop_path ||
                        info.detail.profile_path
                    }`}
                    alt=""
                />

                <div className="content lg:ml-[5%] text-white mt-2">
                    {/* Title */}
                    <h1 className="lg:text-5xl text-3xl font-black text-white mt-4  ">
                        {info.detail.name ||
                            info.detail.title ||
                            info.detail.orignal_name ||
                            info.detail.orignal_title}

                        <small className="text-2xl font-bold text-zinc-200">
                            ({info.detail.release_date.split('-')[0]})
                        </small>
                    </h1>

                    {/* Rating  ,Release Date, Genre , Duration */}
                    <div className="flex text-white items-center gap-x-4 mt-3 mb-5">
                        <span className="review  text-xl font-semibold text-white bg-yellow-600 lg:w-[5vh] lg:h-[5vh] flex justify-center items-center rounded-full px-1 py-2  ">
                            {(info.detail.vote_average * 10).toFixed()}{' '}
                            <sup>%</sup>
                        </span>


                        <h1 className="w-[60px] font-semibold lg:text-2xl text-xl leading-6">
                            User Score
                        </h1>

                        {/* Date */}
                        <h1 className=" ">{info.detail.release_date}</h1>

                        {/* Genres     */}
                        <h1>
                            {info.detail.genres
                                .map((g, i) => g.name)
                                .join(', ')}
                        </h1>

                        {/* Runtime */}
                        <h1>
                            {info.detail.runtime
                                ? [
                                      convertMinutesToHoursAndMinutes(
                                          info.detail.runtime
                                      ),
                                  ]
                                : 'Not Available'}
                        </h1>
                    </div>

                    {/* Tagline */}
                    <h1 className="text-xl font-semibold italic text-zinc-200">
                        {info.detail.tagline}
                    </h1>

                    {/* Overview */}
                    <h1 className="text-2xl mt-5 mb-3">Overview</h1>
                    <p>{info.detail.overview}</p>

                    {/* Translations Available */}
                    <h1 className="text-2xl mt-5 mb-3">Movie Translations</h1>
                    <p className="mb-10">{info.translations.join(', ')}</p>

                    <Link
                        className="  lg:p-5 bg-[#6556CD] rounded-lg px-1.5 py-2"
                        to={`${pathname}/trailer`}
                    >
                        <i className="text-xl mr-3 ri-play-fill"></i>
                        Play Trailer
                    </Link>
                </div>
            </div>

            {/* Part-3 Platforms available  */}
            <div className="w-[80%} flex flex-col gap-y-5 mt-10 overflow-auto">
                {info.watchprovider && info.watchprovider.flatrate && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h1>Available on Platforms</h1>
                        {info.watchprovider.flatrate.map((w, i) => (
                            <img
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                key={i}
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                    
                )}

                {info.watchprovider && info.watchprovider.rent && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h3 >Available on Rent</h3>
                        {info.watchprovider.rent.map((w, i) => (
                            <img
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                key={i}
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                )}

                {info.watchprovider && info.watchprovider.buy && (
                    <div className="flex gap-x-10 items-center text-white">
                        <h1>Available to Buy</h1>
                        {info.watchprovider.buy.map((w, i) => (
                            <img
                                title={w.provider_name}
                                className="w-[5vh] h-[5vh] object-cover rounded-md"
                                key={i}
                                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                                alt=""
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Part-4 Recommendations and similar movies*/}
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            <h1 className=" lg:text-3xl text-xl font-bold text-white">
                Recommendations and Similar
            </h1>
            <HorizontalCards
                data={
                    info.recommendation.length > 0
                        ? info.recommendation
                        : info.similar
                }
            />

            <Outlet />
        </div>
    ) : (
        <Loading />
    );
};

export default MovieDetails;
