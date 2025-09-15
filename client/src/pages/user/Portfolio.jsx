import React from "react";

function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="pt-6 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-neutral-200">Showcasing my <span className="text-rose-300">talent</span> and <span className="text-rose-300">passion</span></h1>
      </section>

      <section className="py-10 border-t border-white/10">
        <div className="mb-8">
          <h2 className="text-neutral-400">selected projects</h2>
          <p className="text-2xl md:text-3xl text-neutral-200 max-w-2xl">Discover my skills and creativity in action, with just one click.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="bg-white/5 rounded-lg overflow-hidden">
              <div className="aspect-[16/10] bg-white/10" />
              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-2 text-xs">
                  <span className="rounded-full border border-white/20 px-3 py-1">Landing Page</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">UI & UX</span>
                </div>
                <button className="text-sm text-neutral-300 hover:text-white">View Project →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;


