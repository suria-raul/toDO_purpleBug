window.onload = function(){
  	loadOrders();
	}


function order(){
 	var http = new XMLHttpRequest();
	var fullName = document.getElementById('fullName').value;
	var bread = document.getElementById('bread').value;
	var sauce = document.getElementById('sauce').value;
	var sandwichType = document.getElementById('sandwichType').value;
	var cheese = document.getElementById('cheese').value;
	var veggies = document.getElementById('veggies').value;
	var request = "fullName="+fullName+"&bread="+bread+"&sauce="+sauce+"&sandwichType="+sandwichType+"&cheese="+cheese+"&veggies="+veggies;	

	http.open("POST","server_side/createOrder.php", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var result = this.responseText
			var summary = JSON.parse(result);
			alert("Order Summary \n"+"bread:"+summary.bread+"\n"+"sauce:"+summary.sauce+"\n"+"sandwich type:"+summary.sandwich+"\n"+"cheese:"+summary.cheese+"\n"+"veggie:"+summary.veggie);
			window.location = "index.php";
		}
	}

	http.send(request);

}

function deleteOrder(id){
	var conf = confirm("Are you sure you want to delete?");
	if (conf == true) {
		var xmlDelete = new XMLHttpRequest();
		xmlDelete.open("POST","server_side/deleteOrder.php",true);
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
	xmlGet.open("POST","server_side/getOrderDetails.php",true);
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

	xmlUpdate.open("POST","server_side/UpdateOrder.php",true);
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
	xmlGet.open("POST","server_side/getOrderDetails.php",true);
	xmlGet.setRequestHeader("Content-type","application/x-www-form-urlencoded");

	xmlGet.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			alert(this.responseText);
		}
	}

	xmlGet.send("order_id="+hidden);
}

function loadOrders(){
  var loadOrders = new XMLHttpRequest();

  loadOrders.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      document.getElementById("results").innerHTML = data;
    }
  }

  loadOrders.open("GET","server_side/retrieveOrder.php",true);
  loadOrders.send();
}