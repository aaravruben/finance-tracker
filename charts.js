
document.addEventListener("DOMContentLoaded", ()=>{

const transactions=getTransactions();

let income=0;
let expenses=0;

const categories={};

transactions.forEach(t=>{

if(t.type==="income"){
income+=Number(t.amount);
}else{
expenses+=Number(t.amount);
}

if(!categories[t.category]){
categories[t.category]=0;
}

categories[t.category]+=Number(t.amount);

});

const balance=income-expenses;

if(document.getElementById("balance")){
document.getElementById("balance").innerText="$"+balance;
document.getElementById("income").innerText="$"+income;
document.getElementById("expenses").innerText="$"+expenses;
}

const ctx=document.getElementById("incomeExpenseChart");

if(ctx){
new Chart(ctx,{
type:"bar",
data:{
labels:["Income","Expenses"],
datasets:[{data:[income,expenses]}]
}
});
}

const cat=document.getElementById("categoryChart");

if(cat){
new Chart(cat,{
type:"pie",
data:{
labels:Object.keys(categories),
datasets:[{data:Object.values(categories)}]
}
});
}

});
