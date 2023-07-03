import campusesActionType from './campuses.types';

export const INITIAL_CAMPUSES_STATE = {
  allCampuses: [],
  singleCampus: [],
  newCampus: [],
};

const campusesReducer = (state = INITIAL_CAMPUSES_STATE, { type, payload }) => {
    console.log('campusesReducer is now handling the action'+ type);
  switch (type) {
    case campusesActionType.FETCH_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    case campusesActionType.FETCH_SINGLE_CAMPUS:
      return{...state, singleCampus: payload };
    case campusesActionType.ADD_NEW_CAMPUS:
      return {...state, newCampus: payload };
    case campusesActionType.DELETE_CAMPUS:
      return {...state, allCampuses: payload }
    default:
      return state;
  }
};

export default campusesReducer;