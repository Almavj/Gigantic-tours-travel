import { useState } from 'react';
import { XMarkIcon, CalendarIcon, UserIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function BookingForm({ destination, onClose }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    package: '',
    date: '',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const packages = [
    { id: 'basic', name: 'Basic Package', price: destination.price, description: 'Standard accommodation and activities' },
    { id: 'premium', name: 'Premium Package', price: destination.price * 1.3, description: 'Luxury accommodation and exclusive activities' },
    { id: 'family', name: 'Family Package', price: destination.price * 0.9, description: 'Family-friendly options and discounts' }
  ];
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    const newErrors = {};
    if (!bookingData.name) newErrors.name = 'Required';
    if (!bookingData.email || !/^\S+@\S+\.\S+$/.test(bookingData.email)) {
      newErrors.email = 'Valid email required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Booking submitted:', bookingData);
    setStep(3); // Move to confirmation step
  };

  return (
    <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white px-6 py-4 border-b flex justify-between items-center z-10">
        <h2 className="text-xl font-bold text-gray-900">
          {step === 1 && 'Select Package'}
          {step === 2 && 'Complete Booking'}
          {step === 3 && 'Booking Confirmation'}
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Destination: {destination.name}</h3>
              <p className="text-gray-600">{destination.location.city}, {destination.location.country}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Your Package</h3>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.id}
                    onClick={() => {
                      setBookingData(prev => ({ ...prev, package: pkg.id }));
                      setStep(2);
                    }}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${bookingData.package === pkg.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{pkg.name}</h4>
                      <span className="font-bold text-blue-600">${pkg.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Travel Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={bookingData.date}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-10"
                    required
                  />
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <select
                    id="guests"
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-10"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={bookingData.specialRequests}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span className="text-gray-600">Package:</span>
                <span className="font-medium">
                  {packages.find(p => p.id === bookingData.package)?.name || 'Not selected'}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span className="text-gray-600">Destination:</span>
                <span className="font-medium">{destination.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 py-2">
                <span className="text-gray-600">Guests:</span>
                <span className="font-medium">{bookingData.guests}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-blue-600">
                  ${(packages.find(p => p.id === bookingData.package)?.price * bookingData.guests || 0).toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">Booking Confirmed!</h3>
            <p className="mt-2 text-gray-600">
              Thank you for booking {destination.name}. We've sent confirmation details to {bookingData.email}.
            </p>
            <div className="mt-6">
              <button
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}