import brand from './lumin.png';
import cart from './cart.png';
import './App.css';

import { useQuery, gql } from '@apollo/client';
 
 
const DEFAULT_QUERY = gql`
  {
    products
  {
    title,
    price (currency: USD),
    id,
    image_url,
    
    
  }
  }
`;


function App() {

 
  const { data } = useQuery(DEFAULT_QUERY);





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
  

{data && (
        <>
          {data.products.map((product) => (

            <div className="module">
              <div className="product-link" >
              <img src={product.image_url} alt={product.title} />
             
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>

              <button className="product-button">Add to Cart</button>
              </div>

             
            
            </div>

 
          ))}
        </>
      )}



 





</div>

</div>










</div>


    </div>
   
 
  );
}

export default App;
