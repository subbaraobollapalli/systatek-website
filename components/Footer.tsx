import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center text-slate-400">
        <h3 className="text-lg font-semibold text-white mb-2">
          {siteContent.companyName}
        </h3>
        <p className="mb-2">{siteContent.footer.text}</p>
        <p className="text-sm">{siteContent.footer.copyright}</p>
      </div>
    </footer>
  );
}