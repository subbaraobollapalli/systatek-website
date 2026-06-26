import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section className="px-6 pt-14 pb-24 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
        {siteContent.hero.title}
      </h1>

      <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
        {siteContent.hero.subtitle}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg">
          {siteContent.hero.primaryButton}
        </button>

        <button className="border border-slate-600 hover:border-slate-400 transition px-6 py-3 rounded-lg">
          {siteContent.hero.secondaryButton}
        </button>
      </div>
    </section>
  );
}