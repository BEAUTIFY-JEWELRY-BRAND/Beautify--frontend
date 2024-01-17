import { useEffect, useState } from "react"
import './item.css'
import {DB} from '../../../../public/DB'
import { useParams } from "react-router-dom"
import Banner from "../../../assets/images/8.jpg"
import { Header } from "../../../components/header/Header"

export const Item = () => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [sex, setSex] = useState("");
    let param = useParams('/items/:id');
    var item;

    useEffect(()=>{
        item = DB[param.id];
        setItemName(item.name);
        setItemPrice(item.price);
        setSex(item.sex);
        console.log(item);
    }, [])
    
    // param=take?.id;
    // setItem(DB[param]);
    // setItemName(item?.name)
    // setItemPrice(item?.price)
    // console.log(item);
    return(
        <div className="item">
            <Header />
            <div className="item-details-container">
                <div className="item-details">
                    <h1>{`${itemName} `}</h1>
                </div>
                <img src={Banner} alt="banner"/>
                <div className="descriptions">
                    <p>Descriptions</p>
                    <div>
                        <p>{'Price: $'+`${itemPrice}`}</p>
                        <p>{`Sex: ${sex}`}</p> 
                    </div>
                </div>
                <div className="action-group">
                    <button id="buyNow">Buy Now</button>
                    <button id="addToCart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}