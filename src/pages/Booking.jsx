import { Calendar, Users, MapPin, Search } from "lucide-react";

const Booking = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br flex items-center justify-center from-orange-50 to-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl flex items-center justify-center font-bold text-gray-800 mb-2 text-center">
          Book Your Perfect Trip <span><img src="plane.svg" alt="" /></span>
        </h1>

        {/* Booking Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-600 mb-2">Destination</label>
              <div className="flex items-center border rounded-xl px-4 py-3">
                <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Guests</label>
              <div className="flex items-center border rounded-xl px-4 py-3">
                <Users className="w-5 h-5 text-orange-500 mr-2" />
                <input
                  type="number"
                  placeholder="Number of guests"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Check-in</label>
              <div className="flex items-center border rounded-xl px-4 py-3">
                <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                <input type="date" className="w-full outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Check-out</label>
              <div className="flex items-center border rounded-xl px-4 py-3">
                <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                <input type="date" className="w-full outline-none" />
              </div>
            </div>
          </form>

          {/* Search Button */}
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 cursor-pointer hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-2 mx-auto font-semibold shadow-lg transition">
              <Search className="w-5 h-5" /> Search Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
