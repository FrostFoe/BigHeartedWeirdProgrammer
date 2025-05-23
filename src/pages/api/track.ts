export const prerender = false; // This tells Astro not to pre-render this endpoint

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const body = await request.json();

  const data = {
    IP: clientAddress,
    UserAgent: body.userAgent,
    Language: body.language,
    Screen: body.screen,
    Platform: body.platform,
    Referrer: body.referrer,
  };

  const message = Object.entries(data)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const botToken = "8010828735:AAHwLIf7QknahBazswAqnkM3XVXGjpk5vGE";
  const chatId = "7354767620";

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `New Visitor:\n${message}`,
    }),
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
