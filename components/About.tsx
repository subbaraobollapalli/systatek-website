import { siteContent } from "@/data/siteContent";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        {siteContent.about.heading}
      </h2>

      <p className="text-slate-300 text-base md:text-lg leading-8 max-w-4xl mx-auto">
        {siteContent.about.text}
      </p>
    </section>
  );
}