---
name: Obsidian-cli
description: Interact with Obsidian vaults using the Obsidian CLI to read, create, search, and manage notes, tasks, properties, and more. Also supports plugin and theme development with commands to reload plugins, run JavaScript, capture errors, take screenshots, and inspect the DOM. Use when the user asks to interact with their Obsidian vault, manage notes, search vault content, perform vault operations from the command line, or develop and debug Obsidian plugins and themes.
---

# Obsidian CLI

Use the `Obsidian` CLI to interact with a running Obsidian instance. Requires Obsidian to be open.

## Command reference

Run `Obsidian help` to see all available commands. This is always up to date. Full docs: https://help.Obsidian.md/cli

## Syntax

**Parameters** take a value with `=`. Quote values with spaces:

```bash
Obsidian create name="My Note" content="Hello world"
```

**Flags** are boolean switches with no value:

```bash
Obsidian create name="My Note" silent overwrite
```

For multiline content use `\n` for newline and `\t` for tab.

## File targeting

Many commands accept `file` or `path` to target a file. Without either, the active file is used.

- `file=<name>` — resolves like a wikilink (name only, no path or extension needed)
- `path=<path>` — exact path from vault root, e.g. `folder/note.md`

## Vault targeting

Commands target the most recently focused vault by default. Use `vault=<name>` as the first parameter to target a specific vault:

```bash
Obsidian vault="My Vault" search query="test"
```

## Common patterns

```bash
Obsidian read file="My Note"
Obsidian create name="New Note" content="# Hello" template="Template" silent
Obsidian append file="My Note" content="New line"
Obsidian search query="search term" limit=10
Obsidian daily:read
Obsidian daily:append content="- [ ] New task"
Obsidian property:set name="status" value="done" file="My Note"
Obsidian tasks daily todo
Obsidian tags sort=count counts
Obsidian backlinks file="My Note"
```

Use `--copy` on any command to copy output to clipboard. Use `silent` to prevent files from opening. Use `total` on list commands to get a count.

## Plugin development

### Develop/test cycle

After making code changes to a plugin or theme, follow this workflow:

1. **Reload** the plugin to pick up changes:
   ```bash
   Obsidian plugin:reload id=my-plugin
   ```
2. **Check for errors** — if errors appear, fix and repeat from step 1:
   ```bash
   Obsidian dev:errors
   ```
3. **Verify visually** with a screenshot or DOM inspection:
   ```bash
   Obsidian dev:screenshot path=screenshot.png
   Obsidian dev:dom selector=".workspace-leaf" text
   ```
4. **Check console output** for warnings or unexpected logs:
   ```bash
   Obsidian dev:console level=error
   ```

### Additional developer commands

Run JavaScript in the app context:

```bash
Obsidian eval code="app.vault.getFiles().length"
```

Inspect CSS values:

```bash
Obsidian dev:css selector=".workspace-leaf" prop=background-color
```

Toggle mobile emulation:

```bash
Obsidian dev:mobile on
```

Run `Obsidian help` to see additional developer commands including CDP and debugger controls.
