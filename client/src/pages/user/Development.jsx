import React from "react";

function Development() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="pt-6 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-neutral-200">Development</h1>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">A spot to highlight your engineering work, code projects, and case studies. We can mirror the same grid system as Portfolio or add detailed writeups.</p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="bg-white/5 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-white/10" />
            <div className="p-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs">
                <span className="rounded-full border border-white/20 px-3 py-1">App</span>
                <span className="rounded-full border border-white/20 px-3 py-1">React</span>
              </div>
              <button className="text-sm text-neutral-300 hover:text-white">View Repo →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Development;


