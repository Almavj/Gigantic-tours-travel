import React from 'react';
import { Award, Clock, Shield, Users, Globe, Heart } from 'lucide-react';
import Card from './common/Card';

const TrustBadges = () => {
  const badges = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in travel services and customer satisfaction",
      color: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs and emergencies",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Certified Sustainable Travel",
      description: "Committed to responsible tourism and environmental conservation",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "10,000+ Happy Travelers",
      description: "Join thousands of satisfied customers who trust us with their adventures",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      title: "50+ Destinations",
      description: "Extensive network covering Kenya, East Africa, and international locations",
      color: "text-indigo-600"
    },
    {
      icon: Heart,
      title: "Local Expertise",
      description: "Deep knowledge of local cultures, wildlife, and hidden gems",
      color: "text-red-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Gigantic Tours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for unforgettable travel experiences with proven excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <Card key={index} hover className="text-center group">
                <IconComponent className={`h-12 w-12 ${badge.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;