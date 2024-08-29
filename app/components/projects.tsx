import Link from "next/link";

const projects = [
  {
    title: "InteractUI",
    description:
      " collection of interactive UI components for React. Built with Next.js, Tailwind CSS, Prisma, Stripe, Kinde and Framer Motion.",
    link: "https://www.interactui.dev/",
    date: "2023-01-01",
  },
  {
    title: "Budget Tracker",
    description:
      "A budget tracker built with Next.js, Tailwind CSS, Prisma, Stripe, Kinde and Framer Motion.",
    link: "https://project1.com",
    date: "2024-06-01",
  },
];

export function Projects() {
  return (
    <div>
      {projects
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((project) => (
          <Link
            key={project.title}
            className="flex flex-col space-y-1 mb-4"
            href={project.link}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
              </p>
              <div className="flex-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {project.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
