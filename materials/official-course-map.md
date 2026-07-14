# Official course map - learn-html-with-phoebe

Verified against MDN Learn web development and web.dev Learn HTML on 2026-07-13.
HTML is a stable standard (WHATWG living standard) - low re-verify burden; check MDN for
element status if in doubt (popover and dialog were the recent movers).

## Source universe

| Source | What it is | How we use it |
|---|---|---|
| MDN "Structuring content with HTML" (25 lessons) | The canonical beginner path | Primary spine, sessions 1-4 + 6 |
| MDN "CSS styling basics" | Follow-up module | Session 5 starter subset (honest ◐) |
| web.dev Learn HTML (22 chapters) | Google's novice-to-expert course | Shared core + the advanced deltas |
| WHATWG / W3C validator | The standard + the checker | Session 6 debugging |
| MDN element reference | Per-element lookup | Linked from cheat sheets |

## Overlap discipline

MDN Structuring content and web.dev Learn HTML share ~80% of their spine (structure,
metadata, semantics, text, links, lists, tables, forms, images, media). We teach that
shared core ONCE across sessions 1-4. web.dev-only chapters (details/summary, dialog,
focus, template/slot/shadow, HTML APIs) and MDN optional tutorials (SVG, iframe) form
the deep-dive track.

## The running project

"Your corner of the internet" - each learner builds a personal page from empty file to
live GitHub Pages site. Every session's demos edit THEIR page, not a toy.

## Per-session coverage

Legend: ✓ taught to working depth · ◐ introduced, self-study or deep dive finishes

### Session 1 · Your first page (🟢)
| Official topic | Depth |
|---|---|
| MDN: Basic HTML syntax (elements, attributes, nesting) | ✓ |
| MDN: document skeleton (doctype/html/head/body) | ✓ |
| MDN: Headings and paragraphs | ✓ |
| web.dev: Overview of HTML + Document structure | ✓ |
| MDN: Getting started (files, browser, editor) | ✓ |
| web.dev: Attributes chapter | ◐ (S2-S4 deepen per element) |

### Session 2 · Words that link (🟢)
| Official topic | Depth |
|---|---|
| MDN: Emphasis and importance | ✓ |
| MDN: Lists (ul/ol/dl) | ✓ |
| MDN: Advanced text features (quotes, code, sub/sup, time, address) | ✓ |
| MDN: Creating links (absolute/relative/anchors/download/mailto) | ✓ |
| web.dev: Links + Navigation + Text basics + Lists | ✓ |
| MDN: What's in the head (title, meta charset/description, favicon) | ✓ |
| web.dev: Metadata | ◐ (deep dive 6.3 finishes: OG/social) |

### Session 3 · Pictures and structure (🟡)
| Official topic | Depth |
|---|---|
| MDN: HTML images (src, alt discipline, figure/figcaption) | ✓ |
| MDN: Video and audio (controls, sources, captions) | ✓ |
| MDN: Structuring documents (header/nav/main/section/article/aside/footer) | ✓ |
| web.dev: Semantic HTML + Headings and sections + Images + Audio/Video | ✓ |
| Responsive images (srcset/sizes/picture) | ◐ (deep dive 6.3) |

### Session 4 · Tables and forms (🟡)
| Official topic | Depth |
|---|---|
| MDN: Table basics (tr/td/th, colspan/rowspan) | ✓ |
| MDN: Table accessibility (caption, thead/tbody/tfoot, scope) | ✓ |
| MDN: Forms and buttons (form, label, input types, textarea, select, button) | ✓ |
| web.dev: Tables + Forms | ✓ |
| Form validation attributes (required, min/max, pattern) | ✓ |
| Where form data goes (action/method, needs a server) | ◐ honest note |

### Session 5 · Enough CSS to be proud (🟠)
| Official topic | Depth |
|---|---|
| MDN CSS basics: what CSS is, rulesets, applying CSS (link rel) | ✓ |
| Selectors: element, class, id, descendant; specificity lite | ✓ |
| Colors, typography, box model (margin/padding/border) | ✓ |
| Class-based styling patterns | ✓ |
| Flexbox starter (display:flex, gap, justify/align) | ✓ |
| Full CSS module (cascade detail, layout module, grid) | ◐ honest: this is a starter, MDN CSS path linked |

### Session 6 · Polish and ship (🔴)
| Official topic | Depth |
|---|---|
| MDN: Debugging HTML + W3C validator | ✓ |
| Viewport meta + minimal responsive habits | ✓ |
| Accessibility essentials (alt, labels, headings order, landmarks, contrast) | ✓ |
| web.dev: Focus | ◐ (deep dive 6.1 finishes) |
| Publish: GitHub Pages from zero (account, repo, upload, Pages) | ✓ |
| MDN challenges pattern (letter, bird site, planet table, feedback form) | ✓ equivalents built into demos/homework |

### Deep dive 6.1 · Interactive HTML without JS (self-paced)
details/summary ✓ · dialog ✓ · popover ✓ · focus + tabindex ✓ · web.dev "Other inline text elements" ✓

### Deep dive 6.2 · Embeds and vectors (self-paced)
inline SVG + img-SVG ✓ · iframe/embed/object ✓ · template + slot ✓ · shadow DOM ◐ (concept + one example; JS-dependent parts flagged)

### Deep dive 6.3 · Head power-ups (self-paced)
meta/SEO essentials ✓ · Open Graph + social cards ✓ · favicons multi-size ✓ · lazy loading + performance hints ✓ · responsive images srcset/picture ✓

## Not covered by design (honest list)

- JavaScript (linked as the natural next course); web.dev "HTML APIs" chapter covered only as "what exists" in 6.2
- CSS beyond the starter (grid, animations, cascade depth) - MDN CSS path linked from Session 5
- Frameworks, build tools, hosting beyond GitHub Pages
- web.dev certificates/quizzes stay with web.dev; MDN challenges stay MDN's - our equivalents are original

## Fetched syllabus appendix

MDN Structuring content (2026-07-13): Basic syntax · Head metadata · Headings/paragraphs ·
Emphasis · Lists · Advanced text · Structuring documents · Links · Images · Video/audio ·
Table basics · Table accessibility · Forms and buttons · Debugging · (optional: SVG, iframe) ·
challenges: letter, bird site, splash page, planet table, feedback form.
web.dev Learn HTML (2026-07-13): Welcome · Overview · Document structure · Metadata ·
Semantic HTML · Headings and sections · Attributes · Text basics · Links · Lists · Navigation ·
Tables · Forms · Images · Audio/Video · Template slot shadow · HTML APIs · Focus ·
Other inline text · Details/summary · Dialog · Conclusion.
