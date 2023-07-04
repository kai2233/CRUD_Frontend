import studentsActionType from "./students.type";

export const INITIAL_STUDENTS_STATE = {
    allStudents: [],
    singleStudent: [],
    newStudent:[],
    updatedStudent:[]
};

const studentsReducer = (state = INITIAL_STUDENTS_STATE, {type,payload}) => {
    console.log("stuentsReducer is now handling the action "+state);
    switch (type) {
        case studentsActionType.FETCH_ALL_STUDENTS:
            return {...state,allStudents: payload};
        case studentsActionType.FETCH_SINGLE_STUDENT:
            return {...state,singleStudent: payload};
        case studentsActionType.ADD_NEW_STUDENT:
            return {...state,newStudent: payload};
        case studentsActionType.DELETE_STUDENT:
            return {...state,allStudents: payload};
        case studentsActionType.UPDATE_STUDENT:
            return {...state,updatedStudent: payload};
        default:
            return state;
    }
}

export default studentsReducer;