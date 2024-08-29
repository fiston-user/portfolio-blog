import { Projects } from "app/components/projects";

export const metadata = {
  title: "Projects",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Yeah, I'm working on stuff.
      </h1>
      <Projects />
    </section>
  );
}
