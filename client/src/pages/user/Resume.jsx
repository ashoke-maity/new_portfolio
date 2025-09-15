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

      <Section title="Contact">
        Replace with your contact details. Phone, email, and links.
      </Section>
      <Section title="Academic">
        Add your academic history here. Degree, institution, and year.
      </Section>
      <Section title="Professional / Work">
        Describe roles, responsibilities, and achievements across positions.
      </Section>
      <Section title="Skills">
        List key skills. Example: React, Node.js, UI/UX, Tailwind, Figma.
      </Section>
      <Section title="Certificates">
        Any certifications or recognitions you’d like to highlight.
      </Section>
    </div>
  );
}

export default Resume;


