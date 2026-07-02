export default function Footer() {
  return (
    <footer className="bg-near py-10 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-5 text-center">
        <p className="font-display text-xl font-bold text-accent">Roaming Flavours</p>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61557085898919"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/[0.28] hover:text-accent transition-colors text-[13px]"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/roamingflavourswindsor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/[0.28] hover:text-accent transition-colors text-[13px]"
          >
            Instagram
          </a>
        </div>
        <p className="text-white/[0.15] text-xs">© {new Date().getFullYear()} Roaming Flavours. Windsor, ON.</p>
      </div>
    </footer>
  )
}
