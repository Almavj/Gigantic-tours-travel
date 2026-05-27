import { Zap } from 'lucide-react';

const DealsTicker = () => {
  const deals = [
    "🔥 Limited Time: 30% off Maasai Mara Safari packages!",
    "✈️ Early Bird Special: Book international trips 3 months ahead and save 25%",
    "🏖️ Beach Lovers: Diani Beach packages starting from $1,200",
    "🏔️ Adventure Seekers: Mount Kenya trekking with 20% discount this month"
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center px-4 whitespace-nowrap">
          <Zap className="h-4 w-4 mr-2" />
          <span className="font-semibold">HOT DEALS:</span>
        </div>
        <div className="animate-marquee flex">
          {deals.map((deal, index) => (
            <span key={index} className="mx-8 whitespace-nowrap">
              {deal}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsTicker;
