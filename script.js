let cart=[];
let total=0;

function toggleCart(){
document.getElementById("cart").classList.toggle("open");
}

function updateCart(){

const container=document.getElementById("cart-items");
container.innerHTML="";
total=0;

cart.forEach((item,index)=>{

total+=item.price;

const div=document.createElement("div");
div.className="cart-item";

div.innerHTML=`
${item.name} - ${item.size} - ${item.price} EGP
<button class="remove-btn" onclick="removeFromCart(${index})">X</button>
`;

container.appendChild(div);

});

document.getElementById("cart-count").innerText=cart.length;
document.getElementById("total").innerText=total+" EGP";

}

function addToCartWithSize(name,price,sizeId){

const size=document.getElementById(sizeId).value;

cart.push({name,price,size});

updateCart();

}

function addToCartOneSize(name,price){

cart.push({name,price,size:"One Size"});

updateCart();

}

function removeFromCart(index){

cart.splice(index,1);
updateCart();

}

function goToCheckout(){

localStorage.setItem("cart",JSON.stringify(cart));
localStorage.setItem("total",total);

window.location.href="checkout.html";

}
