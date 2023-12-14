import { useState } from "react"
import { Header } from "../../components/header/Header"

export const Inventory = () => {
    const [allProducts, setAllProducts] = useState([])
    return(
        <>
            <Header />
            <div className="inventory">
                <div className="categories-group">
                    <button>All</button>
                    <button>Jewelrie</button>
                    <button></button>
                    <button></button>
                </div>
                <form action="">
                    <input type="text" placeholder="Search for Wrist watches, Sunglasses, Jewelries..." />
                    <button>Search</button>
                </form>
            </div>
        </>
    )
}