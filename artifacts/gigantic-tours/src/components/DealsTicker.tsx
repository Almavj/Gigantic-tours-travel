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
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-2.5 overflow-hidden relative z-40">
      <div className="flex items-center">
        <div className="flex items-center gap-2 px-5 whitespace-nowrap bg-black/20 mr-4 py-2.5 -my-2.5">
          <Zap className="h-4 w-4 fill-white" />
          <span className="font-black text-sm tracking-wide">HOT DEALS</span>
          <Tag className="h-3.5 w-3.5" />
        </div>
        <div className="animate-marquee flex flex-shrink-0">
          {[...deals, ...deals].map((deal, index) => (
            <span key={index} className="mx-10 whitespace-nowrap text-sm font-semibold">
              {deal}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsTicker;
