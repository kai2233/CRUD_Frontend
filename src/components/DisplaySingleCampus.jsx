import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const DisplaySingleCampus = () => {
    const Campus = useSelector(state => state.campuses.singleCampus);
    return (
        <div >
            <img src={Campus[0].imageUrl} />
            <h1>{Campus[0].name}</h1>
            <h2>{Campus[0].address}</h2>
            <h3>{Campus[0].description}</h3>
            {Campus[0].students.map(data => {
                return (
                    <div key={data.id}>
                        <img src={data.imageUrl} />
                        <Link to="/singleStudent" state={{ studentId: data.id }}>
                            {data.firstName} {data.lastName}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplaySingleCampus;