"use client";

import { useRef } from "react";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// lib
import { cn } from "@/lib/utils";

// types
import { PricingCardType } from "@/types";

// shadcn components

// components
import TitleSection2 from "@/components/shared/title-section/title-section2";

type Props = {
  pricing: {
    data: {
      title: string;
      details: string;
      monthly: PricingCardType[];
      yearly: PricingCardType[];
    };
  };
  className?: string;
};

const CRMPricing = ({ pricing, className }: Props) => {
  const { title, details, monthly, yearly } = pricing.data;

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className={cn("sec_space2", className)}>
      <div className="container" ref={containerRef}>
        <TitleSection2
          title="Support My Work"
          details="Currently, all features are free and unlimited. If you find Assistena useful, please consider supporting my work by buying me a coffee!"
          titleClassName="max-w-[850px]"
        />
        <div className="flex justify-center mt-[40px] xl:mt-[70px]">
          <a
            href="https://buymeacoffee.com/hazemelkhalil"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[38px] py-[22px] text-[16px] text-white bg-theme rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </section>
  );
};

export default CRMPricing;
