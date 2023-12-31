
import AboutComponent from "../../components/About/AboutComponent";
import Hero from "../../components/Hero/Hero";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import ShopComponent from "../../components/Shop/ShopComponent";
import Subscription from "../../components/Subscription/Subscription";
import Testimonials from "../../components/Testimonials/Testimonials";

import "./Home.scss";



export default function Home(){

    return(
        <>
            <div className="hero-section">
                <div className="thin">
                    <Hero/>
                </div>
            </div>
            <div className="thin">
                <OfferBanner/>
            </div>
            <div className="about-section">
                <AboutComponent/>
            </div>
            <div className="thin">
                <ShopComponent/>
            </div>
            <Testimonials/>
            {/* Offer */}
            {/* AboutUsComponent */}
            {/* Gallery */}
            {/* BlogComponent */}
            <div className="thin">
                <Subscription/>
            </div>
        </>
    )
}