import React, { useState } from 'react';
import { 
  MapPin, Star, Calendar, Users, Plane, 
  Camera, Heart, Search, Filter, ArrowRight,
  Sun, Snowflake, Umbrella, Leaf, Clock,
  DollarSign, Globe, Mountain, Waves
} from 'lucide-react';

export default function Destination() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { id: 'all', label: 'All Destinations', icon: Globe },
    { id: 'beach', label: 'Beach', icon: Waves },
    { id: 'mountain', label: 'Mountain', icon: Mountain },
    { id: 'city', label: 'City', icon: MapPin },
    { id: 'cultural', label: 'Cultural', icon: Camera }
  ];

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'europe', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
    { id: 'america', label: 'Americas' },
    { id: 'africa', label: 'Africa' },
    { id: 'oceania', label: 'Oceania' }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      region: 'europe',
      category: 'city',
      image: '🏛️',
      rating: 4.8,
      reviews: 2847,
      price: 1200,
      duration: '7 days',
      description: 'City of lights with iconic landmarks, world-class museums, and romantic atmosphere.',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Seine River'],
      bestTime: 'Apr-Jun, Sep-Oct',
      weather: '🌤️',
      activities: ['Sightseeing', 'Museums', 'Fine Dining', 'Art Galleries']
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      region: 'asia',
      category: 'beach',
      image: '🏝️',
      rating: 4.7,
      reviews: 1923,
      price: 800,
      duration: '6 days',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture.',
      highlights: ['Uluwatu Temple', 'Rice Terraces', 'Seminyak Beach', 'Mount Batur'],
      bestTime: 'Apr-Oct',
      weather: '☀️',
      activities: ['Beach', 'Surfing', 'Temples', 'Yoga']
    },
    {
      id: 3,
      name: 'Swiss Alps, Switzerland',
      region: 'europe',
      category: 'mountain',
      image: '🏔️',
      rating: 4.9,
      reviews: 1534,
      price: 1800,
      duration: '8 days',
      description: 'Breathtaking mountain scenery, pristine lakes, and charming alpine villages.',
      highlights: ['Matterhorn', 'Jungfraujoch', 'Lake Geneva', 'Zermatt'],
      bestTime: 'Dec-Mar, Jun-Sep',
      weather: '❄️',
      activities: ['Skiing', 'Hiking', 'Scenic Trains', 'Photography']
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      region: 'asia',
      category: 'city',
      image: '🏯',
      rating: 4.6,
      reviews: 3241,
      price: 1400,
      duration: '7 days',
      description: 'Modern metropolis blending traditional culture with cutting-edge technology.',
      highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Tokyo Tower', 'Tsukiji Market'],
      bestTime: 'Mar-May, Sep-Nov',
      weather: '🌸',
      activities: ['Sightseeing', 'Food Tours', 'Shopping', 'Cultural Sites']
    },
    {
      id: 5,
      name: 'Santorini, Greece',
      region: 'europe',
      category: 'beach',
      image: '🏛️',
      rating: 4.8,
      reviews: 2156,
      price: 1100,
      duration: '5 days',
      description: 'Iconic white-washed buildings, stunning sunsets, and crystal-clear waters.',
      highlights: ['Oia Sunset', 'Red Beach', 'Akrotiri', 'Fira Town'],
      bestTime: 'Apr-Jun, Sep-Oct',
      weather: '☀️',
      activities: ['Beach', 'Wine Tasting', 'Photography', 'Boat Tours']
    },
    {
      id: 6,
      name: 'Machu Picchu, Peru',
      region: 'america',
      category: 'cultural',
      image: '🏔️',
      rating: 4.9,
      reviews: 1876,
      price: 1600,
      duration: '9 days',
      description: 'Ancient Incan citadel perched high in the Andes Mountains.',
      highlights: ['Machu Picchu', 'Inca Trail', 'Sacred Valley', 'Cusco'],
      bestTime: 'May-Sep',
      weather: '🌤️',
      activities: ['Hiking', 'Cultural Tours', 'Photography', 'Adventure']
    },
    {
      id: 7,
      name: 'Dubai, UAE',
      region: 'asia',
      category: 'city',
      image: '🏙️',
      rating: 4.5,
      reviews: 2987,
      price: 1300,
      duration: '6 days',
      description: 'Futuristic city with luxury shopping, modern architecture, and desert adventures.',
      highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall', 'Desert Safari'],
      bestTime: 'Nov-Mar',
      weather: '☀️',
      activities: ['Shopping', 'Architecture', 'Desert Safari', 'Luxury']
    },
    {
      id: 8,
      name: 'Cape Town, South Africa',
      region: 'africa',
      category: 'mountain',
      image: '🏔️',
      rating: 4.7,
      reviews: 1643,
      price: 900,
      duration: '7 days',
      description: 'Stunning coastline, iconic Table Mountain, and rich cultural heritage.',
      highlights: ['Table Mountain', 'Cape Point', 'Wine Lands', 'Robben Island'],
      bestTime: 'Nov-Mar',
      weather: '☀️',
      activities: ['Wine Tours', 'Hiking', 'Wildlife', 'Beaches']
    }
  ];

  const toggleFavorite = (destinationId) => {
    setFavorites(prev => 
      prev.includes(destinationId)
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || destination.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Jadoo</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-orange-500 font-semibold">Destinations</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Hotels</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Flights</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Booking</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Login</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Explore Amazing 
              <span className="text-orange-500"> Destinations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover breathtaking places around the world and create unforgettable memories
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-white rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg"
                placeholder="Search destinations..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* Region Filter */}
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {regions.map(({ id, label }) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                <span className="text-6xl">{destination.image}</span>
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(destination.id)
                        ? 'text-red-500 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {destination.weather} {destination.bestTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-gray-900">{destination.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                    >
                      {highlight}
                    </span>
                  ))}
                  {destination.highlights.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                      +{destination.highlights.length - 2} more
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {destination.reviews} reviews
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">
                      ${destination.price}
                    </div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center group">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedRegion('all');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15K+</div>
              <div className="text-gray-600 font-medium">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of travelers who trust Jadoo for their adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Plan Your Trip
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}