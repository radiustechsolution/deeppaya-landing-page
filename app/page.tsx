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

export default function Home() {
  return (
    <div className="mx-auto max-w-[85rem]">
      {/* Hero Section */}
      <Hero />

      {/* Feature */}
      <section className="flex px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 flex-col md:flex-row gap-6 md:gap-0 items-center justify-between ">
        {HomePageFeatures.map((items) => (
          <div
            key={items.title}
            className="flex items-start gap-4 max-w-full md:max-w-[350px]"
          >
            <div className="p-2 mt-[0.35rem] rounded-full bg-primary text-white">
              <GrTransaction size={14} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[1rem] sm:text-[1rem] lg:text-[1.3rem] font-bold">
                {items.title}
              </p>
              <p className="text-md sm:text-sm lg:text-md text-default-500">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Pay and Track bills */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Transaction list */}
          <div className="w-full lg:w-1/2 space-y-4 bg-gray-100 p-6 rounded-lg">
            {/* Amazon transaction */}
            {HomePagefeaturesObject.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${feature.bgColor} rounded flex items-center justify-center`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {feature.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <IoMdCheckmarkCircleOutline
                  className={`text-primary`}
                  size={24}
                />
              </div>
            ))}
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enjoy Seamless Payments & Subscriptions
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IoCheckmarkDone className="text-primary" size={24} />
                  <p className="text-gray-600 text-md">
                    No more sticky price tags. No more balance due emails. No
                    more carrying around multiple credit cards.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <IoCheckmarkDone className="text-primary" size={24} />
                  <p className="text-gray-600 text-md">
                    Wally allows you to skip the line, pay whenever and wherever
                    you&apos;re ready, and leave your wallet at home.
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-[70%] text-white hidden md:flex sm:w-auto">
              Learn more
            </Button>
          </div>
          <Button className="w-[70%] text-white md:hidden sm:w-auto">
            Learn more
          </Button>
        </div>
      </section>

      {/* Analyze */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Transaction list */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Detailed history to analyze your spending
              </h2>

              <div className="space-y-4">
                <p className="text-gray-600 text-md max-w-lg">
                  Our detailed transaction history provides insights into where
                  your money goes, helping you make informed decisions.
                </p>
              </div>
            </div>

            <Button className="w-full text-white hidden md:flex sm:w-auto">
              Learn more
            </Button>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/transfer-history.jpeg"
              alt="Transaction history"
              width={500}
              height={350}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
          <Button className="w-[70%] text-white md:hidden sm:w-auto">
            Learn more
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <SectionWithTitle
        bgColor="bg-[#F3F4F6]"
        title={`What Our Users Are Saying About ${siteConfig.name}`}
        subtitle={`Users testimonies by ${siteConfig.name} users have been compiled here in order to illustrate the quality of our services.`}
      >
        <div className="mt-[40px] border border-gray-200"></div>
        <TestimonialComp />
      </SectionWithTitle>

      {/* Frequently asked questions */}

      <section className="px-4 sm:px-6 lg:px-8">
        <SectionWithTitle
          title="Frequently Asked Questions"
          subtitle={`Here is common frequently asked questions about ${siteConfig.name}. Still have some questions? Click button below to submit your questions.`}
          bgColor="bg-[#FFFFFFFF]"
        >
          <AccordionComp />
        </SectionWithTitle>
      </section>
    </div>
  );
}

// {status: 'completed', customer: {…}, transaction_id: 1826415257, tx_ref: 'H8S5B4MKCPTDXER', flw_ref: 'UCKN4738175075818444051909', …}
// amount
// :
// 10
// charge_response_code
// :
// "00"
// charge_response_message
// :
// "Approved Successful"
// charged_amount
// :
// 10.2
// created_at
// :
// "2025-06-24T09:42:59.000Z"
// currency
// :
// "NGN"
// customer
// :
// {name: 'Customer ', email: 'xeonncodes@gmail.com', phone_number: '08141314105'}
// flw_ref
// :
// "UCKN4738175075818444051909"
// redirectstatus
// :
// undefined
// status
// :
// "completed"
// transaction_id
// :
// 1826415257
// tx_ref
// :
// "H8S5B4MKCPTDXER"
// [[Prototype]]
// :
// Object
