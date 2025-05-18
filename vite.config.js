import { defineConfig } from 'vite'

// Check if we're building for GitHub Pages or Vercel
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // Use base path only for GitHub Pages
  base: isGitHubPages ? '/vitetyping/' : '/',
  build: {
    // Use appropriate output directory based on deployment target
    outDir: isGitHubPages ? 'docs' : 'dist'
  }
})