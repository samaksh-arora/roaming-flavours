import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-secondary text-white section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Windsor's Roaming Kitchen
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Roaming Flavours was born out of a love for bold, unpretentious food. We hit the streets of Windsor,
            ON with a menu built around crispy, satisfying bites you can hold in your hands — no fuss, all flavour.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Find us parked at Windsor Chrysler, Plant Gate-2 most evenings. Whether you're grabbing a quick bite
            on your break or chasing down the truck on a Saturday morning — we're here for it.
          </p>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="font-display text-3xl font-bold text-accent">5+</p>
              <p className="text-gray-400 text-sm mt-1">Menu items</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">6</p>
              <p className="text-gray-400 text-sm mt-1">Days a week</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-accent">1</p>
              <p className="text-gray-400 text-sm mt-1">Passionate crew</p>
            </div>
          </div>
        </motion.div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-primary/30 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <p className="text-8xl mb-4">🚚</p>
              <p className="font-display text-2xl font-bold text-white">Roaming Flavours</p>
              <p className="text-gray-400 mt-2">Windsor, ON</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent flex items-center justify-center shadow-xl">
            <span className="text-4xl">🌶️</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
