import React, { useState } from 'react';
import {
  MapPin, Star, Users, Camera, Heart, Search, Filter, ArrowRight,
  Clock, Globe, Mountain, Waves
} from 'lucide-react';

import { bali, destination_1, destination_2, destination_3, paris, swiss, tokyo } from '../constant/constant';

const Destination = () => {
  // 🔹 Hooks সবসময় উপরে থাকবে
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [favorites, setFavorites] = useState([]);

  // 🔹 Category list
  const categories = [
    { id: 'all', label: 'All Destinations', icon: Globe },
    { id: 'beach', label: 'Beach', icon: Waves },
    { id: 'mountain', label: 'Mountain', icon: Mountain },
    { id: 'city', label: 'City', icon: MapPin },
    { id: 'cultural', label: 'Cultural', icon: Camera }
  ];

  // 🔹 Region list
  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'america', label: 'Americas' },
    { id: 'africa', label: 'Africa' },
    { id: 'oceania', label: 'Oceania' }
  ];

  // 🔹 Destination data
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      region: 'europe',
      category: 'city',
      image: paris,
      rating: 4.8,
      reviews: 2847,
      price: 1200,
      duration: '7 days',
      description: 'City of lights with iconic landmarks, world-class museums, and romantic atmosphere.',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Seine River'],
      bestTime: 'Apr-Jun, Sep-Oct',
      weather: '🌤️'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      region: 'asia',
      category: 'beach',
      image: bali,
      rating: 4.7,
      reviews: 1923,
      price: 800,
      duration: '6 days',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture.',
      highlights: ['Uluwatu Temple', 'Rice Terraces', 'Seminyak Beach', 'Mount Batur'],
      bestTime: 'Apr-Oct',
      weather: '☀️'
    },
    {
      id: 3,
      name: 'Swiss Alps, Switzerland',
      region: 'europe',
      category: 'mountain',
      image: swiss,
      rating: 4.9,
      reviews: 1534,
      price: 1800,
      duration: '8 days',
      description: 'Breathtaking mountain scenery, pristine lakes, and charming alpine villages.',
      highlights: ['Matterhorn', 'Jungfraujoch', 'Lake Geneva', 'Zermatt'],
      bestTime: 'Dec-Mar, Jun-Sep',
      weather: '❄️'
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      region: 'asia',
      category: 'city',
      image: tokyo,
      rating: 4.6,
      reviews: 3241,
      price: 1400,
      duration: '7 days',
      description: 'Modern metropolis blending traditional culture with cutting-edge technology.',
      highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Tokyo Tower', 'Tsukiji Market'],
      bestTime: 'Mar-May, Sep-Nov',
      weather: '🌸'
    }
  ];

  // 🔹 Favorite toggle
  const toggleFavorite = (destinationId) => {
    setFavorites(prev =>
      prev.includes(destinationId)
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  // 🔹 Filter করা ডেস্টিনেশন
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || destination.region === selectedRegion;
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 pb-16 pt-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Explore Amazing <span className="text-orange-500">Destinations</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover breathtaking places around the world and create unforgettable memories.
          </p>
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destinations..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center px-4 py-2 cursor-pointer rounded-full font-medium transition ${selectedCategory === id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                }`}
            >
              <Icon className="w-4 h-4 mr-2" /> {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            {regions.map(({ id, label }) => (
              <option key={id} value={id}>{label}</option>
            ))}
          </select>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white cursor-pointer rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-56">
                <img
                  className="w-full h-full object-cover"
                  src={destination.image}
                  alt={destination.name}
                />
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-600 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
                >
                  <Heart
                    className={`w-5 h-5 ${favorites.includes(destination.id)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-600'
                      }`}
                  />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center text-sm text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-gray-700">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 flex-grow">
                  {destination.description}
                </p>

                <div className="flex justify-between text-sm text-gray-500 mt-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" /> {destination.reviews} reviews
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-orange-600 font-bold text-lg">
                    ${destination.price}
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="mx-auto w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold">No destinations found</h3>
            <p className="text-gray-500 mb-4">Try changing search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedRegion('all');
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6">Join thousands of travelers who trust Jadoo for their adventures.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold">Plan Your Trip</button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Destination;
