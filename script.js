let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function save() {
localStorage.setItem("transactions", JSON.stringify(transactions));
}

function addTransaction() {

let type = document.getElementById("type").value;
let amount = parseFloat(document.getElementById("amount").value);
let category = document.getElementById("category").value;

if (!amount || !category) return;

transactions.push({
type,
amount,
category
});

save();
render();
}

function render() {

let list = document.getElementById("transactions");
let balanceEl = document.getElementById("balance");

list.innerHTML = "";

let balance = 0;

transactions.forEach(t => {

let li = document.createElement("li");

li.textContent = `${t.type} - $${t.amount} (${t.category})`;

list.appendChild(li);

if (t.type === "income")
balance += t.amount;
else
balance -= t.amount;

});

balanceEl.textContent = balance.toFixed(2);

}

render();
