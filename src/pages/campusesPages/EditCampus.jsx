import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCampusThunk } from "../../redux/campuses/campuses.action";
import { useLocation, Link } from "react-router-dom";


const EditCampus = () => {
    const location = useLocation();
    const targetCampID = location.state.campID;
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [address, setAddress] = useState();
    const [description, setDescription] = useState();
    const AlterCampus = (e) => {
        e.preventDefault();
        const changedValue = {
            id:targetCampID,
            name,
            imageUrl,
            address,
            description,
        };
        console.log(changedValue);
        dispatch(updateCampusThunk(changedValue));
    };
    // const targetCampus = useSelector((state) => state.campuses.updatedCampus);
    return (
        <div>
            <h1>Edit Campus Form</h1>
            <form onSubmit={AlterCampus}>
                <label>Name </label>
                <input type="text"   placeholder="name..." onChange={(e) => setName(e.target.value)}/><br/>
                <label>Address </label>
                <input type="text"   placeholder="address..."onChange={(e) => setAddress(e.target.value)}/><br/>
                <label>Image Url </label>
                <input type="text"  placeholder="url..." onChange={(e) => setImageUrl(e.target.value)}/><br/>
                <label>Description </label>
                <input type="text"  placeholder="description..." onChange={(e) => setDescription(e.target.value)}/><br/>
                <input type="submit"/>
            </form>
            {/* {targetCampus.id===campID?(<h1>Edited Successfully</h1>):(null)} */}
            <Link to="/singleCampus" state={{ campID:targetCampID }}> <button>Go Back</button></Link>
        </div>
    )
}
export default EditCampus;