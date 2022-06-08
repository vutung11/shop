import "./App.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Product1 from "./components/Product1";
import Banner from "./components/Banner";
import Smbanner from "./components/Smbanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Product2 from "./components/Product2";
import Prodetails from "./components/Prodetails";
import Stayhome from "./components/Stayhome";
import Shop from "./components/Shop";
import Home from "./pages/Home";
import ShopProduct from "./components/ShopProduct";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<Prodetails />} />
            </Routes>
            {/* <Header />
            <Stayhome />
            <Shop />
            <Newsletter />
            <Footer /> */}
        </>
    );
}

export default App;
