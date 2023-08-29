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
            let alertResponse = "Order Summary \n"
                + "bread:" + summary.bread + "\n"
                + "sauce:" + summary.sauce + "\n"
                + "sandwich type:" + summary.sandwich + "\n"
                + "cheese:" + summary.cheese + "\n"
                + "veggie:" + summary.veggie
            alert(alertResponse)
            window.location.reload()
        }
    }

    http.send(request);

}
