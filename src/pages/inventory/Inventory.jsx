import { useEffect, useState } from "react"
import './inventory.css'
import { Header } from "../../components/header/Header"
import { Items } from "../../components/items-listing/Items"
import {db} from '../../config/firebase'
import {getDocs, collection} from 'firebase/firestore'

export const Inventory = () => {
    const [allProducts, setAllProducts] = useState([]);
    const moviesCollectionRef = collection(db, "inventory")
    useEffect(()=>{
        const getInventory = async() => {
            //Read the data from the db
            //set allProduct to be equal to the data
            try{
                const data = await getDocs(moviesCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}))
                console.log(filteredData);
                setAllProducts(filteredData)
            }catch(err){
                console.err(err)
            }
            
        }
        getInventory()
    }, [])
    
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
                    <Items allProducts = {allProducts}/>
                </section>
            </div>
        </>
    )
}