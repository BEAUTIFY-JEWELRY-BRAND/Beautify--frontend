import { Header } from "../../components/header/Header"

export const AddProduct = () => {
    return(
        <>
            <Header />
            <div className="add-product">
                <form action="">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name="productName"/>
                    <label htmlFor="price">Price($)</label>
                    <input type="number"/>
                    <div>
                        <p>Category</p>
                        <input type="radio" name="glasses" id="glasses" />
                        <label htmlFor="glasses">Glasses</label> 
                        <input type="radio" name="wrist-watches" id="wrist-watches" />
                        <label htmlFor="wrist-watches">Wrist Watches</label>
                        <input type="radio" name="jewelry" id="jewelry" />
                        <label htmlFor="jewelry">Jewelries</label>
                    </div>
                    <div>
                        <p>Sex</p>
                        <input type="checkbox" name="male" id="male" />
                        <label htmlFor="male">Male</label>
                        <input type="checkbox" name="female" id="female" />
                        <label htmlFor="female">Female</label>
                    </div>

                </form>
            </div>
        </>
    )
}