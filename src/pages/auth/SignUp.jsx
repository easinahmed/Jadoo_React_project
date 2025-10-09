
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, MapPin, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {

    const {signUp} = useAuth();
    const navigate = useNavigate()
    

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        country: '',
        agreeToTerms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const countries = [
        'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Italy',
        'Spain', 'Australia', 'Japan', 'South Korea', 'Singapore', 'Thailand',
        'India', 'Bangladesh', 'Pakistan', 'Indonesia', 'Malaysia', 'Philippines'
    ];





    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        signUp(formData.email, formData.password, navigate)


       

        setIsSubmitting(true);

        setTimeout(() => {
            console.log('Sign up data:', formData);
            setIsSubmitting(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                country: '',
                agreeToTerms: false
            });
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 pt-30 to-blue-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-bounce"></div>



            {/* Main Content */}
            <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl w-full">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Join Jadoo
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Start your journey to amazing destinations
                            </p>
                            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div onSubmit={handleSubmit} className="space-y-6">
                            {/* Name fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        First Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 border-2 ${errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200`}
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    {errors.firstName && (
                                        <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Last Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 border-2 ${errors.lastName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200`}
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                    {errors.lastName && (
                                        <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email field */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full pl-12 pr-4 py-3 border-2 ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200`}
                                        placeholder="your@email.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone and Country */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 border-2 ${errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200`}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Country *
                                    </label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-3 border-2 ${errors.country ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 focus:outline-none focus:ring-0 transition-colors duration-200 appearance-none bg-white`}
                                        >
                                            <option disabled value="">Select your country</option>
                                            {countries.map((country) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.country && (
                                        <p className="mt-2 text-sm text-red-600">{errors.country}</p>
                                    )}
                                </div>
                            </div>

                            {/* Password fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Password *
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-12 py-3 border-2 ${errors.password ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200`}
                                            placeholder="Create a strong password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Confirm Password *
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-12 py-3 border-2 ${errors.confirmPassword ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'} rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors duration-200`}
                                            placeholder="Confirm your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute  right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                        {formData.confirmPassword && formData.password === formData.confirmPassword && (
                                            <Check className="absolute cursor-pointer right-10 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                                        )}
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                                    )}
                                </div>
                            </div>

                            {/* Terms and conditions */}
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleInputChange}
                                    className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label className="text-sm text-gray-600 leading-relaxed">
                                    I agree to the{' '}
                                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                                        Terms and Conditions
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                            {errors.agreeToTerms && (
                                <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
                            )}

                            {/* Submit button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl !cursor-pointer disabled:cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                                        Creating Your Account...
                                    </div>
                                ) : (
                                    'Create Jadoo Account'
                                )}
                            </button>

                        </div>

                        {/* Sign in link */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link to={"/auth/login"} className="text-orange-500 hover:text-orange-600 font-semibold transition-colors">
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}