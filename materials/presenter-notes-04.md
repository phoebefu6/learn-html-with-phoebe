# Presenter notes - Session 4 · Rows and inputs: tables and forms

Instructor-only cues for the student page `courses/04-tables-and-forms.html`. You present the Live cards and run the three demos. Self-study cards ("When a table beats a list, and table smells", "fieldset, autocomplete, datalist") are homework depth - point at them, never present them. The masthead chip says it: this is "Data folks' favorite session" - lean into the dataframe and pipeline framing throughout.

## Preflight (before people arrive)

- Tab 1: the session page, served, cards collapsed, "Projector zoom" on.
- Tab 2: VS Code with your demo `index.html` - regions wrapped, photo in place from Session 3.
- Have your own 3-4 row project list ready to type into Demo 1's table - real names, real years, real statuses. Placeholder rows on YOUR screen give the room permission to be lazy.
- Rehearse the browser's validation bubbles once: know what YOUR browser shows when Send is clicked on an empty required field - Demo 2's payoff moment.
- Learner prerequisites: their page from Session 3, plus the homework ask - one table of data they actually care about (a CSV, a spreadsheet corner, a league standing). That becomes their Demo 1 content.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Welcome | Part 0's hook for this room: "a table element is a tiny dataset, and a form is a tiny data-collection pipeline - schema, types, validation and all." Tables show data, forms collect it. |
| 3-10 | Part 1 · Tables | Card "Build one from four elements" (3 min): table wraps, tr rows, td data, th headers - "read it inside out: cells sit in rows, rows sit in the table." Add the JavaScript row live. Two rules aloud: th is not "bold td", and every row carries the same cell count - "one missing td shifts everything after it." Card "The accessible upgrade: caption, thead, scope" (3 min): the trio - caption first inside table, thead/tbody/tfoot, scope col and row. Tell the 1998 horror story from the Real world callout at full theatrical value, then the iron rule: tables hold tabular data, never layout. |
| 10-15 | Part 2 · Reading tables like a data person | The anatomy SVG (zoom it): caption on top, thead announced first, scope arrows. Card "A metrics table, done properly" (3 min): the pipeline-health playground - orders_daily, events_stream, crm_sync - is home turf for this room; change a status to failed, point at tfoot totals. Name the payoff from the self-study card in one line: well-structured tables are what makes pandas.read_html() feel like magic. |
| 15-23 | Part 3 · Forms | Card "The form element - an envelope with an address" (2 min): action = where, method = how, get in the URL vs post in the body. Read the honest part verbatim: GitHub Pages has no server; today we build the form, Session 6 wires the destination. Card "label + for - THE accessibility habit" (2 min): run the playground, click the WORDS not the boxes - one wire, three jobs. The placeholder-is-not-a-label callout aloud. Card "The input types tour" (2 min): the radio playground - shared name = one question; give one radio a different name and watch it defect. Card "Validation - the browser does the work" (2 min): required, type="email", min/max - "zero code, error bubbles in the visitor's own language." |
| 23-31 | Demo 1 · A real table on your page | Follow along - beats below. |
| 31-38 | Demo 2 · A contact form that validates itself | Build your own - beats below. |
| 38-41 | Demo 3 · The label audit | Build your own - beats below. |
| 41-45 | Q&A | Close on the cheat sheet and the homework - especially "bring your page with table and form in place to Session 5 - it is the before photo. Session 5 is the makeover." |

### Demo 1 beats (8 min, everyone follows)

1. In the Projects section, start the table with a caption: "Things I have built" or "My skills."
2. thead with four `th scope="col"` headers: Name, What it is, Year, Status.
3. tbody, 3-4 rows: first cell of each row a `th scope="row"` with the project name, rest td.
4. The data-folks push, straight from step 4: make it the REAL project list - the dashboard, the pipeline, the model. "This page becomes your portfolio in Session 6; real rows beat placeholder rows."
5. Save, reload - and pre-empt the disappointment: "unstyled tables look austere - resist fixing that with markup. Session 5 dresses it properly."

Where it goes wrong: the shifted grid - one row short a cell and everything after slides left. Recovery line, straight from the page's tip: "count cells per row - a th counts as a cell. One missing td shifts everything after it left by one column."

### Demo 2 beats (7 min)

