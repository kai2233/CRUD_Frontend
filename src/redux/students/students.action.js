import axios from 'axios';
import studentsActionType from './students.type';

export const fetchAllStudents = (payload) => {
    return {
        type: studentsActionType.FETCH_ALL_STUDENTS,
        payload: payload
    };
};

export const fetchSingleStudent = (payload) => {
    return {
        type: studentsActionType.FETCH_SINGLE_STUDENT,
        payload: payload
    };
};

export const addNewStudent = (payload) => {
    return {
        type: studentsActionType.ADD_NEW_STUDENT,
        payload: payload
    };
};

export const deleteStudent = (payload) => {
    return {
        type: studentsActionType.DELETE_STUDENT,
        payload: payload
    };
};

export const updateStudent = (payload) => {
    return {
        type: studentsActionType.UPDATE_STUDENT,
        payload: payload
    };
};

export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            console.log("fetchAllStudentsThunk started");
            const result = await axios.get("http://localhost:8080/api/students");
            console.log("fetchAllStudentsThunk completed");
            dispatch(fetchAllStudents(result.data));
        } catch (err) {
            console.log(err);
        }
    };
};

export const fetchSingleStudentThunk = (id) => {
    return async (dispatch) => {
        try {
            console.log("fetchSingleStudentThunk started");
            const result = await axios.get("http://localhost:8080/api/students/findStudent/" + id);
            console.log("fetchSingleStudentThunk completed");
            dispatch(fetchSingleStudent(result.data));
        } catch (err) {
            console.log(err);
        }
    };
};

export const addNewStudentThunk = (newStudent) => {
    return async (dispatch) => {
        try {
            console.log("addNewStudentThunk started");
            const result = await axios.post("http://localhost:8080/api/students/addStudents", newStudent);
            console.log("addNewStudentThunk completed");
            dispatch(addNewStudent(result.data));
        } catch (err) {
            console.log(err);
        }
    };
};

export const deleteStudentThunk = (ID) => {
    return async (dispatch) => {
        try {
            console.log("deleteStudentThunk started");
            const result = await axios.delete("http://localhost:8080/api/students/deleteStudents/" + ID);
            console.log("deleteStudentThunk completed");
            dispatch(deleteStudent(result.data));
        } catch (err) {
            console.log(err);
        }
    };
};

export const updateStudentThunk = (updatedStudent) => {
    return async (dispatch) => {
      try {
        console.log("updateStudentThunk started");
        const result = await axios.put("http://localhost:8080/api/students/updateStudent",updatedStudent);
        console.log(result)
        console.log("updateStudentThunk COMPLETED")
        dispatch(updateStudent(result.data));
      } catch (err) {
        console.error(err);
      }
    };
  };
