import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadPerson, removePerson } from '../store/actions/personActions';
import {
    Link,
    Outlet,
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import Loading from './partials/Loading';
import Dropdown from './partials/Dropdown';
import HorizontalCards from './partials/HorizontalCards';

const PersonDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { info } = useSelector((state) => state.person);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [category, setCategory] = useState('movie');
    // console.log(info);
    useEffect(() => {
        dispatch(asyncLoadPerson(id));
        return () => {
            dispatch(removePerson());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return info ? (
        <div className="px-[10%] w-screen absolute bg-[#1F1E24] ">
            {/* Part-1 Navigation */}
            <nav className="h-[10vh] w-full text-zinc-100 flex gap-10 text-xl items-center">
                <Link
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] ri-arrow-left-line"
                ></Link>
            </nav>

            {/* Part-2 */}
            <div className="w-full lg:flex ">
                {/* Left Poster and Details */}
                <div className="lg:w-[20%]">
                    {/* Image */}
                    <img
                        className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[35vh] w-[100%] object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${
                            info.detail.poster_path ||
                            info.detail.backdrop_path ||
                            info.detail.profile_path
                        }`}
                        alt=""
                    />
                    <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

                    {/* Social Links */}
                    <div className="flex gap-x-5 text-2xl text-white">
                        <a
                            target="_blank"
                            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                        >
                            <i className="hover:text-[#3caed1] ri-earth-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                        >
                            <i className="hover:text-[#3caed1] ri-facebook-circle-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                        >
                            <i className="hover:text-[#3caed1] ri-instagram-fill"></i>
                        </a>

                        <a
                            target="_blank"
                            href={`https://www.twitter.com/${info.externalid.twitter_id}`}
                        >
                            <i className="hover:text-[#3caed1] ri-twitter-x-fill text-xl"></i>
                        </a>
                    </div>

                    <h1 className="text-5xl text-zinc-400 font-black my-5 lg:hidden">
                        {info.detail.name}
                    </h1>

                    {/* Personal Information */}
                    <h1 className="text-2xl text-zinc-400 font-semibold my-5">
                        Person Info
                    </h1>

                    <h1 className="text-lg text-zinc-400 ">Known For</h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.known_for_department}
                    </h1>

                    <h1 className="text-lg text-zinc-400 mt-3">Gender</h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.gender === 2 ? 'Male' : 'Female'}
                    </h1>

                    <h1 className="text-lg text-zinc-400 mt-3 ">Birthday</h1>
                    <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>

                    <h1 className="text-lg text-zinc-400 mt-3 ">Deathday</h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.deathday
                            ? info.detail.deathday
                            : 'Still Alive'}
                    </h1>

                    <h1 className="text-lg text-zinc-400 mt-3 ">
                        Place Of Birth
                    </h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.place_of_birth}
                    </h1>

                    <h1 className="text-lg text-zinc-400 mt-3 ">
                        Also Known As
                    </h1>
                    <h1 className=" text-zinc-400 ">
                        {info.detail.also_known_as.join(', ')}
                    </h1>
                </div>

                {/* Part-3 right details and information */}
                <div className="lg:w-[80%] lg:ml-[5%] mt-5">
                    {/* Actor Name */}
                    <h1 className="text-6xl text-zinc-400 font-black my-5 lg:block hidden">
                        {info.detail.name}
                    </h1>

                    <h1 className="text-2xl text-zinc-400 font-semibold ">
                        Biography
                    </h1>
                    <p className="text-zinc-400 mt-3">
                        {info.detail.biography}
                    </p>

                    <h1 className=" text-zinc-400 font-semibold mt-5 text-2xl ">
                        Summary
                    </h1>

                    <HorizontalCards data={info.combinedCredits.cast} />

                    <div className="w-full lg:flex-row inline-flex justify-between flex-col">
                        <h1 className="text-2xl text-zinc-400 font-semibold mt-5 mb-5 ">
                            Acting
                        </h1>
                        
                        <Dropdown
                            title="Category"
                            options={['tv', 'movie']}
                            func={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div className=" w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(101,86,205,.3)] mt-5 mb-5 border-2 border-zinc-700 p-5 list-disc text-zinc-400">
                        {info[category + 'Credits'].cast.map((cast, i) => (
                            <li
                                key={i}
                                className="hover:text-white p-5 rounded duration-300 cursor-pointer hover:bg-[#6556CD]"
                            >
                                <Link
                                    to={`/${category}/details/${cast.id}}`}
                                    className="rounded"
                                >
                                    <span>
                                        {cast.name ||
                                            cast.title ||
                                            cast.orignal_name ||
                                            cast.orignal_title}
                                    </span>
                                    <span className="ml-5 block mt-2 ">
                                        {cast.character &&
                                            `Character Name : ${cast.character}`}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loading />
    );
};

export default PersonDetails;