1. Open `<form action="#" method="post">` in the Contact section - "the # is an honest placeholder address; Session 6 gives it a real one."
2. Three labeled inputs: Name (text, required), Email (type="email", required), a textarea for the message. Every input gets an id, every label the matching for - no exceptions, Demo 3 will audit this.
3. The select: "How did you find me?" with 3-4 options - LinkedIn, GitHub, search, a friend.
4. `<button>Send</button>`, save, reload - then the payoff: click Send with everything empty and let the browser refuse politely, in the system language, for free. Pause for the reaction.
5. The honest check, said plainly: "it validates but does not send - there is no server behind it. That is correct and expected until Session 6."

Where it goes wrong: the form "does not validate" because an input lost its required attribute, or someone's browser autofilled the fields so nothing is empty. Recovery line: "clear the autofill and check required survived - the browser only guards doors you told it to guard."

### Demo 3 beats (3 min)

1. Click the TEXT of every label - the word "Name", not the box.
2. Focus jumps in? Wired. Nothing? That for/id pair is broken - typo, missing id, or duplicate id.
3. Fix every dead label, re-click until all jump. Then the flex, from the page's Real world card: "accessibility auditors literally do this exact click-test on client sites - you now perform a professional audit technique after four HTML lessons."

## Never cut

- The iron rule with the 1998 horror story - "tables hold tabular data, never layout" is the single most-violated rule by beginners and AI generators alike, and the story is what makes it stick.
- Demo 2's click-Send-empty moment - free browser validation is the biggest "wait, no code?" surprise of the course; it converts the skeptics.
- Demo 3 the label audit - three minutes, reusable for life, and it is check 4 of Session 6's audit.
- The honest server truth (form validates but does not send) - skip it and Session 6 opens with a room that thinks their form has been broken for a week.

## Cut if long

1. First: Part 2 shrinks to the SVG walkthrough alone - the pipeline-health playground reads well solo, and the when-a-table-beats-a-list logic lives in its Self-study card as homework.
2. Second: the input-types tour compresses to the table on the page plus one sentence on radios sharing a name - the playground stays for self-study.
3. Third: Demo 1 drops to two rows live, remaining rows homework - the homework already asks for four plus a tfoot.
4. Never cut Demo 2 or Demo 3 - the form and its audit are the session's spine. fieldset, autocomplete, and datalist absorb into their Self-study card, which the homework explicitly assigns before the radio-group task.

## Q&A ammo

- "Why not build my layout with a table? It works." - It renders, but screen readers announce it as data ("row 1 of 47, column 3...") and every redesign means rebuilding every page - that is the 1998 story. Side-by-side placement is CSS, next session.
- "Where does the form data actually GO?" - Today, nowhere - action="#" is an honest placeholder. Receiving data needs a server; GitHub Pages has none. Session 6 wires a mailto or a free form service. Building the form itself is most of the work anyway.
- "Is browser validation enough for a real product?" - Front line, not the whole army. It stops honest mistakes; anyone can bypass it. Real products validate again on the server - same principle as validating data at the warehouse boundary, not just in the entry form.
- "Can I scrape HTML tables with pandas?" - Yes - pandas.read_html() eats well-structured tables for breakfast, and now you know exactly what well-structured means: thead, tbody, scope. Bad markup is why scraping sometimes hurts.
- "placeholder looks cleaner than labels - why not just placeholders?" - Placeholder vanishes the moment typing starts; a form of only placeholders becomes a memory test half-filled. Label says what the field IS, always visible. Hint, not label - the callout's exact words.
- "Do AI form builders get labels right?" - Mixed record. Run Demo 3's click-test on anything generated - it takes three minutes and catches the classic miss (labels present but not wired with for/id).

## Timing reality check

This session historically overruns in Demo 1 step 4 - "make it your REAL project list" turns typing practice into a career-reflection exercise, and data folks will silently redesign their whole portfolio in the table. Cap it: two real rows live, the rest homework. Part 3 is also four Live cards deep - the densest concept block of the course - so keep each card to its posted minutes and let the playgrounds do the talking. Protect Demo 2's empty-Send moment and Demo 3 at all costs: validation-for-free and the label click-test are the two beats people quote back weeks later, and both set up Session 6 directly.
