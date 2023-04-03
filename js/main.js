function connectionOk(xmlHttpRequest) {
    return xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200
}
function order() {
    let http = new XMLHttpRequest();
    let fullName = document.querySelector('#fullName').value
    let bread = document.querySelector('#bread').value
    let sauce = document.querySelector('#sauce').value
    let sandwichType = document.querySelector('#sandwichType').value
    let cheese = document.querySelector('#cheese').value
    let veggies = document.querySelector('#veggies').value
    let request = "fullName=" + fullName
        + "&bread=" + bread
        + "&sauce=" + sauce
        + "&sandwichType=" + sandwichType
        + "&cheese=" + cheese
        + "&veggies=" + veggies

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
    let hidden = document.querySelector("#hidden_order_id").value = id
    let xmlGet = new XMLHttpRequest()
    xmlGet.open("POST", "server_side/getOrderDetails.php", true)
    xmlGet.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    xmlGet.onreadystatechange = function () {
        if (connectionOk(this)) {
            let results = this.responseText
            let response = JSON.parse(results)
            document.querySelector("#hidden_fullName").value = response.user
            document.querySelector("#hidden_bread").value = response.bread
            document.querySelector("#hidden_sauce").value = response.sauce
            document.querySelector("#hidden_sandwichType").value = response.sandwich
            document.querySelector("#hidden_cheese").value = response.cheese
            document.querySelector("#hidden_veggies").value = response.veggie
        }
    }

    xmlGet.send("order_id=" + hidden)
}

function UpdateOrders() {
    let xmlUpdate = new XMLHttpRequest()
    let order_id = document.querySelector("#hidden_order_id").value
    let fullName = document.querySelector("#hidden_fullName").value
    let bread = document.querySelector("#hidden_bread").value
    let sauce = document.querySelector("#hidden_sauce").value
    let sandwichType = document.querySelector("#hidden_sandwichType").value
    let cheese = document.querySelector("#hidden_cheese").value
    let veggies = document.querySelector("#hidden_veggies").value
    let request = "order_id=" + order_id
        + "&fullName=" + fullName
        + "&bread=" + bread
        + "&sauce=" + sauce
        + "&sandwich=" + sandwichType
        + "&cheese=" + cheese
        + "&veggies=" + veggies

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