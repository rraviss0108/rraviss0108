/**
 * Featured Project Showcase Card Component (Midnight Blue & Emerald/Teal)
 */

function renderProjects(data) {
  const project = data.featuredProject || {
    title: 'Indian Festivals & Cultural Heritage Website',
    tagline: 'AWS MSE Cloud-deployed interactive showcase of Indian festivals and cultural traditions',
    demoUrl: 'https://awsmse-five.vercel.app',
    repoUrl: 'https://github.com/rraviss0108/Indian-Festivals-and-Cultural-Heritage-Website',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AWS MSE', 'Vercel']
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 210" width="840" height="210" fill="none">
  <defs>
    <linearGradient id="projBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A1124"/>
      <stop offset="50%" stop-color="#0E1B38"/>
      <stop offset="100%" stop-color="#070C1A"/>
    </linearGradient>
    <linearGradient id="projGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="50%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
    <linearGradient id="projBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#06B6D4" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#10B981" stop-opacity="0.1"/>
    </linearGradient>
  </defs>

  <style>
    .section-title {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 13px;
      font-weight: 700;
      fill: #34D399;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }
    .proj-title {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 22px;
      font-weight: 800;
      fill: #FFFFFF;
      letter-spacing: -0.3px;
    }
    .proj-desc {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 14px;
      font-weight: 400;
      fill: #94A3B8;
    }
    .live-text {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 11px;
      font-weight: 700;
      fill: #34D399;
      letter-spacing: 0.5px;
    }
    .badge-text {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 12px;
      font-weight: 600;
      fill: #E2E8F0;
    }
    .url-text {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 13px;
      font-weight: 600;
      fill: #38BDF8;
    }
  </style>

  <!-- Container -->
  <rect x="2" y="2" width="836" height="206" rx="16" fill="url(#projBg)" stroke="url(#projBorder)" stroke-width="1.5"/>

  <!-- Top Section Row -->
  <g transform="translate(36, 28)">
    <!-- Section Title -->
    <text class="section-title" x="0" y="10">FEATURED SHOWCASE PROJECT</text>

    <!-- Live Status Pill (Right side) -->
    <g transform="translate(620, -5)">
      <rect width="144" height="26" rx="13" fill="#064E3B" fill-opacity="0.4" stroke="#10B981" stroke-opacity="0.4" stroke-width="1"/>
      <circle cx="14" cy="13" r="4" fill="#10B981"/>
      <text class="live-text" x="26" y="17">LIVE DEPLOYMENT</text>
    </g>
  </g>

  <!-- Project Name and Tagline -->
  <g transform="translate(36, 68)">
    <text class="proj-title" x="0" y="16">
      <tspan fill="url(#projGrad)">${project.title}</tspan>
    </text>
    <text class="proj-desc" x="0" y="44">
      ${project.tagline}
    </text>
  </g>

  <!-- Tech Badges Row -->
  <g transform="translate(36, 142)">
    <!-- Badge 1: HTML5 -->
    <g transform="translate(0, 0)">
      <rect width="78" height="30" rx="8" fill="#132342" stroke="#10B981" stroke-opacity="0.3" stroke-width="1"/>
      <text class="badge-text" x="39" y="19" text-anchor="middle">HTML5</text>
    </g>

    <!-- Badge 2: CSS3 -->
    <g transform="translate(88, 0)">
      <rect width="72" height="30" rx="8" fill="#132342" stroke="#10B981" stroke-opacity="0.3" stroke-width="1"/>
      <text class="badge-text" x="36" y="19" text-anchor="middle">CSS3</text>
    </g>

    <!-- Badge 3: JavaScript -->
    <g transform="translate(170, 0)">
      <rect width="98" height="30" rx="8" fill="#132342" stroke="#10B981" stroke-opacity="0.3" stroke-width="1"/>
      <text class="badge-text" x="49" y="19" text-anchor="middle">JavaScript</text>
    </g>

    <!-- Badge 4: AWS MSE -->
    <g transform="translate(278, 0)">
      <rect width="94" height="30" rx="8" fill="#132342" stroke="#06B6D4" stroke-opacity="0.4" stroke-width="1"/>
      <text class="badge-text" x="47" y="19" text-anchor="middle">AWS MSE</text>
    </g>

    <!-- Badge 5: Vercel -->
    <g transform="translate(382, 0)">
      <rect width="84" height="30" rx="8" fill="#132342" stroke="#38BDF8" stroke-opacity="0.4" stroke-width="1"/>
      <text class="badge-text" x="42" y="19" text-anchor="middle">Vercel</text>
    </g>
  </g>

  <!-- External Link Indicator (Right side) -->
  <g transform="translate(560, 142)">
    <rect width="240" height="30" rx="8" fill="#0C1B33" stroke="#06B6D4" stroke-opacity="0.4" stroke-width="1"/>
    <text class="url-text" x="18" y="20">🔗 awsmse-five.vercel.app</text>
  </g>
</svg>`;
}

module.exports = renderProjects;
