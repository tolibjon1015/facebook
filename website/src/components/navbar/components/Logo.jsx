import "../navbar.css"

const data=[
    {
        id:1,
        name:'Main',
    },
    {
        id:1,
        name:'About',
    },
    {
        id:1,
        name:'Contact',
    },
    {
        id:1,
        name:'Me',
    }
]

function Logo(props) {
  return <div className="navlink">
    {data.map((item)=>{
        return (
            <div>{item.name}</div>
        )
    })}
  </div>
}

export default Logo
