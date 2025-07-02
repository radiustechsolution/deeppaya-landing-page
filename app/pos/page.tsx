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
  MapPin,
  CreditCard,
  TrendingUp,
} from "lucide-react";
import { FaNairaSign } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import Button from "@/components/button";

export default function POSAgentRegistration() {
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
    shopAddress: "",
    hearAboutUs: "",
    additionalInfo: "",
    bankName: "",
    accountNumber: "",
    bvn: "",
    hasShop: "",
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

  const validateForm = () => {
    // Step 1 required fields
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.location.trim() ||
      !formData.shopAddress.trim()
    ) {
      return false;
    }
    // Step 2 required fields
    if (
      !formData.bankName.trim() ||
      !formData.accountNumber.trim() ||
      !formData.bvn.trim() ||
      !formData.hasShop.trim()
    ) {
      return false;
    }
    // Optionally, add more validation (e.g., email format, phone/account/bvn length)
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      setSubmitStatus("Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    // In a real application, you would send this to agents@deeppaya.com
    const registrationData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      platform: "Deeppaya POS Agent Registration",
    };

    console.log(
      "Registration data to be sent to agents@deeppaya.com:",
      registrationData
    );

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
          <div className="bg-white mt-5 md:mt-0 rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="w-10 sm:w-20 h-10 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-5 h-5 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 mb-6">
              Thank you for your interest in becoming a Deeppaya POS Agent.
              <br />
              We&apos;ve received your application and our team will review it
              shortly.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">
                What happens next?
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 text-[14px]">
                    Our team will review your application within 24-48 hours
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 text-[14px]">
                    You&apos;ll receive a detailed email with approval status
                    and next steps
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 text-[14px]">
                    If approved, we&apos;ll schedule POS device delivery and
                    training
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700 text-[14px]">
                    Start earning commissions immediately after activation
                  </span>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Questions? Contact us at{" "}
              <span className="font-medium text-primary">
                {siteConfig.agentsEmail}
              </span>
            </div>
            <Button
              onClick={() => (window.location.href = "/")}
              className="w-full text-white flex sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Return to Home
            </Button>
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
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Deeppaya POS Agent Registration
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Join our network of successful agents
              </p>
            </div>
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
                Why Become a Deeppaya POS Agent?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaNairaSign className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      High Commissions
                    </h4>
                    <p className="text-sm text-gray-600">
                      Earn attractive commissions on every transaction
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Free POS Terminal
                    </h4>
                    <p className="text-sm text-gray-600">
                      Get your POS device at no cost with instant setup
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Multiple Services
                    </h4>
                    <p className="text-sm text-gray-600">
                      Cash withdrawals, transfers, bill payments & more
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  {/* <Users className="w-5 h-5 text-primary mt-1" /> */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-600">
                    Round-the-clock technical and business support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-800 text-white rounded-xl p-6">
            <MapPin className="w-12 h-12 mb-4 opacity-80" />
            <h3 className="text-lg font-bold mb-2">Strategic Locations</h3>
            <p className="text-blue-100 text-sm">
              Perfect for shops, markets, offices, and high-traffic areas. Turn
              your location into a financial service hub.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">
              Earnings Potential
            </h3>
            <div className="text-sm text-green-700 space-y-1">
              <p>• ₦50-200 per withdrawal transaction</p>
              <p>• ₦20-100 per transfer</p>
              <p>• ₦10-50 per bill payment</p>
              <p className="font-semibold pt-2">
                Average: ₦50,000-300,000/month*
              </p>
            </div>
            <p className="text-xs text-green-600 mt-2">
              *Based on transaction volume
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
                    Let&apos;s start with your basic information
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </p>
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
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </p>
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
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </p>
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
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </p>
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
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    State/City *
                  </p>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="e.g., Lagos, Nigeria"
                  />
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Shop/Business Address *
                  </p>
                  <textarea
                    name="shopAddress"
                    value={formData.shopAddress}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Enter complete address where POS will be located"
                  />
                </div>

                <div className="flex justify-end">
                  {/* <button
                    onClick={nextStep}
                    disabled={!isStep1Valid}
                    className="bg-primary hover:bg-primary disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
                  ></button> */}
                  <Button
                    disabled={!isStep1Valid}
                    onClick={nextStep}
                    className="w-full text-white flex sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Business & Banking Information
                  </h3>
                  <p className="text-gray-600">
                    Help us understand your business and setup your payments
                  </p>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have an existing shop/business location? *
                  </p>
                  <select
                    name="hasShop"
                    value={formData.hasShop}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I have a physical shop</option>
                    <option value="planning">Planning to open a shop</option>
                    <option value="mobile">Mobile/Home-based service</option>
                  </select>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name (if applicable)
                  </p>
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
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </p>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select business type</option>
                    <option value="retail-shop">Retail Shop</option>
                    <option value="supermarket">Supermarket/Store</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="petrol-station">Petrol Station</option>
                    <option value="restaurant">Restaurant/Eatery</option>
                    <option value="salon">Salon/Barbershop</option>
                    <option value="individual">Individual Agent</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    POS/Financial Services Experience
                  </p>
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
                    <option value="experienced">Experienced (3+ years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Daily Transaction Volume
                  </p>
                  <select
                    name="expectedVolume"
                    value={formData.expectedVolume}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select expected daily volume</option>
                    <option value="0-50k">₦0 - ₦50,000</option>
                    <option value="50k-100k">₦50,000 - ₦100,000</option>
                    <option value="100k-300k">₦100,000 - ₦300,000</option>
                    <option value="300k-500k">₦300,000 - ₦500,000</option>
                    <option value="500k+">₦500,000+</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name *
                    </p>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="e.g., GTBank, Access Bank"
                    />
                  </div>
                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number *
                    </p>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="10-digit account number"
                    />
                  </div>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    BVN (Bank Verification Number) *
                  </p>
                  <input
                    type="text"
                    name="bvn"
                    value={formData.bvn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="11-digit BVN"
                  />
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about Deeppaya?
                  </p>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral from friend/agent</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="field-agent">Field Agent Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </p>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your business goals, customer base, or any questions you have..."
                  />
                </div>

                <div className="flex items-center gap-3 justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-[0.7rem] px-6 rounded-lg transition-colors"
                  >
                    Back
                  </button>

                  <Button
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full text-white flex sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit</span>
                          {/* <CheckCircle size={15} /> */}
                        </>
                      )}
                    </div>
                  </Button>

                  {/* <button
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
                  ></button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
