import "./shop.css"
import { Header } from "../../components/header/Header"
import Banner from "../../assets/images/8.jpg"
import { useState } from "react"

export const Shop = () => {
    const [fixed, setFixed] = useState(false)
    const container = document.getElementById("container");
    if(window.scrollY === "50px"){
        setFixed(true)
    }
    
    return(
        <div className="shop">
            <Header fixed={fixed} setFixed={setFixed} />
            <article className="container">
                <div className="banner">
                    <img src={Banner} alt="Banner" />
                </div>
                <div className="categories_section">
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
                </div>
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