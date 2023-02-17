import "../navbar.css"

const data=[
    {
        id:1,
        name:'Найти друзей',
    },
    {
        id:1,
        name:<i class="fa-solid fa-bars"></i>,
    },
    {
        id:1,
        name:<i class="fa-brands fa-facebook-messenger"></i>,
    },
    {
        id:1,
        name:<i class="fa-solid fa-bell"></i>,
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
