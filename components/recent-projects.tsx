import { FaLocationArrow } from "react-icons/fa";
import { projects } from "../data";
import { PinContainer } from "./ui/3d-pin";

export default function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, des, iconLists, img, link, title }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                <div className="relative size-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img src={img} alt="title" className="absolute bottom-0 z-10" />
              </div>
              <h1 className="lg:text-2xlmd:text-xl line-clamp-1 text-base font-bold">
                {title}
              </h1>
              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {des}
              </p>
              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="h-8 w-8 rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{ transform: `translateX(-${10 * index}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                  Check Live Site
                </p>

                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
