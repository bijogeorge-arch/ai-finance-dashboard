import { getTotalIncome, getTotalExpenses, getNetSavings } from "./calculations.js";
import { API_KEY } from "./config.js";
// ================================================
// 🤖 AI INSIGHTS — OpenRouter API
// ================================================

const API_URL   = "https://openrouter.ai/api/v1/chat/completions";
const API_MODEL = "google/gemma-4-26b-a4b-it"; // free model

export const generateInsights = async (transactions) => {
  const panel = document.querySelector("#insights-panel");

  // Show loading state
  panel.innerHTML = ` <div class="insight-card">
    🤖 AI Insights available in local demo. 
    <br>See video demo below.
  </div>`;

  // Build summary from real data
  const income    = getTotalIncome(transactions);
  const expenses  = getTotalExpenses(transactions);
  const savings   = getNetSavings(transactions);

  // Summarize transactions for the prompt
  const breakdown = transactions
    .map((t) => `${t.type === "income" ? "+" : "-"} ${t.category}: $${t.amount} (${t.month})`)
    .join("\n");

  // Craft the prompt
  const prompt = `
You are a personal finance advisor. Analyze this financial data and give exactly 3 short, specific insights.
Format each insight on its own line starting with an emoji.

Data:
- Total Income: $${income}
- Total Expenses: $${expenses}
- Net Savings: $${savings}
- Transactions:
${breakdown}

Rules:
- Keep each insight under 2 sentences
- Be direct, specific, and helpful
- No headers, no bullet points — just 3 lines
  `.trim();

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: API_MODEL,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();

    // Extract text from response
    const text = data.choices[0].message.content;

    // Split into individual insight lines
    const insights = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");

    // Render each insight as a card
    panel.innerHTML = insights
      .map((insight) => `<div class="insight-card">${insight}</div>`)
      .join("");

  } catch (error) {
    console.error("AI insights failed:", error);
    panel.innerHTML = `
      <div class="insight-card" style="color:#f87171">
        ⚠️ Could not load insights. Check your API key and connection.
      </div>`;
  }
};