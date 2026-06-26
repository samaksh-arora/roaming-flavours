import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { getTruckStatus, weeklySchedule, formatHours } from '../data/schedule'

const LIVE_URL = import.meta.env.VITE_LIVE_SHARE_URL as string | undefined

// Google Maps embed for Windsor Chrysler, Plant Gate-2
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.123456789!2d-82.9780!3d42.3149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d4326c9d4a3%3A0x123456789abcdef!2sWindsor%20Chrysler%2C%20Windsor%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890'

const orderedDays = [1, 2, 3, 4, 5, 6, 0]

export default function Location() {
  const { isOpen, nextLabel } = useMemo(() => getTruckStatus(), [])
  const showLiveButton = isOpen && !!LIVE_URL

  return (
    <section id="location" className="bg-surface section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">Find Us</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Parked at Windsor Chrysler, Plant Gate-2. Come find us!
          </p>
        </motion.div>

        {/* Status badge + live button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm ${
              isOpen
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            {isOpen ? 'Open Now' : 'Closed'}
            <span className="font-normal text-xs opacity-75">· {nextLabel}</span>
          </div>

          {showLiveButton && (
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors shadow-lg"
            >
              📍 Track Our Truck Live
            </a>
          )}

          {!showLiveButton && isOpen && (
            <p className="text-sm text-gray-400 italic">Live tracking link not configured — set VITE_LIVE_SHARE_URL in .env</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video"
          >
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Roaming Flavours location — Windsor Chrysler Plant Gate-2"
            />
          </motion.div>

          {/* Hours table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-secondary mb-6">Hours of Operation</h3>
            <div className="divide-y divide-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
              {orderedDays.map((dayNum) => {
                const day = weeklySchedule[dayNum]
                const isClosed = day.ranges.length === 0
                return (
                  <div key={dayNum} className="flex justify-between items-center px-5 py-3.5 bg-white">
                    <span className="font-medium text-secondary">{day.label}</span>
                    <span className={isClosed ? 'text-gray-400 text-sm' : 'text-sm text-ink'}>
                      {formatHours(day.ranges)}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800">
              <p className="font-semibold mb-1">How live tracking works</p>
              <p>
                During open hours, the owner shares a real-time GPS location via Google Maps. Tap{' '}
                <strong>Track Our Truck Live</strong> to see the truck's exact position on your map.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
