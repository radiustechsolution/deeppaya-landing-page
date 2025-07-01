"use client";
import Button from "@/components/button";
import { Hero } from "@/components/hero";
import { HomePageFeatures, HomePagefeaturesObject } from "@/lib/object";
import Image from "next/image";
import { GrTransaction } from "react-icons/gr";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { SectionWithTitle } from "@/components/section-with-title";
import { TestimonialComp } from "@/components/TestimonialComp";
import { siteConfig } from "@/config/site";
import { AccordionComp } from "@/components/accordion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView] as const;
};

export default function Home() {
  const [featuresRef, featuresInView] = useInView(0.2);
  const [paymentsRef, paymentsInView] = useInView(0.2);
  const [analyticsRef, analyticsInView] = useInView(0.2);
  const [testimonialsRef, testimonialsInView] = useInView(0.2);
  const [posRef, posInView] = useInView(0.2);
  const [faqRef, faqInView] = useInView(0.2);
  const [vtuRef, vtuInView] = useInView(0.2);

  return (
    <div className="mx-auto max-w-[85rem]">
      {/* Hero Section */}
      <div className="animate-hero-fade-in">
        <Hero />
      </div>

      {/* Feature */}
      <section
        ref={featuresRef}
        className={`flex px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex-col md:flex-row gap-6 md:gap-0 items-center justify-between transition-all duration-1000 ${
          featuresInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {HomePageFeatures.map((items, index) => (
          <div
            key={items.title}
            className={`flex items-start gap-4 max-w-full md:max-w-[350px] transition-all duration-700 hover:scale-105 hover:shadow-lg hover:bg-gray-50 p-4 rounded-lg ${
              featuresInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              animationDelay: `${index * 200}ms`,
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <div className="p-2 mt-[0.35rem] rounded-full bg-primary text-white animate-pulse-slow hover:rotate-12 transition-transform duration-300">
              <GrTransaction size={14} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[1rem] sm:text-[1rem] lg:text-[1.3rem] font-bold animate-text-reveal">
                {items.title}
              </p>
              <p className="text-md sm:text-sm lg:text-md text-default-500 animate-text-reveal-delayed">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Pay and Track bills */}
      <section
        ref={paymentsRef}
        className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 lg:py-20"
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 transition-all duration-1000 ${
            paymentsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left side - Transaction list */}
          <div
            className={`w-full lg:w-1/2 space-y-4 bg-gray-100 p-6 rounded-lg transition-all duration-1000 hover:shadow-xl ${
              paymentsInView
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {HomePagefeaturesObject.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 bg-white rounded-lg transition-all duration-700 hover:scale-105 hover:shadow-md animate-slide-in-stagger ${
                  paymentsInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-5"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 200}ms`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${feature.bgColor} rounded flex items-center justify-center animate-icon-bounce hover:rotate-12 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 animate-text-reveal">
                      {feature.title}
                    </p>
                    <p className="text-sm text-gray-500 animate-text-reveal-delayed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <IoMdCheckmarkCircleOutline
                  className="text-primary animate-check-mark hover:scale-125 transition-transform duration-300"
                  size={24}
                />
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div
            className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${
              paymentsInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-text-reveal">
                Enjoy Seamless Payments & Subscriptions
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 animate-check-item hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <IoCheckmarkDone
                    className="text-primary animate-check-mark hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <p className="text-gray-600 text-md animate-text-reveal-delayed">
                    No more sticky price tags. No more balance due emails. No
                    more carrying around multiple credit cards.
                  </p>
                </div>

                <div className="flex items-start gap-3 animate-check-item hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <IoCheckmarkDone
                    className="text-primary animate-check-mark hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <p className="text-gray-600 text-md animate-text-reveal-delayed">
                    Wally allows you to skip the line, pay whenever and wherever
                    you&apos;re ready, and leave your wallet at home.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={"/learn-more"}
              className="w-[70%] hidden md:flex sm:w-auto animate-button-float"
            >
              <Button className="text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
                Learn more
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/learn-more"} className="w-[70%] md:hidden sm:w-auto">
              <Button className="text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Analyze */}
      <section
        ref={analyticsRef}
        className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 lg:py-20"
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 transition-all duration-1000 ${
            analyticsInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left side - Content */}
          <div
            className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${
              analyticsInView
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-text-reveal">
                Detailed history to analyze your spending
              </h2>

              <div className="space-y-4">
                <p className="text-gray-600 text-md max-w-lg animate-text-reveal-delayed">
                  Our detailed transaction history provides insights into where
                  your money goes, helping you make informed decisions.
                </p>
              </div>
            </div>

            <Button className="w-full text-white hidden md:flex sm:w-auto animate-button-float hover:scale-105 hover:shadow-lg transition-all duration-300">
              Learn more
            </Button>
          </div>

          {/* Right side - Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 ${
              analyticsInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="animate-image-float hover:scale-105 transition-transform duration-500">
              <Image
                src="/transfer-history.jpeg"
                alt="Transaction history"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover hover:shadow-2xl transition-shadow duration-300"
                priority
              />
            </div>
          </div>
          <Button className="w-[70%] text-white md:hidden sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300">
            Learn more
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <div
        ref={testimonialsRef}
        className={`transition-all duration-1000 ${
          testimonialsInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <SectionWithTitle
          bgColor="bg-[#F3F4F6]"
          title={`What Our Users Are Saying About ${siteConfig.name}`}
          subtitle={`Users testimonies by ${siteConfig.name} users have been compiled here in order to illustrate the quality of our services.`}
        >
          <div className="mt-[40px] border border-gray-200 animate-border-expand"></div>
          <TestimonialComp />
        </SectionWithTitle>
      </div>

      {/* Become a POS agent */}
      <section
        ref={posRef}
        className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 lg:py-20"
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 transition-all duration-1000 ${
            posInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left side - Image */}
          <div
            className={`w-full lg:w-1/2 space-y-4 bg-gray-100 p-6 rounded-lg transition-all duration-1000 hover:shadow-xl ${
              posInView
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="animate-image-float hover:scale-105 transition-transform duration-500">
              <Image
                src="/pos-agent.jpeg"
                alt="Become a POS agent"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover hover:shadow-2xl transition-shadow duration-300"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${
              posInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-text-reveal">
                Do you want to be a {siteConfig.name} POS agent?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 animate-check-item hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <IoCheckmarkDone
                    className="text-primary animate-check-mark hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <p className="text-gray-600 text-md animate-text-reveal-delayed">
                    Earn extra income by providing seamless payment solutions to
                    your community as a certified Paya POS agent.
                  </p>
                </div>

                <div className="flex items-start gap-3 animate-check-item hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                  <IoCheckmarkDone
                    className="text-primary animate-check-mark hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <p className="text-gray-600 text-md animate-text-reveal-delayed">
                    Enjoy fast settlements, reliable support, and access to a
                    wide range of financial services for your customers.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={"/learn-more"}
              className="w-[70%] hidden md:flex sm:w-auto animate-button-float"
            >
              <Button className="text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
                Register here
              </Button>
            </Link>
          </div>
          <div>
            <Link href={"/learn-more"} className="w-[70%] md:hidden sm:w-auto">
              <Button className="text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
                Register here
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section
        ref={faqRef}
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          faqInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <SectionWithTitle
          title="Frequently Asked Questions"
          subtitle={`Here is common frequently asked questions about ${siteConfig.name}. Still have some questions? Click button below to submit your questions.`}
          bgColor="bg-[#FFFFFFFF]"
        >
          <AccordionComp />
        </SectionWithTitle>
      </section>

      {/* Become a merchant */}
      <section
        ref={vtuRef}
        className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 lg:py-20"
      >
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 transition-all duration-1000 ${
            vtuInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left side - Content */}
          <div
            className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ${
              vtuInView
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-text-reveal">
                Want to own your own VTU business with {siteConfig.name}?
              </h2>

              <div className="space-y-4">
                <p className="text-gray-600 text-md max-w-lg animate-text-reveal-delayed">
                  Are you looking to start your own VTU business or need a
                  reliable VTU API? {siteConfig.name} provides seamless VTU APIs
                  and solutions to help you launch, manage, and grow your
                  virtual top-up business with ease.
                </p>
              </div>
            </div>

            <Button className="w-full text-white hidden md:flex sm:w-auto animate-button-float hover:scale-105 hover:shadow-lg transition-all duration-300">
              Learn more
            </Button>
          </div>

          {/* Right side - Image */}
          <div
            className={`w-full lg:w-1/2 space-y-4 bg-gray-100 p-6 rounded-lg transition-all duration-1000 hover:shadow-xl ${
              posInView
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="animate-image-float hover:scale-105 transition-transform duration-500">
              <Image
                src="/vtu.jpeg"
                alt="VTU business"
                width={500}
                height={350}
                className="rounded-lg shadow-lg object-cover hover:shadow-2xl transition-shadow duration-300"
                priority
              />
            </div>
          </div>
          <Button className="w-[70%] text-white md:hidden sm:w-auto hover:scale-105 hover:shadow-lg transition-all duration-300">
            Learn more
          </Button>
        </div>
      </section>
    </div>
  );
}
