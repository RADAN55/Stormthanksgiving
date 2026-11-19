# Thanksgiving Around the World — Interactive EL Module (Grades 9–12)

A single-file, Chromebook-friendly module for English learners, built under the **Storm Studio** model at Laurel High School (Laurel, MS). Open `index.html` or the GitHub Pages address — no installation, no accounts.

**Live module:** https://radan55.github.io/Stormthanksgiving/  
**Storm Board (agenda + Gratitude Trail):** https://radan55.github.io/Stormthanksgiving/board.html  
**Conversation cards (PDF, B&W):** [thanksgiving_conversation_cards.pdf](thanksgiving_conversation_cards.pdf)

## What's inside
| Tab | Activity |
|---|---|
| Home | Essential question, can-do statements by lane, progress bar |
| 1 Words | 12 flashcards (EN/ES, read-aloud) + matching game |
| 2 Around the World | 9 countries (USA, Puerto Rico, Canada, Brazil, Germany, Japan, South Korea, China, Liberia) — readings at 3 levels, vocabulary pop-ups, 3 auto-graded questions each |
| 3 Compare | Same/Different sort, two-country comparison table, partner frames |
| 4 Listen & Speak | Two-play listening passage with 5 questions, partner interview, self-check |
| 5 Write | Lane-specific sentence frames, live word/vocabulary counter, checklist, copy button |
| ELPA21 Practice | Reading test (8 items: MC, select-all, vocabulary, two-part evidence, hot text, classify, sequence) + 4 writing task types with a 0–4 scoring guide |
| Arcade | Memory Match (EN↔ES), Word Scramble, 60-second Flag Dash |
| Color | Three color-by-number scenes with a bilingual color key |
| Quiz | 10 auto-graded questions |
| Teacher | Content/language objectives, MS ELP (ELPA21) + MS CCRS ELA standards, can-dos, 3-day × 90-minute pacing, differentiation, rubric, answer keys |

## Storm Board
`board.html` is the projector agenda for the 3-day plan: Day 1–3 selector, timed steps with a countdown (links open the matching module tab), bell ringer and exit ticket, the posting block (content/language objectives, MS CCRS ELA, MS ELP/ELPA21, can-dos by lane, words of the day), and the **Gratitude Trail** — a winding path where every entry becomes a leaf; it persists on the device that projects it.

## Features
- **Support level switch** — Emerging (ELPA21 L1–2), Progressing (L3–4), Challenge (L4–5) changes every reading, frame, and target.
- **ES apoyo** — Spanish support toggle (cognate-rich vocabulary).
- **🔊 Read-aloud** — uses the browser's built-in voices (Web Speech API); English and Spanish.
- **Progress** saved per device with `localStorage`.
- No external dependencies except Google Fonts (works offline without them).

## Standards
MS ELP Standards 1–4, 7–10 (ELPA21) · MS CCRS ELA RI.9-10.1/2/4/9, W.9-10.2/4/9, SL.9-10.1/2/4, L.9-10.4/6

## Editing
All content lives in plain JavaScript objects near the top of the `<script>` block in `index.html` (`VOCAB`, `COUNTRIES`, `QUIZ`, `R_ITEMS`, `W_TASKS`, …). Edit the text, save, refresh.

© 2026 Richard A. Daniel, M.Ed. · EL Publishing · For classroom use.
