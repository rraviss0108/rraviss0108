/**
 * Express Component API Server for @rraviss0108 GitHub Profile
 * Serves live dynamic SVG components and provides an interactive preview dashboard.
 */

const express = require('express');
const path = require('path');
const { fetchProfileData } = require('./src/dataFetcher');
const renderHeader = require('./src/components/renderHeader');
const renderStats = require('./src/components/renderStats');
const renderLanguages = require('./src/components/renderLanguages');
const renderProjects = require('./src/components/renderProjects');
const renderTechStack = require('./src/components/renderTechStack');
const renderConnect = require('./src/components/renderConnect');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for SVG caching and headers
function svgResponse(res, svgContent) {
  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400');
  res.send(svgContent);
}

// 1. Dynamic Header Banner SVG
app.get('/api/header.svg', async (req, res) => {
  try {
    const data = await fetchProfileData();
    svgResponse(res, renderHeader(data));
  } catch (err) {
    res.status(500).send('Error generating header component');
  }
});

// 2. GitHub Stats Card SVG
app.get('/api/stats.svg', async (req, res) => {
  try {
    const data = await fetchProfileData();
    svgResponse(res, renderStats(data));
  } catch (err) {
    res.status(500).send('Error generating stats component');
  }
});

// 3. Languages Card SVG
app.get('/api/languages.svg', async (req, res) => {
  try {
    const data = await fetchProfileData();
    svgResponse(res, renderLanguages(data));
  } catch (err) {
    res.status(500).send('Error generating languages component');
  }
});

// 4. Featured Project Card SVG
app.get('/api/projects.svg', async (req, res) => {
  try {
    const data = await fetchProfileData();
    svgResponse(res, renderProjects(data));
  } catch (err) {
    res.status(500).send('Error generating projects component');
  }
});

// 5. Tech Stack Card SVG
app.get('/api/techstack.svg', async (req, res) => {
  try {
    const data = await fetchProfileData();
    svgResponse(res, renderTechStack(data));
  } catch (err) {
    res.status(500).send('Error generating techstack component');
  }
});

// 6. Connect Card SVG
app.get('/api/connect.svg', async (req, res) => {
  try {
    const data = await fetchProfileData();
    svgResponse(res, renderConnect(data));
  } catch (err) {
    res.status(500).send('Error generating connect component');
  }
});

// JSON Profile Data Endpoint
app.get('/api/data', async (req, res) => {
  const data = await fetchProfileData();
  res.json(data);
});

// Interactive Web Dashboard & Preview
app.get('/', async (req, res) => {
  const data = await fetchProfileData();
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@rraviss0108 Profile Component API</title>
  <style>
    :root {
      --bg: #090e1a;
      --card-bg: #0f172a;
      --accent: #10b981;
      --cyan: #06b6d4;
      --border: rgba(16, 185, 129, 0.25);
      --text: #f8fafc;
      --subtext: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      padding: 40px 20px;
      line-height: 1.6;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    header {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
    }
    h1 {
      font-size: 24px;
      background: linear-gradient(135deg, #10b981, #06b6d4, #38bdf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .badge {
      display: inline-block;
      padding: 6px 12px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid var(--accent);
      color: var(--accent);
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }
    .comp-box {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 25px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    }
    .comp-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .comp-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--cyan);
    }
    .endpoint {
      font-family: monospace;
      font-size: 13px;
      color: var(--accent);
      background: rgba(16, 185, 129, 0.1);
      padding: 3px 8px;
      border-radius: 6px;
    }
    .preview-frame {
      display: flex;
      justify-content: center;
      overflow-x: auto;
      padding: 10px 0;
    }
    .preview-frame img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (max-width: 768px) {
      .two-col { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div>
        <h1>⚡ Dynamic Component API</h1>
        <p style="color: var(--subtext); font-size: 14px;">Live SVG Microservice for @rraviss0108 GitHub Profile</p>
      </div>
      <div class="badge">Theme: Midnight Blue &amp; Emerald Teal</div>
    </header>

    <!-- Component 1: Header Banner -->
    <div class="comp-box">
      <div class="comp-meta">
        <span class="comp-title">1. Dynamic Greeting &amp; Header Banner</span>
        <span class="endpoint">GET /api/header.svg</span>
      </div>
      <div class="preview-frame">
        <img src="/api/header.svg" alt="Header Banner" />
      </div>
    </div>

    <!-- Component 2 & 3: Stats + Languages (Side by side) -->
    <div class="two-col">
      <div class="comp-box">
        <div class="comp-meta">
          <span class="comp-title">2. GitHub Metrics &amp; Stats</span>
          <span class="endpoint">GET /api/stats.svg</span>
        </div>
        <div class="preview-frame">
          <img src="/api/stats.svg" alt="GitHub Stats" />
        </div>
      </div>

      <div class="comp-box">
        <div class="comp-meta">
          <span class="comp-title">3. Languages &amp; Skills</span>
          <span class="endpoint">GET /api/languages.svg</span>
        </div>
        <div class="preview-frame">
          <img src="/api/languages.svg" alt="Languages" />
        </div>
      </div>
    </div>

    <!-- Component 4: Featured Project -->
    <div class="comp-box">
      <div class="comp-meta">
        <span class="comp-title">4. Featured Showcase Project</span>
        <span class="endpoint">GET /api/projects.svg</span>
      </div>
      <div class="preview-frame">
        <img src="/api/projects.svg" alt="Featured Project" />
      </div>
    </div>

    <!-- Component 5: Tech Stack -->
    <div class="comp-box">
      <div class="comp-meta">
        <span class="comp-title">5. Technical Toolkit Matrix</span>
        <span class="endpoint">GET /api/techstack.svg</span>
      </div>
      <div class="preview-frame">
        <img src="/api/techstack.svg" alt="Tech Stack" />
      </div>
    </div>

    <!-- Component 6: Connect -->
    <div class="comp-box">
      <div class="comp-meta">
        <span class="comp-title">6. Connect &amp; Socials</span>
        <span class="endpoint">GET /api/connect.svg</span>
      </div>
      <div class="preview-frame">
        <img src="/api/connect.svg" alt="Connect" />
      </div>
    </div>
  </div>
</body>
</html>`;
  res.send(html);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Profile Component API Server running at http://localhost:${PORT}`);
    console.log(`📊 Preview Dashboard: http://localhost:${PORT}/`);
    console.log(`🖼️ Endpoints:`);
    console.log(`   /api/header.svg`);
    console.log(`   /api/stats.svg`);
    console.log(`   /api/languages.svg`);
    console.log(`   /api/projects.svg`);
    console.log(`   /api/techstack.svg`);
    console.log(`   /api/connect.svg`);
  });
}

module.exports = app;
