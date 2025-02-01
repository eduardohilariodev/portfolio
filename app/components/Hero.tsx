"use client";

export default function Hero() {
  return (
    <div className="mt-60 flex h-96 flex-col justify-center transition-all duration-300">
      <div className="space-y-12">
        <div className="space-y-4">
          <div>
            <div className="@container relative font-semibold tracking-tight">
              <h1 className="text-5xl">
                Eduardo <br /> Hilário
              </h1>
              <div
                style={{ WebkitTextStroke: "0.5px white" }}
                className="absolute right-0 bottom-0 flex flex-col -space-y-8 text-right text-transparent opacity-20 *:h-24 *:text-[11.9cqw]"
              >
                <span>Software Engineer</span>
                <span>Designer</span>
              </div>
            </div>
          </div>

          <hr className="border-[1.5px]" />
          <p className="text-3xl md:text-5xl">
            <div className="font-serif font-light">
              <p>I design. I develop. I deliver.</p>
            </div>
            {/* <FlipWords
              className="leading-tight font-serif"
              words={words}
            /> */}
          </p>
        </div>
      </div>
    </div>
  );
}
