import React from "react";
import profilePic from '../../assets/my_passport_pic.png';

function Home() {
  return (
    // hero section
    <div className="max-w-6xl mx-auto">
      <section className="pt-6 pb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-neutral-200">
          Myself <span className="text-rose-300">Ashoke Maity</span>,
          <br />I create <span className="text-rose-300">amazing things!</span>
        </h1>
        {/* contact button -- "say hi" */}
        <div className="mt-8">
          <a
            href="/Contact"
            className="inline-block rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/5"
          >
            Say hi 👋
          </a>
        </div>
      </section>

    {/* About section */}
      <section className="grid md:grid-cols-2 gap-10 items-center py-12 border-t border-white/10">
        <div className="space-y-4">
          <h2 className="text-neutral-400">About Me</h2>
          <p className="text-xl text-neutral-300 max-w-prose">
            Full Stack Web Developer with hands-on experience building
            responsive applications using modern technologies (MERN stack).
            Currently expanding my skillset into AI/ML through dedicated
            learning in Python data science and growing knowledge of machine
            learning concepts. Passionate about continuous improvement, I
            approach each day with a new creative idea towards AIML development
            so I can make own mark in the market thesedays.
          </p>
        </div>
        {/* image placeholder */}
        <div className="justify-self-end">
          <div className="w-50 h-62 rounded-full overflow-hidden bg-white/10">
            <img src={profilePic} alt="profile picture" />
          </div>
        </div>
      </section>

    {/* featured projects section */}
      <section className="py-12">
        <h3 className="text-neutral-400 mb-2">Featured Projects</h3>
        <p className="text-2xl md:text-3xl text-neutral-200 max-w-2xl">
          I craft digital solutions that showcase my passion and expertise in
          design and development.
        </p>

        {/* video cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-white/10" />
            <div className="p-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs">
                <span className="rounded-full border border-white/20 px-3 py-1">
                  Landing Page
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1">
                  UI & UX
                </span>
              </div>
              <button className="text-sm text-neutral-300 hover:text-white">
                View Project →
              </button>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="aspect-[16/10] bg-white/10" />
            <div className="p-4 flex items-center justify-between">
              <div className="flex gap-2 text-xs">
                <span className="rounded-full border border-white/20 px-3 py-1">
                  Landing Page
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1">
                  UI & UX
                </span>
              </div>
              <button className="text-sm text-neutral-300 hover:text-white">
                View Project →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/portfolio"
            className="inline-block rounded border border-white/20 px-4 py-2 hover:bg-white/5"
          >
            Explore all the project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
