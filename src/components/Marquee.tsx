const TICKER_SPEED_SECONDS = 22

const TICKER_TEXT =
  'SMASH BURGER  ·  CRISPY CHICKEN  ·  FRIED PICKLES  ·  SAMOSAS  ·  CHICKEN STRIPS  ·  HANDCRAFTED BITES  ·  OPEN 6 DAYS  ·  WINDSOR ON      '

export default function Marquee() {
  return (
    <div className="bg-primary overflow-hidden h-[52px] flex items-center select-none">
      <div
        className="animate-ticker whitespace-nowrap inline-flex items-center shrink-0"
        style={{ animationDuration: `${TICKER_SPEED_SECONDS}s` }}
      >
        <span className="font-display text-[15px] font-bold text-white/90 tracking-wide">{TICKER_TEXT}</span>
        <span className="font-display text-[15px] font-bold text-white/90 tracking-wide">{TICKER_TEXT}</span>
      </div>
    </div>
  )
}
