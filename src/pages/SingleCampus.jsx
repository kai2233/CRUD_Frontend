import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchSingleCampusThunk} from "../redux/campuses/campuses.action";
import DisplaySingleCampus from "../components/DisplaySingleCampus";
import { useLocation } from "react-router-dom";

const SingleCampus = () => {
    const location = useLocation();
    console.log(location);
    const campID = location.state.campID;
    console.log(campID);
    const Campus = useSelector(state => state.campuses.singleCampus);
    const dispatch = useDispatch();
    useEffect(() => {
        // const findCampus = () => {
            dispatch(fetchSingleCampusThunk(campID));
        // };
        // findCampus();
    }, []);
    return(
        <div>
            <h1>Hi this single Campus page</h1>
            {/* {Campus.length!==0?(<DisplaySingleCampus Campus={Campus}/>):(<h2> unchaught error</h2>)} */}
            {Campus.length!==0?(<DisplaySingleCampus />):(<h2> unchaught error</h2>)}
        </div>
    )
}

export default SingleCampus;