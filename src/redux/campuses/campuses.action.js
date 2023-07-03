import axios from 'axios';
import campusesActionType from './campuses.types';

export const fetchAllCampuses = (payload) => {
    return {
        type: campusesActionType.FETCH_ALL_CAMPUSES,
        payload: payload
    };
};

export const fetchSingleCampuses = (payload) => {
  return {
    type: campusesActionType.FETCH_SINGLE_CAMPUS,
    payload: payload
  };
};

export const addNewCampus = (payload) => {
  return {
    type: campusesActionType.ADD_NEW_CAMPUS,
    payload: payload
  }
};

export const deleteCampus = (payload) => {
  return {
      type: campusesActionType.DELETE_CAMPUS,
      payload: payload
    }
};

export const updateCampus = (payload) => {
  return {
    type: campusesActionType.UPDATE_CAMPUS,
    payload: payload
  }
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

export const fetchSingleCampusThunk = (id) => {
  return async (dispatch) => {
    try {
      console.log("fetchSingleCampusThunk started");
      const result = await axios.get("http://localhost:8080/api/campuses/findCampus/"+id);
      console.log(result)
      console.log("fetchSingleCampusThunk COMPLETED")
      dispatch(fetchSingleCampuses(result.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addNewCampusThunk = (newCampus) => {
  return async (dispatch) => {
    try {
      console.log("addNewCampusThunk started");
      const result = await axios.post("http://localhost:8080/api/campuses/addCampus", newCampus);
      console.log(result)
      console.log("addNewCampusThunk COMPLETED")
      dispatch(addNewCampus(result.data));
    } catch (err) {
      console.error(err);
    }
  };
}

export const deleteCampusThunk = (ID) => {
  return async (dispatch) => {
    try {
      console.log("deleteCampusThunk started");
      const result = await axios.delete("http://localhost:8080/api/campuses/deleteCampus/"+ID);
      console.log(result)
      console.log("deleteCampusThunk COMPLETED")
      dispatch(deleteCampus(result.data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateCampusThunk = (updatedCampus) => {
  return async (dispatch) => {
    try {
      console.log("updateCampusThunk started");
      const result = await axios.put("http://localhost:8080/api/campuses/updateCampus",updatedCampus);
      console.log(result)
      console.log("updateCampusThunk COMPLETED")
      dispatch(updateCampus(result.data));
    } catch (err) {
      console.error(err);
    }
  };
};