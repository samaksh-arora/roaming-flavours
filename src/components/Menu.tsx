import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '../data/menu'
import FallbackImage from './FallbackImage'

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const activeCategory = menuCategories.find((c) => c.id === activeId)!

  return (
    <section id="menu" className="bg-surface pb-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center pt-20 px-6"
      >
        <h2 className="font-display text-[clamp(34px,7vw,52px)] text-secondary font-extrabold mb-3">Our Menu</h2>
      </motion.div>

      <div className="sticky top-[54px] z-50 bg-surface px-6 pt-7 pb-[18px] mt-9 border-b border-black/[0.05]">
        <div className="flex gap-2.5 justify-center">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-7 py-[11px] rounded-full text-[13px] font-semibold transition-all ${
                activeId === cat.id ? 'bg-primary text-white' : 'bg-[#EBEBEB] text-[#666]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.085 } } }}
          className="grid gap-4 p-6 max-w-[960px] mx-auto [grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr))]"
        >
          {activeCategory.items.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.09)' }}
              className="bg-white rounded-[20px] overflow-hidden border border-black/[0.05]"
            >
              <div className="h-[180px] overflow-hidden bg-[#EDE8DE] flex items-center justify-center">
                <FallbackImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  fallback={<span className="text-[56px] flex items-center justify-center w-full h-full">{item.fallbackEmoji}</span>}
                />
              </div>
              <div className="px-5 pt-5 pb-[22px]">
                <h3 className="font-display text-xl font-bold text-secondary mb-2">{item.name}</h3>
                <p className="text-[#aaa] text-sm leading-[1.6]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="text-center px-6 mt-4">
        <a
          href="https://roamingflavours.com/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-sm font-semibold border-b-[1.5px] border-primary/30 hover:border-primary pb-0.5 transition-colors"
        >
          View Full Menu PDF →
        </a>
      </div>
    </section>
  )
}
