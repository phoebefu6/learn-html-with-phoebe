# Presenter notes - Session 1 · Your first page, in a plain text file

Instructor-only cues for the student page `courses/01-your-first-page.html`. The page carries the full content; you present the Live cards and run the three demos. Self-study cards ("Block vs inline - the two behaviors", "What browsers forgive (and why you shouldn't lean on it)", "Comments - notes the browser skips") are homework depth - point at them, never present them.

## Preflight (before people arrive)

- Tab 1: the session page, served so the orange playgrounds render live. All cards collapsed - "Expand all" is the handout view, not the presenting view.
- Tab 2: a blank VS Code window, font size cranked so the back row reads code. Demo 1 lives here.
- A scratch folder on your desktop, empty and visible in Finder/Explorer, ready to become `my-site` on screen.
- Confirm file extensions are VISIBLE in your file manager - the `.html.txt` trap in Demo 1 is invisible otherwise, and you want to show the fix, not suffer it.
- Click "Projector zoom" on the page toolbar before anyone walks in.
- Learner prerequisites: none. This is Session 1 - assume some people have never seen a text editor.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Welcome | Land Part 0's promise verbatim: a real page about you, open in a real browser, before the session ends - and by Session 6 it lives on the internet. Point at the legend pills: solid = today, light = homework, orange panels are editable. |
| 3-10 | Part 1 · Elements | The anatomy SVG first (zoom it): opening tag + attribute, content, closing tag. Card "Tags wrap meaning around text" (3 min): type in the grumpy-cat playground live, add a second p. Card "Attributes - settings on the opening tag" (2 min): change the MDN href, say the quote habit out loud - "quoting is the seatbelt". Card "Nesting - boxes inside boxes, never overlapping" (2 min): the one law, close inner before outer. |
| 10-17 | Part 2 · The skeleton | The skeleton SVG (zoom): head = label on the box, body = what is in the box. Card "The five lines, one by one" (3 min): doctype, html lang, head, body, meta charset - linger on charset ("Phoebe's café can render as garbage"). Run the ★ Try it: View Page Source on this very page, find the doctype together. |
| 17-23 | Part 3 · Headings + paragraphs | Card "The heading ladder, used honestly" (3 min): one h1, never skip down, headings label what follows - it is an outline, not a font-size menu. Card "Paragraphs, line breaks, and collapsing whitespace" (2 min): the wild-spacing playground is the surprise moment, let it land. |
| 23-31 | Demo 1 · Birth of index.html | Follow along - beats below. |
| 31-36 | Demo 2 · Outline your page like a pro | Build your own - beats below. |
| 36-40 | Demo 3 · Break it on purpose | Build your own - beats below. |
| 40-45 | Q&A | Close on the cheat sheet ("pin this") and the homework - especially "bring a page with messy headings to Session 2". Run the three quiz questions as a room vote if time allows. |

### Demo 1 beats (8 min, everyone follows)

1. Show VS Code, name why: TextEdit and Word secretly reformat files - "the one wrong tool for this job".
2. Create the `my-site` folder on screen, then a new file named exactly `index.html` - lowercase, no spaces. Say why the name is special: it is what servers show by default, which pays off on ship day.
3. Type the skeleton from memory, narrating each line. Typing builds the muscle; do NOT paste.
4. Body: h1 with your name, one honest p. Save.
5. Drag the file onto the browser. Pause - this is the "the file became a page" moment. Point at the tab: there is the title.
6. The loop: edit → save → reload. Change the h1, save, reload. "That 3-second loop is web development."

Where it goes wrong: someone saves as `index.html.txt` and the browser shows raw text, or they forget to save before reloading. Recovery line: "the page's own tip callout covers this - check the real extension and check you saved; those two cover 90% of first-page confusion."

### Demo 2 beats (5 min)

1. Three h2 sections under the h1: About, Projects (or Interests), Contact - one placeholder paragraph each.
2. Two h3 entries under Projects, keeping the ladder honest: h1 → h2 → h3, no skipping.
3. The comment to future-you: `<!-- Session 3: photo goes here -->` - a promise the course keeps.
4. Save, reload, admire. Connect to the Real world card: this is the same outline discipline as a good doc or deck.

Where it goes wrong: someone nests an h2 inside a p or forgets a closing tag and the page looks "swallowed". Recovery line: "suspect an unclosed tag first - that is literally the next demo."

### Demo 3 beats (4 min)

1. Delete a closing `</strong>` in any playground - watch bold leak forward. The browser guessed, and guessed wrong.
2. Overlap two elements: `<p><strong>text</p></strong>`. Still renders - forgiveness hiding a mistake.
3. Break an attribute: unquote an href with a space. The link goes somewhere strange.
4. Fix all three or hit Reset. Name the deliverable: "when a page looks weird, suspect an unclosed tag or unquoted attribute first."

## Never cut

- Demo 1 end to end - the file-becomes-a-page moment and the edit-save-reload loop ARE the session. Everything else is decoration on this.
- The whitespace-collapses playground in Part 3 - without it, beginners fight the browser with blank lines for weeks.
- Demo 3's break-it-on-purpose - HTML fails gently, and seeing that once removes the fear that stops people practicing alone.
- The heading-ladder rules (one h1, never skip down) - Sessions 2-6 and the Session 6 audit all build on this habit.

## Cut if long

1. First: Demo 2 shrinks to "add the three h2s now, h3s and the comment are homework" - the steps on the page are self-serve.
2. Second: the "Attributes" card compresses to the quote-habit callout alone - Demo 1 and Session 2 re-teach attributes in context.
3. Third: Part 3's paragraphs card drops to just the whitespace playground - br and hr are on the page for later reading.
4. Never compress Part 2's skeleton below 5 minutes - it is the muscle Demo 1 depends on. Block vs inline and browser-forgiveness questions get the redirect: "that exact Self-study card is your homework."

## Q&A ammo

- "Is HTML a programming language?" - No loops, no logic, no math - it is a markup language: it labels what content IS. That is not a demotion; it is why you can learn the whole grammar in one session. The logic layer (JavaScript) is optional and separate.
- "Why not just use Wix, Notion, or Squarespace?" - Same answer as calculators vs arithmetic: those tools generate this exact HTML for you. Reading it means you can inspect any page, fix any template, and hand-tune any AI-generated artifact instead of regenerating and praying - the Real world card in Part 1 says exactly this.
- "Can AI write this for me?" - Yes, fluently - and this course is why that is good news for you. AI writes HTML; you now review it. Every Claude artifact and dashboard export is this grammar, and the person who reads it owns the output.
- "Why VS Code and not Word or Google Docs?" - Word saves formatting instructions, not plain text - your file stops being HTML. Any plain-text editor works; VS Code is free and what we reference all course.
- "Do I need to install a server or anything?" - Nothing, all course. A text file and a browser, both already on your machine. Session 6 ships without a command line too.
- "Why does the page look so plain?" - Because the browser is choosing the looks. Session 5 is the makeover; until then we build honest structure it can dress.

## Timing reality check

This session historically overruns in Demo 1, not the concepts - a room of first-timers creating folders and files takes double what you expect, and one hidden `.html.txt` extension can eat three minutes alone. The fallback ladder: shrink Demo 2 to just the three h2s (rest is homework), then run Demo 3 on your screen only with the room calling out what broke. Part 1 also tempts you to linger because the playgrounds are fun - cap it at 10 minutes; the demos are where the belief that "I can do this" actually forms, and this session exists to create exactly that belief.
