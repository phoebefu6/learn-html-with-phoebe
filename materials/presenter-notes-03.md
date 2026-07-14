# Presenter notes - Session 3 · Pictures and structure: media plus semantic layout

Instructor-only cues for the student page `courses/03-pictures-and-structure.html`. You present the Live cards and run the three demos. Self-study cards ("Where files live, which format, and whose picture it is", "div, span, and the outline nuances") are homework depth - point at them, never present them.

## Preflight (before people arrive)

- Tab 1: the session page, served, cards collapsed, "Projector zoom" on.
- Tab 2: VS Code with your demo `index.html` - now with nav, real text, links, and the finished head from Session 2.
- A demo photo ready on your desktop, pre-renamed to something clean like `phoebe-portrait.jpg` - Demo 2 drops it into a fresh `images/` folder on screen. Know its real pixel size.
- Confirm devtools opens fast and you know where the Accessibility panel lives in YOUR browser (Chrome: a tab near Styles; Firefox: its own top-level tab) - fumbling for it kills Demo 3.
- Verify venue wifi reaches picsum.photos - Part 1's playgrounds use it for placeholder images.
- Learner prerequisites: their linked-up page from Session 2, and the photo the homework asked them to bring. Have a spare openly-licensed image URL for anyone who forgot.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Welcome | Part 0's framing: the page can talk but "it is still a text file that looks like one, and under the hood it is one long body with no map." Two upgrades today: a face and a spine. |
| 3-11 | Part 1 · Images done right | Card "img - src, alt, width, height" (3 min): run the picsum playground, resize to 150x100. Say why size attributes matter: "skip the size and the page jumps around while loading - the layout shift you feel on janky news sites." Card "The alt discipline - describe function, not filename" (3 min): read the Weak alt vs Honest alt boxes aloud; land the two rules - decorative images get alt="" empty but present, never start with "image of". The Real world beat for data folks: alt text is your chart's caption for machines; email clients block images by default. Card "figure and figcaption" (2 min): alt describes, caption comments - two different jobs. |
| 11-16 | Part 2 · Audio and video | Card "video - controls, source elements, fallback" (3 min): walk the playground shape - controls, poster, sources best-to-safest, plain fallback last. Be upfront the demo src files are made up, so the room sees the empty player shell by design. Card "audio - the same idea, minus the picture" (2 min): "video's little sibling." The Real world card's line for the data crowd: multi-source is graceful degradation, the same thinking as good API design. |
| 16-23 | Part 3 · Semantic layout | The region-map SVG first (zoom it): header, nav, main, aside, footer - "these are landmarks: screen-reader users jump straight between them." Card "header, nav, main, footer - the big four" (3 min): run the full-page playground, click the nav links to prove Session 2's anchors survive. The one hard rule of the day, said twice: exactly one main per page. Card "section vs article vs div - the decision rules" (3 min): the three questions in order - self-contained elsewhere = article, themed chunk with heading = section, just a box = div, "no meaning, no shame." |
| 23-31 | Demo 1 · Wrap your page in regions | Follow along - beats below. |
| 31-36 | Demo 2 · Your photo, honestly captioned | Build your own - beats below. |
| 36-40 | Demo 3 · The landmark tour | Follow along - beats below. |
| 40-45 | Q&A | Close on the cheat sheet and the homework - especially "bring a table of data you actually care about to Session 4." |

### Demo 1 beats (8 min, everyone follows)

1. Frame it first: "nothing new gets written today - the existing content gets wrapped."
2. Wrap the h1 and nav list in `<header>`. Distinguish it from Session 1's head out loud - header is visible content.
3. Wrap everything else in a single `<main>` - "one per page, this is it."
4. Sections: wrap each h2 block, move the id from the heading onto the section - `<section id="about">`. Click the nav to prove anchors keep working: "ids are ids."
5. `<footer>` after main: name, year, how to reach you.
6. Save, reload - the page looks identical, and that is CORRECT. "Semantics change what the page IS, not how it looks. Session 5 pays this off when regions become styling hooks."
7. Point at the indentation-check callout: three new nesting levels, re-indent now - "thirty seconds now, or a headache every session after."

Where it goes wrong: an unclosed section swallows everything after it, or main accidentally wraps the footer. Recovery line: "count your closing tags from the inside out - and remember main never holds the header or footer."

