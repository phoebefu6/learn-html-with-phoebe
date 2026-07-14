# Presenter notes - Session 6 · Polish and ship: your page goes live

Instructor-only cues for the student page `courses/06-polish-and-ship.html`. This is ship day - "everyone graduates" is the masthead promise, and Demo 3's page-live-on-a-phone moment is the emotional finale of the whole course. Every timing decision below exists to protect it. Self-study cards ("A debugging order that works", "What that name means, and updating later") are homework depth - point at them, never present them.

## Preflight (before people arrive)

- Tab 1: the session page, served, cards collapsed, "Projector zoom" on.
- Tab 2: VS Code with your demo `index.html` + `styles.css` + `images/` - styled and complete from Session 5. Plant ONE known validation error in your copy so Demo 1 has something real to fix on screen.
- Tab 3: validator.w3.org, open on "Validate by File Upload".
- Tab 4: github.com, logged into a demo account you are happy to show. If your USERNAME.github.io repo already exists, delete or rename it beforehand so Demo 3 creates it fresh - the room needs to see the whole path.
- Your actual phone, charged, on venue wifi, ready to load the shipped URL on camera or held up to the room.
- Verify venue wifi reaches github.com and validator.w3.org - this session dies without both. Test that GitHub Pages builds are not glacially slow that day by shipping a scratch repo in the morning.
- Learner prerequisites: their styled page from Session 5 (index.html, styles.css, images/). New today: everyone needs a GitHub account - tell them in advance if you can; account creation mid-demo is the classic time sink.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Welcome | Part 0's arc in one line: "today it stops being a file and becomes a website." Set the contract early: everyone leaves with a URL loaded on a phone. Note the agenda bar is different today - 22-42 is "Three demos + SHIP", 42-45 is "Grad". |
| 3-11 | Part 1 · The pre-flight checks | Card "Devtools inspector - the x-ray" (2 min): the DOM is what the browser built, not what you wrote - run the ★ Try it, inspect this page, find an orange playground panel. Card "The W3C validator - zero-mercy proofreading" (3 min): the two rules aloud - fix the FIRST error first, warnings are advice, errors are bugs. Run the 3-bug playground; let the room hunt before showing the answer-key callout (unclosed strong, unclosed li, unclosed p - "all three render fine, which is exactly why the validator exists"). Card "The viewport meta - why phones lie without it" (3 min): phones fake a 980px canvas and shrink; one line fixes it. Show device mode in devtools. This line is why Demo 3's phone moment works - say so. |
| 11-18 | Part 2 · The 6-point audit | The audit-strip SVG first (zoom it): alt, headings, link text, labels, contrast, lang - "you already do 1, 2, 4 and 6 from Sessions 1-4; this audit just makes the habit deliberate." Card "Checks 1-4" (3 min): run the fails-three-checks playground - fix the alt="image", the "click here", and the unwired email label together. Card "Checks 5-6" (2 min): the faint-gray playground, then the WebAIM 4.5:1 rule - "do not trust your eyes on your own monitor." The Real world close: accessibility, SEO, and usability are one honest-markup job wearing three name tags. |
| 18-22 | Part 3 · GitHub Pages from absolute zero | The ship-pipeline SVG (zoom it): laptop folder → repo → Pages switch → live URL. Card "The recipe: account, repo, upload, switch" (4 min): the magic repo name USERNAME.github.io exactly, drag-and-drop upload, Settings → Pages → Deploy from a branch → main. Read the honest-note-about-git callout: real git is its own course; "drag, drop, done." |
| 22-28 | Demo 1 · Validate to zero | Follow along - beats below. |
| 28-33 | Demo 2 · The 6-point audit, live on your page | Build your own - beats below. |
| 33-42 | Demo 3 · SHIP IT | Everyone ships - beats below. The finale. Start it no later than minute 33. |
| 42-45 | Grad | Q&A only if the room is fully shipped. Close on the homework: share the URL somewhere that mildly scares you, and the three deep dives are self-paced dessert - start with 6.1. |

### Demo 1 beats (6 min, everyone follows)

1. Upload index.html to validator.w3.org, Check. Your planted error appears with friends.
2. Model the discipline: read the FIRST error only, note the line number, fix it in VS Code, save.
3. Re-upload, re-check - narrate the collapse: "watch errors caused by the first one vanish without being touched."
4. Repeat to zero. Skim warnings, fix a cheap one if there is one.
5. Point at the tip for anyone drowning: "a 30-error list is usually a 3-mistake file."

Where it goes wrong: someone's list really is long and they freeze. Recovery line: "do not read it all - error 1, fix, re-check. The count will collapse; that is quiz question 2 and it is the professional first move."

### Demo 2 beats (5 min)

1. Alt: find every img, read the alt aloud, rewrite "photo" or "image".
2. Headings: devtools DOM search for h1/h2/h3 - one h1, no skipped levels.
3. Links: read only the link texts - rewrite any "click here" or bare "here".
4. Labels: every input wired with for ↔ id - Session 4's form is the place to look, and the click-test from its Demo 3 still works.
5. Contrast: paste text and background hex from styles.css into WebAIM - 4.5:1 or darken.
6. Lang: confirm `<html lang="en">` survived. "Six for six? You are cleared to ship."

