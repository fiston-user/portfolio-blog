import { BlogPosts } from "app/components/posts";
import { Projects } from "app/components/projects";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fiston 🍀
      </h1>
      <p className="mb-4">
        {`Software developer with a knack for solving problems. 
          I write clean code and bad jokes. 
        Always learning, rarely napping. 
        Let's build something cool together.`}
      </p>
      <div className="my-8">
        <BlogPosts />
        <Projects />
      </div>
    </section>
  );
}
