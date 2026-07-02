import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { getTruckStatus, weeklySchedule, formatHours } from '../data/schedule'

const LIVE_URL = import.meta.env.VITE_LIVE_SHARE_URL as string | undefined

const MAP_EMBED =
  'https://maps.google.com/maps?q=Windsor%20Chrysler%2C%20Windsor%2C%20ON&t=&z=15&ie=UTF8&iwloc=&output=embed'

const orderedDays = [1, 2, 3, 4, 5, 6, 0]

export default function Location() {
  const { isOpen, nextLabel } = useMemo(() => getTruckStatus(), [])
  const showLiveButton = isOpen && !!LIVE_URL

  return (
    <section id="location" className="bg-secondary py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-9"
        >
          <h2 className="font-display text-[clamp(34px,7vw,52px)] text-white font-extrabold mb-3">Find Us</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm border ${
              isOpen
                ? 'bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.25)] text-[#10B981]'
                : 'bg-[rgba(192,57,43,0.1)] border-[rgba(192,57,43,0.25)] text-white'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#10B981] animate-pulse' : 'bg-primary'}`} />
            {isOpen ? 'Open Now' : 'Closed'}
            <span className="font-normal text-xs text-white/50">· {nextLabel}</span>
          </div>

          {showLiveButton && (
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-lg"
            >
              📍 Track Our Truck Live
            </a>
          )}
        </motion.div>

        <div className="grid gap-7 items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[20px] overflow-hidden border border-white/[0.07] aspect-video"
          >
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Roaming Flavours location map"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-5">Hours of Operation</h3>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              {orderedDays.map((dayNum, i) => {
                const day = weeklySchedule[dayNum]
                const isClosed = day.ranges.length === 0
                return (
                  <div
                    key={dayNum}
                    className={`flex justify-between px-[18px] py-[13px] ${i % 2 === 0 ? 'bg-white/[0.03]' : ''} ${
                      i < orderedDays.length - 1 ? 'border-b border-white/[0.05]' : ''
                    }`}
                  >
                    <span className="text-sm font-medium text-white">{day.label}</span>
                    <span className={`text-[13px] ${isClosed ? 'text-white/[0.22]' : 'text-white/50'}`}>
                      {formatHours(day.ranges)}
                    </span>
                  </div>
                )
              })}
            </div>

            {!showLiveButton && (
              <div className="mt-4 px-[18px] py-4 rounded-2xl bg-accent/[0.07] border border-accent/[0.15]">
                <p className="text-[13px] font-semibold text-accent mb-1.5">Live tracking</p>
                <p className="text-[13px] text-white/[0.38] leading-[1.65]">
                  {isOpen
                    ? 'Live tracking link not configured for this shift — follow us on Instagram for updates.'
                    : 'During open hours, follow us on Instagram for real-time location updates from the crew.'}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
