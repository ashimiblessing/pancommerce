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

<div className="main">

 <div className="sub-head">
 


<div className="sub-head-container-1">
<h1>All Products</h1>
<p>A 360<sup>o</sup> look at Lumin</p>
</div>





<div className="sub-head-container-2">
<select class="filter-select"><option value="" disabled="">Filter by</option><option value="all-products">All Products</option><option selected="" value="new-products">New Products</option><option value="sets">Sets</option><option value="skincare">Skincare</option><option value="hair-and-body">Hair &amp; Body Care</option><option value="accessories">Accessories</option></select>
</div>
 

</div>







<div className="grid-contain">
<div class="grid">
  
  <div class="module">1</div>
  <div class="module">2</div>
  <div class="module">3</div>
  <div class="module">4</div>
  <div class="module">5</div>
  <div class="module">6</div>
  <div class="module">7</div>
  <div class="module">8</div>
  <div class="module">9</div>
  <div class="module">10</div>
  <div class="module">11</div>
  <div class="module">12</div>
  <div class="module">13</div>
  <div class="module">14</div>
  <div class="module">15</div>
</div>

</div>










</div>


    </div>


 
  );
}

export default App;
