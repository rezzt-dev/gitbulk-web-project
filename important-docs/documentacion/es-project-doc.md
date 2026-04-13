# GitBulk — Documentación Técnica

## Índice

1. [Visión General Ejecutiva](#visión-general-ejecutiva)
2. [Capacidades Principales](#capacidades-principales)
3. [Arquitectura del Sistema](#arquitectura-del-sistema)
4. [Instalación y Despliegue](#instalación-y-despliegue)
5. [Autenticación y Seguridad](#autenticación-y-seguridad)
6. [Gestión de Workspaces](#gestión-de-workspaces)
7. [Grupos y Topología de Repositorios](#grupos-y-topología-de-repositorios)
8. [Referencia de Comandos](#referencia-de-comandos)
9. [Flags y Configuración Global](#flags-y-configuración-global)

---

## Visión General Ejecutiva

**GitBulk** es una plataforma de orquestación empresarial para la gestión de repositorios Git, disponible como herramienta CLI y como interfaz gráfica de escritorio nativa. Ha sido diseñada específicamente para organizaciones que gestionan infraestructura de software a gran escala — desde backends de microservicios y sistemas frontend distribuidos hasta entornos multi-equipo con monorepos.

En entornos con decenas o cientos de repositorios activos, la carga operativa de gestionar cada uno de forma independiente genera una ineficiencia creciente: los ingenieros pierden tiempo crítico ejecutando comandos redundantes, resolviendo divergencias de entorno y diagnosticando fallos de pipeline a través de espacios de trabajo desconectados. GitBulk elimina por completo este sobrecoste.

Mediante **procesamiento concurrente con detección automática de hardware**, GitBulk ejecuta operaciones en toda la flota de repositorios de forma simultánea, reduciendo lo que llevaría minutos a operaciones sub-segundo. Su modelo de workspaces persistentes, autenticación integrada y visibilidad CI en tiempo real lo convierten en una herramienta esencial para cualquier equipo de ingeniería que opere a escala.

> **¿Para quién es GitBulk?**
> — Equipos de DevOps e Ingeniería de Plataforma que gestionan arquitecturas multi-repositorio complejas.
> — Tech Leads e Ingenieros Senior que necesitan sincronización de entornos rápida y fiable.
> — Administradores de pipelines CI/CD que requieren visibilidad unificada del estado en todos los servicios.

---

## Capacidades Principales

### Motor de Concurrencia Inteligente
El motor de ejecución de GitBulk está construido sobre llamadas nativas a subprocess, evitando las abstracciones de alto coste de bibliotecas externas. Detecta automáticamente los recursos de hardware disponibles y distribuye la carga de trabajo entre hilos para maximizar tanto el I/O de disco como el throughput de red. Las operaciones que tardarían minutos en ejecución secuencial se completan en segundos.

### Sistema de Workspaces Persistentes
Un **workspace** es un snapshot guardado de todo tu entorno de trabajo — el conjunto completo de repositorios, sus ubicaciones y su estado. Los workspaces pueden guardarse, restaurarse, listarse, eliminarse y sincronizarse, permitiendo a los equipos de ingeniería versionar sus entornos de desarrollo con el mismo rigor que su código. Los repositorios ausentes se clonan automáticamente al cargar; los repositorios ya no en uso se archivan de forma segura al sincronizar.

### Autenticación PAT Integrada
GitBulk gestiona la autenticación de forma centralizada mediante Personal Access Tokens (PAT) almacenados de forma segura en el almacén de credenciales del sistema operativo. Esto elimina la necesidad de configurar autenticación por repositorio, habilitando acceso sin fricción a repositorios privados organizacionales — incluidos los alojados en GitHub y GitLab.

### Gestión Visual de Conflictos y Estado
Más allá de la automatización, GitBulk proporciona flujos de resolución interactivos para conflictos de merge, diálogos de commit y operaciones destructivas. Toda acción que pueda tener consecuencias irreversibles requiere una pantalla de confirmación explícita, garantizando la seguridad operativa en entornos adyacentes a producción.

### Interfaz Nativa Multi-idioma
La interfaz completa — incluida la GUI de escritorio — está disponible en **español, inglés (US/UK), alemán y francés**, facilitando la adopción por equipos de ingeniería distribuidos globalmente sin fricción de localización.

---

## Arquitectura del Sistema

El motor interno de GitBulk está diseñado sobre tres pilares fundamentales:

| Componente | Descripción |
|---|---|
| **Motor Nativo de Subprocess** | Reemplaza las llamadas dependientes de bibliotecas con gestión directa de subprocesos a nivel de SO, eliminando conflictos de versiones y maximizando el rendimiento. |
| **Throttling de UI (agrupación a 250ms)** | Las actualizaciones de renderizado se agrupan en intervalos de 250ms, garantizando que la interfaz permanezca completamente responsiva incluso al procesar cientos de operaciones concurrentes. |
| **Diagnóstico de Agente SSH** | GitBulk detecta y configura automáticamente los agentes SSH en el sistema anfitrión, asegurando tunneling seguro a repositorios remotos sin intervención manual. |
| **Caché de Iconos y Assets** | Los recursos visuales se almacenan en caché estáticamente para eliminar I/O repetido en re-renderizados, contribuyendo a una experiencia de UI ágil y sin latencia perceptible. |

---

## Instalación y Despliegue

GitBulk ofrece instaladores web de una sola línea para entornos Windows y Linux. No se requiere resolución manual de dependencias.

### Windows (PowerShell) — Instalador GUI

```powershell
iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/windows/install_gui.ps1" | iex
```

### Linux / macOS (Bash) — Instalador GUI

```bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/linux/install_gui.sh" | bash
```

Ambos scripts inicializan el entorno complete de GitBulk, incluyendo el cliente GUI nativo y el binario CLI, en una única ejecución. Los instaladores son idempotentes y seguros de re-ejecutar para actualizaciones.

---

## Autenticación y Seguridad

GitBulk utiliza un modelo de autenticación centralizado. Las credenciales se almacenan en el almacén de credenciales seguro del sistema operativo anfitrión y nunca se escriben en disco en texto plano.

```bash
gitbulk auth
```

La ejecución de este comando inicia un asistente interactivo que almacena tu PAT de forma segura. Una vez configurado, todas las operaciones posteriores — incluida la clonación de repositorios privados durante la carga o sincronización de workspaces — se autentican automáticamente sin requerir intervención del usuario.

Este modelo es compatible con **GitHub** y **GitLab**, y admite rotación de tokens sin necesidad de reconfigurar los remotos individuales de cada repositorio.

---

## Gestión de Workspaces

Los workspaces son la base del modelo de gestión de entornos de GitBulk. Permiten a los equipos definir, capturar y reproducir topologías exactas de repositorios entre máquinas y miembros del equipo.

### Comandos del Ciclo de Vida

| Comando | Comportamiento |
|---|---|
| `workspace save` | Captura la topología de directorio actual y los estados de los repositorios en un fichero de workspace con nombre. |
| `workspace load <nombre>` | Restaura un workspace, clonando automáticamente los repositorios no presentes en disco. |
| `workspace sync` | Reconcilia el estado de disco con una definición de workspace de referencia. Archiva repositorios fuera del alcance. |
| `workspace list` | Muestra todos los workspaces guardados con metadatos (fecha, número de repositorios, ruta raíz). |
| `workspace delete <nombre>` | Elimina permanentemente una definición de workspace guardada. |

**Caso de uso:** Un ingeniero en proceso de incorporación puede restaurar un entorno de desarrollo completamente configurado — todos los repositorios, ramas correctas, estructura correcta — con un único comando, reduciendo el tiempo de configuración de horas a segundos.

---

## Grupos y Topología de Repositorios

GitBulk soporta la agrupación lógica de repositorios mediante ficheros de configuración por repositorio (`.gitbulk.repo.json`). Al etiquetar los repositorios con identificadores de grupo (p. ej., `backend`, `frontend`, `infrastructure`, `data`), los equipos pueden dirigir operaciones a subconjuntos específicos del workspace sin afectar a repositorios no relacionados.

```json
{
  "group": "backend",
  "tags": ["api", "critical"]
}
```

El **Inspector de Grupos** proporciona un mapa visual en tiempo real de toda la topología del workspace, organizado por grupo, permitiendo a los responsables de ingeniería auditar la estructura de repositorios y el estado operativo de un vistazo.

---

## Referencia de Comandos

### `gitbulk status`
Ejecuta una verificación de estado en paralelo en todos los repositorios del workspace o directorio activo. Genera una matriz visual estructurada mostrando la divergencia de commits, cambios no confirmados y el estado de seguimiento upstream de cada repositorio.

### `gitbulk fetch`
Descarga concurrentemente metadatos, refs remotas y actualizaciones de objetos desde todos los orígenes configurados. No modifica los árboles de trabajo. Ideal para diagnósticos previos a la sincronización.

### `gitbulk pull`
Avanza todos los repositorios hasta el estado remoto más reciente mediante fast-forward merge. Soporta `--autostash` para guardar y reaplicar automáticamente los cambios locales, previniendo fallos en repositorios con árbol de trabajo sucio.

### `gitbulk commit`
Inicia un flujo de commit masivo en todos los repositorios con cambios no confirmados. Soporta un mensaje de commit compartido aplicado a todos, o un diálogo interactivo por repositorio para control granular.

### `gitbulk push`
Empuja todos los commits locales a los orígenes remotos en paralelo. Gestiona escenarios de rechazo y expone conflictos sin abortar el lote completo de operaciones.

### `gitbulk checkout`
Cambia todos los repositorios del workspace a una rama especificada. Si la rama objetivo no existe en un repositorio concreto, la operación se omite de forma segura con una advertencia — nunca falla silenciosamente.

### `gitbulk workspace`
Punto de entrada para el ciclo de vida completo del workspace: `save`, `load`, `sync`, `list`, `delete`. Consulta [Gestión de Workspaces](#gestión-de-workspaces) para la documentación completa.

### `gitbulk groups`
Muestra la topología lógica del workspace actual, organizada por las etiquetas de grupo definidas en los ficheros `.gitbulk.repo.json`. Útil para auditar la estructura del entorno y dirigir operaciones a grupos específicos.

### `gitbulk ci-status`
Se conecta a la API de GitHub y recupera el estado de pipeline en tiempo real (pass/fail/pending) para todos los repositorios del workspace. Presenta los resultados en un dashboard unificado, eliminando la necesidad de revisar la pestaña de Actions de cada repositorio individualmente.

### `gitbulk clean`
Elimina todos los ficheros no rastreados e ignorados de los repositorios en bloque. **Esta operación es irreversible.** GitBulk requiere confirmación explícita antes de la ejecución y soporta `--dry-run` para una previsualización segura previa a la ejecución.

### `gitbulk auth`
Configura y almacena las credenciales de autenticación (tokens PAT) en el almacén de credenciales del SO. Consulta [Autenticación y Seguridad](#autenticación-y-seguridad).

---

## Flags y Configuración Global

Estos flags están disponibles en todos los comandos y modifican el comportamiento global:

| Flag | Descripción |
|---|---|
| `-d, --dir <ruta>` | Establece el directorio raíz para la operación. Este valor se persiste entre sesiones. |
| `-w, --workers <n>` | Número de hilos de trabajo concurrentes. Usa `0` para ajuste automático basado en hardware (recomendado). |
| `--gui` | Lanza la interfaz gráfica de escritorio nativa en lugar de usar el CLI. |
| `--dry-run` | Simula la operación y muestra una previsualización de los cambios sin ejecutarlos. Seguro para auditar comandos destructivos antes de la ejecución. |
| `--group <nombre>` | Limita el ámbito de la operación a los repositorios etiquetados con el identificador de grupo especificado. |
