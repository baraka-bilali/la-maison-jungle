import Banner from "./Banner"
// import Cart from "./Cart"
import ShoppingList from "./ShoppingList"
import logo from '../assets/logo.png'
import QuestionForm from "./QuestionForm"

function App(){
  return (  <div>
                <Banner>
                  <img src={logo} alt="La maison jungle" className="lmj-logo"></img>
                  <h1 className="lmj-title">La maison Jungle</h1>
                </Banner>
                <QuestionForm/>  
                {/* <Cart/> */}
                <ShoppingList/>
                
             </div>
          )
}

export default App;