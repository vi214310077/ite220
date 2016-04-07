var shop = {
	customerName: "Victor", 
	totalPrice: 0, 
	products: ["Brooklyn T-Shirt White","Brooklyn T-Shirt Black","Apple Watch","Android Phone"], 
	prices: [10,10,199,159],
	sawatdee: "",
	time: 0,
	
	displayCustomerName: function(){
		var customerElement = document.getElementById("customer-name");
		customerElement.textContent = this.customerName;}, 
	
	displayProductList: function (){
		var productsText = "";
		var productsElement = document.getElementById("product-list");
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[0]+"</span>" + this.products[0]+ "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[1]+"</span>" + this.products[1]+ "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[2]+"</span>" + this.products[2]+ "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[3]+"</span>" + this.products[3]+ "</li>";
		productsElement.innerHTML = productsText;
	},
	calculateTotalPrice: function(){
		return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;},
		
	displaytotalPrice: function(){
		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.totalPrice;
		},
		
		dateandTime: function(){
			var d = new Date().getHours();
			if (d < 12){
				return ("Good Morning");
				}else if (d < 23){
					return ("Good Afternoon");
					}else {
						return ("Good Night");
						}
		},
		
		displayGreetings: function(){
			this.Greetings = this.dateandTime();
			var GreetingsElement = document.getElementById("time");
			GreetingsElement.textContent = this.Greetings;}

}
shop.displayCustomerName();
shop.displayProductList();
shop.displaytotalPrice();
shop.displayGreetings();

//var customerName = "Victor";
//var price = 10;
//var quantity = 2;
//var d = new Date().getHours();
//var sawatdee;
//
//if (d < 12){
//	sawatdee = "Good Morning"; 
//} else if (d < 23){
//	sawatdee = "Good Afternoon";
//} else {
//	sawatdee = "Good Night";
//}
////var greetingElement = document.getElementById("greeting-time");
////greetingElement.textContent = greeting;
//
//var sawatdeeElement = document.getElementById("time");
//sawatdeeElement.textContent = sawatdee;
//
//var customerElement = document.getElementById("customer-name");
//customerElement.textContent = customerName;
//
//var priceElement = document.getElementById("total-price");
//priceElement.textContent = totalPrice;
//
//var products = [
//	"Brooklyn T-Shirt White",
//	"Brooklyn T-Shirt Black",
//	"Apple Watch",
//	"Android Phone"];
//
//var prices = [10, 10, 199, 159];
//var productsText = "";
//var productsElement = document.getElementById("product-list");
//productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0]+"</span>" + products[0]+ "</li>";
//productsText += "<li class='list-group-item'><span class='badge'>$" + prices[1]+"</span>" + products[1]+ "</li>";
//productsText += "<li class='list-group-item'><span class='badge'>$" + prices[2]+"</span>" + products[2]+ "</li>";
//productsText += "<li class='list-group-item'><span class='badge'>$" + prices[3]+"</span>" + products[3]+ "</li>";
//productsElement.innerHTML = productsText; 
//
//var totalPrice = 0;
//var discount = 0.75;
//totalPrice = prices[0] +prices[1] + prices[2] + prices[3];
//var discountPrice = totalPrice * discount;
//var discountPriceElement = document.getElementById("total-price"); 
//discountPriceElement.textContent = discountPrice;