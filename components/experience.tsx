import { workExperience } from "../data";
import { Button } from "./ui/moving-border";

export default function Experience() {
  return (
    <div className="w-full py-20" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10_000) + 10_000}
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 border-neutral-200 text-black dark:border-slate-800 dark:text-white"
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="w-16 md:w-20 lg:w-32"
              />
            </div>
            <div className="lg:ms-5">
              <h1 className="text-start text-xl font-bold md:text-2xl">
                {card.title}
              </h1>
              <p className="mt-3 text-start font-semibold text-white-100">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
