export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Always set CORS and JSON content type for responses
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    const { messages, system } = req.body || {};

    // Health check: if no messages, return OK (used by frontend to detect backend)
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(200).json({ status: 'ok', backend: true });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 512,
        system: system,
        messages: messages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      res.setHeader('Content-Type', 'application/json');
      return res.status(response.status).json({ error: errText });
    }

    // Stream the response back
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      res.write(chunk);
    }

    res.end();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
