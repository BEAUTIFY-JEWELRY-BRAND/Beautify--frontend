import "./shop.css"
import { Header } from "../../components/header/Header"
import Banner from "../../assets/images/8.jpg"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Shop = () => {
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
                    <div className="categories_section">
                        <Link to="">Glasses</Link>
                        <Link to="">Jewelry</Link>
                        <Link to="">Men's Wrist-Watches</Link>
                        <Link to="">Women's Wrist-Watches</Link>
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
                    <h3>Top Sales</h3>
                    <div className="items_grid">
                        <div className="item">
                            <img src={Banner} alt="item_cover"/>
                            <p>$266</p>
                            <button>Add to Bag</button>
                        </div>
                        <div className="item">
                            <img src={Banner} alt="item_cover"/>
                            <p>$266</p>
                            <button>Add to Bag</button>
                        </div>
                        <div className="item">
                            <img src={Banner} alt="item_cover"/>
                            <p>$266</p>
                            <button>Add to Bag</button>
                        </div>
                        <div className="item">
                            <img src={Banner} alt="item_cover"/>
                            <p>$266</p>
                            <button>Add to Bag</button>
                        </div>
                    </div>
                </div>               
            </article>
        </div>
    )
}