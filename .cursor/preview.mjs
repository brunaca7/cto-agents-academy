// Minimal, dependency-light documentation preview server for the
// CTO Agents Academy content repo. Renders the repository's Markdown
// files as a browsable local site and serves the image assets, so an
// agent can view and verify the docs (links + images) end to end.
//
// Usage: node preview.mjs   (honors PORT / HOST env vars)

import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 4000);
const HOST = process.env.HOST || "0.0.0.0";

const MIME = {
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const PAGE_CSS = `
:root { color-scheme: light dark; }
body { max-width: 860px; margin: 0 auto; padding: 2rem 1.25rem 4rem;
  font: 16px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1f2328; background: #ffffff; }
@media (prefers-color-scheme: dark) { body { color: #e6edf3; background: #0d1117; } }
a { color: #0969da; text-decoration: none; } a:hover { text-decoration: underline; }
@media (prefers-color-scheme: dark) { a { color: #4493f8; } }
img, svg { max-width: 100%; }
pre { background: #f6f8fa; padding: 1rem; overflow: auto; border-radius: 6px; }
@media (prefers-color-scheme: dark) { pre { background: #161b22; } }
code { background: rgba(175,184,193,.2); padding: .15em .35em; border-radius: 4px; font-size: 85%; }
pre code { background: none; padding: 0; }
table { border-collapse: collapse; } th, td { border: 1px solid #d0d7de; padding: .4rem .7rem; }
hr { border: none; border-top: 1px solid #d0d7de; margin: 2rem 0; }
.nav { margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #d0d7de; font-size: 14px; }
.filetree li { margin: .25rem 0; }
`;

function htmlShell(title, body) {
  return `<!doctype html><html lang="pt-br"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title><style>${PAGE_CSS}</style></head>
<body><div class="nav">📚 <a href="/">CTO Agents Academy — docs preview</a></div>
${body}</body></html>`;
}

async function listMarkdown(dir, base = "") {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      out.push(...(await listMarkdown(path.join(dir, e.name), rel)));
    } else if (e.name.toLowerCase().endsWith(".md")) {
      out.push(rel);
    }
  }
  return out;
}

async function renderIndex() {
  const files = await listMarkdown(ROOT);
  const groups = new Map();
  for (const f of files) {
    const dir = f.includes("/") ? f.slice(0, f.lastIndexOf("/")) : ".";
    if (!groups.has(dir)) groups.set(dir, []);
    groups.get(dir).push(f);
  }
  let body = "<h1>CTO Agents Academy</h1><p>Material público de apoio. Pré-visualização local da documentação.</p>";
  for (const dir of [...groups.keys()].sort()) {
    body += `<h2>${dir === "." ? "raiz" : dir}/</h2><ul class="filetree">`;
    for (const f of groups.get(dir)) {
      body += `<li><a href="/${f}">${f}</a></li>`;
    }
    body += "</ul>";
  }
  return htmlShell("CTO Agents Academy — docs", body);
}

function safeResolve(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const resolved = path.resolve(ROOT, "." + decoded);
  if (resolved !== ROOT && !resolved.startsWith(ROOT + path.sep)) return null;
  return resolved;
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/" || req.url === "") {
      const html = await renderIndex();
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      return res.end(html);
    }

    const filePath = safeResolve(req.url);
    if (!filePath) {
      res.writeHead(403, { "content-type": "text/plain" });
      return res.end("Forbidden");
    }

    let stat;
    try {
      stat = await fs.stat(filePath);
    } catch {
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      return res.end(htmlShell("404", "<h1>404</h1><p>Arquivo não encontrado.</p>"));
    }

    if (stat.isDirectory()) {
      res.writeHead(302, { location: "/" });
      return res.end();
    }

    const ext = path.extname(filePath).toLowerCase();
    if (ext === ".md") {
      const md = await fs.readFile(filePath, "utf-8");
      const rel = path.relative(ROOT, filePath);
      const html = htmlShell(rel, marked.parse(md));
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      return res.end(html);
    }

    const data = await fs.readFile(filePath);
    res.writeHead(200, { "content-type": MIME[ext] || "application/octet-stream" });
    return res.end(data);
  } catch (err) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Internal error: " + err.message);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Docs preview running at http://${HOST}:${PORT} (root: ${ROOT})`);
});
