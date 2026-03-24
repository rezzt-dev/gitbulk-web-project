# GitBulk - Official Project Documentation

## 1. Introduction

**GitBulk** is a professional, multi-threaded Command Line Interface (CLI) application developed in Python. It is designed to orchestrate and execute concurrent Git operations across multiple isolated repositories simultaneously. Utilizing `GitPython` as the underlying engine and `ThreadPoolExecutor` for parallel processing, GitBulk mitigates latency and repetitive strain associated with managing massive microservice architectures or multi-repository environments.

This document serves as the official, comprehensive manual for the deployment, administration, and execution of GitBulk.

---

## 2. System Requirements

To ensure stable execution and full feature compatibility, the host environment must meet the following criteria:

- **Operating System:** Linux, macOS, or Windows 10/11.
- **Runtime Environment:** Python 3.10 or higher.
- **VCS Dependency:** Git (Must be installed and globally accessible via the system's `PATH` environment variable).
- **Hardware Profile:** Multi-core processor recommended for high-concurrency operations (threads > 10).

---

## 3. Installation and Deployment

### 3.1. Automated Deployment Scripts

For convenience, network-based installation scripts are provided for supported environments. These automated scripts retrieve the distribution packages and set up the necessary bindings.

**Windows (PowerShell):**
```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.ps1" | Invoke-Expression
```

**Linux / macOS (Bash):**
```bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/cli/install.sh" | bash
```

### 3.2. Source Code Compilation

For highly secure environments requiring source code inspection, administrators can build the binary distribution manually.

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/rezzt-dev/gitbulk-project.git
cd gitbulk-project
pip install -r requirements.txt
```

2. Compile the standalone binary using PyInstaller:
```bash
pip install pyinstaller
pyinstaller --name gitbulk --onefile src/main.py
```
*Note: The resulting executable will reside in the `dist/` directory and can be deployed to system-wide paths (e.g., `/usr/local/bin/` OR `C:\Windows\System32\`).*

---

## 4. Architectural Overview

GitBulk enforces strict separation of concerns through an MVC-like architecture.

- **Controller (`src/main.py`):** Acts as the ingestion point for CLI arguments and orchestrates thread execution.
- **Model (`src/model/`):** Encapsulates the core business logic, including Git bindings, OS interactions, API requests to GitHub, and concurrent thread distribution.
- **View (`src/view/`):** Manages all terminal output formatting, user prompt interactions, and real-time progress indicators using the `rich` library.
- **Persistence (`src/persistence/`):** Manages internal state retention across sessions.

### 4.1. State Persistence Model
Upon initialization, GitBulk generates a hidden configuration file (`~/.git_manager_pro.json`) within the user's home directory. This manifest retains usage parameters, such as the last targeted directory, preventing redundant input requirements from the user.

---

## 5. Security and Authentication

Certain operations, such as authenticated `fetch`, private codebase access, or Live CI monitoring, mandate valid credentials.

### 5.1. Personal Access Token (PAT) Initialization
GitBulk uses native OS capabilities to securely retain the GitHub Personal Access Token (PAT).

```bash
python main.py auth
```
This utility stores the credential set in the standard `~/.git-credentials` ledger, effectively associating it as a global helper. Subsequent iterations will securely load this token in the background autonomously.

### 5.2. Destructive Operations Safety Mechanisms
GitBulk mitigates catastrophic data loss by intercepting inherently destructive operations. Any command involving unindexed file deletion (e.g., `clean`) requires explicit, interactive boolean verification (`Y/N`) prior to execution. Execution via detached shells or blind CI runners will safely reject the input and terminate the process returning an `EOFError` exception.

---

## 6. Primary Operations

GitBulk must be invoked targeting a root directory comprising multiple valid `.git` sub-directories. 

### 6.1. Synchronization and Fetching
- **`fetch`**: Downloads objects and references from remote repositories without integrating local working trees. Returns `[OK]` or `[UPDATES]` (signifying outstanding commits available for integration).
- **`pull`**: Performs a secure `fast-forward only` merge against the designated upstream. Refuses integration if non-linear history divergences or conflicts exist unless specific flags are applied.

### 6.2. Analytical Commands
- **`status`**: Iteratively calculates differences between the active workspace and tracking branches. Outputs classifications: `[CLEAN]`, `[MODIFIED]`, `[AHEAD]`, `[BEHIND]`.
- **`current-branch`**: Condenses repository local hierarchies against remote upstreams into a structural topology matrix.
- **`ci-status`**: Asynchronously authenticates with the GitHub API to poll continuous integration pipeline states (e.g., GitHub Actions / Jenkins) bound to the `HEAD` commit. Outputs: `[PASS]`, `[FAIL]`, `[PEND]`, `[NONE]`.

### 6.3. Infrastructure and Branch Navigation
- **`checkout`**: Mutates the `HEAD` pointer to the designated branch index. Will dynamically set up tracking references if the branch solely exists upstream.
  *Mandatory conditional:* `-b <branch_name>`
- **`export`**: Serializes absolute paths, remote URLs, and checked-out branch identifiers into a JSON snapshot architecture.
- **`restore`**: Reads a previously generated JSON snapshot to execute bulk cloning sequences, replicating lost internal architecture autonomously.

### 6.4. Lifecycle and Maintenance
- **`clean`**: Aggressive garbage collection sequence. Executes `git fetch --prune` paired with `git clean -xfd`. Eradicates deleted remote references and completely strips the system of unversioned directories (e.g., `node_modules`, `build/`).

---

## 7. Global Execution Parameters (Flags)

The execution parameters dictate multi-threading pressure, logging outputs, and behavioral overrides.

| Parameter | Alias | Description | Default Value |
| :--- | :--- | :--- | :--- |
| `--dir <Path>` | `-d` | Target root path containing repository directories. | *Previous state value* |
| `--workers <Int>` | `-w` | Allocates the threshold of asynchronous system threads globally. | `5` |
| `--log <Path>` | `-l` | Invokes strict physical storage of standard output/error (Git Output). | *None* |
| `--file <Path>` | `-f` | Defines the input/output destination file for `export`/`restore`. | `snapshot.json` |
| `--branch <Str>` | `-b` | String parameter exclusively utilized to set checkout destinations. | *Required on checkout* |
| `--autostash` | N/A | Intercepts working-tree conflicts during `pull`. Stashes unstaged modifications, advances network head, and re-applies the local patch dynamically. | `False` |

---

## 8. Advanced Workflows and Edge Cases

### 8.1. Conflict-Resilient Synchronization (`--autostash`)
It is common for remote servers to reject a merge integration (`pull`) due to uncommitted localized modifications. Implementing the `--autostash` perimeter temporarily secures loose changes, forces the remote `fast-forward`, and injects the retained stash layer instantly.
```bash
python main.py pull --autostash -d "/srv/microservices"
```
The logging framework will explicitly register `[SYNC+STASH]` confirming structural validity, or halt execution outputting `[STASH CONFLICT]` indicating manual conflict resolution is strictly necessary through a local merge driver.

### 8.2. CI/CD Non-Interactive Pipeline Compliance
The interactive architectural layer was designed honoring native UNIX process cycles. When piped within sub-process environments (i.e. `< /dev/null`) where Standard Input (`stdin`) is absent, forced interactive commands automatically fall back securely. Destructive mechanisms failing to read confirmation will terminate inherently without crashing the Python Virtual Machine.

---

## 9. Legal Disclaimer and Software License

### 9.1. License Agreement
This software is provided under the terms of the standard Open Source ecosystem. All intellectual property remains belonging to the respective copyright holders. Users are free to modify, distribute, and integrate this software within proprietary or external products.

### 9.2. Disclaimer of Warranty
THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The execution of specific commands (specifically `clean` and implicit operations lacking correct input parameters) may result in irreversible data destruction. The authors bear no responsibility regarding lost functionality or information resultant from negligence or the use of experimental parameters within this tool.
