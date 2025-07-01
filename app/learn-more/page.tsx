"use client";
import { useState, useEffect } from "react";
import {
  FiZap,
  FiCreditCard,
  FiGift,
  FiSmartphone,
  FiWifi,
  FiTv,
  FiCheck,
  FiArrowRight,
  FiStar,
  FiShield,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiAward,
  FiHeart,
} from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/button";
import Link from "next/link";

const LearnMorePage = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const mainFeatures = [
    {
      icon: <FiZap className="w-12 h-12" />,
      title: "Subscriptions",
      subtitle: "Cheap and fast subscriptions",
      description:
        "Subscribe to all your favorite services at the best prices with instant activation.",
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Netflix, Spotify, YouTube Premium",
        "Cable TV (DSTV, GOtv, Startimes)",
        "Internet subscriptions (Smile, Spectranet)",
        "Educational platforms (JAMB, WAEC)",
        "Up to 15% cheaper than direct purchase",
        "Instant activation within seconds",
      ],
      stats: { value: "15%", label: "Average Savings" },
    },
    {
      icon: <FiCreditCard className="w-12 h-12" />,
      title: "Transactions",
      subtitle: "Swift and cheap transactions",
      description:
        "Lightning-fast payments with the lowest fees in Nigeria. Pay only ₦10 for bank transfers.",
      color: "from-green-500 to-emerald-500",
      benefits: [
        "₦0 fees on airtime & data",
        "₦0 fees on electricity bills",
        "₦10 only for bank transfers",
        "Real-time transaction processing",
        "99.9% success rate guaranteed",
        "24/7 transaction support",
      ],
      stats: { value: "₦0", label: "VTU Fees" },
    },
    {
      icon: <FiGift className="w-12 h-12" />,
      title: "Bonus",
      subtitle: "Instant cashbacks and rewards",
      description:
        "Earn cashback on every transaction and unlock exclusive rewards as you transact more.",
      color: "from-purple-500 to-pink-500",
      benefits: [
        "2% cashback on all transactions",
        "Bonus data on bulk purchases",
        "Referral rewards program",
        "Daily check-in bonuses",
        "VIP tier with exclusive benefits",
        "Special holiday promotions",
      ],
      stats: { value: "2%", label: "Cashback Rate" },
    },
  ];

  const seamlessFeatures = [
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile-First Experience",
      description:
        "Designed specifically for mobile users with intuitive touch controls and optimized performance.",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Bank-Grade Security",
      description:
        "Your transactions are protected with 256-bit SSL encryption and multi-factor authentication.",
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "24/7 Availability",
      description:
        "Make payments anytime, anywhere. Our servers never sleep, so you're always connected.",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Trusted by Millions",
      description:
        "Join over 2 million satisfied customers who trust us with their daily transactions.",
    },
  ];

  const subscriptionServices = [
    { name: "Netflix", discount: "15%", icon: "🎬" },
    { name: "Spotify", discount: "10%", icon: "🎵" },
    { name: "DSTV", discount: "5%", icon: "📺" },
    { name: "GOtv", discount: "8%", icon: "📻" },
    { name: "Startimes", discount: "12%", icon: "🎭" },
    { name: "YouTube Premium", discount: "20%", icon: "📱" },
    { name: "Apple Music", discount: "15%", icon: "🍎" },
    { name: "Amazon Prime", discount: "10%", icon: "📦" },
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-medium mb-8"
          >
            <FiStar className="w-4 h-4 mr-2" />
            Enjoy Seamless Payments & Subscriptions
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            No More Sticky Price Tags.
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              No More Balance Due.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-default-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Skip the line, pay whenever and wherever you&apos;re ready, and
            leave your wallet at home. Wally allows you to enjoy seamless
            payments with zero hassle.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/buy">
              <Button className="px-8 py-4 text-white text-lg">
                Start Using Wally
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button className="px-8 py-4 bg-transparent border-1 border-borderGray text-primary text-lg">
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "2M+", label: "Happy Users" },
              { value: "₦0", label: "VTU Fees" },
              { value: "99.9%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-default-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Features */}
      <motion.section
        ref={ref}
        className="py-20"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white`}
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-primary font-semibold mb-4">
                      {feature.subtitle}
                    </p>
                    <p className="text-lg text-default-600 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-default-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual/Stats */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div
                      className={`w-80 h-80 rounded-3xl bg-gradient-to-br ${feature.color} p-8 flex flex-col justify-center items-center text-white shadow-2xl`}
                    >
                      <div className="text-6xl font-bold mb-4">
                        {feature.stats.value}
                      </div>
                      <div className="text-xl font-semibold">
                        {feature.stats.label}
                      </div>
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Subscription Services */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Subscriptions
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Save money on all your favorite services with our exclusive
              discounts
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subscriptionServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm border border-default-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <div className="text-green-500 font-bold text-lg">
                  {service.discount} OFF
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Wally?
            </h2>
            <p className="text-lg text-default-600 max-w-2xl mx-auto">
              Experience the future of digital payments with features designed
              for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seamlessFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm border border-default-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-default-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Seamless Payments?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of users who have already made the switch to
              smarter, cheaper, and faster transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buy">
                <Button className="px-8 py-4 bg-white text-primary hover:bg-white/90 text-lg">
                  Get Started Now
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg">
                Download App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;
