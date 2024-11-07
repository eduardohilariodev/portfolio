import Grid from "../components/grid";
import Hero from "../components/Hero";
import RecentProjects from "../components/recent-projects";
import { FloatingNav } from "../components/ui/floating-navbar";
import { navItems } from "../data";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
