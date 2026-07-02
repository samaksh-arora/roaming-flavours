import { motion } from 'framer-motion'
import FallbackImage from './FallbackImage'

const HEADING = "Windsor's Roaming Kitchen"

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.065 } },
}

const wordItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="bg-secondary overflow-hidden py-24 px-6">
      <div className="max-w-[1100px] mx-auto grid gap-y-16 gap-x-20 items-center [grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]">
        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={wordContainer}
            className="font-display text-[clamp(34px,6vw,52px)] leading-[1.08] text-white font-extrabold mb-7 text-center"
          >
            {HEADING.split(' ').map((word, i) => (
              <motion.span key={i} variants={wordItem} className="inline-block mr-[0.28em]">
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white/[0.58] text-base leading-[1.85] mb-4"
          >
            Roaming Flavours was born out of a love for bold, unpretentious food. We hit the streets of Windsor, ON
            with a menu built around crispy, satisfying bites you can hold in your hands.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-white/[0.34] text-[15px] leading-[1.85]"
          >
            Find us parked at Windsor Chrysler, Plant Gate-2 most evenings. Whether you're grabbing a quick bite on
            your break or chasing down the truck on a Saturday morning.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-accent/[0.09] to-primary/[0.14] border border-white/[0.07] aspect-square flex items-center justify-center">
            <FallbackImage
              src="https://roamingflavours.com/images/food-truck.png"
              alt="Roaming Flavours food truck"
              className="w-[85%] h-[85%] object-contain"
              fallback={
                <div className="flex flex-col items-center justify-center gap-4 text-center w-full h-full">
                  <span className="text-7xl">🚚</span>
                  <p className="font-display text-[22px] text-white font-bold">Roaming Flavours</p>
                  <p className="text-white/35 text-sm">Windsor, ON</p>
                </div>
              }
            />
          </div>
          <div className="absolute -bottom-3.5 -right-2.5 w-[54px] h-[54px] rounded-2xl bg-accent flex items-center justify-center text-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            🌶️
          </div>
        </motion.div>
      </div>
    </section>
  )
}
