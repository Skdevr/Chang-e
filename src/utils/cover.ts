const HUES = [258, 246, 224, 212, 272, 236]

function hash(input: string): number {
  let h = 2166136261
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export type Cover = {
  background: string
  accent: string
  seed: number
}

export function coverFor(title: string): Cover {
  const seed = hash(title)
  const hue = HUES[seed % HUES.length]
  const shift = (seed >> 3) % 26
  const accent = `hsl(${hue} 85% 72%)`
  return {
    seed,
    accent,
    background: `radial-gradient(120% 90% at 20% 0%, hsl(${hue} 62% 34% / 0.85) 0%, transparent 62%), linear-gradient(168deg, hsl(${hue + shift} 40% 18%) 0%, #0b0d13 78%)`,
  }
}

export function initials(title: string): string {
  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}
