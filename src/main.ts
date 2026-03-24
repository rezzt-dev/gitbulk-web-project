import '../style.css'

// -- OS Detection Logic --
const isUnix = navigator.userAgent.toLowerCase().includes('linux') || navigator.userAgent.toLowerCase().includes('mac');
const initialOs = isUnix ? 'linux' : 'windows';

// -- Content Data --
const commands = [
  { cmd: 'status', desc: 'Analiza el estado y divergencias con upstream.' },
  { cmd: 'fetch', desc: 'Descarga de red metadatos y actualizaciones de orígenes.' },
  { cmd: 'pull', desc: 'Avanza hacia el último registro remoto (Fast-Forward).' },
  { cmd: 'checkout', desc: 'Mueve todos los repositorios simultáneamente a una rama.' },
  { cmd: 'current-branch', desc: 'Matriz visual de la topografía actual de las ramas.' },
  { cmd: 'clean', desc: 'Destruye iterativamente archivos no trackeados (Peligroso).' },
  { cmd: 'ci-status', desc: 'Obtiene reportes directos (PASS/FAIL) de la URL CI.' },
  { cmd: 'export', desc: 'Inyecta y construye un `snapshot.json` con metadatos.' },
  { cmd: 'restore', desc: 'Rescata y clona la infraestructura desde un snapshot.' },
  { cmd: 'auth', desc: 'Almacena y certifica tus claves PAT seguras.' },
];

const features = [
  { 
    icon: '<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>', 
    title: 'Ejecución Concurrente', 
    desc: 'Aprovecha múltiples hilos reduciendo drásticamente el tiempo de ejecución de las operaciones.' 
  },
  { 
    icon: '<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>', 
    title: 'Persistencia Automática', 
    desc: 'Recuerda silenciosamente el último directorio trabajado para omitir rutas en futuros procesos.' 
  },
  { 
    icon: '<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>', 
    title: 'Manejo de Autenticación', 
    desc: 'Soporta acceso a privados registrando un PAT en la variable global sin interrumpir descargas.' 
  },
  { 
    icon: '<svg class="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>', 
    title: 'Autoprotección', 
    desc: 'Interfaz interactiva con barreras dinámicas para operaciones y borrados destructivos.' 
  },
];

// -- Renders --
const renderHeader = () => `
  <header class="w-full border-b border-[#222] bg-[#101010]/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/logo.svg" alt="GitBulk Logo" class="w-8 h-8 rounded" />
        <span class="text-xl font-bold tracking-tight text-white">GitBulk</span>
      </div>
      <nav class="flex gap-6 text-sm font-medium text-gray-400">
        <a href="#features" class="hover:text-emerald-400 transition-colors">Características</a>
        <a href="#commands" class="hover:text-emerald-400 transition-colors">Comandos</a>
        <a href="https://github.com/rezzt-dev/gitbulk-project" target="_blank" class="hover:text-emerald-400 transition-colors flex items-center gap-1">
          GitHub
          <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
        </a>
      </nav>
    </div>
  </header>
`;

const renderHero = () => `
  <section class="relative pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-[#101010] to-[#101010] -z-10 h-[500px]"></div>
    
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
      <span class="flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      CLI de Gestión Masiva
    </div>

    <h1 class="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl">
      Domina todos tus repositorios con <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">GitBulk</span>.
    </h1>
    
    <p class="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
      Una herramienta profesional de línea de comandos en Python para gestionar y actualizar múltiples repositorios Git de forma masiva y concurrente.
    </p>

    <div class="w-full max-w-2xl rounded-xl border border-[#222] bg-[#131313]/90 shadow-2xl overflow-hidden backdrop-blur-xl">
      <div class="flex items-center justify-between px-4 py-3 border-b border-[#222] bg-[#131313]">
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-[#333]"></div>
          <div class="w-3 h-3 rounded-full bg-[#333]"></div>
          <div class="w-3 h-3 rounded-full bg-[#333]"></div>
        </div>
        <div class="flex gap-1 bg-[#1c1c1c] p-1 rounded-lg">
          <button id="tab-windows" class="px-3 py-1 text-xs font-medium rounded-md transition-colors ${initialOs === 'windows' ? 'bg-[#333] text-white' : 'text-gray-400 hover:text-gray-200'}">Windows</button>
          <button id="tab-linux" class="px-3 py-1 text-xs font-medium rounded-md transition-colors ${initialOs === 'linux' ? 'bg-[#333] text-white' : 'text-gray-400 hover:text-gray-200'}">Linux / macOS</button>
        </div>
      </div>
      <div class="p-4 py-5 text-left font-mono text-sm overflow-x-auto relative group">
        <code id="install-code" class="text-emerald-300"></code>
        <button id="copy-btn" class="absolute top-[50%] -translate-y-[50%] right-4 p-2 rounded-md bg-[#222] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#333] border border-[#333]" title="Copiar al portapapeles">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
        </button>
      </div>
    </div>
  </section>
`;

