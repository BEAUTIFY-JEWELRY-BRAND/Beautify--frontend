import { useState } from 'react';
import './cart.css'
import cart from '../../../dummyDb/cart.json'
import Banner from "../../assets/images/8.jpg"
import { Header } from '../../components/header/Header'
export const Cart = () => {
    var quantity = document.getElementById("qty")
    const [qty, setQty] = useState(1);
    const [newPrice, setNewPrice] = useState(0)
    function increaseQuantity(price){
        quantity.value++;
        console.log(price*quantity.value)
    }
    function decreaseQuantity(){
        quantity.value--
    }
    return(
        <>
            <Header />
            <div className='cart'>
                {cart.map((data, key)=> (
                    <div key={key} className='item_in_cart'>
                        <img src={Banner} alt="item_icon"/>
                        <div>
                            <p>{data.name}</p>
                            <p>{data.price*quantity.value}</p>
                        </div>
                        <div>
                            <button type="button" onClick={()=>increaseQuantity(data.price)}>
                                up
                            </button>
                            <input type="number" id="qty" onChange={(e)=> setQty(e.target.value)} value={qty}/>
                            <button onClick={()=>decreaseQuantity(data.qty)}>
                                down
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
        
    )
}