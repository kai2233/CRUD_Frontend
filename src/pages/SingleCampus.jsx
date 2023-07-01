import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchSingleCampusThunk} from "../redux/campuses/campuses.action";
import DisplaySingleCampus from "../components/DisplaySingleCampus"

const SingleCampus = (props) => {
    const Campus = useSelector(state => state.campuses.singleCampus);
    const dispatch = useDispatch();
    useEffect(() => {
        // const findCampus = () => {
            dispatch(fetchSingleCampusThunk(2));
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

export default SingleCampus