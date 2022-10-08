import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { useState } from 'react';
import Home from "./Home";
import SubItem from "./SubItem";
import Cart from "./Cart";
import './Styles/NavBar.css'

const NavBar = () => {
    const [cart, setCart] = useState([]);
    const [cartLength, setCartLength] = useState(0);

    const handleOrder = (item) => {
    if (cart.indexOf(item) === -1)
    {
        setCart([...cart, item])
        setCartLength(cart.length + 1)
    }
    }

    return (
        <div className="container">
            <BrowserRouter>
            <nav id="navbar" className="navbar navbar-expand-lg">
                <p>Food Ordering Portal</p>
                <div className="navBag">
                    <Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                    <span className='navQuantity'>
                    <span>{cartLength}</span>
                    </span>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/subitem/:id' element={<SubItem handleOrder={handleOrder}/>}></Route>
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} setCartLength={setCartLength}/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
 
export default NavBar;