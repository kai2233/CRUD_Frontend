import campusesActionType from './campuses.types';

export const INITIAL_CAMPUSES_STATE = {
  allCampuses: [],
};

const campusesReducer = (state = INITIAL_CAMPUSES_STATE, { type, payload }) => {
    console.log('campusesReducer is now handling the action'+ type);
  switch (type) {
    case campusesActionType.FETCH_ALL_CAMPUSES:
      return { ...state, allCampuses: payload };
    default:
      return state;
  }
};

export default campusesReducer;