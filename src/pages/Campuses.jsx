import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchAllCampusesThunk} from "../redux/campuses/campuses.action";
import DisplayCampuses from '../components/DisplayCampuses';

const Campuses = () => {
  const allCampus = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampusesThunk());
  }, []);
  
  return (
    <div>
      <h1>Hi! this is campuses page</h1>
      <DisplayCampuses list= {allCampus}/>
    </div>
  );
};

export default Campuses