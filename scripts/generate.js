/**
 * Component SVG Generator for @rraviss0108 GitHub Profile
 * Generates all 6 custom SVG components into assets/components/
 */

const fs = require('fs');
const path = require('path');
const { fetchProfileData } = require('../src/dataFetcher');
const renderHeader = require('../src/components/renderHeader');
const renderStats = require('../src/components/renderStats');
const renderLanguages = require('../src/components/renderLanguages');
const renderProjects = require('../src/components/renderProjects');
const renderTechStack = require('../src/components/renderTechStack');
const renderConnect = require('../src/components/renderConnect');

async function generateAll() {
  console.log('⚡ Starting GitHub Profile Component Generation for @rraviss0108...');
  
  const outputDir = path.resolve(__dirname, '../assets/components');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('📡 Fetching profile data...');
  const data = await fetchProfileData();
  console.log(`✓ Data resolved for user: ${data.login} (${data.name})`);

  const components = [
    { filename: 'header.svg', content: renderHeader(data), label: 'Header & Greeting Banner' },
    { filename: 'stats.svg', content: renderStats(data), label: 'GitHub Metrics & Stats Card' },
    { filename: 'languages.svg', content: renderLanguages(data), label: 'Top Languages & Skills Card' },
    { filename: 'projects.svg', content: renderProjects(data), label: 'Featured Project Showcase Card' },
    { filename: 'techstack.svg', content: renderTechStack(data), label: 'Tech Stack & Toolkit Matrix' },
    { filename: 'connect.svg', content: renderConnect(data), label: 'Connect & Socials Card' }
  ];

  for (const comp of components) {
    const filePath = path.join(outputDir, comp.filename);
    fs.writeFileSync(filePath, comp.content, 'utf8');
    console.log(`  ✓ Generated: assets/components/${comp.filename} (${comp.label})`);
  }

  console.log('🎉 All 6 components generated successfully!');
}

generateAll().catch(err => {
  console.error('❌ Generation error:', err);
  process.exit(1);
});
