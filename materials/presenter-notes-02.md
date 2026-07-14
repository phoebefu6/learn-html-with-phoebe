# Presenter notes - Session 2 · Words that link: text, lists, and the web's superpower

Instructor-only cues for the student page `courses/02-words-that-link.html`. You present the Live cards and run the three demos. Self-study cards ("The small-print squad - small, sub, sup, time, address", "mailto, download, and new tabs done honestly", "Head hygiene - lang, author, and what stays out") are homework depth - point at them, never present them.

## Preflight (before people arrive)

- Tab 1: the session page, served, cards collapsed, "Projector zoom" on.
- Tab 2: VS Code with YOUR demo copy of `index.html` from Session 1 open - the outline with three h2s and two h3s, exactly where the homework left it. Demos 1-3 all edit this file.
- The `my-site` folder visible so the room re-anchors on where files live.
- Learner prerequisites: their Session 1 outline (h1, three h2 sections, ids not yet added). Anyone without one copies yours during Demo 1 - have it pasteable.
- Optional: a browser bookmark to a news site with lazy "click here" links, for the Weak/Strong contrast in Part 2.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Recap | One breath: skeleton, ladder, edit-save-reload. Then Part 0's line: "a page that links is part of the web - that is the entire difference between a file and a site." |
| 3-11 | Part 1 · Meaningful text | Card "strong and em - meaning, not looks" (3 min): run the playground, move the em between "said" and "ready", read both sentences aloud - the meaning moves. Land "machines hear strong and em; they shrug at b and i". Card "Lists - ul, ol, and lists inside lists" (3 min): the training-a-model playground, flip the ol to ul, plant the seed "navs are lists of links". Card "dl - when your content comes in pairs" (1 min) and "Quotes and code" (1 min): compress to the one-liner rules and the quote-habit callout. |
| 11-19 | Part 2 · Links | The relative-paths SVG first (zoom it): sibling, subfolder, up one level - "paths are measured from the file the link lives in". Card "Anatomy of a link - absolute vs relative" (3 min): absolute = full postal address, relative = directions from where you stand. Card "Link text - say where it goes" (2 min): read the Weak vs Strong prompt boxes aloud. Card "Anchors - links that jump within the page" (2 min): run the playground, click the nav links, watch the jump - "id on the target, # in the link, both halves or nothing". |
| 19-23 | Part 3 · Finishing the head | Card "Title, description, favicon, and a CSS teaser" (4 min): walk the four bullets on the finished-head playground. The emoji favicon is the delight beat - do not rush it. The stylesheet link is "a reserved parking spot for Session 5". |
| 23-31 | Demo 1 · From outline to real page | Follow along - beats below. |
| 31-36 | Demo 2 · Links I love | Build your own - beats below. |
| 36-40 | Demo 3 · Head upgrade | Build your own - beats below. |
| 40-45 | Q&A | Close on the cheat sheet and the homework - especially "bring one photo to Session 3; images land next week and yours goes live." |

### Demo 1 beats (8 min, everyone follows)

1. Add ids to the three h2s: `id="about"`, `id="projects"`, `id="contact"` - lowercase, no spaces, "ids are picky".
2. Under the h1, the ul of three anchor links: `<a href="#about">About</a>` and friends. Name it: this is the classic nav pattern, formalized in Session 3.
3. Save, reload, click all three on screen. Then break one deliberately - change an href to `#About` with a capital - and show it silently dead. Recovery line: "id and href must match exactly, spelling and case; a dead anchor is always a disagreement between the two halves."
4. Real words: 2-3 paragraphs per section, written like you talk. Model the emphasis budget: one honest strong, maybe one em.
5. Projects section: code tags around tool and file names in the two h3 descriptions.

Where it goes wrong: pages too short to visibly jump - the anchor "does nothing" because everything already fits on screen. Recovery line: "shrink the browser window until the page scrolls - the jump was working all along."

### Demo 2 beats (5 min)

