import Banner from "./Banner"
import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import logo from '../assets/logo.png'


function App(){
  return (  <div>
                <Cart/>
                <Banner>
                  <img src={logo} alt="La maison jungle" className="lmj-logo"></img>
                  <h1 className="lmj-title">La maison Jungle</h1>
                </Banner>
                <ShoppingList/>
                
             </div>
          )
}

export default App;