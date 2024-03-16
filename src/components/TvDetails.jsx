import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadTv, removeTv } from '../store/actions/tvActions';
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import Loading from './partials/Loading';
import HorizontalCards from './partials/HorizontalCards';
import noImage from '/noImage.jpg'

const TvDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { info } = useSelector((state) => state.tv);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(asyncLoadTv(id));
        return () => {
            dispatch(removeTv());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

 

    return info ? (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
                    info.detail.backdrop_path || info.detail.poster_path
                })`,
                backgroundPosition: 'top 20%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className="relative w-screen h-[198vh] px-[10%]"
        >
            {/* //Part-1 Navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-xl items-center">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>

                <a target="_blank" href={info.detail.homepage}>
                    <i className="hover:text-[#56cd5c] ri-external-link-fill"></i>
                </a>

                <a
                    target="_blank"
                    href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                    <i className="hover:text-[#3caed1] ri-earth-fill"></i>
                </a>
                <a
                    target="_blank"
                    href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
                >
                    <img src="/imdb.png" alt="" />
                </a>
            </nav>

            {/* //Part-2 Poster and Details */}
            <div className="w-full flex">
                <img
                    className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${
                        info.detail.poster_path ||
                        info.detail.backdrop_path ||
                        info.detail.profile_path
                    }`}
                    alt=""
                />

                <div className="content ml-[5%] text-white">
                    {/* Title */}
                    <h1 className="text-5xl font-black text-white  ">
                        {info.detail.name ||
                            info.detail.title ||
                            info.detail.orignal_name ||
                            info.detail.orignal_title}

                        <small className="text-2xl font-bold text-zinc-200">
                            ({info.detail.first_air_date.split('-')[0]})
                        </small>
                    </h1>

                    {/* Rating  ,Release Date, Genre , Duration */}
                    <div className="flex text-white items-center gap-x-3 mt-3 mb-5">
                        <span className="review  text-xl font-semibold text-white bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center rounded-full ">
                            {(info.detail.vote_average * 10).toFixed()}{' '}
                            <sup>%</sup>
                        </span>
                        <h1 className="w-[60px] font-semibold text-2xl leading-6">
                            User Score
                        </h1>
                        <h1 className="">{info.detail.first_air_date}</h1>
                        <h1>
                            {info.detail.genres
                                .map((g, i) => g.name)
                                .join(', ')}
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
                        className="  p-5 bg-[#6556CD] rounded-lg"
                        to={`${pathname}/trailer`}
                    >
                        <i className="text-xl mr-3 ri-play-fill"></i>
                        Play Trailer
                    </Link>
                </div>
            </div>

            {/* Part-3 Platforms available  */}
            <div className="w-[80%} flex flex-col gap-y-5 mt-10">
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
                        <h1>Available on Rent</h1>
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

            {/* Part-4 Seasons*/}
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            <h1 className=" text-3xl font-bold text-white">Seasons</h1>
            <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5">
                {info.detail.seasons.length > 0 ? (
                    info.detail.seasons.map((season, index) => (
                        <div
                            className="flex flex-col flex-shrink-0 mr-[3%]"
                            key={index}
                        >
                            <img
                                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover rounded-lg"
                                src={
                                    season.poster_path ||
                                    season.backdrop_path ||
                                    season.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${
                                              season.poster_path ||
                                              season.backdrop_path ||
                                              season.profile_path
                                          }`
                                        : noImage
                                }
                                alt=""
                            />

                            <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
                                {season.name ||
                                    season.title ||
                                    season.orignal_name ||
                                    season.orignal_title}
                            </h1>
                            <h1 className=" font-semibold text-zinc-400 p-1">
                                ({season.air_date || "Not Available"})
                            </h1>

                            {season.episode_count && (
                                <h1 className="text-2xl text-zinc-300  font-semibold">
                                    Episode Count : {season.episode_count}
                                </h1>
                            )}
                        </div>
                    ))
                ) : (
                    <h1 className="text-3xl text-white font-black text-center mt-5">
                        Nothing to show
                    </h1>
                )}
            </div>

            {/* Part-5 Recommendations and similar movies*/}
            <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
            <h1 className=" text-3xl font-bold text-white">
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

export default TvDetails;
