import React from 'react'

function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="pt-6 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-neutral-200">
          Designing with <span className="text-rose-300">Purpose</span>,
          <br /> Building with <span className="text-rose-300">Webflow</span>.
        </h1>
        <div className="mt-8">
          <a href="#contact" className="inline-block rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/5">Say hi 👋</a>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center py-12 border-t border-white/10">
        <div className="space-y-4">
          <h2 className="text-neutral-400">About Me</h2>
          <p className="text-xl text-neutral-300 max-w-prose">Write a brief bio here. Replace this text with a short introduction that matches the look in your images.</p>
        </div>
        <div className="justify-self-end">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-white/10" />
        </div>
      </section>

      <section className="py-12">
        <h3 className="text-neutral-400 mb-2">Featured Projects</h3>
        <p className="text-2xl md:text-3xl text-neutral-200 max-w-2xl">I craft digital solutions that showcase my passion and expertise in design and development.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-white/10" />
            <div className="p-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs">
                <span className="rounded-full border border-white/20 px-3 py-1">Landing Page</span>
                <span className="rounded-full border border-white/20 px-3 py-1">UI & UX</span>
              </div>
              <button className="text-sm text-neutral-300 hover:text-white">View Project →</button>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-white/10" />
            <div className="p-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs">
                <span className="rounded-full border border-white/20 px-3 py-1">Landing Page</span>
                <span className="rounded-full border border-white/20 px-3 py-1">UI & UX</span>
              </div>
              <button className="text-sm text-neutral-300 hover:text-white">View Project →</button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/portfolio" className="inline-block rounded border border-white/20 px-4 py-2 hover:bg-white/5">Explore all the project</a>
        </div>
      </section>
    </div>
  )
}

export default Home