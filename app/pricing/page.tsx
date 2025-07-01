"use client";

import { useState, useEffect } from "react";
import {
  FiCheck,
  FiStar,
  FiZap,
  FiWifi,
  FiPhone,
  FiCreditCard,
  FiArrowRight,
} from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const services = [
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: "Data Services",
      description: "All network data bundles",
      fee: "₦0",
      color: "from-blue-500 to-cyan-500",
      features: ["MTN Data", "Airtel Data", "Glo Data", "9mobile Data"],
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Airtime Top-up",
      description: "Instant airtime recharge",
      fee: "₦0",
      color: "from-green-500 to-emerald-500",
      features: [
        "All Networks",
        "Instant Delivery",
        "24/7 Available",
        "Bulk Purchase",
      ],
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Electricity Bills",
      description: "Pay your electricity bills",
      fee: "₦0",
      color: "from-yellow-500 to-orange-500",
      features: [
        "PHCN/NEPA",
        "State DISCOs",
        "Prepaid & Postpaid",
        "Instant Token",
      ],
    },
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: "Bank Transfer",
      description: "Fund your wallet securely",
      fee: "₦10",
      color: "from-purple-500 to-pink-500",
      features: [
        "Secure Transfer",
        "All Nigerian Banks",
        "Instant Credit",
        "24/7 Support",
      ],
    },
  ];

  const benefits = [
    {
      title: "Zero VTU Fees",
      description: "Pay exactly what you need",
      icon: "₦0",
      features: [
        "Data bundles at face value",
        "Airtime with no markup",
        "Electricity bills direct pricing",
        "Cable TV subscriptions",
        "Educational payments",
        "Internet subscriptions",
      ],
      highlight: "Everyone Loves",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Instant Transactions",
      description: "Lightning fast delivery",
      icon: "⚡",
      features: [
        "Real-time data delivery",
        "Instant airtime credit",
        "Immediate token generation",
        "24/7 service availability",
        "No transaction delays",
        "Automatic confirmations",
      ],
      highlight: "",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Secure & Reliable",
      description: "Your money is safe with us",
      icon: "🔒",
      features: [
        "Bank-grade security",
        "SSL encrypted transactions",
        "Secure wallet system",
        "Transaction history tracking",
        "24/7 customer support",
        "Money-back guarantee",
      ],
      highlight: "",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden pt-20 pb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <FiStar className="w-4 h-4 mr-2" />
            Simple & Transparent Pricing
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Pay Only What You
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}
              Need
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-default-600 mb-8 max-w-2xl mx-auto"
          >
            Experience the freedom of zero fees on VTU services. Only pay ₦10
            for bank transfers. No hidden charges, no surprises.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/buy">
              <Button className="px-8 py-3 text-white">Start Purchasing</Button>
            </Link>
            <Link href={""}>
              <Button className="px-8 border-1 py-3 bg-transparent text-primary">
                Download App
              </Button>
            </Link>
            {/* <Button className="px-8 py-3 bg-transparent border-1 border-borderGray text-primary">
              View All Services
            </Button> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={ref}
        className="py-20"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services & Fees
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Transparent pricing for all your digital service needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className="relative bg-white/50 backdrop-blur-sm border border-default-200 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 hover:border-primary/30">
                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-default-600 mb-4">{service.description}</p>

                  {/* Fee Display */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-foreground">
                      {service.fee}
                    </span>
                    <span className="text-sm text-default-500">
                      Transaction Fee
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-default-600"
                      >
                        <FiCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our App?
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Experience the best VTU services with unmatched benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/70 backdrop-blur-sm border rounded-2xl p-8 ${
                  benefit.highlight
                    ? "border-primary/50 shadow-2xl scale-105"
                    : "border-default-200 hover:border-primary/30"
                } transition-all duration-300`}
              >
                {benefit.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {benefit.highlight}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} text-white text-2xl font-bold mb-4`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-default-600">{benefit.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheck className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-default-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/buy">
              <Button className="px-12 py-4 text-white text-lg">
                Download App
                {/* <FiArrowRight className="ml-2 w-5 h-5" /> */}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-default-600">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Why do you charge ₦10 for bank transfers?",
                a: "The ₦10 fee covers processing costs with Nigerian banks and ensures secure, instant funding of your wallet.",
              },
              {
                q: "Are there really no fees for VTU services?",
                a: "Absolutely! We charge zero fees for data, airtime, electricity bills, and other VTU services. You pay exactly the face value.",
              },
              {
                q: "Can I get bulk purchase discounts?",
                a: "Yes! Business and Enterprise plans include bulk transaction discounts. Contact our sales team for custom pricing.",
              },
              {
                q: "Is there a minimum transaction amount?",
                a: "No minimum transaction amount. You can purchase airtime or data starting from as low as ₦50.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm border border-default-200 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-default-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Saving?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying zero-fee VTU
              services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buy">
                <Button className="px-8 py-3 bg-white text-primary hover:bg-white/90">
                  Start Now
                </Button>
              </Link>
              <Button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default PricingPage;
