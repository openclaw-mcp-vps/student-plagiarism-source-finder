export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Educators &amp; Academic Institutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the Exact Source of{" "}
          <span className="text-[#58a6ff]">Plagiarized Content</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste any suspicious text and instantly discover the original URLs and documents it was copied from. Evidence-backed results for academic integrity enforcement.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Paste Text", desc: "Submit the student's writing directly into the analyzer." },
          { step: "2", title: "Deep Search", desc: "We scan billions of web pages and academic document databases." },
          { step: "3", title: "Get Evidence", desc: "Receive exact source URLs with similarity scores and matched excerpts." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-[#8b949e] text-sm">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Educator Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited plagiarism checks",
              "Exact source URL evidence",
              "Similarity percentage scores",
              "Academic database scanning",
              "Downloadable PDF reports",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start for $11/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How accurate is the plagiarism detection?",
              a: "Our engine cross-references text against billions of indexed web pages and academic repositories, delivering match confidence scores above 95% for verbatim and near-verbatim copying."
            },
            {
              q: "What sources does it search?",
              a: "We scan public web pages, open-access academic journals, Wikipedia, news archives, and student paper databases — giving you a comprehensive evidence trail."
            },
            {
              q: "Can I use this as legal or disciplinary evidence?",
              a: "Yes. Each report includes timestamped source URLs, matched text excerpts, and similarity percentages — suitable for academic integrity hearings and institutional records."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PlagiaTrace. Built for academic integrity.
      </footer>
    </main>
  );
}
