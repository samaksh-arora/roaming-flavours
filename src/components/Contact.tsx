import { motion } from 'framer-motion'

const contactItems = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+1 519-890-1221',
    href: 'tel:+15198901221',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'roamingflavourswindsor@gmail.com',
    href: 'mailto:roamingflavourswindsor@gmail.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Windsor, ON, Canada',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-9"
        >
          <h2 className="font-display text-[clamp(34px,7vw,52px)] text-secondary font-extrabold mb-3">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid gap-4 mb-9 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 36px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-[20px] px-5 py-7 text-center border border-black/[0.05]"
            >
              <div className="text-3xl mb-3.5">{item.icon}</div>
              <p className="text-[10px] text-[#ccc] tracking-[0.15em] uppercase mb-2.5">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-secondary hover:text-primary transition-colors font-semibold text-[15px] break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-secondary font-semibold text-[15px]">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-3 flex-wrap"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61557085898919"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-[13px] rounded-full border-[1.5px] border-secondary/[0.12] text-secondary hover:border-primary hover:text-primary text-sm font-semibold transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/roamingflavourswindsor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-[13px] rounded-full border-[1.5px] border-secondary/[0.12] text-secondary hover:border-primary hover:text-primary text-sm font-semibold transition-colors"
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
