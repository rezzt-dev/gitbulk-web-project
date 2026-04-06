import"./style-CzStgFGw.js";const z=navigator.userAgent.toLowerCase().includes("linux")||navigator.userAgent.toLowerCase().includes("mac"),L=localStorage.getItem("gitbulk-lang"),$=localStorage.getItem("gitbulk-theme");let t={lang:L||"es",theme:$||"dark",os:z?"linux":"windows",version:"gui"};document.documentElement.classList.toggle("dark",t.theme==="dark");const o={cpu:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 group-hover:text-emerald-400 transition-colors"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',database:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 group-hover:text-emerald-400 transition-colors"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',key:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 group-hover:text-emerald-400 transition-colors"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>',shield:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 group-hover:text-emerald-400 transition-colors"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>',copy:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',github:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>',sun:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',moon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',translate:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',terminal:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>',monitor:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>'},B={es:{navDocs:"Infraestructura",navCmds:"Comandos",navRepo:"Repositorio",heroBadge:"GitBulk 1.2.0 ya está disponible",heroTitleHtml:'Domina todos tus repositorios con <span class="text-gradient inline-block font-black">GitBulk</span>',heroDesc:"Una herramienta profesional diseñada para ingenieros DevOps. Automatiza, sincroniza y gestiona docenas de repositorios concurrentemente sin fricción.",installQuick:"Instalación Rápida",tabWin:"Windows",tabLin:"Linux / macOS",tabCLI:"Terminal (CLI)",tabGUI:"Escritorio (GUI)",guiBadge:"NUEVO",featsTag:"Ingeniería Avanzada",featsTitle:"Arquitectura de Alto Rendimiento",featsDesc:"GitBulk mitiga la latencia y la fatiga repetitiva de gestionar arquitecturas masivas de microservicios con un diseño enfocado en velocidad bruta y seguridad inquebrantable.",f1Title:"Ejecución Concurrente",f1Desc:"Aprovecha múltiples hilos de tu procesador para despachar cientos de repositorios en milisegundos. Di adiós a los scripts bash lineales y letárgicos.",f2Title:"Persistencia de Estado",f2Desc:"Recuerda silenciosamente el último ecosistema de directorios para transiciones instantáneas en futuros procesos sin re-ingresar rutas.",f3Title:"Manejo PAT Integrado",f3Desc:"Autenticación automática transparente a repositorios privados evitando cuellos de botella en los complejos flujos de descarga.",f4Title:"Autoprotección Activa",f4Desc:"Barreras lógicas de confirmación y pantallas dinámicas previenen desastres ante operaciones hiper-destructivas (ej: `clean` forzado).",cmdTag:"Referencia CLI",cmdTitle:"Herramientas Masivas",cmdDesc:"Simplifica tu pipeline CI/CD y tu flujo diario ejecutando acciones transaccionales en todo tu entorno de repositorios con una sola instrucción.",colExec:"Ejecutable",colProp:"Propósito Funcional",footTitle:"GitBulk Dev Tools",footSub:"Versión CLI Profesional v1.2.0",footBuild:"Construido para velocidad y fiabilidad extrema.",footDev:"Desarrollado y mantenido por",cmds:[{cmd:"status",desc:"Analiza el estado y divergencias con upstream al instante en todos los proyectos."},{cmd:"fetch",desc:"Descarga concurrente en red de todos los metadatos y actualizaciones del origin."},{cmd:"pull",desc:"Avanza hacia el último commit remoto (Fast-Forward) previniendo y resolviendo colisiones."},{cmd:"checkout",desc:"Mueve todos los repositorios simultáneamente hacia una rama específica."},{cmd:"current-branch",desc:"Despliega una matriz visual delineando la topografía actual de tus ramas de código."},{cmd:"clean",desc:"Itera para destruir archivos no trackeados (Operación altamente destructiva)."},{cmd:"ci-status",desc:"Intercepta en tiempo real los reportes de estado (PASS/FAIL) reportados por el CI Pipeline."},{cmd:"export",desc:"Mapea a profundidad y construye un `snapshot.json` con la radiografía exacta del ecosistema."},{cmd:"restore",desc:"Rescata y reconstruye toda la infraestructura basada en un snapshot estructural previo."},{cmd:"auth",desc:"Ancla criptográficamente tus claves PAT y certificados para autorización local en GitHub/GitLab."}]},en:{navDocs:"Infrastructure",navCmds:"Commands",navRepo:"Repository",heroBadge:"GitBulk 1.2.0 is now live",heroTitleHtml:'Master all your repositories with <span class="text-gradient inline-block font-black">GitBulk</span>',heroDesc:"A professional-grade tool architected for DevOps engineers. Automate, synchronize, and effortlessly manage dozens of repositories concurrently minus the friction.",installQuick:"Quick Install",tabWin:"Windows",tabLin:"Linux / macOS",tabCLI:"Terminal (CLI)",tabGUI:"Desktop (GUI)",guiBadge:"NEW",featsTag:"Advanced Engineering",featsTitle:"High-Performance Architecture",featsDesc:"GitBulk mitigates latency and the repetitive fatigue of managing massive microservice ecosystems with an uncompromising focus on raw speed and security.",f1Title:"Concurrent Execution",f1Desc:"Leverage multiple CPU threads to process hundreds of repositories in milliseconds. Leave slow, linear bash scripts confidently in the past.",f2Title:"State Persistence",f2Desc:"Silently caches your last working environment state to guarantee instant jump-backs in future sessions without path re-entries.",f3Title:"Integrated PAT Handling",f3Desc:"Seamless automated authentication to private repositories without bottlenecking or disrupting complex parallel download flows.",f4Title:"Active Self-Protection",f4Desc:"Dynamic confirmation barriers and interactive logical prompts prevent catastrophic errors during hyper-destructive operations (e.g. forced `clean`).",cmdTag:"CLI Reference",cmdTitle:"Massive Tooling",cmdDesc:"Streamline your CI/CD pipeline and daily workflow by executing transactional actions across your entire repository environment.",colExec:"Executable",colProp:"Functional Outline",footTitle:"GitBulk Dev Tools",footSub:"Professional CLI Version v1.2.0",footBuild:"Engineered for uncompromising speed and reliability.",footDev:"Developed and maintained by",cmds:[{cmd:"status",desc:"Instantly analyzes commit state and upstream divergence across all projects."},{cmd:"fetch",desc:"Concurrently downloads network metadata and origin parity updates."},{cmd:"pull",desc:"Fast-forwards to the latest remote commit smoothly, resolving overlaps on the fly."},{cmd:"checkout",desc:"Simultaneously pivots all your repositories targeted gracefully to a specified branch."},{cmd:"current-branch",desc:"Outputs a visual layout matrix mapping your entire branch topography."},{cmd:"clean",desc:"Iteratively wipes out non-tracked or tainted files (Highly destructive manipulation)."},{cmd:"ci-status",desc:"Directly hooks in to scope out real-time (PASS/FAIL) reports from configured CI Pipelines."},{cmd:"export",desc:"Builds a deeply-mapped `snapshot.json` outlining the total metadata configuration."},{cmd:"restore",desc:"Fully rescues infrastructure deploying the complete environment based on a prior snapshot."},{cmd:"auth",desc:"Securely and locally anchors your developer PAT tokens to guarantee unhindered GitHub/GitLab access."}]}},I=e=>e.replace(/(iwr|iex|curl|bash|sh)\b/g,'<span class="code-token-cmd">$1</span>').replace(/( -useb| -fsSL)\b/g,'<span class="code-token-flag">$1</span>').replace(/(https?:\/\/[^\s"|]+)/g,'<span class="code-token-url">$1</span>').replace(/(\|)/g,'<span class="code-token-operator">$1</span>').replace(/(".*?")/g,'<span class="code-token-string">$1</span>');let c=null;const C=(e,r,a)=>{c&&clearInterval(c),e.innerHTML="";let i=0;c=window.setInterval(()=>{if(i<r.length){const l=r.slice(i,i+3);e.textContent+=l,i+=3}else clearInterval(c),c=null,e.innerHTML=I(r)},20)},T=e=>`
  <header class="w-full border-b border-border/60 dark:border-white/5 bg-background/60 backdrop-blur-xl fixed top-0 z-50 transition-all duration-300" id="navbar">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-4 group cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
        <div class="relative w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-900 rounded-xl border border-border dark:border-white/10 overflow-hidden shadow-lg group-hover:border-primary/50 transition-colors">
          <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img src="/logo.svg" alt="GitBulk Logo" class="w-6 h-6 object-contain relative z-10 ${t.theme==="light"?"brightness-0":""}" />
        </div>
        <span class="text-2xl font-display font-bold tracking-tight text-foreground">${t.theme==="light","GitBulk"}</span>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500 dark:text-zinc-400">
        <a href="#features" class="hover:text-primary transition-colors">${e.navDocs}</a>
        <a href="#commands" class="hover:text-primary transition-colors">${e.navCmds}</a>
        <a href="/docs/index.html" class="hover:text-primary transition-colors text-primary/80">Documentación</a>
        
        <div class="w-px h-4 bg-border"></div>

        <button id="btn-theme" class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground">
          ${t.theme==="dark"?o.sun:o.moon}
        </button>

        <button id="btn-lang" class="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground border border-border/50 dark:border-white/5 uppercase text-xs font-bold font-mono">
          ${o.translate} ${t.lang}
        </button>

        <a href="https://github.com/rezzt-dev/gitbulk-project" target="_blank" class="flex items-center gap-2 text-primary-foreground bg-primary hover:bg-emerald-600 px-4 py-2 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 ml-2">
          ${o.github}
          <span>${e.navRepo}</span>
        </a>
      </nav>
      <!-- Mobile Menu Button -->
      <button id="btn-mobile" class="md:hidden text-slate-500 dark:text-zinc-400 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 p-2 rounded-lg transition-colors">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    <!-- Mobile Dropdown Menu -->
    <div id="mobile-menu" class="hidden absolute top-[100%] left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/60 dark:border-white/5 py-6 px-6 shadow-2xl transition-all">
      <nav class="flex flex-col gap-4 text-center items-center font-medium">
        <a href="#features" class="w-full py-3 hover:text-primary transition-colors hover:bg-black/5 dark:hover:bg-white/5 rounded-xl border border-transparent">${e.navDocs}</a>
        <a href="#commands" class="w-full py-3 hover:text-primary transition-colors hover:bg-black/5 dark:hover:bg-white/5 rounded-xl border border-transparent">${e.navCmds}</a>
        <a href="/docs/index.html" class="w-full py-3 hover:text-primary transition-colors text-primary/80 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl border border-transparent">Documentación</a>
        <div class="h-px w-2/3 bg-border/50 my-2"></div>
        <div class="flex items-center gap-6 justify-center w-full">
          <button id="btn-theme-mobile" class="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-900 border border-border dark:border-white/5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground shadow-sm">
            ${t.theme==="dark"?o.sun:o.moon}
          </button>
          <button id="btn-lang-mobile" class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border border-border dark:border-white/5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground uppercase text-sm font-bold font-mono shadow-sm">
            ${o.translate} ${t.lang}
          </button>
        </div>
        <a href="https://github.com/rezzt-dev/gitbulk-project" target="_blank" class="w-full flex items-center justify-center gap-2 text-primary-foreground bg-primary hover:bg-emerald-600 px-6 py-4 rounded-xl mt-4 shadow-lg shadow-emerald-500/20 transition-all font-semibold">
          ${o.github}
          <span>${e.navRepo}</span>
        </a>
      </nav>
    </div>
  </header>
`,D=e=>`
  <section class="relative min-h-[100dvh] pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col items-center justify-center text-center overflow-hidden">
    <!-- Glowing background orb -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 dark:bg-primary/10 blur-[100px] rounded-[100%] pointer-events-none -z-10 animate-pulse-glow"></div>
    
    <div class="animate-fade-in-up">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 hover:bg-primary/15 transition-colors cursor-default backdrop-blur-md shadow-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        ${e.heroBadge}
      </div>
    </div>

    <h1 class="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-foreground mb-8 max-w-5xl leading-[1.05] animate-fade-in-up reveal-delay-100 drop-shadow-sm">
      ${e.heroTitleHtml}
    </h1>
    
    <p class="text-lg md:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mb-12 animate-fade-in-up reveal-delay-200 font-light leading-relaxed">
      ${e.heroDesc}
    </p>

    <!-- Version Selection Tabs -->
    <div class="flex items-center justify-center gap-3 mb-12 animate-fade-in-up reveal-delay-250">
      <button id="version-gui" class="flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-medium ${t.version==="gui"?"bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105":"bg-surface/50 text-slate-500 border-border hover:border-primary/50"}">
        ${o.monitor}
        <span>${e.tabGUI}</span>
        <span class="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white font-bold ml-1">${e.guiBadge}</span>
      </button>
      <button id="version-cli" class="flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 font-medium ${t.version==="cli"?"bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105":"bg-surface/50 text-slate-500 border-border hover:border-primary/50"}">
        ${o.terminal}
        <span>${e.tabCLI}</span>
      </button>
    </div>

    <!-- Redesigned Professional Terminal -->
    <div class="w-full max-w-4xl terminal-window animate-fade-in-up reveal-delay-300 mx-auto text-left relative z-10 group">
      <!-- Terminal Header -->
      <div class="terminal-header">
        <div class="flex gap-2">
          <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        
        <div class="flex items-center gap-4">
          <div class="flex gap-1.5 bg-white/5 p-1 rounded-md border border-white/5">
            <button id="tab-windows" class="px-3 py-1 text-[11px] font-semibold rounded transition-all ${t.os==="windows"?"bg-white/10 text-white shadow-inner":"text-zinc-500 hover:text-zinc-300"}">${e.tabWin}</button>
            <button id="tab-linux" class="px-3 py-1 text-[11px] font-semibold rounded transition-all ${t.os==="linux"?"bg-white/10 text-white shadow-inner":"text-zinc-500 hover:text-zinc-300"}">${e.tabLin}</button>
          </div>
          <div class="hidden sm:flex items-center gap-2 text-[10px] text-zinc-500 font-mono italic">
            ${o.terminal} ~/gitbulk-deploy
          </div>
        </div>
        
        <div class="w-16 hidden sm:block"></div> <!-- Balanced spacer -->
      </div>

      <!-- Terminal Body -->
      <div class="terminal-body group">
        <div class="flex items-start gap-3 mb-2">
          <span class="text-emerald-500 font-bold">user@gitbulk</span>
          <span class="text-zinc-500">:</span>
          <span class="text-blue-400 font-bold">~</span>
          <span class="text-zinc-500">$</span>
          <div class="flex-1">
             <code id="install-code" class="text-zinc-300 block overflow-x-auto whitespace-pre font-mono leading-relaxed min-h-[1.5em]"></code>
          </div>
        </div>
        
        <!-- Copy Button - Floating inside terminal -->
        <button id="copy-btn" class="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-xl" title="Copiar / Copy">
          ${o.copy}
          <span class="text-xs font-bold uppercase tracking-wider">Copy</span>
        </button>

        <!-- Status Hint -->
        <div class="mt-8 flex items-center gap-3 text-[11px] text-zinc-600 font-mono border-t border-white/5 pt-4">
          <span class="flex h-2 w-2 rounded-full bg-emerald-500/50 animate-pulse"></span>
          Ready to install ${t.version==="gui"?"GitBulk GUI":"GitBulk CLI"} v1.2.0
          ${t.version==="gui"?'<span class="ml-auto text-zinc-700 italic">// High-performance desktop client</span>':""}
        </div>
      </div>
    </div>
  </section>
`,j=e=>{const r=[{icon:o.cpu,title:e.f1Title,desc:e.f1Desc,span:"col-span-1 md:col-span-2",bg:"bg-gradient-to-br from-slate-100 to-white dark:from-zinc-900/80 dark:to-zinc-800/20"},{icon:o.database,title:e.f2Title,desc:e.f2Desc,span:"col-span-1",bg:"bg-white dark:bg-zinc-900/40"},{icon:o.key,title:e.f3Title,desc:e.f3Desc,span:"col-span-1",bg:"bg-white dark:bg-zinc-900/40"},{icon:o.shield,title:e.f4Title,desc:e.f4Desc,span:"col-span-1 md:col-span-2",bg:"bg-gradient-to-tr from-emerald-50 dark:from-emerald-950/20 to-white dark:to-zinc-900/40"}];return`
    <section id="features" class="py-32 px-6 max-w-7xl mx-auto border-t border-border/50 dark:border-white/5 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div class="mb-20 text-center reveal">
        <h2 class="text-amber-600 dark:text-amber-500 font-bold tracking-widest text-xs uppercase mb-3">${e.featsTag}</h2>
        <h3 class="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">${e.featsTitle}</h3>
        <p class="text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          ${e.featsDesc}
        </p>
      </div>
      
      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        ${r.map((a,i)=>`
          <div class="glass-card rounded-2xl p-8 relative overflow-hidden group ${a.span} ${a.bg} reveal" style="transition-delay: ${i*100}ms">
            <!-- Background hover effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div class="w-14 h-14 rounded-xl bg-white dark:bg-zinc-950/50 border border-border dark:border-white/5 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
                ${a.icon}
              </div>
              <div>
                <h4 class="text-xl font-display font-bold text-foreground mb-3">${a.title}</h4>
                <p class="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light group-hover:text-slate-800 dark:group-hover:text-zinc-300 transition-colors">${a.desc}</p>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `},E=e=>`
  <section id="commands" class="py-32 px-6 max-w-5xl mx-auto relative reveal">
    <div class="mb-16 text-center">
      <h2 class="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest text-xs uppercase mb-3">${e.cmdTag}</h2>
      <h3 class="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">${e.cmdTitle}</h3>
      <p class="text-slate-600 dark:text-zinc-400 text-lg font-light">${e.cmdDesc}</p>
    </div>

    <div class="glass-panel rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-white/80 dark:bg-surface/50 border border-border dark:border-white/10">
      <div class="bg-slate-100/50 dark:bg-zinc-950/50 px-6 py-4 border-b border-border dark:border-white/5 flex items-center justify-between">
        <span class="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest">${e.colExec}</span>
        <span class="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest hidden sm:block">${e.colProp}</span>
      </div>
      <div class="divide-y divide-border/60 dark:divide-white/5 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-sm">
        ${e.cmds.map(r=>`
          <div class="flex flex-col sm:flex-row sm:items-center p-6 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors group">
            <div class="sm:w-1/3 mb-3 sm:mb-0">
              <code class="text-primary bg-primary/10 px-3 py-1.5 rounded-md text-sm font-mono border border-primary/20 group-hover:border-primary/50 transition-colors inline-block shadow-sm">
                gitbulk ${r.cmd}
              </code>
            </div>
            <div class="sm:w-2/3 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light group-hover:text-slate-900 dark:group-hover:text-zinc-300 transition-colors">
              ${r.desc}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
`,M=e=>`
  <footer class="border-t border-border dark:border-white/5 bg-slate-50 dark:bg-zinc-950 pt-16 pb-8 px-6 mt-auto relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-border dark:via-white/10 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 bg-white dark:bg-zinc-900 rounded-lg flex items-center justify-center border border-border/80 dark:border-white/5 shadow-sm">
          <img src="/logo.svg" alt="GitBulk Logo" class="w-5 h-5 opacity-70 grayscale ${t.theme==="light"?"brightness-0":""}" />
        </div>
        <div>
          <span class="text-slate-800 dark:text-zinc-200 font-display font-semibold block">${e.footTitle}</span>
          <span class="text-slate-500 dark:text-zinc-500 text-xs">${e.footSub}</span>
        </div>
      </div>
      
      <div class="flex items-center gap-6">
        <p class="text-slate-500 dark:text-zinc-500 text-sm font-light text-center md:text-right">
          ${e.footBuild}<br/>
          ${e.footDev} <a href="https://github.com/rezzt-dev" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-emerald-400 hover:underline transition-all font-medium inline-flex items-center gap-1">rezzt.dev</a>
        </p>
      </div>
    </div>
  </footer>
`,S=()=>{const e=document.getElementById("install-code"),r=document.getElementById("tab-windows"),a=document.getElementById("tab-linux"),i=document.getElementById("version-cli"),l=document.getElementById("version-gui"),n=document.getElementById("copy-btn"),x=document.getElementById("btn-theme"),f=document.getElementById("btn-theme-mobile"),w=document.getElementById("btn-lang"),y=document.getElementById("btn-lang-mobile"),k=document.getElementById("btn-mobile"),p=document.getElementById("mobile-menu"),m={cli:{windows:'iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.ps1" | iex',linux:'curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.sh" | bash'},gui:{windows:'iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/gui/install.ps1" | iex',linux:'curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/gui/install_linux.sh" | bash'}},u=()=>{const d=m[t.version][t.os];C(e,d);const b="px-3 py-1 text-[11px] font-semibold rounded transition-all bg-white/10 text-white shadow-inner",v="px-3 py-1 text-[11px] font-semibold rounded transition-all text-zinc-500 hover:text-zinc-300";r.className=t.os==="windows"?b:v,a.className=t.os==="linux"?b:v};u(),r.addEventListener("click",()=>{t.os="windows",u()}),a.addEventListener("click",()=>{t.os="linux",u()}),i.addEventListener("click",()=>{t.version="cli",s()}),l.addEventListener("click",()=>{t.version="gui",s()}),n.addEventListener("click",()=>{navigator.clipboard.writeText(m[t.version][t.os]).then(()=>{const d=n.innerHTML;n.innerHTML=o.check,n.classList.add("text-emerald-500","border-emerald-500/50","bg-emerald-500/10"),setTimeout(()=>{n.innerHTML=d,n.classList.remove("text-emerald-500","border-emerald-500/50","bg-emerald-500/10")},2e3)})});const g=()=>{t.theme=t.theme==="dark"?"light":"dark",document.documentElement.classList.toggle("dark",t.theme==="dark"),localStorage.setItem("gitbulk-theme",t.theme),s()},h=()=>{t.lang=t.lang==="es"?"en":"es",localStorage.setItem("gitbulk-lang",t.lang),s()};x.addEventListener("click",g),f.addEventListener("click",g),w.addEventListener("click",h),y.addEventListener("click",h),k.addEventListener("click",()=>{p.classList.toggle("hidden")}),p.querySelectorAll("a").forEach(d=>{d.addEventListener("click",()=>{p.classList.add("hidden")})})},s=()=>{const e=document.querySelector("#app"),r=B[t.lang];document.documentElement.classList.toggle("dark",t.theme==="dark"),e.innerHTML=`
    ${T(r)}
    <main class="flex-1 w-full relative">
      ${D(r)}
      ${j(r)}
      ${E(r)}
    </main>
    ${M(r)}
  `,S(),A()},A=()=>{const e={root:null,rootMargin:"0px",threshold:.1},r=new IntersectionObserver((i,l)=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("active"),l.unobserve(n.target))})},e);document.querySelectorAll(".reveal").forEach(i=>{r.observe(i)});const a=document.getElementById("navbar");if(a){const i=()=>{window.scrollY>20?(a.classList.add("shadow-lg","bg-background/90"),a.classList.remove("bg-background/60")):(a.classList.remove("shadow-lg","bg-background/90"),a.classList.add("bg-background/60"))};window.addEventListener("scroll",i)}};document.addEventListener("DOMContentLoaded",s);(document.readyState==="complete"||document.readyState==="interactive")&&s();
