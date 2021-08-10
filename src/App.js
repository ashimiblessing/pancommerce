import React, { useState } from 'react';
import brand from './images/lumin.png';
import cart from './images/cart.png';

 

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
  const [cartOpen, setCartOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [cartContents, setCartContents] = useState({});
  const { data } = useQuery(DEFAULT_QUERY);



//define a map function to use for object since array map won't work
 

//handles adding item to cart
const handleCart = (cartItem) => {

  // make a copy  of the current cart content
  const cartCopy = {...cartContents} 


  //increment count if exists
  if(cartCopy[cartItem.id])
  {
    increaseCart(cartItem.id)
    setCartOpen(true)
    return
  }
  
  cartCopy[cartItem.id] = cartItem 

  //append the new item to copy
  setCartContents({...cartCopy})
  cartTotalItems(cartCopy)

  //open cart on adding
 setCartOpen(true) 
};




//handles cart opening
const changeCurrency = () => {
  //todo
 };


 const cartTotalItems = (cart) => {
 
 // calculates the current cart via reduction
  const total = Object.keys(cart).reduce((sum,key)=>sum+parseFloat(cart[key].quantity||0),0) 
  
  setItemCount(total)

 };
 



//handles cart closing
 const closeCart = () => {
  setCartOpen(false)
 };
 
//
 const decreaseCart = (id) => {

const cartCopy = {...cartContents}

const item = cartCopy[id]

//handle when user reduces to 1
const itemQty = item.quantity
   if(itemQty < 2) {
     return;
   }

   const newCount = itemQty - 1

   item.quantity = newCount

   cartCopy[id] = item
   
   setCartContents({...cartCopy})
   cartTotalItems(cartCopy)
 };
 

 const increaseCart = (id) => {
  const cartCopy = {...cartContents}
  const item = cartCopy[id]
  const itemQty = item.quantity
  

   const newCount = itemQty + 1

   item.quantity = newCount

   cartCopy[id] = item
   
   setCartContents({...cartCopy})
   cartTotalItems(cartCopy)
};

//deletes item from cart
const removeItem = (id) => {
 const cartCopy = [...cartContents]

 const filteredCopy = cartCopy.filter(function(ele){ 
  return ele.id !== id
});

setCartContents(filteredCopy)
 
};






  return (
 
    <div className="App">
    <header>






     <div className="nav">
     <img src={brand} className="brand" alt="logo"/> 
<ul>
             <li><a href="/">Shop</a></li>
             <li><a href="/">About</a></li>
             <li><a href="/">Support</a></li>
             <li><a href="/">Blog</a></li>
             
         </ul>
 

     </div>

     <div className="right-nav">


<div >Account</div> <div className="top-cart-icon" onClick={() => setCartOpen(true)}><img src={cart} className="cart-img" alt="cart toggle" /> <sup>{itemCount}</sup></div>




</div>


 </header>

<div className="main">

 <div className="sub-head">
 


<div className="sub-head-container-1">
<h1>All Products</h1>
<p>A 360<sup>o</sup> look at Lumin</p>
</div>





<div className="sub-head-container-2">
<select className="filter-select"><option value="" disabled="">Filter by</option><option value="all-products">All Products</option><option selected="" value="new-products">New Products</option><option value="sets">Sets</option><option value="skincare">Skincare</option><option value="hair-and-body">Hair &amp; Body Care</option><option value="accessories">Accessories</option></select>
</div>
 

</div>







<div className="grid-contain">
<div className="grid">
  

{data && (
        <>
          {data.products.map((product) => (

            <div className="module">
              <div className="product-link" >
              <img src={product.image_url} alt={product.title} />
             
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>

              <button className="product-button" onClick={() => handleCart({title:product.title,price:product.price,image:product.image_url,id:product.id, quantity:1})}>Add to Cart</button>
              </div>

             
            
            </div>

 
          ))}
        </>
      )}



 


</div>

</div>










</div>










<div id="cart-shadow-layer" style={{right: `${cartOpen ? '0':'-100%'}`}}></div>

<div id="cd-cart" style={{right: `${cartOpen ? '0':'-100%'}`}}>

<div className="cart-top"  >
<div className="left" onClick={() => closeCart()}> <span>&rsaquo;</span> </div>


 <div className="middle">
      <span className="cart-title">YOUR CART</span>
      </div>

      <div className="end"></div>

  </div>

<div className="cart-body">

<div className="currency-select-row">
<select className="currency-select" onChange={() => changeCurrency()}><option value="USD"> USD </option><option value="EUR"> EUR </option><option value="CAD"> CAD </option><option value="AUD"> AUD </option><option value="GBP"> GBP </option><option value="JPY"> JPY </option><option disabled=""> --- </option><option value="AED"> AED </option><option value="AFN"> AFN </option><option value="ALL"> ALL </option><option value="AMD"> AMD </option><option value="ANG"> ANG </option><option value="AOA"> AOA </option><option value="ARS"> ARS </option><option value="AUD"> AUD </option><option value="AWG"> AWG </option><option value="AZN"> AZN </option><option value="BAM"> BAM </option><option value="BBD"> BBD </option><option value="BDT"> BDT </option><option value="BGN"> BGN </option><option value="BIF"> BIF </option><option value="BMD"> BMD </option><option value="BND"> BND </option><option value="BOB"> BOB </option><option value="BRL"> BRL </option><option value="BSD"> BSD </option><option value="BWP"> BWP </option><option value="BZD"> BZD </option><option value="CAD"> CAD </option><option value="CDF"> CDF </option><option value="CHF"> CHF </option><option value="CLP"> CLP </option><option value="CNY"> CNY </option><option value="COP"> COP </option><option value="CRC"> CRC </option><option value="CVE"> CVE </option><option value="CZK"> CZK </option><option value="DJF"> DJF </option><option value="DKK"> DKK </option><option value="DOP"> DOP </option><option value="DZD"> DZD </option><option value="EGP"> EGP </option><option value="ETB"> ETB </option><option value="EUR"> EUR </option><option value="FJD"> FJD </option><option value="FKP"> FKP </option><option value="GBP"> GBP </option><option value="GEL"> GEL </option><option value="GIP"> GIP </option><option value="GMD"> GMD </option><option value="GNF"> GNF </option><option value="GTQ"> GTQ </option><option value="GYD"> GYD </option><option value="HKD"> HKD </option><option value="HNL"> HNL </option><option value="HRK"> HRK </option><option value="HTG"> HTG </option><option value="HUF"> HUF </option><option value="IDR"> IDR </option><option value="ILS"> ILS </option><option value="INR"> INR </option><option value="ISK"> ISK </option><option value="JMD"> JMD </option><option value="JPY"> JPY </option><option value="KES"> KES </option><option value="KGS"> KGS </option><option value="KHR"> KHR </option><option value="KMF"> KMF </option><option value="KRW"> KRW </option><option value="KYD"> KYD </option><option value="KZT"> KZT </option><option value="LAK"> LAK </option><option value="LBP"> LBP </option><option value="LKR"> LKR </option><option value="LRD"> LRD </option><option value="LSL"> LSL </option><option value="MAD"> MAD </option><option value="MDL"> MDL </option><option value="MGA"> MGA </option><option value="MKD"> MKD </option><option value="MMK"> MMK </option><option value="MNT"> MNT </option><option value="MOP"> MOP </option><option value="MRO"> MRO </option><option value="MUR"> MUR </option><option value="MVR"> MVR </option><option value="MWK"> MWK </option><option value="MXN"> MXN </option><option value="MYR"> MYR </option><option value="MZN"> MZN </option><option value="NAD"> NAD </option><option value="NGN"> NGN </option><option value="NIO"> NIO </option><option value="NOK"> NOK </option><option value="NPR"> NPR </option><option value="NZD"> NZD </option><option value="PAB"> PAB </option><option value="PEN"> PEN </option><option value="PGK"> PGK </option><option value="PHP"> PHP </option><option value="PKR"> PKR </option><option value="PLN"> PLN </option><option value="PYG"> PYG </option><option value="QAR"> QAR </option><option value="RON"> RON </option><option value="RSD"> RSD </option><option value="RUB"> RUB </option><option value="RWF"> RWF </option><option value="SAR"> SAR </option><option value="SBD"> SBD </option><option value="SCR"> SCR </option><option value="SEK"> SEK </option><option value="SGD"> SGD </option><option value="SHP"> SHP </option><option value="SLL"> SLL </option><option value="SOS"> SOS </option><option value="SRD"> SRD </option><option value="STD"> STD </option><option value="SZL"> SZL </option><option value="THB"> THB </option><option value="TJS"> TJS </option><option value="TOP"> TOP </option><option value="TRY"> TRY </option><option value="TTD"> TTD </option><option value="TWD"> TWD </option><option value="TZS"> TZS </option><option value="UAH"> UAH </option><option value="UGX"> UGX </option><option value="UYU"> UYU </option><option value="UZS"> UZS </option><option value="VND"> VND </option><option value="VUV"> VUV </option><option value="WST"> WST </option><option value="XAF"> XAF </option><option value="XCD"> XCD </option><option value="XOF"> XOF </option><option value="XPF"> XPF </option><option value="YER"> YER </option><option value="ZAR"> ZAR </option><option value="ZMW"> ZMW </option></select>
</div>


<div className="cart-list">
 { cartContents &&

Object.entries(cartContents).map(([key, content]) => (


<>

<div className="cart-item">
    
    
    
    
<div className="title-quantity">
<span className="item-title">{content.title}</span>
<div className="quantity-selector"><span className="counter-action decrement" onClick={() => decreaseCart(content.id)}>-</span><span className="counter-number counter"> {content.quantity} </span><span className="counter-action increment" onClick={() => increaseCart(content.id)}>+</span></div>

</div>

<div className="item-price">US${content.quantity * content.price}.00</div>

<div className="item-product-image"><img src={content.image} alt="Product" />
</div>

<span class="remove-product" onClick={() => removeItem(content.id)}>x</span>


</div>


</>


))

 
 }

</div>


  <p className="no-items" style={{display:`${cartContents.length < 1 ? 'block' :'none'}`}}>There are no items in your cart.</p>




  
  </div>


</div>

</div>
 
    

  











 
 
  );
}

export default App;
