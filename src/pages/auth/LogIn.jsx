import  { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Globe, Plane, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { FaGithub, FaUser } from 'react-icons/fa';

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });  

  const {login, googleLogin, fbLogin, githubLogin, anonymousLogin} =useAuth()
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password)
    
    

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 pt-30 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 text-orange-200 animate-bounce">
        <Plane className="w-12 h-12 transform rotate-45" />
      </div>
      <div className="absolute top-1/3 left-10 text-blue-200 animate-pulse">
        <Globe className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 right-1/4 text-pink-200 animate-bounce delay-1000">
        <MapPin className="w-10 h-10" />
      </div>
      <div className="absolute top-1/2 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-40 animate-bounce delay-500"></div>
      
     

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600 text-lg">
                Sign in to continue your journey
              </p>
              <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div onSubmit={handleSubmit} className="space-y-6">
              {/* Email field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-all duration-200 text-lg`}
                    placeholder="Enter your email"
                  />
                </div>
             
              </div>

              {/* Password field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-12 py-4 border-2 border-gray-200 focus:border-orange-500 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-all duration-200 text-lg`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
              </div>

              {/* Remember me and forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full !cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Loging you in...
                  </div>
                ) : (
                  <>
                    Log In to Jadoo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
                </div>
              </div>

              {/* Social login buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={googleLogin}
                  className="flex !cursor-pointer items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </button>

                <button
                  type="button"
                  onClick={fbLogin}
                  className="flex  items-center justify-center !cursor-pointer px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Facebook</span>
                </button>


                <button
                  type="button"
                  onClick={githubLogin}
                  className="flex  items-center gap-2 justify-center !cursor-pointer px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <FaGithub/>
                  <span className="text-sm font-medium text-gray-700">Github</span>
                </button>

                <button
                  type="button"
                  onClick={anonymousLogin}
                  className="flex  items-center gap-2 justify-center !cursor-pointer px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                >
                  <FaUser/>
                  <span className="text-sm font-medium text-gray-700">Guest User</span>
                </button>
              </div>
            </div>

            {/* Sign up link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to={"/auth/signup"} className="text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                  Create one now
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom decorative text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Join thousands of travelers exploring the world with Jadoo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}