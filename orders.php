<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

	<title>ToDo_PurpleBug</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
	<script src="js/orders.js"></script>

</head>
<body>
<div id="results"></div>
<!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Update</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <input type="text" id="hidden_order_id">
          <input type="text" id="hidden_fullName" placeholder="Update Full name">
		
		<select id="hidden_bread">
			<option value="select">Choose bread</option>
			<option value="Whole Wheat">Whole Wheat</option>
			<option value="Italian Herb">Italian Herb</option>
			<option value="Jalapeno Parmesan">Jalapeno Parmesan</option>
		</select>
	
		<select id="hidden_sauce">
			<option value="select">Choose sauce</option>
			<option value="Mayo">Mayo</option>
			<option value="Mustard">Mustard</option>
			<option value="Honey Mustard">Honey Mustard</option>
			<option value="Spicy Mayo">Spicy Mayo</option>
		</select>

		<select id="hidden_sandwichType">
			<option value="select">Choose Sandwich type</option>
			<option value="Turkey Bacon Club">Turkey Bacon Club</option>
			<option value="Oven Roasted Turkey">Oven Roasted Turkey</option>
			<option value="Savory Ham">Savory Ham</option>
			<option value="Italian">Italian</option>
		</select>

		<select id="hidden_cheese">
			<option value="select">Choose cheese</option>
			<option value="American">American</option>
			<option value="Swiss">Swiss</option>
			<option value="Pepperjack">Pepperjack</option>
		</select>

		<select id="hidden_veggies">
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

        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-success" data-dismiss="modal" onclick="UpdateOrders()">Confirm</button>
        </div>
        
      </div>
    </div>
  </div>

</body>
</html>