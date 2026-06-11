let expenses = [];

let total = 0;

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = document.getElementById("expenseAmount").value;

    if (name === "" || amount === "") {
        return;
    }

    let expense = {
        name: name,
        amount: Number(amount)
    };

    expenses.push(expense);

    console.log(expenses);

    let list = document.getElementById("expenseList");

    let li = document.createElement("li");

    li.textContent = name + " - ₹" + amount;

    list.appendChild(li);

    total = total + Number(amount);

    document.getElementById("total").textContent = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}