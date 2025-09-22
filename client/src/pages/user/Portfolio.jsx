import React, { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Graphic Design", "Video Editing", "Web Development"];
  const projects = [];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto">
      <section className="pt-6 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-neutral-200">All my <span className="text-rose-300">Projects</span> and <span className="text-rose-300">passion</span></h1>
      </section>

      <section className="py-10 border-t border-white/10">
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={
                  "text-sm rounded-full border px-4 py-2 transition " +
                  (isActive
                    ? "border-rose-300 bg-rose-300/10 text-rose-200"
                    : "border-white/20 text-neutral-300 hover:text-white hover:border-white/40")
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center text-neutral-400 py-16">
            No projects to display yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white/5 rounded-lg overflow-hidden">
                <div className="aspect-[16/10] bg-white/10" />
                <div className="p-4 flex items-center justify-between">
                  <div className="flex gap-2 text-xs">
                    <span className="rounded-full border border-white/20 px-3 py-1">{project.category}</span>
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 px-3 py-1">{tag}</span>
                    ))}
                  </div>
                  <button className="text-sm text-neutral-300 hover:text-white">View Project →</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Portfolio;


