// Tiny OpenAI wrapper with a POST /ask route.
// Run: npm run dev  ->  http://localhost:3002
// Put your key in .env (see .env.example). Never commit .env.

require("dotenv").config();
const express = require("express");

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, try: "POST /ask with { prompt: \"...\" }" });
});

app.post("/ask", async (req, res) => {
  const { prompt } = req.body || {};
  if (typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "prompt is required" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY is not configured" });
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await openaiRes.json();
    if (!openaiRes.ok) {
      return res.status(502).json({ error: "OpenAI request failed" });
    }

    const reply = data.choices?.[0]?.message?.content;
    if (typeof reply !== "string") {
      return res.status(502).json({ error: "OpenAI did not return a reply" });
    }

    res.json({ reply });
  } catch (error) {
    res.status(502).json({ error: "Unable to reach OpenAI" });
  }
});

app.listen(PORT, () => {
  console.log(`OpenAI wrapper listening on http://localhost:${PORT}`);
});
