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

function JSONviewer(id) {
    let hidden = document.getElementById("hidden_order_id").value = id;
    let xmlGet = new XMLHttpRequest();
    xmlGet.open("POST", "server_side/getOrderDetails.php", true);
    xmlGet.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlGet.onreadystatechange = function () {
        if (connectionOk(this)) {
            alert(this.responseText);
        }
    }

    xmlGet.send("order_id=" + hidden);
}