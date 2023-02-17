import "../article.css"
const data = [
    {
        id: 1,
        title: "Tolibjon ",
    },
    {
        id: 2,
        title: "Поиск друзей",
    },
    {
        id: 3,
        title: "Последние новости",
    },
    {
        id: 4,
        title: "Добро пожаловать",
    },
    {
        id: 5,
        title: "Группы",
    },
    {
        id: 6,
        title: "Marketplace",
    },
    {
        id: 7,
        title: "Tolibjon ",
    },
    {
        id: 8,
        title: "Поиск друзей",
    },
    {
        id: 9,
        title: "Последние новости",
    },
    {
        id: 10,
        title: "Добро пожаловать",
    },
    {
        id: 11,
        title: "Группы",
    },
    {
        id: 12,
        title: "Показать больше",
    },
]

function Card() {
    return <div className='mainCard'>
        {data.map((item) => {
            return <div className="card">
                <img
                src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="Hello guys"
                style={{width:"30px", height: "30px",borderRadius:"50%",padding:"1rem" }}
          />
                <p>{item.title}</p>
            </div>
        })}
    </div>
}

export default Card