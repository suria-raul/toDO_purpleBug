<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
	<title>ToDo_PurpleBug</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/script.js"></script>
</head>
<body>
	<div id="main-box">
		<p>Create your sandwich</p>
		<input type="text" id="fullName" placeholder="Enter Full name here">
		
		<select id="bread">
			<option value="select">Choose bread</option>
			<option value="Whole Wheat">Whole Wheat</option>
			<option value="Italian Herb">Italian Herb</option>
			<option value="Jalapeno Parmesan">Jalapeno Parmesan</option>
		</select>
	
		<select id="sauce">
			<option value="select">Choose sauce</option>
			<option value="Mayo">Mayo</option>
			<option value="Mustard">Mustard</option>
			<option value="Honey Mustard">Honey Mustard</option>
			<option value="Spicy Mayo">Spicy Mayo</option>
		</select>

		<select id="sandwichType">
			<option value="select">Choose Sandwich type</option>
			<option value="Turkey Bacon Club">Turkey Bacon Club</option>
			<option value="Oven Roasted Turkey">Oven Roasted Turkey</option>
			<option value="Savory Ham">Savory Ham</option>
			<option value="Italian">Italian</option>
		</select>

		<select id="cheese">
			<option value="select">Choose cheese</option>
			<option value="American">American</option>
			<option value="Swiss">Swiss</option>
			<option value="Pepperjack">Pepperjack</option>
		</select>

		<select id="veggies">
			<option value="select">Choose veggies</option>
			<option value="Cucumber">Cucumber</option>
			<option value="Lettuce">Lettuce</option>
			<option value="Peppers and Banana">Peppers and Banana</option>
			<option value="Peppers and Jalapeno">Peppers and Jalapeno</option>
			<option value="Peppers Green and Red">Peppers Green and Red</option>
			<option value="Pickles">Pickles</option>
			<option value="Spinach">Spinach</option>
			<option value="Tomato">Tomato</option>
			<option value="Olives">Olives</option>
			<option value="Onion">Onion</option>
		</select>

		<button id="button" onclick="order()">Order Now</button>

	</div>
	<p>Submitted By: Raul Suria Jr</p>
	<a href="allOrders.php">View all orders</a>
</body>
</html>