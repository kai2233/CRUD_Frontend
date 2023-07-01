import axios from 'axios';
import campusesActionType from './campuses.types';

export const fetchAllCampuses = (payload) => {
    return {
        type: campusesActionType.FETCH_ALL_CAMPUSES,
        payload: payload
    };
};


export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
      try {
        console.log("fetchAllCampusesThunk started");
        const result = await axios.get("http://localhost:8080/api/campuses");
        console.log("FETCHALLCAMPUSESTHUNK COMPLETED")
        dispatch(fetchAllCampuses(result.data));
      } catch (err) {
        console.error(err);
      }
    };
  };
