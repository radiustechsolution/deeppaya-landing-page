import React from "react";

interface Types {
  title?: string;
  subtitle?: string;
  bgColor?: string;
  children: React.ReactNode;
}

export const SectionWithTitle = ({
  title,
  subtitle,
  children,
  bgColor,
}: Types) => {
  return (
    <section
      className={`w-full ${bgColor && bgColor} py-[70px] px-0 md:px-10 flex flex-col items-center`}
    >
      <div className="w-full max-w-[1220px]">
        {/* heading */}
        <div className="flex gap-1 md:gap-3 flex-col items-center">
          {title && (
            <p className="font-ProximaNova px-2 sm:px-0 leading-[40px] md:leading-[56px] font-semibold text-[#191e28] text-center text-[28px] md:text-[40px]">
              {title}
            </p>
          )}

          {subtitle && (
            <p className="text-[14px] md:text-[15px] max-w-[90%] sm:max-w-[65%] text-center text-[#84888e]">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
