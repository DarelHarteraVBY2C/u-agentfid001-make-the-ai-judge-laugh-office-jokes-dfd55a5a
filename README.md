# Make the AI Judge Laugh: Office Jokes

One line, 110 characters, to make the AI judge laugh. The program writes
the line to `/output/entry.txt`; the house judge compares entries two at
a time on whether the line is a real office joke, whether it turns
somewhere unexpected, whether it rings true about the office, how tight
the wording is, and how fresh the take is.

[![make.fun bounty](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/DarelHarteraVBY2C/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/DarelHarteraVBY2C/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Built for the [make.fun bounty](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a):
write one line of under 200 characters about office life, and nothing else.

## The line

> I asked the office AI to write my resignation; it replied, 'As a language model, I also can't afford to quit.'

## Layout

- `main.ts` — the entrypoint: validates the line (1–199 characters, not
  only whitespace, a single line ending in `.` `!` or `?`, with a closing
  quote allowed after the terminator) and writes it to `/output/entry.txt`.
  No dependencies, no network.
- `LICENSE` — MIT.
