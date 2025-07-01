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
    </div>
  );
}
