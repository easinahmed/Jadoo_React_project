import { Plane, Clock, MapPin } from "lucide-react";

const flights = [
  {
    id: 1,
    airline: "Emirates",
    from: "Dhaka (DAC)",
    to: "Dubai (DXB)",
    duration: "5h 30m",
    price: 450,
  },
  {
    id: 2,
    airline: "Singapore Airlines",
    from: "Dhaka (DAC)",
    to: "Singapore (SIN)",
    duration: "4h 45m",
    price: 400,
  },
  {
    id: 3,
    airline: "Turkish Airlines",
    from: "Dhaka (DAC)",
    to: "Istanbul (IST)",
    duration: "8h 20m",
    price: 600,
  },
];

const Flights = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 flex items-center justify-center to-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold font-Volkhob flex items-center justify-center text-gray-800 mb-12 text-center">
          Book Flights Easily <span><img className="h-30 w-30" src="plane.svg" alt="" /></span>
        </h1>

        {/* Flights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Plane className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-poppins font-bold text-gray-800">
                  {flight.airline}
                </h3>
              </div>
              <p className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-5 h-5 font-poppins mr-2 text-blue-500" />
                {flight.from} → {flight.to}
              </p>
              <p className="flex items-center text-gray-600 mb-3">
                <Clock className="w-5 h-5 mr-2 text-green-500" />
                {flight.duration}
              </p>
              <div className="flex justify-between items-center mt-6">
                <p className="text-lg font-poppins font-bold text-orange-600">
                  ${flight.price}
                </p>
                <button className="bg-orange-500  cursor-pointerfont-opensans hover:bg-orange-600 text-white px-5 py-2 rounded-xl">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flights;
