import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col px-4 md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 py-12 md:py-16 lg:py-20">
      {/* Content */}
      <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-[50%]">
        <h1 className="text-4xl hidden md:block sm:text-5xl md:text-[2.7rem] lg:text-[3.5rem] xl:text-[3.7rem] font-bold leading-[45px] md:leading-[50px] lg:leading-[65px] ">
          Make Your <br /> Payment{" "}
          <span className="text-primary relative">
            Faster <br />
            <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary/20 -z-10" />
          </span>
          and{" "}
          <span className="text-primary relative">
            Easier
            <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary/20 -z-10" />
          </span>
        </h1>
        <h1 className="text-3xl md:hidden sm:text-5xl md:text-[2.6rem] lg:text-[3.5rem] xl:text-[4rem] font-bold  ">
          Make Your Payment{" "}
          <span className="text-primary relative">
            Faster{" "}
            <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary/20 -z-10" />
          </span>
          and{" "}
          <span className="text-primary relative">
            Easier
            <span className="absolute bottom-1 left-0 w-full h-1.5 bg-primary/20 -z-10" />
          </span>
        </h1>

        <p className="text-base md:text-medium lg:text-lg text-default-600 leading-relaxed max-w-[100%] md:max-w-[80%]">
          Experience seamless transactions with our cutting edge payment
          solutions. Fast, secure, and designed for your convenience.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full sm:w-auto">
          <Link href={"/buy"}>
            <Button className="w-full text-primary sm:w-auto bg-transparent border-1 border-borderGray">
              Purchase
            </Button>
          </Link>
          <Button className="w-full text-white sm:w-auto">Download App</Button>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-full lg:w-[50%] aspect-square max-w-[500px] lg:max-w-none">
        <Image
          src="/hero-img.png"
          alt="Mobile payment illustration"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
    </section>
  );
};
