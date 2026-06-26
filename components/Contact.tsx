import { siteContent } from "@/data/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        {siteContent.contact.heading}
      </h2>

      <p className="text-slate-400 mb-8">
        {siteContent.contact.text}
      </p>

      <a
        href={`mailto:${siteContent.contact.email}`}
        className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-lg inline-block"
      >
        Contact Systatek
      </a>
    </section>
  );
}