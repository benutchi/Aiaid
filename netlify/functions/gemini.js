// netlify/functions/gemini.js

function reply(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

export async function handler(event) {
  try {
    // 1) Preflight
    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 204, headers: reply(204, {}).headers, body: "" };
    }

    // 2) GET ska fungera i webbläsaren
    if (event.httpMethod === "GET") {
      return reply(200, {
        ok: true,
        message: "Gemini function is alive. Send POST with JSON: { q, systemPrompt }",
      });
    }

    // 3) Endast POST för AI anrop
    if (event.httpMethod !== "POST") {
      return reply(405, { error: "Method not allowed. Use POST." });
    }

    const raw = event.body || "";
    if (!raw.trim()) {
      return reply(400, { error: "Missing JSON body. Send { q, systemPrompt }" });
    }

    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return reply(400, { error: "Invalid JSON body." });
    }

    const q = body.q || "";
    const systemPrompt = body.systemPrompt || "";

    if (!q) return reply(400, { error: "Missing field: q" });

    // TEMP TEST, bevis att kedjan funkar
    return reply(200, {
      candidates: [
        { content: { parts: [{ text: `TEST OK. Jag fick din fråga: "${q}".` }] } },
      ],
    });
  } catch (e) {
    return reply(500, { error: String(e?.message || e) });
  }
}
