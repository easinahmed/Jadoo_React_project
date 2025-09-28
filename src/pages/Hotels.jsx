import { BEACH, TURKI, UAE, } from "../constant/constant"
import { Star, MapPin } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    location: "Dubai, UAE",
    rating: 4.7,
    price: 120,
    image: UAE,
  },
  {
    id: 2,
    name: "Beach Paradise Resort",
    location: "Switzerland",
    rating: 4.5,
    price: 95,
    image: BEACH,
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Istanbul, Turkie",
    rating: 4.8,
    price: 140,
    image: TURKI,
  },
];

const Hotels = () => {
  return (
    <section className="min-h-screen items-center justify-center flex bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl  font-Volkhob font-bold text-gray-800 mb-12 text-center">
          Find The Best Hotels 
        </h1>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {hotel.name}
                </h3>
                <p className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-orange-500" />{" "}
                  {hotel.location}
                </p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-700">{hotel.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-orange-600">
                    ${hotel.price}/night
                  </p>
                  <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-5 py-2 rounded-xl">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotels;
