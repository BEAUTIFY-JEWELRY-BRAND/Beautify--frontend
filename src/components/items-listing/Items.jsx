import './items.css'
import Banner from "../../assets/images/8.jpg"
import { DB } from '../../../public/DB'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import cart from '../../../dummyDb/cart.json'

export const Items = () => {
    const [items, setItems] = useState([]);
    const [cartObject, setCartObject] = useState({})
    useEffect(()=>{
        setItems(DB);
    },[])

    const addToCart = (name, price) => {
        setCartObject({
            itemName:name,
            price:price
        })
        cart.push(cartObject);
    }
    return(
        <div className="items">
            <div className="items_grid">
                {items.map((data, key)=> (
                    <div key={key} className='item_wrapper'>
                        <Link to={`/item/${data.id}`} className="item">
                            <img src={Banner} alt="item_cover"/>
                            <div>
                                <h1>{data.name}</h1>
                            </div>
                        </Link>
                        <div>
                            <p>${data.price}</p>
                            <button onClick={()=>addToCart(data.name, data.price)}>Add to Bag</button>
                        </div>
                    </div>
                   
                ))}
                
            </div>
        </div>
    )
    
}