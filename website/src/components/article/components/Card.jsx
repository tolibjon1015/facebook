import "../article.css"
import {data} from "../data"
function Card() {
    return <div className='mainCard'>
        {data.map((item) => {
            return <div className="card">
                <div className="chevron">{item.img}</div>
                <p>{item.title}</p>
            </div>
        })}
    </div>
}

export default Card