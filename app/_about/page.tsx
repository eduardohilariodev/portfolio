"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="mr-42 ml-28 flex -translate-y-8 items-center">
        <hr className="grow border-2 border-neutral-900 dark:border-neutral-200" />
        <i className="size-0 border-t-8 border-b-8 border-l-[12px] border-neutral-900 border-t-transparent border-b-transparent dark:border-l-neutral-200" />
      </div>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <div className="space-y-4 text-lg">
            <section className="space-y-4 text-lg font-light tracking-wider dark:text-neutral-200">
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

        <div className="relative mx-auto aspect-square w-full max-w-[300px]">
          <Image
            src="/profile_bnw.png"
            alt="Eduardo's profile picture"
            fill
            sizes="300px"
            className="-translate-y-24 object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
}