### Demo 2 beats (5 min)

1. Create the `images` folder next to index.html. Drop in the photo, renamed clean: lowercase, no spaces - "servers are case-sensitive and spaces break URLs."
2. The img in the About section: src, honest alt, real width and height from the file manager's info panel.
3. Coach the alt live: "Phoebe smiling on a mountain trail" beats "photo of me" - what would a visitor need if the photo never loaded?
4. Wrap in figure with a visible figcaption one-liner. Save, reload.

Where it goes wrong: broken image icon - path or filename spelling, exactly like Session 2's link debugging. Recovery line straight from the page's Real world card: "src means from where THIS file sits - the same reason your pandas read_csv breaks when you run the notebook from a different directory."

### Demo 3 beats (4 min, everyone follows)

1. Right-click the page, Inspect, find the Accessibility panel.
2. Read the tree: header appears as banner, nav as navigation, main as main, footer as contentinfo - "those are the landmarks a screen-reader user jumps between."
3. Inspect a plain div on any other site and compare: no landmark, no name. "That is the difference you built today."
4. Find their image in the tree, confirm the alt is what it announces - and if anyone used alt="", show that image vanish from the tree entirely, as designed.

## Never cut

- Demo 1's "the page looks identical and that is correct" beat - without saying it explicitly, half the room concludes semantics did nothing and quietly stops caring.
- The alt discipline card with the Weak vs Honest contrast - it is check 1 of Session 6's audit, and this is the only session that teaches it properly.
- Demo 3 the landmark tour - it is the proof that semantics are real, not ceremony, and it converts skeptics in ninety seconds.
- The one-main-per-page rule and the section/article/div three questions - Session 4 and every page they ever build lean on these.

## Cut if long

1. First: Part 2 audio compresses to one sentence ("same pattern, no picture") - the optional homework bullet records the voice memo with the card as the manual.
2. Second: Part 2 video shrinks to walking the playground shape without editing it - the src files are fake anyway, and the pattern reads well from the page.
3. Third: Demo 2's figure/figcaption wrap becomes homework - the img with honest alt is the non-negotiable core; the homework already adds two more figures.
4. Never cut Demo 1 or Demo 3 - the spine and its proof are the session. Formats, licensing, and file housekeeping absorb into "Where files live, which format, and whose picture it is": "that card is your homework before you add more images."

## Q&A ammo

- "Why does my page look exactly the same after all that wrapping?" - Because semantics change meaning, not looks - that is the design. Machines see a different page: Demo 3 just showed you banner, navigation, main, contentinfo. Session 5 turns those regions into styling hooks.
- "Which image format should I use?" - The self-study table in one breath: jpg for photos, png for screenshots and transparency, webp as the modern all-rounder, svg for logos and diagrams. When unsure, jpg for photos and png for everything else gets you through this course.
- "Can I just use images I find on Google?" - Found is not free. Safe sources: photos you took, images you made, openly licensed libraries like Unsplash, Pexels, Wikimedia Commons - check each license. Your page is public from Session 6; build the habit now.
- "Div vs section - I still can't tell." - Ask the page's own question: would a screen-reader user want to jump to this? Yes: semantic element. No: div, no shame. And wrong semantics is worse than no semantics - ten navs is noise, not structure.
- "Why did the video player show up empty?" - By design - the demo src files are made up, so you get the shell. Point source at a real .mp4 on your machine and it plays. The shape is the lesson.
- "Do AI tools write semantic HTML?" - Increasingly yes, but they over-div under pressure. Now you can audit them: open the accessibility tree on generated output and check for banner, navigation, main. Two minutes, same as Demo 3.

## Timing reality check

This session historically overruns in Demo 2, not the wrapping - room-wide photo wrangling (finding the file, renaming it, discovering it is 4000 pixels wide and HEIC format) eats minutes fast. The fallback: demo YOUR photo end to end, hand out the spare placeholder URL for anyone stuck, and make their own photo homework. Part 3's section-vs-article discussion also invites philosophical spirals from the data crowd - answer twice, then redirect to the when-in-doubt callout and move on. Whatever slips, land Demo 3 before Q&A: the accessibility tree is the moment this session's abstractions become visible, and it sets up Session 6's audit.
