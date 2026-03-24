import '../style.css';
import { marked } from 'marked';
import docsMd from '../important-docs/gitbulk_official_documentation.md?raw';

// Icons
const icons = {
  sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  moon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>',
  back: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>'
};

let currentTheme = 'dark'; // Startup in dark mode matching landing

const renderHeader = () => `
  <header class="w-full border-b border-border/60 dark:border-white/5 bg-background/90 backdrop-blur-xl fixed top-0 z-50 transition-all duration-300 shadow-sm" id="navbar">
    <div class="max-w-[90rem] mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a href="/" class="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
          <div class="w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-900 rounded-lg border border-border dark:border-white/10 shadow-sm">
            <img src="/logo.svg" alt="GitBulk Logo" class="w-4 h-4 object-contain ${currentTheme === 'light' ? 'brightness-0' : ''}" />
          </div>
          <span class="text-xl font-display font-bold tracking-tight text-foreground">GitBulk <span class="text-primary font-medium text-sm ml-1 px-2 py-0.5 rounded-md bg-primary/10">Docs</span></span>
        </a>
      </div>
      
      <div class="flex items-center gap-4">
        <a href="/" class="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-zinc-400 hover:text-foreground transition-colors mr-2">
          ${icons.back} Product Homepage
        </a>
        <div class="w-px h-4 bg-border hidden md:block"></div>
        <button id="btn-theme" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
          ${currentTheme === 'dark' ? icons.sun : icons.moon}
        </button>
        <a href="https://github.com/rezzt-dev/gitbulk-project" target="_blank" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
          ${icons.github}
        </a>
      </div>
    </div>
  </header>
`;

const initDocs = async () => {
  const app = document.getElementById('docs-app')!;
  document.documentElement.classList.toggle('dark', currentTheme === 'dark');

  // Configure marked for more robust parsing (tables, etc.)
  const parsedHtml = await marked.parse(docsMd, { async: true });

  app.innerHTML = `
    ${renderHeader()}
    <div class="max-w-[80rem] mx-auto w-full px-6 flex justify-center pt-28 pb-32 gap-8 lg:gap-16 relative items-start">
      
      <!-- Main Content Article -->
      <main class="flex-1 min-w-0 max-w-4xl glass-panel p-8 md:p-14 rounded-3xl dark:border-white/5 order-1 shadow-2xl">
        <article id="markdown-content" class="prose prose-slate dark:prose-invert max-w-none 
          prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight 
          prose-h1:text-4xl prose-h1:text-primary prose-h1:mb-8
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/50 dark:prose-h2:border-white/10
          prose-h3:text-lg prose-h3:text-foreground/90
          prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-zinc-400
          prose-a:text-emerald-600 dark:prose-a:text-emerald-400 hover:prose-a:text-emerald-500 prose-a:no-underline prose-a:border-b prose-a:border-emerald-500/30 hover:prose-a:border-emerald-500
          prose-code:text-rose-600 dark:prose-code:text-rose-400 prose-code:bg-rose-50 dark:prose-code:bg-rose-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-slate-900 dark:prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-slate-800 dark:prose-pre:border-white/5 prose-pre:shadow-xl
          prose-li:text-slate-600 dark:prose-li:text-zinc-400
          prose-strong:text-foreground
          prose-table:border-collapse prose-th:bg-slate-100 dark:prose-th:bg-white/5 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-border dark:prose-td:border-white/5
          ">
          ${parsedHtml}
        </article>
      </main>

      <!-- Left Sidebar (TOC) -->
      <aside class="hidden lg:block w-72 shrink-0 order-2 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 custom-scrollbar">
        <div class="mb-4">
          <h4 class="text-sm font-bold tracking-widest text-slate-900 dark:text-zinc-100 uppercase mb-4 font-display">Conocimiento</h4>
          <ul id="toc-list" class="space-y-3 border-l border-border dark:border-white/10 ml-1">
            <!-- Injected statically via DOM parsing -->
          </ul>
        </div>
      </aside>

    </div>
  `;

  // Build the Table of Contents by scanning the generated HTML
  const article = document.getElementById('markdown-content')!;
  const headings = article.querySelectorAll('h2, h3');
  const tocList = document.getElementById('toc-list')!;
  
  headings.forEach((heading) => {
    // Slugging
    const text = heading.textContent || '';
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    heading.id = id;
    
    // Smooth scroll offset for fixed header
    heading.classList.add('scroll-mt-32');

    // Add anchor hover icon internally
    const anchor = document.createElement('a');
    anchor.href = '#' + id;
    anchor.className = 'opacity-0 group-hover:opacity-100 absolute -ml-6 text-emerald-500 transition-opacity no-underline selection:bg-transparent hidden md:block';
    anchor.textContent = '#';
    heading.classList.add('group', 'relative');
    heading.insertBefore(anchor, heading.firstChild);

    // Build TOC Links
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = text;
    a.className = `block text-sm transition-colors hover:text-primary -ml-px pl-4 border-l ${
      heading.tagName === 'H3' ? 'pl-8 text-slate-500 dark:text-zinc-500 border-transparent text-[13px] hover:border-border dark:hover:border-zinc-700' : 'text-slate-600 dark:text-zinc-400 font-medium border-transparent hover:border-primary'
    }`;
    // Save reference for scroll spy
    a.setAttribute('data-target', id);
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Wiring Theme Toggler
  const btnTheme = document.getElementById('btn-theme')!;
  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    // Just swap the icon inside the button
    btnTheme.innerHTML = currentTheme === 'dark' ? icons.sun : icons.moon;
    
    // Also toggle the logo brightness if needed
    const logoObj = document.querySelector('header img') as HTMLImageElement;
    if(logoObj) {
      if(currentTheme === 'light') logoObj.classList.add('brightness-0');
      else logoObj.classList.remove('brightness-0');
    }
  });

  // Scroll Spy Logic
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 1.0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active class from all
        document.querySelectorAll('#toc-list a').forEach(a => {
          a.classList.remove('text-primary', 'border-primary', 'font-semibold');
          if (a.parentElement?.previousElementSibling) { // Check if it's an H2 parent making H3 active
             // Keep baseline colors
          }
        });
        
        // Add active class to current
        const activeLink = document.querySelector(`#toc-list a[data-target="${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('text-primary', 'border-primary', 'font-semibold');
        }
      }
    });
  }, observerOptions);

  headings.forEach(h => observer.observe(h));
};

document.addEventListener('DOMContentLoaded', initDocs);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initDocs();
}
