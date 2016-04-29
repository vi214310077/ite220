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
			
			if(name1 === "" || name2 === "" || gpa1 === "" || gpa2 === "") {
				sweetAlert("Oops...", "Please input Student Name!", "error");
			}else {
				self.generateGraph(name1, name2, gpa1.split(","), gpa2.split(","));
			}
		},

		generateGraph: function(name1, name2, gpaArray1, gpaArray2) {
			  function data(){
				var gpa1 = [],
					gpa2 = [];
				
				for(var i =0; i<gpaArray1.length;i++){
						gpa1.push({x: i+1, y: gpaArray1[i]});
						}
				  
				for(var n =0; n<gpaArray2.length;n++){
						gpa2.push({x: n+1, y: gpaArray2[n]});
						}
				return [{
						  values: gpa1,
						  key: name1,
						  color: '#ff7f0e'
						},
						{
						  values: gpa2,
						  key: name2,
						  color: '#2ca02c'
						}];
				 }
							  nv.addGraph(function() {
								var chart = nv.models.lineChart()
								  .useInteractiveGuideline(true)
								  ;
							  
								chart.xAxis
								  .axisLabel('Semester')
								  .tickFormat(d3.format(',r'))
								  ;
							  
								chart.yAxis
								  .axisLabel('GPA')
								  .tickFormat(d3.format('.02f'))
								  ;
							  
								d3.select('#chart svg')
								  .datum(data())
								  .transition().duration(500)
								  .call(chart)
								  ;
							  
								nv.utils.windowResize(chart.update);
							  
								return chart;
							  });
		}
	}
	gpaApp.init();
}