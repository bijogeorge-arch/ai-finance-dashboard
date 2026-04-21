import { getNetSavings, getTotalExpenses, getTotalIncome } from "./calculations.js";
import { format } from "./utils.js";


// Updates the top summary cards in UI
export const updateCards = (transactions) => {
  document.querySelector("#total-income").textContent =
    format(getTotalIncome(transactions));

  document.querySelector("#total-expenses").textContent =
    format(getTotalExpenses(transactions));

  document.querySelector("#net-savings").textContent = format(getNetSavings(transactions));
};

// Displays all transactions in the UI
export const renderTransactions = (list = transactions) => {
  const transactionsList = document.querySelector("#transactions-list");

  // Clear previous list
  transactionsList.innerHTML = "";

  // Loop through each transaction
  list.forEach((t) => {
    const li = document.createElement("li");
    li.className = "txn-item";

    // Create HTML structure for each transaction
    li.innerHTML = `
      <div>
        <div class="txn-name">${t.category}</div>
        <div class="txn-meta">${t.month} · ${t.type}</div>
      </div>
      <div class="txn-amount ${t.type === "income" ? "positive" : "negative"}">
        (${format(t.amount)})
      </div>
    `;

    transactionsList.appendChild(li);
  });
};

// Resets all input fields after adding a transaction
export const clearForm = () => {
  document.querySelector("#txn-name").value = "";
  document.querySelector("#txn-amount").value = "";
  document.querySelector("#txn-month").value = "";
};