const renderFeatures = () => `
  <section id="features" class="py-20 px-6 max-w-6xl mx-auto">
    <div class="mb-12 text-center md:text-left">
      <h2 class="text-3xl font-bold text-white mb-4">Arquitectura de Alto Rendimiento</h2>
      <p class="text-gray-400 max-w-2xl">GitBulk mitiga la latencia y la fatiga repetitiva de gestionar arquitecturas masivas de microservicios con una estructura sólida.</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${features.map(f => `
        <div class="p-6 rounded-2xl bg-[#131313] border border-[#222] hover:border-emerald-500/30 transition-colors group">
          <div class="mb-5 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">${f.icon}</div>
          <h3 class="text-lg font-semibold text-gray-200 mb-2">${f.title}</h3>
          <p class="text-sm text-gray-400 leading-relaxed">${f.desc}</p>
        </div>
      `).join('')}
    </div>
  </section>
`;

const renderCommands = () => `
  <section id="commands" class="py-20 px-6 max-w-4xl mx-auto">
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">Comandos Masivos</h2>
      <p class="text-gray-400">Simplifica tu flujo de trabajo procesando cientos de repositorios en 1 solo un clic.</p>
    </div>

    <div class="rounded-xl border border-[#222] overflow-hidden bg-[#131313]">
      <table class="w-full text-left max-w-full">
        <thead>
          <tr class="bg-[#1c1c1c]/50 text-gray-300 text-sm border-b border-[#222]">
            <th class="px-6 py-4 font-medium">Comando</th>
            <th class="px-6 py-4 font-medium hidden sm:table-cell">Descripción</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#222]">
          ${commands.map(cmd => `
            <tr class="hover:bg-[#1a1a1a] transition-colors">
              <td class="px-6 py-4 align-top">
                <code class="text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded text-sm whitespace-nowrap border border-emerald-400/10">${cmd.cmd}</code>
                <p class="text-sm text-gray-400 mt-2 sm:hidden">${cmd.desc}</p>
              </td>
              <td class="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">${cmd.desc}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </section>
`;

const renderFooter = () => `
  <footer class="border-t border-[#222] bg-[#101010] py-12 px-6 mt-auto">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-3">
        <img src="/logo.svg" alt="GitBulk Logo" class="w-6 h-6 grayscale opacity-50" />
        <span class="text-gray-500 font-medium text-sm">GitBulk Developer Tools</span>
      </div>
      <div class="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
        <p class="text-gray-500 text-sm">Construido para velocidad y fiabilidad extrema.</p>
        <p class="text-gray-500 text-sm">Desarrollado por <a href="https://github.com/rezzt-dev" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">rezzt.dev</a></p>
      </div>
    </div>
  </footer>
`;

// -- Mounting and Logic --
const initApp = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  app.innerHTML = `
    ${renderHeader()}
    <main class="flex-1">
      ${renderHero()}
      ${renderFeatures()}
      ${renderCommands()}
    </main>
    ${renderFooter()}
  `;

  // OS Logic Handler
  const codeEl = document.getElementById('install-code')!;
  const tabWin = document.getElementById('tab-windows')!;
  const tabLin = document.getElementById('tab-linux')!;
  const copyBtn = document.getElementById('copy-btn')!;

  const scripts = {
    windows: 'iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.ps1" | iex',
    linux: 'curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.sh" | sh'
  };

  let activeOs = initialOs;

  const updateScripts = (os: 'windows' | 'linux') => {
    activeOs = os;
    codeEl.textContent = scripts[os];
    
    if (os === 'windows') {
      tabWin.className = "px-3 py-1 text-xs font-medium rounded-md transition-colors bg-[#333] text-white";
      tabLin.className = "px-3 py-1 text-xs font-medium rounded-md transition-colors text-gray-400 hover:text-gray-200";
    } else {
      tabLin.className = "px-3 py-1 text-xs font-medium rounded-md transition-colors bg-[#333] text-white";
      tabWin.className = "px-3 py-1 text-xs font-medium rounded-md transition-colors text-gray-400 hover:text-gray-200";
    }
  };

  // Set Default
  updateScripts(activeOs as 'windows' | 'linux');

  // Listeners
  tabWin.addEventListener('click', () => updateScripts('windows'));
  tabLin.addEventListener('click', () => updateScripts('linux'));

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(scripts[activeOs as 'windows' | 'linux']).then(() => {
      copyBtn.innerHTML = '<svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
      setTimeout(() => {
        copyBtn.innerHTML = '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>';
      }, 2000);
    });
  });
};

initApp();
