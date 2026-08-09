# AGENTS.md

## Project overview
- This repository is a small static website for a Hebrew/RTL landing page.
- The site is published via GitHub Pages from the repository root.
- Main files:
  - [index.html](index.html) for page structure
  - [styles.css](styles.css) for layout and responsive styling
  - [script.js](script.js) for the image carousel behavior
  - [images/](images/) for local assets

## Working conventions
- Keep changes simple and lightweight. This project should stay static HTML/CSS/JS with no build step.
- Preserve the existing structure unless a task explicitly requires a redesign.
- All page content is defined in [content.md](content.md). This is the source of truth for the site copy, headings, sections, and text content.
- We will discuss design and feature ideas here often, but the textual content for the page should always come from [content.md](content.md).
- For any UI change, keep Hebrew and RTL behavior in mind:
  - prefer right-to-left layout and alignment
  - ensure text, icons, controls, and spacing feel natural in RTL
  - avoid left-biased spacing or navigation patterns unless explicitly needed
- When editing content, use natural Hebrew copy and keep the tone professional and concise.

## Communication rules for agents
- Before making changes, verify the request with the user when the task is ambiguous, destructive, or could meaningfully change the site behavior.
- If the information provided is incomplete, do not guess. Pause and ask the user for clarification instead.
- When asking questions, provide clear examples and include a default option when possible to make it easier for the user to respond.
- Keep communication concise, practical, and focused on what is needed to proceed safely.

## Local preview and validation
- The local preview should be tested in the integrated browser at http://localhost:5500.
- If the preview is not available, start a local static server on port 5500 before testing.
- Verify responsiveness in both tablet and mobile viewports using the integrated browser.
- At minimum, check a tablet-sized viewport and a mobile-sized viewport after any layout or styling change.

## Deployment notes
- GitHub Pages serves the repository root directly, so keep assets relative and avoid requiring a build pipeline.
- Ensure image paths remain valid from the published site root.
