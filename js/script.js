function order(){
	$.ajax({
		type: "POST",
		url: "src/createOrder.php",
		data: {
			fullName: $('#fullName').val(),
			bread: $('#bread').val(),
			sauce: $('#sauce').val(),
			sandwichType: $('#sandwichType').val(),
			cheese: $('#cheese').val(),
			veggies: $('#veggies').val(),
		},
		success: function(response) {
			let summary = JSON.parse(response)
			alert("Order Summary \n"+"bread:"+summary.bread+"\n"+"sauce:"+summary.sauce+"\n"+"sandwich type:"+summary.sandwich+"\n"+"cheese:"+summary.cheese+"\n"+"veggie:"+summary.veggie)
			window.location = "index.php";
		}
	})

}

function deleteOrder(id){
	var conf = confirm("Are you sure you want to delete?");
	if (conf) {
		var xmlDelete = new XMLHttpRequest();
		xmlDelete.open("POST","src/deleteOrder.php",true);
		xmlDelete.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		xmlDelete.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				alert(this.responseText);
				window.location = "allOrders.php";
			}
		}

		xmlDelete.send("order_id="+id);
	}
}

function getOrderDetails(id){
	var hidden = document.getElementById("hidden_order_id").value = id;
	var xmlGet = new XMLHttpRequest();
	xmlGet.open("POST","src/getOrderDetails.php",true);
	xmlGet.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	xmlGet.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			var results = this.responseText;
			var response = JSON.parse(results);
			document.getElementById("hidden_fullName").value = response.user;
			document.getElementById("hidden_bread").value = response.bread;
			document.getElementById("hidden_sauce").value = response.sauce;
			document.getElementById("hidden_sandwichType").value = response.sandwich;
			document.getElementById("hidden_cheese").value = response.cheese;
			document.getElementById("hidden_veggies").value = response.veggie;
		}
	}

	xmlGet.send("order_id="+hidden);
}

function UpdateOrders(){
	var xmlUpdate = new XMLHttpRequest();
	var order_id = document.getElementById("hidden_order_id").value;
	var fullName = document.getElementById("hidden_fullName").value;
	var bread = document.getElementById("hidden_bread").value;
	var sauce = document.getElementById("hidden_sauce").value;
	var sandwichType = document.getElementById("hidden_sandwichType").value;
	var cheese = document.getElementById("hidden_cheese").value;
	var veggies = document.getElementById("hidden_veggies").value;
	var request = "order_id="+order_id+"&fullName="+fullName+"&bread="+bread+"&sauce="+sauce+"&sandwich="+sandwichType+"&cheese="+cheese+"&veggies="+veggies;

	xmlUpdate.open("POST","src/updateOrder.php",true);
	xmlUpdate.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	xmlUpdate.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
			window.location = "allOrders.php"
		} 
	}

	xmlUpdate.send(request);
}

function JSONviewer(id){
	var hidden = document.getElementById("hidden_order_id").value = id;
	var xmlGet = new XMLHttpRequest();
	xmlGet.open("POST","src/getOrderDetails.php",true);
	xmlGet.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	xmlGet.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
		}
	}

	xmlGet.send("order_id="+hidden);
}