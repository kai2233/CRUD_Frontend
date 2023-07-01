const DisplayList = (props) =>{
    return(
        <div>
            {props.list.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <h1>{data.name}</h1>
                    </div>
                )
            })}  
        </div>
    )
}
export default DisplayList;