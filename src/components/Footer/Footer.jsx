import React, { useState } from 'react'
import './Footer.css'

function Footer() {

    const [inputValue, setInputValue] = useState('')

    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        } else {
            alert(` Adresse mail enregistrée : ${inputValue}`)
        }
    }

  return (
    <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form action="">
            <input placeholder='Entrez votre mail' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={handleBlur}>
           
           </input>
           
            </form>
            
		</footer>
  )
}

export default Footer