/**
 * Data fetcher for @rraviss0108 GitHub profile & projects
 */

const GITHUB_USERNAME = 'rraviss0108';

const defaultProfile = {
  login: 'rraviss0108',
  name: 'Ravi Shanker Umrao',
  avatarUrl: 'https://avatars.githubusercontent.com/u/159641942?v=4',
  bio: 'B.Tech in CSE (AI/ML Aspirant) • Problem Solver & Frontend Developer',
  education: 'B.Tech in Computer Science & Engineering',
  location: 'India',
  email: 'itsvravishanker@gmail.com',
  instagram: 'https://instagram.com/rraviss0108',
  github: 'https://github.com/rraviss0108',
  publicRepos: 2,
  followers: 0,
  following: 2,
  stars: 2,
  createdAt: '2024-02-10T16:35:59Z',
  featuredProject: {
    name: 'Indian-Festivals-and-Cultural-Heritage-Website',
    title: 'Indian Festivals & Cultural Heritage Website',
    tagline: 'AWS MSE Cloud-deployed interactive showcase of Indian festivals and traditions',
    demoUrl: 'https://awsmse-five.vercel.app',
    repoUrl: 'https://github.com/rraviss0108/Indian-Festivals-and-Cultural-Heritage-Website',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AWS MSE', 'Vercel'],
    status: 'Active Deployment'
  },
  skills: [
    { name: 'C++', category: 'Languages', level: 85, focus: 'DSA & Algorithms' },
    { name: 'Python', category: 'Languages', level: 75, focus: 'AI/ML & Automation' },
    { name: 'HTML5/CSS3', category: 'Frontend', level: 88, focus: 'Responsive UI Design' },
    { name: 'JavaScript', category: 'Frontend', level: 72, focus: 'Interactive Web' },
    { name: 'C', category: 'Languages', level: 80, focus: 'System Foundations' },
    { name: 'Canva / UI', category: 'Design', level: 82, focus: 'Graphics & Assets' },
    { name: 'Git & GitHub', category: 'DevOps', level: 78, focus: 'Version Control' }
  ],
  languagesDistribution: [
    { name: 'C++', percentage: 36, color: '#00599C' },
    { name: 'HTML5 & CSS3', percentage: 28, color: '#E34F26' },
    { name: 'Python', percentage: 20, color: '#3572A5' },
    { name: 'JavaScript', percentage: 11, color: '#F7DF1E' },
    { name: 'C', percentage: 5, color: '#555555' }
  ]
};

async function fetchProfileData() {
  try {
    const headers = {
      'User-Agent': 'rraviss0108-profile-generator',
      'Accept': 'application/vnd.github.v3+json'
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, signal: AbortSignal.timeout(4000) }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers, signal: AbortSignal.timeout(4000) })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return defaultProfile;
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const totalStars = Array.isArray(reposData)
      ? reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
      : 2;

    const featuredRepo = Array.isArray(reposData)
      ? reposData.find(r => r.name === 'Indian-Festivals-and-Cultural-Heritage-Website')
      : null;

    return {
      ...defaultProfile,
      login: userData.login || defaultProfile.login,
      name: userData.name || defaultProfile.name,
      avatarUrl: userData.avatar_url || defaultProfile.avatarUrl,
      publicRepos: userData.public_repos !== undefined ? userData.public_repos : defaultProfile.publicRepos,
      followers: userData.followers !== undefined ? userData.followers : defaultProfile.followers,
      following: userData.following !== undefined ? userData.following : defaultProfile.following,
      stars: totalStars,
      featuredProject: {
        ...defaultProfile.featuredProject,
        demoUrl: featuredRepo?.homepage || defaultProfile.featuredProject.demoUrl,
        repoUrl: featuredRepo?.html_url || defaultProfile.featuredProject.repoUrl
      }
    };
  } catch (err) {
    // Return robust defaults if network or rate-limiting error occurs
    return defaultProfile;
  }
}

module.exports = {
  fetchProfileData,
  defaultProfile
};
