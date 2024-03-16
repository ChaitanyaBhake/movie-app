export { removeTv } from '../reducers/tvSlice';
import axios from '../../utils/axios';
import { loadTv } from '../reducers/tvSlice';

export const asyncLoadTv= (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendation = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t,i)=>t.english_name),
            videos: videos.data.results.find(
                (tv) => tv.type === 'Trailer' 
            ),
            watchprovider: watchprovider.data.results.IN,
        };

        dispatch(loadTv(theultimatedetails));
        // console.log(theultimatedetails);
    } catch (error) {
        console.log('Error:', error);
    }
};
