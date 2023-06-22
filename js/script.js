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
		$.ajax({
			type: "POST",
			url: "src/deleteOrder.php",
			data: {order_id: id},
			success: function(response) {
				alert(response);
				window.location = "allOrders.php";
			}
		})
	}
}

function getOrderDetails(id){
	$.ajax({
		type: "POST",
		url: "src/getOrderDetails.php",
		data: {order_id: id},
		success: function(response) {
			let res = JSON.parse(response)
			$("#hidden_order_id").val(res.order_id)
			$("#hidden_fullName").val(res.user)
			$("#hidden_bread").val(res.bread)
			$("#hidden_sauce").val(res.sauce)
			$("#hidden_sandwichType").val(res.sandwich)
			$("#hidden_cheese").val(res.cheese)
			$("#hidden_veggies").val(res.veggie)
		}
	})
}

function UpdateOrders(){
	$.ajax({
		type: "POST",
		url: "src/updateOrder.php",
		data: {
			order_id: $("#hidden_order_id").val(),
			fullName: $("#hidden_fullName").val(),
			bread: $("#hidden_bread").val(),
			sauce: $("#hidden_sauce").val(),
			sandwich: $("#hidden_sandwichType").val(),
			cheese: $("#hidden_cheese").val(),
			veggies: $("#hidden_veggies").val()
		},
		success: function(response) {
			alert(response)
			window.location = "allOrders.php"
		}
	})
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