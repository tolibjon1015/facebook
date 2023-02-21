import React from 'react'
import "../../main.css"
const data=[
    {
        id:0,
        icon:<i class="fa-sharp fa-solid fa-id-card"></i>,
        text:"promer efir"
    },
    {
        id:1,
        icon:<i class="fa-solid fa-image"></i>,
        text:"foto/video"
    },
    {
        id:2,
        icon:<i class="fa-solid fa-face-smile"></i>,
        text:"kulguch"
    }
]

function Stream() {
    return <div className='stream'>
        <div className='flex'>
            <img src="https://images.unsplash.com/photo-1676944229914-2194fdafd024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <input type="text" placeholder='biror nima yoz'/>
        </div>
        <div className='tour'>
        {data.map((item)=>{
            return <div className='lived'>
                <span>{item.icon}</span>
                <span>{item.text}</span>
            </div>
        })}
        </div>
    </div>
}

export default Stream