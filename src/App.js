import brand from './lumin.png';
import cart from './cart.png';
import './App.css';

function App() {
  return (

 

    <div className="App">
    <header>






     <div className="nav">
     <img src={brand} className="brand"/> 
<ul>
             <li><a href="#">Shop</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Support</a></li>
             <li><a href="#">Blog</a></li>
             
         </ul>
 

     </div>

     <div className="right-nav">


<a>Account</a> <a ><img src={cart} className="cart-img" /></a>




</div>


 </header>




<div className="sub-head">
  
</div>



    </div>


 
  );
}

export default App;
