window.onload = function () {
    loadOrders();
}

function connectionOk(xmlHttpRequest) {
    return xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200;
}

function loadOrders() {
    let loadOrders = new XMLHttpRequest();
    let table = document.querySelector('#results')

    loadOrders.onreadystatechange = function () {
        if (connectionOk(this)) {
            let result = JSON.parse(this.responseText)
            result.forEach(function (row, index) {
                let tableRow = document.createElement('tr')
                let number = document.createElement('td')
                let user = document.createElement('td')
                let bread = document.createElement('td')
                let sauce = document.createElement('td')
                let sandwich = document.createElement('td')
                let cheese = document.createElement('td')
                let veggie = document.createElement('td')
                let date_time = document.createElement('td')
                let actions = document.createElement('td')
                let deleteOrder = document.createElement('span')
                let showOrder = document.createElement('span')
                let viewJson = document.createElement('span')

                deleteOrder.setAttribute('onClick', 'deleteOrder(' + row.order_id + ')')
                showOrder.setAttribute('onClick', 'getOrderDetails(' + row.order_id + ')')
                viewJson.setAttribute('onClick', 'jsonViewer(' + row.order_id + ')')

                deleteOrder.textContent = 'Delete'
                showOrder.textContent = 'Edit'
                viewJson.textContent = 'View Json'

                number.textContent = row.order_id
                user.textContent = row.user
                bread.textContent = row.bread
                sauce.textContent = row.sauce
                sandwich.textContent = row.sandwich
                cheese.textContent = row.cheese
                veggie.textContent = row.veggie
                date_time.textContent = row.order_at

                actions.appendChild(deleteOrder)
                actions.appendChild(showOrder)
                actions.appendChild(viewJson)

                tableRow.appendChild(number)
                tableRow.appendChild(user)
                tableRow.appendChild(bread)
                tableRow.appendChild(sauce)
                tableRow.appendChild(sandwich)
                tableRow.appendChild(cheese)
                tableRow.appendChild(veggie)
                tableRow.appendChild(date_time)
                tableRow.appendChild(actions)

                table.appendChild(tableRow)
            })
        }
    }

    loadOrders.open("GET", "server_side/retrieveOrder.php", true);
    loadOrders.send();
}

function jsonViewer(id) {
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

function deleteOrder(id) {
    if (confirm("Are you sure you want to delete?")) {
        let xmlDelete = new XMLHttpRequest()
        xmlDelete.open("POST", "server_side/deleteOrder.php", true)
        xmlDelete.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

        xmlDelete.onreadystatechange = function () {
            if (connectionOk(this)) {
                alert(this.responseText)
                window.location = "orders.html"
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
            let response = JSON.parse(this.responseText)
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

function updateOrders() {
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
            window.location = "orders.html"
        }
    }

    xmlUpdate.send(request);
}