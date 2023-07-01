import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchAllCampusesThunk} from "../redux/campuses/campuses.action";
import { Routes, Route, Link } from "react-router-dom";
import DisplayCampuses from '../components/DisplayCampuses';
import SingleCampus from './SingleCampus';

const Campuses = () => {
  const allCampus = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampusesThunk());
  }, []);
  return (
    <div>
      <h1>Hi! this is campuses page</h1>
      {/* <Link to ="/singleCampus">Single Campus</Link><br/> */}
      {allCampus.length!==0?(<DisplayCampuses list= {allCampus}/>):(<h3>There are no campuses registered in the database</h3>)}
    </div>
  );
};

export default Campuses;