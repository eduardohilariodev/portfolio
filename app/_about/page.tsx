"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="order-2 space-y-6 md:order-1 md:col-span-2">
          <div className="space-y-4">
            <section className="text-md space-y-4 font-light dark:text-neutral-200">
              <p>
                Hey, I&apos;m <strong className="font-bold">Eduardo</strong>!
              </p>
              <p>I&apos;m a software engineer and designer, from Brazil.</p>
              <p>
                I work on lots of stuff, on the client-side, on the server-side
                and on the human-side!
              </p>
              <p>
                I love learning and broadening my knowledge, be it from courses,
                books, documentaries or college (already did a BA in Design, now
                I am going for a second run in Computer Science).
              </p>
              <p>
                Take a look in at my background bellow and, in case you&apos;re
                interested,&nbsp;
                <a href="mailto:eduardohilariodev@pm.me" className="underline">
                  send me a message
                </a>
                !
              </p>
            </section>
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-square w-full max-w-[300px] border-4 border-neutral-900 bg-neutral-50 p-8 md:order-2">
          <Image
            src="/profile_bnw.png"
            alt="Eduardo's profile picture"
            fill
            className="scale-75 [background-image:radial-gradient(circle_at_center,black_var(--dotSize),transparent_0),radial-gradient(circle_at_center,black_var(--dotSize),transparent_0)] [background-size:var(--bgSize)_var(--bgSize)] [background-position:0_0,var(--bgPosition)_var(--bgPosition)] object-contain [--bgPosition:calc(var(--bgSize)/2)] [--bgSize:0.7rem] [--dotSize:0.15rem]"
            priority
          />
        </div>
      </div>
    </>
  );
}
