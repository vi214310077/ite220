 //JavaScript Document
var customerName = "Victor";
var price = 10;
var quantity = 2;
var d = new Date().getHours();
var sawatdee;

if (d < 12){
	sawatdee = "Good Morning"; 
} else if (d < 23){
	sawatdee = "Good Afternoon";
} else {
	sawatdee = "Good Night";
}
//var greetingElement = document.getElementById("greeting-time");
//greetingElement.textContent = greeting;

var sawatdeeElement = document.getElementById("time");
sawatdeeElement.textContent = sawatdee;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

var priceElement = document.getElementById("total-price");
priceElement.textContent = totalPrice;

var products = [
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone"];

var prices = [10, 10, 199, 159];
var productsText = "";
var productsElement = document.getElementById("product-list");
productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0]+"</span>" + products[0]+ "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + products[1]+ "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>" + products[2]+ "</li>";
productsText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + products[3]+ "</li>";
productsElement.innerHTML = productsText; 

var totalPrice = 0;
var discount = 0.75;
totalPrice = prices[0] +prices[1] + prices[2] + prices[3];
var discountPrice = totalPrice * discount;
var discountPriceElement = document.getElementById("total-price"); 
discountPriceElement.textContent = discountPrice;