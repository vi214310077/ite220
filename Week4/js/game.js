(function(){
	var game = {
		randomNumber: Math.floor(Math.random() * 101),
		init: function(){
			this.bindEvent();
		},
		bindEvent: function(){
			var self = this;
		var button1 = document.getElementById("one");
		button1.addEventListener("click", this.clickNumberButton);
		
		document.getElementById("two").addEventListener("click", this.clickNumberButton);
		document.getElementById("three").addEventListener("click", this.clickNumberButton);
		document.getElementById("four").addEventListener("click", this.clickNumberButton);
		document.getElementById("five").addEventListener("click", this.clickNumberButton);
		document.getElementById("six").addEventListener("click", this.clickNumberButton);
		document.getElementById("seven").addEventListener("click", this.clickNumberButton);
		document.getElementById("eight").addEventListener("click", this.clickNumberButton);
		document.getElementById("nine").addEventListener("click", this.clickNumberButton);
		document.getElementById("zero").addEventListener("click", this.clickNumberButton);
		
		var guessBtn = document.getElementById("guess");
		guessBtn.addEventListener("click", function(){
			self.guess(self);
			});
		},
		clickNumberButton: function(e){
			//alert("button one is clicked.");
			var usernumber = document.getElementById("userNumber");
			usernumber.value += e.target.textContent;
		},
		guess: function(self){
			//alert(self.randomNumber);
			var userNumber = document.getElementById("userNumber");
			var alertMsg = document.getElementById("alertContainer");
			
			
				if(userNumber.value == self.randomNumber){
					//alert("YES");
					alertMsg.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Congradulation!</strong> You are CORRECT..</div>';
					userNumber.value = "";
				} else if (userNumber.value < self.randomNumber){
					alertMsg.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>OH no!</strong> Your Guessing Number is too LOW..</div>';
					userNumber.value = "";
					} else if(userNumber.value > self.randomNumber){
						alertMsg.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Oppps! Sorry no!</strong>Your Guessing Number is too HIGH..</div>';
						userNumber.value = "";
						}
				},
				//Show to High
				//Calculation
				//Random Number
				
	};
	game.init();
})();