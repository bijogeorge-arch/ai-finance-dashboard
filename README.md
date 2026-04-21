# 💹 FinanceAI — AI Expense Tracker

A modular expense tracker dashboard with AI-powered financial insights, built with vanilla HTML, CSS & JavaScript.

## Features

- **Summary Cards** — Total income, expenses, and net savings at a glance
- **Monthly Cash Flow Chart** — CSS-based bar chart visualization
- **Transaction Management** — Add, view, and filter transactions
- **AI Insights** — Real-time financial analysis powered by OpenRouter API (Gemma model)
- **Persistent Storage** — Data saved to `localStorage` across sessions
- **Filter System** — Filter by month, category, and amount range

## Tech Stack

- HTML5 / CSS3 / Vanilla JavaScript (ES Modules)
- OpenRouter AI API for financial insights

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/bijogeorge-arch/expense-tracker.git
   ```
2. Open `index.html` with a local server (e.g. VS Code Live Server).
3. (Optional) Replace the API key in `insights.js` with your own [OpenRouter](https://openrouter.ai/) key.

## Project Structure

```
├── index.html         # Main dashboard UI
├── app.js             # Entry point — data loading & event handling
├── calculations.js    # Pure functions for income/expense/savings
├── ui.js              # DOM rendering functions
├── insights.js        # AI insights via OpenRouter API
├── utils.js           # Currency formatting helper
├── data.json          # Seed transaction data
└── style.css          # Additional styles
```

## License

MIT
