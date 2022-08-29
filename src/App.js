import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Careers from "./components/Careers";
import Cart from "./components/Cart";
import FindRestaurant from "./components/FindRestaurant";
import Login from "./components/Login";
import Footer from "./components/Footer";
import OurStory from "./components/OurStory";
import Specials from "./components/Specials";
import Store from "./components/Store";
import StoreItemPage from "./components/StoreItemPage";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<OurStory />} />
        <Route path="careers" element={<Careers />} />
        <Route path="store" element={<Store />} />
        <Route path="storeItem" element={<StoreItemPage />} />
        <Route path="locate" element={<FindRestaurant />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="specials" element={<Specials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
