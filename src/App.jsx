import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movies from './components/Movies';
import Tvshows from './components/Tvshows';
import People from './components/People';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails';
import PersonDetails from './components/PersonDetails';
import Trailer from './components/partials/Trailer';
import Error404 from './components/partials/Error404';
import About from './components/About'
import ContactUs from './components/ContactUs';

const App = () => {
    return (
        <div className="w-screen h-screen bg-[#1F1E24] flex">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />

                <Route path="/popular" element={<Popular />} />

                <Route path="/movie" element={<Movies />} />
                <Route path="/movie/details/:id" element={<MovieDetails />}>
                    <Route
                        path="/movie/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>

                <Route path="/tv" element={<Tvshows />} />
                <Route path="/tv/details/:id" element={<TvDetails />}>
                    <Route
                        path="/tv/details/:id/trailer"
                        element={<Trailer />}
                    />
                </Route>

                <Route path="/person" element={<People />} />
                <Route path="/person/details/:id" element={<PersonDetails />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />


                <Route path="*" element={<Error404 />}></Route>


            </Routes>
        </div>
    );
};

export default App;
