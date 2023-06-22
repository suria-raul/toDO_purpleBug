window.onload = function(){
    loadOrders();
}

function loadOrders() {
    $.ajax({
        type: "GET",
        url: "src/retrieveOrder.php",
        success: function(response) {
            $('#result').html(response)
        }
    })
}