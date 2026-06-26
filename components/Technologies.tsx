import { siteContent } from "@/data/siteContent";

export default function Technologies() {
  return (
    <section id="technologies" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {siteContent.technologies.heading}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteContent.technologies.items.map((tech) => (
            <div
              key={tech}
              className="bg-slate-800 p-6 rounded-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}