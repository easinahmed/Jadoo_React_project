import { useState } from "react";
import { FaUser, FaLock, FaImage, FaSave } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

const ProfilePage = () => {
  const { currentUser, updateUserInfo, updateUserPass } = useAuth();

  const [name, setName] = useState(currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setMessage("");

    // ✅ Update name & photo
    if (name || photoURL) {
      updateUserInfo(name, photoURL);
      setMessage("✅ Profile updated successfully!");
    }

    // ✅ Update password (only if user entered something)
    if (password) {
      updateUserPass(password);
      setMessage("✅ Password updated successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update Profile
        </h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSave}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <FaUser className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <FaLock className="text-gray-400 mr-2" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
              <FaImage className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter photo URL"
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Profile Preview */}
          <div className="flex justify-center mt-4">
            <img
              src={photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
            />
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm font-medium text-gray-600 mt-3">
              {message}
            </p>
          )}

          {/* Save Button */}
          <button
            type="submit"
            className="mt-6 flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
          >
            <FaSave className="mr-2" size={16} />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
