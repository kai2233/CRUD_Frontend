import {useSelector} from "react-redux";
const DisplaySingleCampus = (props) => {
    // console.log(props.Campus);
    // console.log(props.Campus[0].name);
    const Campus = useSelector(state => state.campuses.singleCampus);
    return (
        <div >
            {/* <img src={props.Campus[0].imageUrl} />
            <h1>{props.Campus[0].name}</h1>
            <h2>{props.Campus[0].address}</h2>
            <h3>{props.Campus[0].description}</h3>
            {props.Campus[0].students.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <h1>{data.firstName}</h1>
                        <h1>{data.lastName}</h1>
                    </div>
                )
            })}   */}
            <img src={Campus[0].imageUrl} />
            <h1>{Campus[0].name}</h1>
            <h2>{Campus[0].address}</h2>
            <h3>{Campus[0].description}</h3>
            {Campus[0].students.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <h1>{data.firstName}</h1>
                        <h1>{data.lastName}</h1>
                    </div>
                )
            })}  
            

        </div>
    )
}
export default DisplaySingleCampus;