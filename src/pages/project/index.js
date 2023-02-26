import Link from "next/link";
import client from "../../lib/client";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my project page
        </h2>
        <section className="grid grid-cols-2 gap-8 ">
          {projects.map((project) => {
            return (
              <>
                <article
                  className="bg-white relative rounded-lg p-10"
                  key={project.date}
                >
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Company</strong>:{" "}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 font-bold hover:underline hover:text-red-400 tex-xl"
                    >
                      View the Project{" "}
                      <span role="img" aria-label="right">
                        👉
                      </span>
                    </Link>
                  </div>
                </article>
              </>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const projects = await client.fetch(
    `*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
  );
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
