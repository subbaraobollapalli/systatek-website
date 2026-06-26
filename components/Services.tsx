import { siteContent } from "@/data/siteContent";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        {siteContent.services.heading}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {siteContent.services.items.map((service) => (
          <div
            key={service.title}
            className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-slate-700 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}