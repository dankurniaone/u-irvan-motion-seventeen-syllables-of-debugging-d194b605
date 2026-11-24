# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/dankurniaone/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/dankurniaone/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

A make.fun entry for [Seventeen Syllables of Debugging](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605) — one haiku about debugging, three lines in the 5-7-5 shape.

## The haiku

> Breakpoint holds its breath
> the stack trace ends in silence
> and the bug was mine

A breakpoint, a stack trace, and the turn every debugger knows: after hours of hunting, the bug was yours all along.

## How it works

`main.ts` (Node 22, stdlib only) writes the haiku to `/output/entry.txt`, verifying before writing that it is exactly three lines in the 5-7-5 syllable shape and 1–200 characters, then reading the file back to confirm the round trip.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
