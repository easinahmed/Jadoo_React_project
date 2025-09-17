import React, { useState } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router';

export default function Error404Page() {
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = ['Popular Destinations', 'Best Hotels', 'Flight Deals', 'Travel Packages'];

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div 
            className={`text-8xl font-bold text-orange-500 mb-8 transition-transform duration-300 cursor-pointer select-none ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            404
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-slate-600 mb-8">
            The page you're looking for doesn't exist. Try searching for something else!
          </p>

          {/* Interactive Search */}
          <div className="mb-6 relative">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search destinations, hotels, flights..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Suggestions dropdown */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-lg mt-1 shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 hover:bg-orange-50 text-slate-700 hover:text-orange-600 transition-colors"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Link to={"/"} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Home
          </Link>
        </div>
      </main>
    </div>
  );
}