/**
 * Top Languages & Skill Distribution Card Component (Midnight Blue & Emerald/Teal)
 */

function renderLanguages(data) {
  const languages = data.languagesDistribution || [
    { name: 'C++', percentage: 36, color: '#10B981' },
    { name: 'HTML5 & CSS3', percentage: 28, color: '#06B6D4' },
    { name: 'Python', percentage: 20, color: '#38BDF8' },
    { name: 'JavaScript', percentage: 11, color: '#FACC15' },
    { name: 'C', percentage: 5, color: '#94A3B8' }
  ];

  // Calculate cumulative widths for the multi-segment progress bar (width 362)
  const totalBarWidth = 362;
  let currentOffset = 0;
  const segments = languages.map(lang => {
    const w = Math.max(8, Math.round((lang.percentage / 100) * totalBarWidth));
    const segment = {
      ...lang,
      x: currentOffset,
      width: w
    };
    currentOffset += w;
    return segment;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410 240" width="410" height="240" fill="none">
  <defs>
    <linearGradient id="langBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0A1124"/>
      <stop offset="50%" stop-color="#0E1B38"/>
      <stop offset="100%" stop-color="#080E1C"/>
    </linearGradient>
    <linearGradient id="langBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4" stop-opacity="0.5"/>
      <stop offset="50%" stop-color="#10B981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#06B6D4" stop-opacity="0.1"/>
    </linearGradient>
    <clipPath id="barClip">
      <rect x="0" y="0" width="${totalBarWidth}" height="10" rx="5"/>
    </clipPath>
  </defs>

  <style>
    .card-title {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 14px;
      font-weight: 700;
      fill: #38BDF8;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .lang-name {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 13px;
      font-weight: 600;
      fill: #F1F5F9;
    }
    .lang-pct {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 12px;
      font-weight: 700;
      fill: #94A3B8;
    }
  </style>

  <!-- Container -->
  <rect x="2" y="2" width="406" height="236" rx="14" fill="url(#langBg)" stroke="url(#langBorder)" stroke-width="1.5"/>

  <!-- Header -->
  <g transform="translate(24, 28)">
    <circle cx="8" cy="8" r="8" fill="#06B6D4" fill-opacity="0.2"/>
    <polygon points="5,5 11,8 5,11" fill="#06B6D4"/>
    <text class="card-title" x="24" y="12">TOP LANGUAGES &amp; SKILLS</text>
  </g>

  <!-- Segmented Progress Bar -->
  <g transform="translate(24, 60)">
    <rect width="${totalBarWidth}" height="10" rx="5" fill="#1E293B"/>
    <g clip-path="url(#barClip)">
      ${segments.map(s => `<rect x="${s.x}" y="0" width="${s.width}" height="10" fill="${s.color}"/>`).join('\n      ')}
    </g>
  </g>

  <!-- Language List Items -->
  <g transform="translate(24, 95)">
    <!-- Item 1: C++ -->
    <g transform="translate(0, 0)">
      <circle cx="6" cy="6" r="5" fill="#10B981"/>
      <text class="lang-name" x="20" y="10">C++ (DSA &amp; Problem Solving)</text>
      <text class="lang-pct" x="362" y="10" text-anchor="end">36%</text>
    </g>

    <!-- Item 2: HTML5/CSS3 -->
    <g transform="translate(0, 28)">
      <circle cx="6" cy="6" r="5" fill="#06B6D4"/>
      <text class="lang-name" x="20" y="10">HTML5 &amp; CSS3 (Web UI)</text>
      <text class="lang-pct" x="362" y="10" text-anchor="end">28%</text>
    </g>

    <!-- Item 3: Python -->
    <g transform="translate(0, 56)">
      <circle cx="6" cy="6" r="5" fill="#38BDF8"/>
      <text class="lang-name" x="20" y="10">Python (AI/ML &amp; Scripting)</text>
      <text class="lang-pct" x="362" y="10" text-anchor="end">20%</text>
    </g>

    <!-- Item 4: JavaScript -->
    <g transform="translate(0, 84)">
      <circle cx="6" cy="6" r="5" fill="#FACC15"/>
      <text class="lang-name" x="20" y="10">JavaScript (Frontend Logic)</text>
      <text class="lang-pct" x="362" y="10" text-anchor="end">11%</text>
    </g>

    <!-- Item 5: C -->
    <g transform="translate(0, 112)">
      <circle cx="6" cy="6" r="5" fill="#94A3B8"/>
      <text class="lang-name" x="20" y="10">C (Core CS Foundations)</text>
      <text class="lang-pct" x="362" y="10" text-anchor="end">5%</text>
    </g>
  </g>
</svg>`;
}

module.exports = renderLanguages;
