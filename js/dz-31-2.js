let balance = {
    full: 359,
    reserved: 57,
    currency: "USD"
}

let dzBalance = document.getElementById("dzBalance");
let showBalance = document.getElementById("showBalanceDZ31");

if (dzBalance) {
    showBalance.addEventListener("click", showBalanceDZ31);
}

function showBalanceDZ31() {
    localStorage.setItem("dzBalance", JSON.stringify(balance));
    console.log("-------");
    let totalBalance = balance.full - balance.reserved;
    dzBalance.innerText = "Баланс - " + totalBalance + " " + balance.currency + " (reserved " + balance.reserved + " " + balance.currency + ")";
}

let fullBalance = document.getElementById("fullBalance");
let changeBalance = document.getElementById("changeBalanceDZ31");


if (changeBalance) {
    changeBalance.addEventListener("click", changeBalanceDZ31);
}

function changeBalanceDZ31() {
    let inputBalance = Number(document.getElementById("dzBalance__input").value);
    if (inputBalance < 0) {
        alert("Значення яке ви намагаєтеся встановити менше ніж 0");
    } else if (inputBalance < balance.reserved) {
        alert("Значення яке ви намагаєтеся встановити менше reserved");
    } else {
        balance.full = inputBalance;
        fullBalance.innerText = inputBalance;
        console.log(inputBalance);
    }
    console.log(balance);
}