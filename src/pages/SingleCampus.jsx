import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchSingleCampusThunk} from "../redux/campuses/campuses.action";

const SingleCampus = () => {
    const singleCampus = useSelector(state => state.campuses.singleCampus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleCampusThunk(6));
    }, []);
    console.log(singleCampus);
    return(
        <div>
            <h1>Hi this single Campus page</h1>
        </div>
    )
}

export default SingleCampus