let btn = document.querySelector("#plus");
let btnn = document.querySelector("#minus");

let cart = document.querySelector("#cart");
let quantity = document.querySelector("#qty");
let price = document.querySelector("#price");

let checkout = document.querySelector("#checkout");
let total = document.querySelector("#total");
let login = document.querySelector("#login");

let count = 0;

let prices = 100;


btn.addEventListener("click",function(){
    cart.textContent = "Cart"+"("+ ++count +")";
    quantity.textContent ="Qty:" + count;
    price.textContent = "Price: $" + prices;
    total.textContent = "Total: $" + count * prices;
})





btnn.addEventListener("click",function(){
    if(count>0){
    cart.textContent = "Cart"+"("+  --count +")";
    quantity.textContent ="Qty:" + count;
    price.textContent = "Price: $" + prices;
    total.textContent = "Total: $" + count * prices;
    }else{
        cart.textContent = "Cart";
        quantity.textContent = "Qty:"
    } 

})
cart.addEventListener("click",function(){
    checkout.style.display = "block";
})

login.addEventListener("click",function(){
    window.location.href = "login.html";
})





let home = document.querySelector("#home");

home.addEventListener("click", function(){
    window.location.href = "index.html";
})



var tl = gsap.timeline();


tl.from("#navlinks #contact",{
    y:-60,
    duration:1.5,
    delay:.01,
    color:"#8B0000",

})

tl.from("#navlinks #name",{
    y:-60,
    duration:1.3,
    delay:.01,
    color:"#8B0000",

})


tl.from("#navlinks #home",{
    y:-60,
    duration:1.1,
    delay:.01,
    color:"#8B0000",

})

tl.from("#navlinks #login",{
    y:-60,
    duration:.9,
    delay:.01,
    color:"#8B0000",

})
tl.from("#navlinks #cart",{
    y:-60,
    duration:.7,
    delay:.01,
    color:"#8B0000",

})

tl.from("#navlinks #search",{
    y:-60,
    duration:.5,
    delay:.01,
    color:"#8B0000",

})


tl.from("#navlinks #menu",{
    y:-60,
    duration:.3,
    delay:.01,
    color:"#8B0000",

})













