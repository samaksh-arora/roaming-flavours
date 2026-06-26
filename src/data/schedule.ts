export type TimeRange = { open: number; close: number } // minutes since midnight

export type DaySchedule = {
  label: string
  ranges: TimeRange[]
}

// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
export const weeklySchedule: Record<number, DaySchedule> = {
  0: { label: 'Sunday', ranges: [] },
  1: { label: 'Monday', ranges: [{ open: 17 * 60, close: 20 * 60 + 30 }] },
  2: { label: 'Tuesday', ranges: [{ open: 17 * 60, close: 20 * 60 + 30 }] },
  3: { label: 'Wednesday', ranges: [{ open: 17 * 60, close: 20 * 60 + 30 }] },
  4: { label: 'Thursday', ranges: [{ open: 17 * 60, close: 20 * 60 + 30 }] },
  5: { label: 'Friday', ranges: [{ open: 17 * 60, close: 20 * 60 + 30 }] },
  6: {
    label: 'Saturday',
    ranges: [
      { open: 10 * 60, close: 12 * 60 + 30 },
      { open: 17 * 60, close: 20 * 60 + 30 },
    ],
  },
}

function minutesNow(): number {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

export function getTruckStatus(): { isOpen: boolean; nextLabel: string } {
  const now = new Date()
  const day = now.getDay()
  const mins = minutesNow()
  const todayRanges = weeklySchedule[day].ranges

  for (const range of todayRanges) {
    if (mins >= range.open && mins < range.close) {
      const closeH = Math.floor(range.close / 60)
      const closeM = range.close % 60
      const period = closeH >= 12 ? 'PM' : 'AM'
      const h = closeH > 12 ? closeH - 12 : closeH
      const m = closeM === 0 ? '' : `:${String(closeM).padStart(2, '0')}`
      return { isOpen: true, nextLabel: `Closes at ${h}${m} ${period}` }
    }
  }

  // Find next open time (search up to 7 days ahead)
  for (let offset = 0; offset <= 7; offset++) {
    const d = (day + offset) % 7
    const ranges = weeklySchedule[d].ranges
    for (const range of ranges) {
      if (offset > 0 || range.open > mins) {
        const openH = Math.floor(range.open / 60)
        const openM = range.open % 60
        const period = openH >= 12 ? 'PM' : 'AM'
        const h = openH > 12 ? openH - 12 : openH
        const m = openM === 0 ? '' : `:${String(openM).padStart(2, '0')}`
        const dayLabel = offset === 0 ? 'today' : offset === 1 ? 'tomorrow' : weeklySchedule[d].label
        return { isOpen: false, nextLabel: `Opens ${dayLabel} at ${h}${m} ${period}` }
      }
    }
  }

  return { isOpen: false, nextLabel: 'Check back soon' }
}

export function formatHours(ranges: TimeRange[]): string {
  if (ranges.length === 0) return 'Closed'
  return ranges
    .map((r) => {
      const fmt = (m: number) => {
        const h = Math.floor(m / 60)
        const min = m % 60
        const p = h >= 12 ? 'PM' : 'AM'
        const hh = h > 12 ? h - 12 : h === 0 ? 12 : h
        return `${hh}${min ? `:${String(min).padStart(2, '0')}` : ''} ${p}`
      }
      return `${fmt(r.open)} – ${fmt(r.close)}`
    })
    .join(', ')
}
