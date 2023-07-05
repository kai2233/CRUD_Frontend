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
        <div className="edit-campus-page-container">
            <h1>Add Campus Form</h1>
            <form onSubmit={addNewCampus}>
                <label>Name </label>
                <input type="text" required placeholder="name..." onChange={(e) => setName(e.target.value)}/>
                <label>Address </label>
                <input type="text" required placeholder="address..."onChange={(e) => setAddress(e.target.value)}/>
                <label>Image Url </label>
                <input type="text"  placeholder="url..." onChange={(e) => setImageUrl(e.target.value)}/>
                <label>Description </label>
                <div>
                    <textarea className="form-description" type="text" placeholder="description..." onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input type="submit"/>
            </form>
            {newCampus.name===name?(<h1>Created Successfully</h1>):(null)}
        </div>
    )
}
export default AddCampus;