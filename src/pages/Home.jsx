import { Header } from "../components/header/Header";
import JewelryBanner from "../assets/images/1.webp";
import GlassesBanner from "../assets/images/02.jpg";
import watchesBanner from "../assets/images/2.jpg";

export const Home = () => {
    return(
        <>
            <Header />
            <div>
                <div className="slide-show">
                    <button>&lt;</button>
                    <div>
                        <p>Shop With Style</p>
                        <a href="">SHOP NOW</a>
                    </div>
                    <button>&gt;</button>
                </div>
                <div className="explore">
                    <div className="jewelries">
                        <img src={JewelryBanner} alt="jewelry banner" srcset="" />
                        <div>
                            <a href="">Jewelries</a>
                        </div>
                        
                    </div>
                    <div className="sun-glasses">
                        <img src={GlassesBanner} alt="glasses banner" srcset="" />
                        <div>
                            <a href="">Sun Glasses</a>
                        </div>
                        
                    </div>
                    <div className="watches">
                        <img src={watchesBanner} alt="watches banner" srcset="" />
                        <div>
                            <a href="">Wrist Watches</a>
                        </div>
                        
                    </div>
                    <div className="block">
                        <p>SIGN UP & GET 20% OFF</p>
                        <p>Enhance your style today with amazing products at cheaper prices</p>

                        <a href="">SIGN UP</a>
                    </div>
                </div>
            </div>
        </>
    )
}