"use client";

import { useEffect, useState } from "react";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// components
import Logo from "../common/logo";
import Offcanvas1 from "../offcanvas/offcanvas1";
import Menu2 from "../menu/menu2";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  headerNav: MenuDataType;
};

const Header3 = ({ headerNav }: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <header
        className={cn(
          scroll ? "fixed " : "absolute",
          "top-0 left-0 w-full z-[99]"
        )}
      >
        <div className="container">
          <div
            className={cn(
              "relative flex gap-[20px] justify-between items-center h-[60px] md:h-[70px] max-w-[950px] rounded-full my-[20px] mx-auto px-[30px] py-[10px] 2xl:pe-[10px]",
              scroll ? "bg-white-3" : "bg-[#FFFFFFD1]"
            )}
          >
            <div>
              <Logo />
            </div>
            <div className=" hidden xl:flex justify-center">
              <Menu2 headerNav={headerNav} />
            </div>
            <div className=" flex justify-end gap-4">
              <div className="py-[25px] lg:py-[45px] has_fade_anim">
                <Link
                  href={"https://dashboard.assistena.com/"}
                  className={cn(buttonVariants({ variant: "primary3" }))}
                >
                  Sign Up!
                </Link>
              </div>
              <div className="flex justify-end xl:hidden">
                <Offcanvas1 headerNav={headerNav} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header3;
