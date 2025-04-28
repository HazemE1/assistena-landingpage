"use client";

import { useRef } from "react";
import Image from "next/image";

// form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// components
import Title1 from "@/components/shared/title/title1";

type Props = {};

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

const Newsletter3 = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const addEmailToBrevo = async (email: string) => {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert(data.message);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    await addEmailToBrevo(email);
  };

  return (
    <section className="bg-theme bg-[url(/assets/imgs/shape/shape-r-5.png)] bg-no-repeat bg-cover sec_space2">
      <div className="container" ref={containerRef}>
        <div className="max-w-[618px] mx-auto text-center mb-[55px]">
          <Title1
            text="Do you want to know the latest new about Assistena?"
            className="pb-[15px] md:pb-[24px] has_fade_anim"
          />
          <p className="text-primary has_fade_anim">
            We send out a newsletter once every blue moon, but what we do send is
            always packed with valuable insights and updates.
          </p>
        </div>
        <div className="max-w-[910px] mx-auto has_fade_anim">
          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center gap-[10px] ps-[30px] pe-[10px] bg-white rounded-full"
            >
              <Image
                width={18}
                height={13}
                src="/assets/imgs/icon/email.png"
                alt="icon"
              />
              <div className="grow">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email"
                          {...field}
                          className="h-[70px] border-0 ps-0 focus:bg-white"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button variant="primary2" size="sm" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter3;
