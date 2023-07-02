import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCampusThunk } from "../redux/campuses/campuses.action";
import { Link } from "react-router-dom";

const AddCampus = () => {
    const newCampus = useSelector((state) => state.campuses.newCampus);
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState();
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const addNewCampus = (e) => {
        e.preventDefault();
        const campus = {
            name,
            imageUrl,
            address,
            description,
        };
        console.log(campus);
        name!==''&&address!==''?(dispatch(addNewCampusThunk(campus))):( <h1>NAME OR ADDRESS IS EMPTY</h1>);
    };
    return (
        <div>
            <h1>Hi! this is Add Campus page</h1>
            <form>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Image Url</label>
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit" onClick={addNewCampus}>Submit</button>
                {console.log(newCampus)}
            </form>
        </div>
    )
}
export default AddCampus;