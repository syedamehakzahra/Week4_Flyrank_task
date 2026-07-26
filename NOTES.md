# Week 4 Accessibility Notes

## Overview

This document provides a comprehensive comparison between manually implemented accessible components and the shadcn/ui component library built on Radix primitives.

---

## What shadcn/ui Handled Better

- **Radix primitives** ship with battle-tested focus trap, Escape handling, and portal rendering, reducing manual edge-case work.
- **Declarative state** (`data-[state=open]`) makes open/closed styling reliable without synchronizing multiple React state variables.
- **Composable subcomponents** expose small, typed APIs (`DialogTrigger`, `DialogContent`) that map cleanly to semantic roles and ARIA.
- **Consistent animations** are built in, whereas manual modal implementations require additional work to match similar behavior without animation libraries.

---

## Concrete Gaps in Manual Implementation

### 1. Modal Focus Trap Fragmentation

The manual Modal traps focus with Tab/Shift+Tab, but it does not prevent programmatic focus leaks or handle non-focusable children robustly. It also does not implement a full "roving tabindex" pattern inside the dialog body, which Radix covers.

### 2. Tabs Arrow-Key Rendering Edge Cases

The custom Tabs arrow-key navigator works for button-based tabs, but it does not account for dynamic tab lists or disabled tabs. Radix Tabs handles disabled tabs, orientation, and activation behavior out of the box.

---

## Accessibility Differences

### Roles & States

Both implementations use `role="dialog"`, `aria-modal`, `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`, and `aria-expanded`. shadcn/ui components preserve these through Radix, which also adds additional context like `data-state` for CSS selectors.

### Live Region Handling

Radix primitives often avoid unnecessary live regions; manual components rely on static ARIA without dynamic announcements.

### Initial Focus

shadcn/ui defaults to a predictable initial focus pattern within dialogs and tabs, while the manual Modal focuses the first interactive element; custom Tabs rely on click rather than strong auto-activation semantics.

---

## Focus Management Differences

### Portal Rendering

shadcn/ui Dialog renders in a portal and returns focus to the trigger automatically. The manual Modal returns focus on close, but portal-like behavior is inline and can be disrupted by surrounding scroll/layout.

### Focus Boundaries

shadcn/ui enforces strict tab boundaries inside dialogs and preserves focus even if content changes. The manual Modal traps Tab cycling, but it is not as resilient to DOM mutations or nested focusable components.

### Roving Tabindex

shadcn/ui Tabs implement roving tabindex via Radix. The custom Tabs use `tabIndex` toggling, which is correct but more fragile if tab components become non-button elements.

---

## Keyboard Interaction Differences

### Escape Handling

shadcn/ui Dialog reliably closes on Escape with proper suppression and focus return. The manual Modal listens for `Escape` and calls `onClose`, but does not stop event propagation beyond the modal itself.

### Tabs Navigation

Both support arrow keys. shadcn/ui Tabs also support Home/End and ensure disabled tabs are skipped cleanly via Radix behavior. The custom Tabs support Left/Right/Home/End but do not enforce disabled-tab skipping.

### Disclosure

The manual disclosure handles Enter/Space correctly. shadcn/ui does not provide a Disclosure primitive here, but Radix Collapsible would provide similar behavior with more robust state synchronization.

---

## Key Takeaways

- Building accessible components from scratch reveals many subtle requirements: focus boundaries, return focus, proper ARIA relationships, and edge cases around non-standard interactive content.
- shadcn/ui is valuable not because accessibility is impossible to implement manually, but because it reduces repetitive, error-prone behavior to configurable primitives.
- TypeScript strictness (`verbatimModuleSyntax`, `noAny`) forces small but important import and typing decisions, such as explicit `type` imports and correct JSX typing.
- Vite aliases (`@`) and path mapping require both `tsconfig.json` and `vite.config.ts` changes to stay consistent across build, dev server, and IDE tooling.
