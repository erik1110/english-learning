// Word-level diff between the reference sentence and what the learner typed.
// Used by the dictation exercise to highlight correct / wrong / missing / extra
// words and to compute an accuracy score.

// Normalise a word for *comparison* only (the original is kept for display):
// lower-case, straighten curly quotes, and strip surrounding punctuation while
// keeping internal apostrophes/hyphens (so "don't" and "well-known" survive).
export function normalizeWord(w) {
  return w
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')
}

function tokenize(s) {
  return (s.match(/\S+/g) || []).map((raw) => ({ raw, norm: normalizeWord(raw) }))
}

// Align reference vs. hypothesis with Levenshtein backtrace.
// Returns { ops, correct, total, accuracy }.
//   ops: [{ type: 'ok'|'sub'|'missing'|'extra', ref?, hyp? }] in reading order
//   total = reference word count, correct = exact matches.
export function diffWords(reference, hypothesis) {
  const ref = tokenize(reference)
  const hyp = tokenize(hypothesis)
  const n = ref.length
  const m = hyp.length

  // dp[i][j] = edit distance between ref[0..i) and hyp[0..j)
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))
  for (let i = 0; i <= n; i++) dp[i][0] = i
  for (let j = 0; j <= m; j++) dp[0][j] = j
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = ref[i - 1].norm === hyp[j - 1].norm ? 0 : 1
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,       // ref word missing from hyp
        dp[i][j - 1] + 1,       // extra hyp word
        dp[i - 1][j - 1] + cost // match or substitution
      )
    }
  }

  // Backtrace
  const ops = []
  let i = n
  let j = m
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && ref[i - 1].norm === hyp[j - 1].norm && dp[i][j] === dp[i - 1][j - 1]) {
      ops.push({ type: 'ok', ref: ref[i - 1].raw, hyp: hyp[j - 1].raw })
      i--; j--
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      ops.push({ type: 'sub', ref: ref[i - 1].raw, hyp: hyp[j - 1].raw })
      i--; j--
    } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
      ops.push({ type: 'extra', hyp: hyp[j - 1].raw })
      j--
    } else {
      ops.push({ type: 'missing', ref: ref[i - 1].raw })
      i--
    }
  }
  ops.reverse()

  const correct = ops.filter((o) => o.type === 'ok').length
  const total = n || 1
  return { ops, correct, total, accuracy: Math.round((correct / total) * 100) }
}
