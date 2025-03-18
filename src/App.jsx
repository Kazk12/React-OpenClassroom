import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import logo from "./assets/images/Logo.png";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import "./Layout.css"


function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  return (
    <main>
      <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
    </main>
  );
}

export default App;