Where it goes wrong: contrast failures cause color grief ("but I love this gray"). Recovery line: "darken it two notches and check again - the checker judges, not me. Faint text disappears on a phone in sunlight, which is exactly where your page is about to live."

### Demo 3 beats (9 min, everyone ships - THE FINALE)

1. GitHub account: sign in or create. Name the URL stake: "your username becomes part of your URL - pick one you are happy saying out loud."
2. New repository, named exactly `USERNAME.github.io`, Public, create. Spell out that USERNAME means their real username - the number-one stumble.
3. "Uploading an existing file" → drag index.html, styles.css, and the images/ folder from the file manager into the browser. Commit - "that is GitHub's word for save."
4. Settings → Pages → Deploy from a branch → main → Save. Copy the URL.
5. The wait: first publish takes minutes. Use it exactly as the page suggests - "grab water, it earns the drama." This is also your buffer for stragglers.
6. Open the URL on the projector. Then the real test: everyone opens THEIR URL on THEIR phone - "not the file, the URL. Your viewport meta from Part 1 is why it reads beautifully." Hold your phone up. Let the room have this moment - do not talk over it.
7. The non-optional last step, verbatim from the page: send the link to someone you like. "The moment someone else's device shows your page, you are a person who ships websites. Welcome to the club - it has no fees and excellent members."

Where it goes wrong: the repo name has a typo (Pages publishes to a subpath or nowhere), the build sits in the wait state, or someone's account creation demands email verification mid-demo. Recovery lines: "check the repo name character by character - USERNAME.github.io, your real username"; "refresh the URL, not your patience"; and for the account-stuck: pair them with a shipped neighbor now, ship theirs in the last minutes or the hallway after - nobody leaves unshipped.

## Never cut

- Demo 3, whole and unhurried - the ship, the phone, the send-to-someone. This is what the six sessions were FOR. If the session were somehow reduced to twelve minutes, it would be three sentences of setup and this demo.
- The viewport meta card - without it the phone moment renders microscopic and the finale deflates into debugging. It is quiz question 1 for a reason.
- Demo 1's first-error-first ritual - it is the difference between a room that validates forever after and a room scared of error lists.
- The magic repo name, said slowly and spelled - USERNAME.github.io exactly. Every minute spent here saves three in Demo 3.

## Cut if long

1. First: Demo 2 shrinks to checks 1 and 5 live (alt and contrast), the other four as tonight's re-run - the page's steps are self-serve and the homework re-validates anyway.
2. Second: Part 1's inspector card compresses to the ★ Try it in thirty seconds - the debugging-order Self-study card carries the depth.
3. Third: Demo 1 drops to fixing YOUR planted error only, their own validation to zero becomes the homework's "make it a reflex" bullet.
4. Never touch Demo 3's slot - if anything, cutting starts EARLY to widen it. In the worst case (wifi crawling, builds slow), Part 2 collapses to the SVG strip plus one sentence per check, and the ship still happens. The page going live on a phone is non-negotiable in every scenario.

## Q&A ammo

- "Is GitHub Pages really free? What's the catch?" - Genuinely free for public static sites - no credit card, no trial clock. The trade: the repo is public and there is no server (which your form already knows). Docs sites, portfolios, and startup landing pages ship on it every day - the page's Real world card is not exaggerating.
- "Do I need to learn JavaScript next?" - Only when you want behavior - apps, interactivity beyond what HTML gives free. The honest path from here: the three deep dives (6.1 shows interactive HTML with NO JavaScript - it will surprise you), more CSS via MDN, then JavaScript if your projects demand it. Plenty of shippable web lives happily in HTML + CSS.
- "Why does my form still not send?" - Correct and expected - GitHub Pages has no server, exactly as Session 4 promised. Wire the action to a mailto or a free form-handling service; that is this week's tinkering, and the form itself was always most of the work.
- "How do I update the site after today?" - Edit locally, re-upload the changed file with the same name - GitHub replaces it. Give it a minute, hard-refresh. The URL never changes. The self-study card "What that name means, and updating later" is the two-minute manual.
- "Can I use a real domain name instead of username.github.io?" - Yes - buy a domain and point it at Pages in the same Settings screen (GitHub's docs call it a custom domain). Ten-dollar-a-year vanity, zero change to your files. Ship on the free URL today; upgrade whenever.
- "Could AI have built this whole site for me?" - It could generate the files - and then you would still need everything from today: validate it, audit it, ship it, and fix it when it breaks. You now read HTML, so AI output is a draft you command rather than a mystery you trust. That was the quiet point of the course.

## Timing reality check

This session historically overruns everywhere EXCEPT where it matters, which is why the run of show starts Demo 3 at minute 33 sharp - GitHub account creation and email verification are the classic sinkholes, and the Pages first-build wait is genuinely unpredictable on venue wifi. The discipline: announce at minute 30 that shipping starts in three minutes regardless of audit state - a page that fails a contrast check but is LIVE beats a perfect page still on a laptop, and the homework re-runs the audit anyway. Part 2 is the safest place to steal time from (the strip SVG plus two playgrounds can compress to four minutes without losing the audit habit). Whatever else happens, the last ten minutes belong to phones lighting up and links being sent - that image is the course's ending, and rooms remember how it ends.
