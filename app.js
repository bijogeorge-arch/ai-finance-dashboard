import {
  getTotalIncome,
  getTotalExpenses,
  getNetSavings,
} from "./calculations.js";
import { updateCards, renderTransactions, clearForm } from "./ui.js";

import { generateInsights } from "./insights.js";

// ================================================
// 📊 DATA STORAGE
// ================================================

let transactions = [];

// ================================================
// 🌐 LOAD DATA FROM JSON FILE
// ================================================

// Fetch transactions from external file
const loadTransactions = async () => {
  try {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      transactions = JSON.parse(saved);
    } else {
      const res = await fetch("data.json");
      const data = await res.json();

      // Store data in transactions array
      transactions = data;
    }

    // Update UI
    updateCards(transactions);
    renderTransactions(transactions);
    generateInsights(transactions);
  } catch (error) {
    console.error("Failed to load transactions:", error);

    // Show error in UI
    document.querySelector("#transactions-list").innerHTML =
      `<p style='color:red'>Failed to load data. Please try again.</p>`;
  }
};

// Initial load
loadTransactions();

// ================================================
// ➕ ADD NEW TRANSACTION
// ================================================
// localStorage

const saveToStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};
// Get button
const addBtn = document.querySelector("#add-txn-btn");

// Add click event
addBtn.addEventListener("click", () => {
  // Get input values
  const txtName = document.querySelector("#txn-name").value;
  const txtAmount = document.querySelector("#txn-amount").value;
  const txtType = document.querySelector("#txn-type").value;
  const txtCategory = document.querySelector("#txn-category").value;
  const txtMonth = document.querySelector("#txn-month").value;

  // Basic validation
  if (
    txtName === "" ||
    txtAmount === "" ||
    Number(txtAmount) <= 0 ||
    txtMonth === ""
  ) {
    alert("Please fill all the details properly");
    return;
  }

  // Add new transaction object
  transactions.push({
    id: transactions.length + 1, // simple ID generation
    name: txtName,
    amount: Number(txtAmount),
    type: txtType,
    category: txtCategory,
    month: txtMonth,
  });
  saveToStorage();
  // Update UI after adding
  updateCards(transactions);
  renderTransactions(transactions);
generateInsights(transactions); // add this

  // Clear form inputs
  clearForm();

  // Debug log
  console.log({
    txtName,
    txtAmount,
    txtType,
    txtCategory,
    txtMonth,
  });
});
