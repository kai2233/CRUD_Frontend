import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCampusThunk } from "../../redux/campuses/campuses.action";


const AddCampus = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState();
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const addNewCampus = (e) => {
        e.preventDefault();
        const createCampus = {
            name,
            imageUrl,
            address,
            description,
        };
        console.log(createCampus);
        dispatch(addNewCampusThunk(createCampus));
    };
    const newCampus = useSelector((state) => state.campuses.newCampus);
    return (
        <div>
            <h1>Add Campus Form</h1>
            <form onSubmit={addNewCampus}>
                <label>Name </label>
                <input type="text" required value={name} placeholder="name..." onChange={(e) => setName(e.target.value)}/><br/>
                <label>Address </label>
                <input type="text" required value={address} placeholder="address..."onChange={(e) => setAddress(e.target.value)}/><br/>
                <label>Image Url </label>
                <input type="text"  placeholder="url..." onChange={(e) => setImageUrl(e.target.value)}/><br/>
                <label>Description </label>
                <input type="text" value={description} placeholder="description..." onChange={(e) => setDescription(e.target.value)}/><br/>
                <input type="submit"/>
            </form>
            {newCampus.name===name?(<h1>Created Successfully</h1>):(null)}
        </div>
    )
}
export default AddCampus;