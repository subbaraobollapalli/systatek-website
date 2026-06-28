const content = {
  companyName: "Systatek",

  hero: {
    title: "Custom Software, Cloud & AI Solutions for Growing Businesses",
    subtitle:
      "We help businesses improve productivity, streamline operations, and accelerate growth through custom software development, cloud computing, AI, automation, and mobile applications.",
    primaryButton: "Schedule Consultation",
    secondaryButton: "Explore Our Offerings",
  },

  about: {
    heading: "About Systatek",
    text:
      "Systatek is a technology consulting and software development company delivering innovative digital solutions. We specialize in enterprise software, cloud migration, artificial intelligence, automation, web applications, and mobile solutions that help organizations achieve sustainable growth.",
  },

  services: [
    {
      title: "Software Development",
      description:
        "Enterprise-grade software tailored to your business requirements.",
    },
    {
      title: "ERP Consulting",
      description:
        "We provide end to end consultancy services for all your ERP needs.  we specialize in SME business requiements gathering and mappping with industry standard ERP applications.",
    },
    {
      title: "Data Consulting and Migration",
      description:
        " AI managed data definitions and cleansing of data for all your ERP needs.",
    },
    {
      title: "AI & Automation",
      description:
        "AI-powered solutions and workflow automation that improve productivity.",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform iOS and Android applications.",
    },
    {
      title: "Web Development",
      description:
        "Modern responsive websites and enterprise web applications.",
    },
    {
      title: "Technology Consulting",
      description:
        "Digital transformation, architecture, and technology advisory services.",
    },
  ],

  technologies: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Flutter",
    "Swift",
  ],

  contact: {
    heading: "Let's Build Something Great",
    text: "Ready to discuss your next technology project?",
    email: "info@systatek.com",
  },

  footer: {
    text: "Transforming Businesses Through Technology",
    copyright: "© 2026 Systatek. All rights reserved.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-3">

            <img
              src="/systateklogo.png"
              alt="Systatek Logo"
              className="h-12 w-auto"
            />

            <span className="text-2xl font-bold text-blue-400">
              {content.companyName}
            </span>

          </div>

          <div className="hidden md:flex gap-8">

            <a href="#about" className="hover:text-blue-400">
              About
            </a>

            <a href="#services" className="hover:text-blue-400">
              Services
            </a>

            <a href="#technologies" className="hover:text-blue-400">
              Technologies
            </a>

            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="px-6 pt-24 pb-24 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-6">
          {content.companyName}
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {content.hero.title}
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-8">
          {content.hero.subtitle}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg font-semibold transition">
            {content.hero.primaryButton}
          </button>

          <button className="border border-slate-500 hover:border-blue-400 px-8 py-4 rounded-lg transition">
            {content.hero.secondaryButton}
          </button>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 text-center"
      >

        <h2 className="text-4xl font-bold mb-10">
          {content.about.heading}
        </h2>

        <p className="text-lg text-slate-300 leading-9">
          {content.about.text}
        </p>

      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {content.services.map((service) => (

            <div
              key={service.title}
              className="bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-blue-500 transition"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= TECHNOLOGIES ================= */}

      <section
        id="technologies"
        className="bg-slate-900 py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {content.technologies.map((tech) => (

              <div
                key={tech}
                className="bg-slate-800 rounded-lg p-6 text-center font-semibold"
              >
                {tech}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="py-24 px-6 text-center"
      >

        <h2 className="text-4xl font-bold mb-6">
          {content.contact.heading}
        </h2>

        <p className="text-slate-300 mb-10 text-lg">
          {content.contact.text}
        </p>

        <a
          href={`mailto:${content.contact.email}`}
          className="inline-block bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-lg text-lg font-semibold transition"
        >
          Contact Us
        </a>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-800 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold text-white">
            {content.companyName}
          </h3>

          <p className="mt-4 text-slate-400">
            {content.footer.text}
          </p>

          <p className="mt-4 text-sm text-slate-500">
            {content.footer.copyright}
          </p>

        </div>

      </footer>

    </main>
  );
}