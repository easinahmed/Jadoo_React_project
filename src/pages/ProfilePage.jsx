
import { FaUser, FaLock, FaImage, FaSave } from "react-icons/fa";

const ProfilePage = ()=> {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update Profile
        </h2>

        <div className="flex flex-col space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-orange">
              <FaUser className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-orange">
              <FaLock className="text-gray-400 mr-2" size={18} />
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-orange">
              <FaImage className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                placeholder="Enter photo URL"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Profile Preview */}
          <div className="flex justify-center mt-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border border-gray-300 object-cover"
            />
          </div>

          {/* Save Button */}
          <button className="mt-6 flex items-center justify-center w-full bg-orange hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition">
            <FaSave className="mr-2" size={16} />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProfilePage
