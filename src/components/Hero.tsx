import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HERO_IMAGE = 'https://roamingflavours.com/images/ai-1.jpg'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Background stays nearly fixed — subtle drift + slow zoom.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  // Text scrolls up and fades away faster than the background.
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-45%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-secondary"
    >
      <motion.div
        style={{
          y: bgY,
          scale: bgScale,
          backgroundImage: `url('${HERO_IMAGE}')`,
          filter: 'brightness(0.28) saturate(0.7)',
        }}
        className="absolute -inset-[20%] bg-cover bg-center will-change-transform"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,transparent,rgba(28,28,28,0.82))]" />
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-secondary" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-[600px] px-6 pt-20"
      >
        <h1 className="font-display font-extrabold leading-[0.9] mb-7">
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="block text-[clamp(58px,16vw,108px)] text-white"
          >
            Roaming
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.52 }}
            className="block text-[clamp(58px,16vw,108px)] text-accent italic"
          >
            Flavours
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col gap-3 max-w-[260px] mx-auto"
        >
          <button
            onClick={() => scrollTo('location')}
            className="block rounded-full border-[1.5px] border-white/20 text-white px-7 py-4 text-sm font-bold hover:border-accent hover:text-accent transition-colors"
          >
            Find Us 📍
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/[0.18] flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, delay: 1.5, repeat: Infinity }}
            className="w-[5px] h-[5px] rounded-full bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  )
}
