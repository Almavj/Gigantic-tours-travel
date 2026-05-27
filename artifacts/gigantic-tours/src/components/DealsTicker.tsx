import { Zap, Tag } from 'lucide-react';

const DealsTicker = () => {
  const deals = [
    "🔥 30% OFF Maasai Mara Safari — Limited Spots!",
    "✈️ Santorini Honeymoon Package from $2,400/couple",
    "🏖️ Diani Beach 5-Day Escape from $1,200/person",
    "🦒 Amboseli Elephant Special — Save 25% this month",
    "🌅 Zanzibar Beach Retreat — Fly + Stay from $1,800",
    "🏔️ Mount Kenya Trek — 20% discount for groups of 4+",
    "🌸 Kyoto Cherry Blossom Tour — Book 3 months ahead & save",
    "🦁 Samburu Safari — Rare Species Expedition from $1,500",
  ];

  return (
    <div
      className="sticky top-20 z-40 overflow-hidden"
      style={{ background: 'linear-gradient(90deg, #f97316 0%, #ef4444 50%, #f97316 100%)' }}
    >
      {/* Scrolling ticker — full width */}
      <div className="flex py-2.5 pl-36">
        <div className="animate-marquee flex flex-shrink-0">
          {[...deals, ...deals].map((deal, index) => (
            <span key={index} className="mx-10 whitespace-nowrap text-sm font-semibold text-white">
              {deal}
            </span>
          ))}
        </div>
      </div>

      {/* HOT DEALS badge — absolutely on top so text never bleeds through */}
      <div
        className="absolute left-0 top-0 bottom-0 flex items-center gap-2 px-5 bg-black z-10"
        style={{ minWidth: '140px' }}
      >
        <Zap className="h-4 w-4 fill-white text-white flex-shrink-0" />
        <span className="font-black text-sm tracking-wide text-white whitespace-nowrap">HOT DEALS</span>
        <Tag className="h-3.5 w-3.5 text-white flex-shrink-0" />
      </div>
    </div>
  );
};

export default DealsTicker;
