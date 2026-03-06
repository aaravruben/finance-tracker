
document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("transactionForm");

if(form){
form.addEventListener("submit", e=>{
e.preventDefault();

const amount = document.getElementById("amount").value;
const category = document.getElementById("category").value;
const date = document.getElementById("date").value;
const description = document.getElementById("description").value;
const type = document.getElementById("type").value;

const transactions = getTransactions();

transactions.push({amount,category,date,description,type});

saveTransactions(transactions);

alert("Transaction added");
form.reset();
});
}

loadGoals();

});

function addGoal(){

const name = document.getElementById("goalName").value;
const amount = document.getElementById("goalAmount").value;

const goals = getGoals();

goals.push({name,amount,progress:0});

saveGoals(goals);

loadGoals();

}

function loadGoals(){

const container = document.getElementById("goalsList");
if(!container) return;

container.innerHTML="";

const goals = getGoals();

goals.forEach(g=>{

const div=document.createElement("div");
div.innerHTML=`
<h3>${g.name}</h3>
<p>$${g.progress} / $${g.amount}</p>
<progress value="${g.progress}" max="${g.amount}"></progress>
`;

container.appendChild(div);

});

}
