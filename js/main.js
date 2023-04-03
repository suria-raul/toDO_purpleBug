function connectionOk(xmlHttpRequest) {
    return xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200
}
function order() {
    let http = new XMLHttpRequest();
    let fullName = document.getElementById('fullName').value
    let bread = document.getElementById('bread').value
    let sauce = document.getElementById('sauce').value
    let sandwichType = document.getElementById('sandwichType').value
    let cheese = document.getElementById('cheese').value
    let veggies = document.getElementById('veggies').value
    let request = "fullName=" + fullName + "&bread=" + bread + "&sauce=" + sauce + "&sandwichType=" + sandwichType + "&cheese=" + cheese + "&veggies=" + veggies

    http.open("POST", "server_side/createOrder.php", true)
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    http.onreadystatechange = function () {
        if (connectionOk(this)) {
            let result = this.responseText
            let summary = JSON.parse(result)
            let alertResponse ="Order Summary \n"
                + "bread:" + summary.bread + "\n"
                + "sauce:" + summary.sauce + "\n"
                + "sandwich type:" + summary.sandwich + "\n"
                + "cheese:" + summary.cheese + "\n"
                + "veggie:" + summary.veggie
            alert(alertResponse)
            window.location = "index.php"
        }
    }

    http.send(request);

}

function deleteOrder(id) {
    if (confirm("Are you sure you want to delete?")) {
        let xmlDelete = new XMLHttpRequest()
        xmlDelete.open("POST", "server_side/deleteOrder.php", true)
        xmlDelete.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

        xmlDelete.onreadystatechange = function () {
            if (connectionOk(this)) {
                alert(this.responseText)
                window.location = "orders.php"
            }
        }

        xmlDelete.send("order_id=" + id)
    }
}

function getOrderDetails(id) {
    let hidden = document.getElementById("hidden_order_id").value = id
    let xmlGet = new XMLHttpRequest()
    xmlGet.open("POST", "server_side/getOrderDetails.php", true)
    xmlGet.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xmlGet.onreadystatechange = function () {
        if (connectionOk(this)) {
            let results = this.responseText
            let response = JSON.parse(results)
            document.getElementById("hidden_fullName").value = response.user
            document.getElementById("hidden_bread").value = response.bread
            document.getElementById("hidden_sauce").value = response.sauce
            document.getElementById("hidden_sandwichType").value = response.sandwich
            document.getElementById("hidden_cheese").value = response.cheese
            document.getElementById("hidden_veggies").value = response.veggie
        }
    }

    xmlGet.send("order_id=" + hidden)
}

function UpdateOrders() {
    let xmlUpdate = new XMLHttpRequest()
    let order_id = document.getElementById("hidden_order_id").value
    let fullName = document.getElementById("hidden_fullName").value
    let bread = document.getElementById("hidden_bread").value
    let sauce = document.getElementById("hidden_sauce").value
    let sandwichType = document.getElementById("hidden_sandwichType").value
    let cheese = document.getElementById("hidden_cheese").value
    let veggies = document.getElementById("hidden_veggies").value
    let request = "order_id=" + order_id + "&fullName=" + fullName + "&bread=" + bread + "&sauce=" + sauce + "&sandwich=" + sandwichType + "&cheese=" + cheese + "&veggies=" + veggies

    xmlUpdate.open("POST", "server_side/UpdateOrder.php", true)
    xmlUpdate.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xmlUpdate.onreadystatechange = function () {
        if (connectionOk(this)) {
            alert(this.responseText)
            window.location = "orders.php"
        }
    }

    xmlUpdate.send(request);
}
