import { Link } from "react-router-dom";
const DisplayList = (props) =>{
    return(
        <div>
            {props.list.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        {/* <h1>{data.name}</h1> */}
                        <Link to="/singleCampus" state={{ campID:data.id }}>
                            <h1>{data.name}</h1>
                        </Link>
                    </div>
                )
            })}  
        </div>
    )
}
export default DisplayList;