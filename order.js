// Parse URL parameters 

var urlParams = new URLSearchParams(window.location.search);
document.getElementById("pizzaCount").innerText = urlParams.get("pizzaCount");
document.getElementById("pizzaSize").innerText = urlParams.get("pizzaSize");
document.getElementById("pizzaShape").innerText = urlParams.get("pizzaShape");
document.getElementById("toppings").innerText = urlParams.get("toppings");
document.getElementById("crustType").innerText = urlParams.get("crustType");
document.getElementById("deliveryMethod").innerText = urlParams.get("deliveryMethod");
document.getElementById("name").innerText = urlParams.get("name");
document.getElementById("phone").innerText = urlParams.get("phone");
document.getElementById("email").innerText = urlParams.get("email");
document.getElementById("comments").innerText = urlParams.get("comments");