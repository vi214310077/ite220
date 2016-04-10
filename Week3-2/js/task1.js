(function(){
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
	},
	resize: function(){
		window.addEventListener("resize", this.render);
	}, 
	
	devInfo: function(){
		var btnDev = document.getElementById("dev-info");
		btnDev.addEventListener("click", function(){
			var nameText = ["Victor J Iga", "IT Student"]; 
			var nameLink = "<a href='http://vi214310077.github.io/ite220/' target='_blank'>www.github.com/vi214310077</a>";
			var txt = "" + nameText[0] + "" + "<br>" + nameText[1] + "" + "<br>" + nameLink;
			var nameElement = document.getElementById("dev-info-container").innerHTML = txt;
			});
		}
		
}
task1.render();
task1.resize();
task1.devInfo();
})();