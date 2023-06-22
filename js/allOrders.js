window.onload = function(){
    loadOrders();
}


function loadOrders(){
    var loadOrders = new XMLHttpRequest();
  
    loadOrders.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        document.getElementById("results").innerHTML = data;
      }
    }
  
    loadOrders.open("GET","src/retrieveOrder.php",true);
    loadOrders.send();
  }