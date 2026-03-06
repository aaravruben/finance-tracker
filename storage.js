
function getTransactions(){
return JSON.parse(localStorage.getItem("transactions")) || [];
}

function saveTransactions(data){
localStorage.setItem("transactions", JSON.stringify(data));
}

function getGoals(){
return JSON.parse(localStorage.getItem("goals")) || [];
}

function saveGoals(data){
localStorage.setItem("goals", JSON.stringify(data));
}
