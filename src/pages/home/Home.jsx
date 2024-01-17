import "./home.css"
import { Header } from "../../components/header/Header"
import Banner from "../../assets/images/8.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Items } from "../../components/items-listing/Items"

export const Home = (props) => {
    const [fixed, setFixed] = useState(false)
    window.onscroll=()=>{
        setFixed(true)
        if(window.scrollY === 0){
            setFixed(false);
        }
    }
    return(
        <div className="shop">
            <Header fixed={fixed}/>
            <article className="container">
                <div className="banner">
                    <div className="promo_message">
                        <p>20% Discount on every purchase</p>
                        <Link to="/inventory">Shop Now</Link>
                    </div>
                    <img src={Banner} alt="Banner" />
                </div>
                {/* <div className="categories_section">
                    <h3>Categories</h3>
                    <div className="categories">
                        <div className="card">
                            <img src={Banner} alt="watches_category" />
                            <p>Watches</p>
                        </div>
                        <div className="card">
                            <img src={Banner} alt="watches_category" />
                            <p>Jewelry</p>
                        </div>
                        <div className="card">
                            <img src={Banner} alt="watches_category" />
                            <p>Sun Glasses</p>
                        </div>
                    </div>
                </div> */}
                <div className="item_display">
                    <h3>Recommended For You</h3>
                    <Items />
                </div>               
            </article>
        </div>
    )
}
