"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(""), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-md sm:text-xl text-white opacity-80 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                Whether you have questions about our services, need support, or
                want to explore partnership opportunities, our team is here to
                help. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Send us an email and we&apos;ll get back to you
                  </p>
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-primary hover:text-primary text-sm font-medium"
                  >
                    {siteConfig.supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-md sm:text-lg  font-semibold text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Mon-Sat from 8am to 5pm
                  </p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-primary hover:text-primary text-sm font-medium"
                  >
                    {siteConfig.adminPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-md sm:text-lg  font-semibold text-gray-900 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    123 Business Avenue
                    <br />
                    Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            {/* <div className="bg-primary border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">
                Send us a Message
              </h3>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.email ||
                  !formData.subject ||
                  !formData.message
                }
                className="w-full bg-primary hover:bg-primary disabled:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly do you respond?
              </h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer phone support?
              </h3>
              <p className="text-gray-600">
                Yes! Our phone support is available Monday through Friday from
                8am to 5pm EST. Call us at +1 (555) 123-4567.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I schedule a meeting?
              </h3>
              <p className="text-gray-600">
                Absolutely! Mention your preferred time in your message, and
                we&apos;ll coordinate a meeting that works for both parties.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Where are you located?
              </h3>
              <p className="text-gray-600">
                Our main office is located at 123 Business Avenue, Suite 100,
                New York, NY 10001. Visitors are welcome by appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
