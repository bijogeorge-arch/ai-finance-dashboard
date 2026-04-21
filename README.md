# 💹 AI Finance Dashboard

A frontend-only personal finance dashboard built with **Vanilla JavaScript (ES6+)**. Track income, expenses, and savings — with real AI-powered insights via the OpenRouter API.

---

## 🖥️ Live Demo

🔗 [View Live Site](https://your-netlify-url.netlify.app)

> ⚠️ The AI Insights panel requires a local API key (see setup below). A demo video of the full feature is available here: [Watch Demo](https://www.loom.com/share/1d0a62a9da414c70b1cbceef91a6e60d)

---

## ✨ Features

- 📊 **Summary Cards** — live income, expense, and savings totals
- 🧾 **Transaction List** — dynamically rendered from real data
- ➕ **Add Transactions** — form with validation
- 🔍 **Filter** — by month, category, and amount
- 💾 **LocalStorage** — data persists across page refreshes
- 🤖 **AI Insights** — personalized financial tips powered by OpenRouter API
- 📁 **Modular Code** — split into `calculations.js`, `ui.js`, `utils.js`, `insights.js`

---

## 🛠️ Tech Stack

- HTML5 & CSS3 (no frameworks)
- Vanilla JavaScript ES6+
- ES6 Modules
- Fetch API & Async/Await
- LocalStorage
- OpenRouter API (AI Insights)

---

## 📂 Project Structure

```
project/
├── index.html          # Markup and styles
├── data.json           # Seed transaction data
├── app.js              # Main entry — orchestrates everything
├── calculations.js     # Pure functions: income, expenses, savings
├── ui.js               # DOM rendering functions
├── utils.js            # Shared helpers (format currency)
├── insights.js         # AI insights via OpenRouter API
└── config.js           # 🔑 API key — NOT committed to GitHub
```

---

## 🚀 Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/ai-finance-dashboard.git
cd ai-finance-dashboard
```

### 2. Add your API key
Create a `config.js` file in the root folder:
```js
// config.js
export const API_KEY = "your-openrouter-api-key-here";
```
Get a free key at [openrouter.ai/keys](https://openrouter.ai/keys)

### 3. Open with Live Server
Use the **Live Server** extension in VS Code.
> ⚠️ Do not open `index.html` directly — ES6 modules require a local server.

---

## 🔐 API Key Safety

`config.js` is listed in `.gitignore` and is never committed to GitHub.

The AI Insights feature works locally. On the deployed site, a placeholder message is shown instead. A screen recording of the feature is linked in the demo section above.

---

## 📸 Screenshots

> Add screenshots here

---

## 🧠 What I Learned

- Structuring a real project with ES6 modules
- DOM manipulation without any frameworks
- Async data loading with Fetch and error handling
- Persisting state with LocalStorage
- Integrating a third-party AI API securely
- Separating concerns: data, logic, and UI in different files

---

## 👨‍💻 Author

**Your Name**
[GitHub](https://github.com/your-username) · [LinkedIn](https://linkedin.com/in/your-username)
