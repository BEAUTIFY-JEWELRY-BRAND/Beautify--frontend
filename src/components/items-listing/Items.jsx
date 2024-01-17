import './items.css'
import Banner from "../../assets/images/8.jpg"
import { DB } from '../../../public/DB'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Items = () => {
    const [items, setItems] = useState([])
    useEffect(()=>{
        setItems(DB)
    },[])
    return(
        <div className="items">
            <div className="items_grid">
                {items.map((data, key)=> (
                    <Link to={`/item/${data.id}`} className="item" key={key}>
                        <img src={Banner} alt="item_cover"/>
                        <div>
                            <h1>{data.name}</h1>
                        </div>
                        <div>
                            <p>{"$" + `${data.price}`}</p>
                            <button>Add to Bag</button>
                        </div>
                    </Link>
                ))}
                
            </div>
        </div>
    )
    
}