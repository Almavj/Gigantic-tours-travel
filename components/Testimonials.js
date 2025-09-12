import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from './common/Card';

/**
 * @typedef {Object} Testimonial
 * @property {string} name
 * @property {string} location
 * @property {string} text
 * @property {number} rating
 * @property {string} [image]
 */

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      text: "Absolutely incredible experience! The Maasai Mara safari was beyond our expectations. Professional guides and amazing wildlife encounters.",
      rating: 5
    },
    {
      name: "James Mitchell",
      location: "United Kingdom", 
      text: "Diani Beach was paradise! Crystal clear waters and pristine beaches. Gigantic Tours made everything seamless.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      location: "Spain",
      text: "The cultural experience in Lamu was unforgettable. Rich history and beautiful architecture. Highly recommended!",
      rating: 5
    },
    {
      name: "David Chen",
      location: "Australia",
      text: "Mount Kenya trekking was challenging but rewarding. The guides were knowledgeable and safety was top priority.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      location: "Canada",
      text: "International packages are well-organized. Paris trip was magical with perfect itinerary and accommodations.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      location: "UAE",
      text: "Samburu National Reserve exceeded expectations. Unique wildlife and authentic cultural interactions.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers who have explored the world with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-50" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;