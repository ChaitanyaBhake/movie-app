export { removeMovie } from '../reducers/movieSlice';
import axios from '../../utils/axios';
import { loadMovie } from '../reducers/movieSlice';

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendation = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t,i)=>t.english_name),
            videos: videos.data.results.find(
                (movie) => movie.type === 'Trailer' 
            ),
            watchprovider: watchprovider.data.results.IN,
        };

        dispatch(loadMovie(theultimatedetails));
        // console.log(theultimatedetails);
    } catch (error) {
        console.log('Error:', error);
    }
};
