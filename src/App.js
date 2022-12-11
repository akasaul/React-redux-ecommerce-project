import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import YouMayLike from './components/YouMayLike';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
        </Provider>

    );
}

export default App;
