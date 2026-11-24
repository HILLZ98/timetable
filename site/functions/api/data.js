// Cloudflare Pages Function: GET = anyone reads; PUT/POST need the admin password
export async function onRequest({ request, env }) {
  const h = { "content-type": "application/json" };
  if (request.method === "GET") return new Response((await env.TT.get("data")) || "null", { headers: h });
  if (!env.ADMIN_PASS || request.headers.get("x-admin") !== env.ADMIN_PASS)
    return new Response('{"error":"auth"}', { status: 401, headers: h });
  if (request.method === "PUT") await env.TT.put("data", await request.text());
  return new Response('{"ok":true}', { headers: h });
}
