window.onload = function () {
    loadOrders();
}

function connectionOk(xmlHttpRequest) {
    return xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200;
}

function loadOrders() {
    let loadOrders = new XMLHttpRequest();

    loadOrders.onreadystatechange = function () {
        if (connectionOk(this)) {
            document.getElementById("results").innerHTML = this.responseText;
        }
    }

    loadOrders.open("GET", "server_side/retrieveOrder.php", true);
    loadOrders.send();
}