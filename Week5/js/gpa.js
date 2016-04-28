window.onload = function() {
	var gpaApp = {
		init: function() {
			var self = this;
			var button = document.getElementById("graphBtn");
			button.addEventListener("click", function() {
				self.pressGraphBtn(self);
			});
		},
		pressGraphBtn: function(self) {
			var name1 = document.getElementById("name1").value;
			var name2 = document.getElementById("name2").value;
			var gpa1 = document.getElementById("gpa1").value;
			var gpa2 = document.getElementById("gpa2").value;
			if(name1 == "" || name2 == "" || gpa1 == "" || gpa2 == "") {
				sweetAlert("Oops...", "Please input Student Name!", "error");
			}else {
				
			}
		},

		generateGraph: function(name1, name2, gpaArray1, gpaArray2) {
			

		}
	}
	gpaApp.init();
}