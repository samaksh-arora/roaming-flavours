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
    <section id="contact" className="bg-secondary text-white section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a question or want to book us for an event? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5"
            >
              <span className="text-4xl">{item.icon}</span>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-white hover:text-accent transition-colors font-medium break-all">
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-medium">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61557085898919"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/roamingflavourswindsor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors text-sm font-medium"
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
