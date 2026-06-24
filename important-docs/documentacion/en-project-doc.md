# GitBulk — Technical Documentation

## Table of Contents

1. [Executive Overview](#executive-overview)
2. [Core Capabilities](#core-capabilities)
3. [System Architecture](#system-architecture)
4. [Installation & Deployment](#installation--deployment)
5. [Authentication & Security](#authentication--security)
6. [Workspace Management](#workspace-management)
7. [Repository Groups & Topology](#repository-groups--topology)
8. [Command Reference](#command-reference)
9. [Global Flags & Configuration](#global-flags--configuration)

---

## Executive Overview

**GitBulk** is an enterprise-grade orchestration platform for Git repository management, available as both a CLI tool and a native desktop GUI. It is purpose-built for organizations managing large-scale software infrastructure — from microservice backends and distributed frontend systems to multi-team monorepo environments.

In environments with dozens or hundreds of active repositories, the operational overhead of managing each independently creates compounding inefficiency: engineers waste critical time running redundant commands, resolving environment drift, and diagnosing pipeline failures across disconnected workspaces. GitBulk eliminates this overhead entirely.

By leveraging **hardware-aware concurrent processing**, GitBulk executes operations across your entire repository fleet simultaneously, reducing what would take minutes into sub-second operations. Its persistent workspace model, integrated authentication, and real-time CI visibility make it an essential tool for any engineering team operating at scale.

> **Who is GitBulk for?**
> — DevOps and Platform Engineering teams managing complex multi-repository architectures.
> — Tech Leads and Staff Engineers who need fast, reliable environment synchronization.
> — CI/CD pipeline administrators requiring unified status visibility across all services.

---

## Core Capabilities

### Intelligent Concurrency Engine
GitBulk's execution engine is built on native subprocess calls, bypassing high-overhead library abstractions. It automatically detects available hardware resources and distributes workloads across threads to maximize both disk I/O and network throughput. Operations that would take minutes running sequentially complete in seconds.

### Persistent Workspace System
A **workspace** is a saved snapshot of your entire working environment — the full set of repositories, their locations, and their state. Workspaces can be saved, restored, listed, deleted, and synchronized, allowing engineering teams to version their development environments with the same rigor as their code. Missing repositories are automatically cloned on load; repositories no longer in scope are safely archived on sync.

### Integrated PAT Authentication
GitBulk handles authentication centrally through Personal Access Tokens (PAT) stored securely in OS-level credentials. This eliminates the need for per-repository authentication configuration, enabling frictionless access to private organizational repositories — including those hosted on GitHub and GitLab.

### Visual Conflict & Status Management
Beyond automation, GitBulk provides interactive resolution flows for merge conflicts, commit dialogs, and destructive operations. Every action that may have irreversible consequences is gated behind a confirmation screen, ensuring operational safety in production-adjacent environments.

### Native Multi-Language Interface
The full interface — including the desktop GUI — is available in **Spanish, English (US/UK), German, and French**, enabling adoption by globally distributed engineering teams without localization friction.

---

## System Architecture

GitBulk's internal engine is designed around three foundational pillars:

| Component | Description |
|---|---|
| **Native Subprocess Engine** | Replaces library-dependent calls with direct OS-level subprocess management, eliminating version conflicts and maximizing performance. |
| **UI Throttling (250ms batching)** | Render updates are batched at 250ms intervals, ensuring the interface remains fully responsive even when processing hundreds of concurrent operations. |
| **SSH Agent Diagnostics** | GitBulk automatically detects and configures SSH agents on the host system, ensuring secure tunneling to remote repositories without manual intervention. |
| **Icon & Asset Cache** | Visual resources are statically cached to eliminate repeated I/O on re-renders, contributing to a snappy, latency-free UI experience. |

---

## Installation & Deployment

GitBulk offers one-line web installers for both Windows and Linux environments. No manual dependency resolution is required.

### Windows (PowerShell) — GUI Installer

```powershell
iwr -useb "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/windows/install_gui.ps1" | iex
```

### Linux / macOS (Bash) — GUI Installer

```bash
curl -fsSL "https://raw.githubusercontent.com/rezzt-dev/gitbulk-project/main/dist/linux/install_gui.sh" | bash
```

Both scripts bootstrap the full GitBulk environment, including the native GUI client and CLI binary, in a single execution. The installers are idempotent and safe to re-run for updates.

---

## Authentication & Security

GitBulk uses a centralized authentication model. Credentials are stored in the host operating system's secure credential store and are never written to disk in plaintext.

```bash
gitbulk auth
```

Running this command initiates an interactive wizard that securely stores your PAT. Once configured, all subsequent operations — including cloning private repositories during workspace load/sync — authenticate automatically without user prompting.

This model is compatible with both **GitHub** and **GitLab**, and supports token rotation without requiring reconfiguration of individual repository remotes.

---

## Workspace Management

Workspaces are the foundation of GitBulk's environment management model. They allow teams to define, capture, and reproduce exact repository topologies across machines and team members.

### Lifecycle Commands

| Command | Behavior |
|---|---|
| `workspace save` | Captures the current directory topology and repository states into a named workspace file. |
| `workspace load <name>` | Restores a workspace, automatically cloning any repositories not present on disk. |
| `workspace sync` | Reconciles disk state against a reference workspace definition. Archives repositories not in scope. |
| `workspace list` | Displays all saved workspaces with metadata (date saved, repository count, root path). |
| `workspace delete <name>` | Permanently removes a saved workspace definition. |

**Use case:** An onboarding engineer can restore a fully configured development environment — all repositories, correct branches, correct structure — with a single command, reducing setup time from hours to seconds.

---

## Repository Groups & Topology

GitBulk supports logical grouping of repositories through per-repository configuration files (`.gitbulk.repo.json`). By tagging repositories with group identifiers (e.g., `backend`, `frontend`, `infrastructure`, `data`), teams can target specific subsets of the workspace for operations without affecting unrelated repositories.

```json
{
  "group": "backend",
  "tags": ["api", "critical"]
}
```

The **Group Inspector** provides a real-time visual map of the entire workspace topology, organized by group, allowing engineering managers to audit repository structure and operational health at a glance.

---

## Command Reference

### `gitbulk status`
Runs a parallel status check across all repositories in the active workspace or directory. Outputs a structured visual matrix showing commit divergence, uncommitted changes, and upstream tracking state for each repository.

### `gitbulk fetch`
Concurrently downloads metadata, remote refs, and object updates from all configured origins. Does not modify working trees. Ideal for pre-synchronization diagnostics.

### `gitbulk pull`
Advances all repositories to the latest remote state via fast-forward merge. Supports `--autostash` to automatically stash and reapply local changes, preventing operation failures in repositories with dirty working trees.

### `gitbulk commit`
Initiates a bulk commit flow across all repositories with uncommitted changes. Supports a shared commit message applied to all, or an interactive per-repository dialog for granular control.

### `gitbulk push`
Pushes all local commits to remote origins in parallel. Handles rejection scenarios and surfaces conflicts without aborting the entire operation batch.

### `gitbulk checkout`
Switches all repositories in the workspace to a specified branch. If the target branch does not exist in a given repository, the operation is safely skipped with a warning — it never fails silently.

### `gitbulk workspace`
Entry point for the full workspace lifecycle: `save`, `load`, `sync`, `list`, `delete`. See [Workspace Management](#workspace-management) for full documentation.

### `gitbulk groups`
Displays the logical topology of the current workspace, organized by group tags defined in `.gitbulk.repo.json` files. Useful for auditing environment structure and targeting group-specific operations.

### `gitbulk ci-status`
Connects to the GitHub API and retrieves real-time pipeline status (pass/fail/pending) for all repositories in the workspace. Presents results in a unified dashboard, eliminating the need to check each repository's Actions tab individually.

### `gitbulk clean`
Removes all untracked and ignored files from repositories in batch. **This operation is irreversible.** GitBulk requires explicit confirmation before execution and supports `--dry-run` for safe pre-execution preview.

### `gitbulk auth`
Configures and stores authentication credentials (PAT tokens) in the OS credential store. See [Authentication & Security](#authentication--security).

---

## Global Flags & Configuration

These flags are available across all commands and modify global behavior:

| Flag | Description |
|---|---|
| `-d, --dir <path>` | Sets the root directory for the operation. This value is persisted across sessions. |
| `-w, --workers <n>` | Number of concurrent worker threads. Use `0` for automatic hardware-based tuning (recommended). |
| `--gui` | Launches the native desktop GUI instead of using the CLI. |
| `--dry-run` | Simulates the operation and outputs a preview of changes without executing them. Safe for auditing destructive commands before execution. |
| `--group <name>` | Limits the operation scope to repositories tagged with the specified group identifier. |
