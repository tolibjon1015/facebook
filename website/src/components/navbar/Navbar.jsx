import data from "../../data"

function Navbar(props) {
    return <>
        {data.map((item)=>{
            return (
                <h1>{item.name}</h1>
            )
        })}
    </>
}

export default Navbar