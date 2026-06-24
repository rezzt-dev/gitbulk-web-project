# Información Completa del Proyecto GitBulk

## 1. Descripción General
**GitBulk** es una herramienta profesional de línea de comandos (CLI) escrita en Python. Sirve para gestionar y actualizar simultáneamente múltiples repositorios Git mediante la búsqueda recursiva de directorios y ejecución de comandos en paralelo. Mitiga la latencia y la fatiga repetitiva de gestionar arquitecturas masivas de microservicios.

## 2. Tecnologías y Arquitectura
- **Lenguaje Principal:** Python 3.7+ (Recomendado 3.10+)
- **Estructura Arquitectónica:** Organizado de forma modular siguiendo principios de separación de responsabilidades:
    - `src/main.py`: Controlador principal que conecta todas las capas.
    - `src/model/`: Lógica de negocio central. Interactúa directamente con el motor interno (`GitPython`), la gestión de concurrencia y API keys.
    - `src/view/`: Manejo de CLI, interfaz de usuario en terminal, enriquecida visualmente utilizando la librería `rich`.
    - `src/persistence/`: Manejo de base de datos local en JSON, encargada de la persistencia inter-sesión.
- **Dependencias Principales (`requirements.txt`):**
    - `GitPython>=3.1.0` (Motor subyacente para manipulación de repositorios locales)
    - `rich>=13.0.0` (Para interfaces en terminal, tablas coloridas y barras de progreso)
    - `pyinstaller>=6.0.0` (Herramienta de compilación para generar el binario independiente `.exe` / `elf`)

## 3. Instalación
GitBulk cuenta con scripts de instalación automática que descargan el CLI listo para usar:
- **Windows (PowerShell):**
  ```powershell
  iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.ps1" | iex
  ```
- **Linux (Bash):**
  ```bash
  curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.sh" | sh
  ```

*Opción de Compilación Manual (Código Fuente):*
```bash
git clone https://github.com/rezzt-dev/gitbulk-project.git
cd gitbulk-project
pip install -r requirements.txt
pyinstaller --name gitbulk --onefile src/main.py
```

## 4. Características Clave
1. **Ejecución Concurrente Multi-hilo:** Aprovecha múltiples hilos (`ThreadPoolExecutor`) gestionables mediante la bandera `--workers` (ej: -w 12) reduciendo drásticamente el tiempo de ejecución.
2. **Memoria de Sesión y Persistencia Automática:** Recuerda silenciosamente el último directorio trabajado para omitir el parámetro `--dir` en futuros comandos.
3. **Manejo de Autenticación Integrado:** Soporta acceso a repositorios privados registrando un PAT en la variable global sin interrumpir descargas asíncronas.
4. **Monitorización Remota (GitHub API):** Lee de forma nativa estados de CI (GitHub Actions) sobre tu red de repositorios actuales.
5. **Autoprotección y Prevención de Desastres:** Interfaz con peticiones e interrupciones dinámicas para operaciones destructivas como reseteos totales.

## 5. Operaciones y Comandos (CLI)
La herramienta se invoca ejecutando `main.py [comando] [argumentos]`:

| Comando | Descripción de Trabajo Masivo |
|---------|-----------------------------------------------------------------------------------------|
| `status` | Analiza el estado de tu espacio y divergencias pendientes con upstream (`[AHEAD]`, `[CLEAN]`, etc).|
| `fetch` | Rutina robusta para descargar metadatos y actualizaciones de todas las redes origen remotas. |
| `pull` | Avanza (Solo Fast-Forward) todos tus códigos fuentes hacia el último registro remoto estable. |
| `checkout` | Mueve o rastrea todos los repositorios simultáneamente alojándolos en una rama (Ej: `-b develop`). |
| `current-branch`| Imprime una matriz visibilizando toda la topografía actual de las ramas de la configuración. |
| `clean` | (Destructivo y Purgador) Destruye archivos no trackeados usando `git clean -xfd` iterativamente. |
| `ci-status` | Conexión directa hacia la URL externa CI obteniendo los reportes `[PASS/FAIL/PEND/NONE]`. |
| `export` | Inyecta y construye un `snapshot.json` conteniendo URLs y huellas de infraestructura activa. |
| `restore` | Clona y rescata instantáneamente todo el código alojado en un snapshot previo (`-f master.json`). |
| `auth` | Almacena y certifica tus claves de red seguras. |

### Argumentos de Comportamiento Global
- `-d, --dir <Ruta>`: Forzar la ejecución en una carpeta maestra concreta.
- `-w, --workers <N>`: Definir la potencia/demanda sobre el CPU al procesar.
- `--autostash`: Característica de *pulling asistido*. Protege los cambios, hace fetch-pull e inyecta el stash nuevamente si es seguro.
- `-l, --log <Archivo>`: Fuerza el volcado interno de subprocesos en un archivo texto físico para debugeo.
- `-f, --file <Archivo>`: Manipula el origen del JSON a usar entre el exportado y el clónico.

## 6. Documentación Adicional y Fuentes
Los manuales oficiales, arquitecturas y guías estáticas extendidas existen en el repositorio bajo `/project-doc/`:
- [Guía en Español (`es-project-doc.md`)](project-doc/es-project-doc.md)
- [Guía en Inglés (`en-project-doc.md`)](project-doc/en-project-doc.md)