1. `<h3>Links I love</h3>` plus a ul of five real external links - sites, newsletters, docs, tools they genuinely rate.
2. Enforce the discipline: link text as a recommendation - "MDN's HTML reference", never "click here for HTML stuff". Each link must make sense read alone.
3. One of the five is a mailto - or a spelled-out address, pointing at the self-study card's spam-bot warning.
4. Click all five, live: "a link you haven't clicked is a link you haven't tested - habit for life."

Where it goes wrong: someone types an absolute URL without `https://` and gets a broken relative path to `www.example.com`. Recovery line: "absolute links need the full protocol - no https, and the browser goes looking for a file named www-dot-something next to your page."

### Demo 3 beats (4 min)

1. Rewrite the title as "Your Name - what you do". Reload, point at the tab.
2. Meta description, one honest sentence near 150 characters - "write it for a human skimming search results".
3. The emoji favicon: copy the link rel="icon" line from the Part 3 playground, swap the 🌸. Reload - the tab gets a face. This is the applause beat of the session.
4. The Session 5 teaser line: `<link rel="stylesheet" href="css/site.css">` - "it quietly does nothing until the file exists."

## Never cut

- The anchor demo with a deliberate break in Demo 1 - anchors power the nav for the rest of the course, and the exact-match rule only sticks after they see a silent failure.
- The relative-paths SVG walkthrough - Session 3's images, Session 5's stylesheet link, and Session 6's upload all break without this mental model.
- The link-text discipline (Weak vs Strong boxes) - it is check 3 of Session 6's audit and free SEO; thirty seconds of contrast buys a permanent habit.
- The emoji favicon in Demo 3 - disproportionate delight per second of effort, and it is the thing people show their friends, which keeps them practicing.

## Cut if long

1. First: Demo 2 shrinks to two links live, five as homework - the homework already grows it to ten anyway.
2. Second: the "dl" and "Quotes and code" cards compress to one sentence each - the homework has a dl task and a blockquote task with the cards as the manual.
3. Third: the "strong and em" playground shortens to reading the two em sentences aloud without editing - the point lands verbally.
4. Never cut Part 3 or Demo 3 - the finished head is what makes their page feel real in the tab, and Session 5's stylesheet slot must exist before Session 5. The small-print squad and mailto details absorb into their Self-study cards: "that card is your homework."

## Q&A ammo

- "Why do b and i still exist if they're meaningless?" - History plus edge cases: b and i have niche honest uses (keywords, ship names), but as a beginner rule, if you mean emphasis or importance, say strong or em so machines hear it too. Same look, different honesty.
- "When absolute vs relative for my own pages?" - Relative between your own files, always - they keep working when the whole folder moves, including to GitHub Pages in Session 6. Absolute for everyone else's sites. The card says it in one line; the reason is portability.
- "Won't publishing my email invite spam?" - Yes, mailto addresses are harvestable - the self-study card is honest about it. Spell it out ("phoebe at example dot com") or wait for Session 4's contact form, which is the graceful answer.
- "Should links open in new tabs?" - Default no - users can open tabs themselves. Force it only when losing the page would hurt, like mid-form, and pair target="_blank" with rel="noopener". The honesty rule is on the self-study card.
- "Do search engines really read the meta description?" - They read it and often quote it as the grey sentence under your headline - and if you don't write one, they improvise from your page. One honest sentence beats their guess.
- "Can AI write my link text and descriptions?" - It can draft; you audit. The "read every link out of context" test from the homework works exactly as well on AI output - and AI is a chronic "click here" offender.

## Timing reality check

This session historically overruns in Demo 1 step 4 - "write 2-3 real paragraphs per section" is a writing task wearing a coding costume, and rooms go quiet for far longer than the slot. The fallback: cap writing at 90 seconds ("one honest sentence per section now, real paragraphs are homework") and spend the recovered time on the anchor wiring, which is the part they cannot self-teach from the page. Part 1 also tempts overrun because the em-moving playground is genuinely fun - two sentences aloud, then move on. Protect Demo 3 to the end: the favicon-in-the-tab moment is this session's send-off, and rooms that get it leave visibly happier.
