import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Password = () => {
  const { updateUserPass } = useAuth();
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!current || !password || !confirm) {
      return alert("Please fill all fields!");
    }
    if (password !== confirm) {
      return alert("Passwords do not match!");
    }
    if (password.length < 6) {
      return alert("Password must be at least 6 characters!");
    }

    updateUserPass(password, current);
    setCurrent("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[500px] bg-white p-8 border rounded-xl shadow-lg">
        <h2 className="text-3xl font-Volkhob font-semibold mb-6 text-center text-gray-800">
          Change Password
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Current Password"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="border font-poppins rounded-lg p-3 focus:outline-orange"
          />
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border font-poppins rounded-lg p-3  focus:outline-orange"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="border rounded-lg p-3 font-poppins focus:outline-orange"
          />

          <button
            type="submit"
            className="bg-orange font-poppins text-white py-3 rounded-lg hover:bg-orange-500 transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
