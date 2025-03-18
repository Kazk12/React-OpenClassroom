import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import ShoppingList from './components/ShoppingList/ShoppingList'
import logo from './assets/images/Logo.png'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
      <ShoppingList />
			<Footer />
     
    </main>
  )
}

export default App
