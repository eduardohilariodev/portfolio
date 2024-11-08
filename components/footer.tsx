import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../data";
import { defaultEmail } from "./constants";
import MagicButton from "./ui/magic-button";

export default function Footer() {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={`mailto:${defaultEmail}`}>
          <MagicButton icon={<FaLocationArrow />} position="right">
            Let&apos;s get in touch
          </MagicButton>
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © {new Date().getFullYear()} Eduardo Hilário
          <div className="flex items-center gap-6 md:gap-3">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="saturate-180 flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-blue-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              >
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </p>
      </div>
    </footer>
  );
}
