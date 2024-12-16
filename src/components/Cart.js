import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
	const montserrat = 7
	const [cart, updateCart] = useState(0)


	
	return (
		<div className='lmj-cart'>
			<h1>Panier</h1>
			<p>Nombre d'article dans le panier {cart} </p>
			<button onClick={()=> updateCart(cart+1)} className="btn">
				Ajouter
			</button>
			<h3>Prix : {montserrat * cart} </h3>
		</div>
	)
}

export default Cart