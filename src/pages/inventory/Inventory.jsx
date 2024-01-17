import { useState } from "react"
import './inventory.css'
import { Header } from "../../components/header/Header"
import { Items } from "../../components/items-listing/Items"

export const Inventory = () => {
    const [allProducts, setAllProducts] = useState([])
    return(
        <>
            <Header />
            <div className="inventory">
                <form action="">
                    <input type="text" placeholder="Search for Wrist watches, Sunglasses, Jewelries..." />
                    {/* <button>Search</button> */}
                </form>
                <div className="categories-group">
                    <button>All</button>
                    <button>Jewelries</button>
                    <button>Watches</button>
                    <button>Glasses</button>
                </div>
                <section>
                    <Items/>
                </section>
            </div>
        </>
    )
}