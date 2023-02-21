import "../navbar.css"

const data = [
    {
        id: 1,
        name: 'Найти друзей',
    },
    {
        id: 2,
        name: <i class="fa-solid fa-bars"></i>,
    },
    {
        id: 3,
        name: <i class="fa-brands fa-facebook-messenger"></i>,
    },
    {
        id: 4,
        name: <i class="fa-solid fa-bell"></i>,
    }
]

function Logo(props) {
    return <div className="navlink">
        {data.map((item) => {
            return (
                <div>{item.name}</div>
            )
        })}
        <img src="https://images.unsplash.com/photo-1676973440045-f1b8f5abe88f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
    </div>
}

export default Logo
