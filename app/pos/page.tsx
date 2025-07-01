"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  Globe,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

export default function VTURegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    experience: "",
    expectedVolume: "",
    location: "",
    hearAboutUs: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Clear success message after 8 seconds
      setTimeout(() => setSubmitStatus(""), 8000);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStep1Valid =
    formData.firstName && formData.lastName && formData.email && formData.phone;

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in starting a VTU business with us.
              We've received your application and our team will review it
              shortly.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">
                What happens next?
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Our team will review your application within 24-48 hours
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    You'll receive a detailed email with next steps and
                    requirements
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    We'll schedule a call to discuss your business goals and
                    setup
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-primary hover:bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              VTU Business Registration
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  1
                </div>
                <span className="text-sm text-gray-600">Personal</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= 2
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  2
                </div>
                <span className="text-sm text-gray-600">Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Benefits */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Our VTU Platform?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Instant Transactions
                    </h4>
                    <p className="text-sm text-gray-600">
                      Lightning-fast airtime and data purchases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Secure & Reliable
                    </h4>
                    <p className="text-sm text-gray-600">
                      Bank-grade security with 99.9% uptime
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Competitive Rates
                    </h4>
                    <p className="text-sm text-gray-600">
                      Best pricing in the market with high margins
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      24/7 Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Round-the-clock technical and business support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl p-6">
              <Smartphone className="w-12 h-12 mb-4 opacity-80" />
              <h3 className="text-lg font-bold mb-2">Mobile-First Design</h3>
              <p className="text-blue-100 text-sm">
                Our platform is optimized for mobile devices, ensuring your
                customers can easily purchase airtime and data on the go.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-600">
                      Let's start with your basic information
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location (State/City)
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="e.g., Lagos, Nigeria"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={nextStep}
                      disabled={!isStep1Valid}
                      className="bg-primary hover:bg-primary disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Business Information
                    </h3>
                    <p className="text-gray-600">
                      Tell us about your business plans
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name (if applicable)
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Enter your business name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select business type</option>
                      <option value="individual">Individual/Personal</option>
                      <option value="sole-proprietorship">
                        Sole Proprietorship
                      </option>
                      <option value="partnership">Partnership</option>
                      <option value="limited-company">Limited Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      VTU Business Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">
                        Beginner (No prior experience)
                      </option>
                      <option value="some-experience">
                        Some Experience (1-2 years)
                      </option>
                      <option value="experienced">
                        Experienced (3+ years)
                      </option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Monthly Transaction Volume
                    </label>
                    <select
                      name="expectedVolume"
                      value={formData.expectedVolume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select expected volume</option>
                      <option value="0-100k">₦0 - ₦100,000</option>
                      <option value="100k-500k">₦100,000 - ₦500,000</option>
                      <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                      <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                      <option value="5m+">₦5,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="social-media">Social Media</option>
                      <option value="referral">Referral from friend</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us anything else about your business goals, questions, or specific requirements..."
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary disabled:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <CheckCircle className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
