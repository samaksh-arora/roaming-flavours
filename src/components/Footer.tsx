export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl font-bold text-accent">Roaming Flavours</p>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61557085898919"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-sm"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/roamingflavourswindsor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors text-sm"
          >
            Instagram
          </a>
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Roaming Flavours. Windsor, ON.</p>
      </div>
    </footer>
  )
}
