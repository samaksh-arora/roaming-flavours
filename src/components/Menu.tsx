import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '../data/menu'

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const activeCategory = menuCategories.find((c) => c.id === activeId)!

  return (
    <section id="menu" className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">Our Menu</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Made fresh to order. Simple ingredients, big flavours.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeId === cat.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-surface hover:border-accent/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 text-lg">
                  🍽️
                </div>
                <div>
                  <h3 className="font-semibold text-secondary text-base">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PDF menu link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://roamingflavours.com/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-red-700 font-semibold text-sm underline underline-offset-4 transition-colors"
          >
            View Full Menu (PDF) →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
