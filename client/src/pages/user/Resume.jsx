import React from "react";

const Section = ({ title, children }) => (
  <div className="grid md:grid-cols-[200px,1fr] gap-8 py-10 border-b border-white/10">
    <h3 className="text-xl text-neutral-200">{title}</h3>
    <div className="text-neutral-400 leading-relaxed">{children}</div>
  </div>
);

function Resume() {
  return (
    <div className="max-w-5xl mx-auto">
      <header className="pt-6 pb-12 text-center">
        <h1 className="text-6xl font-semibold text-neutral-200">Resume</h1>
      </header>

      <Section title="Contact">Email: ashokemaity092@gmail.com</Section>
      <Section title="Academic">
        B.Tech in Computer Science and Engineering from Techno India University
        (2022-2026)
        <br />
        Future Campus School (2020-2022)
        <br />
        Techno India Group Public School - Garia (2010-2020)
      </Section>
      <Section title="Work">
        Intern at Brnd Guru as a Graphic Designer (2025-Present).
      </Section>
      <Section title="Skills">
        React, Node.js, Tailwind, Figma, Canva, Adobe Photoshop, Adobe Premiere
        Pro, Adobe After Effects.
      </Section>
      <Section title="Certificates">
        Deloitte data analyst certification, Ethical Hacking Certification
        course, Python (BASIC), Frontend Developer React certificate.
      </Section>
    </div>
  );
}

export default Resume;
