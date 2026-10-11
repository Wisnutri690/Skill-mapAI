interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-slate-900">
              SkillMap <span className="text-blue-600">AI</span>
            </span>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            MVP
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-5">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Intelligent Job-to-Resume Analysis
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-2xl leading-tight">
          Should I apply, and what should I{" "}
          <span className="text-blue-600">learn next?</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
          Upload CV Anda dan tempel Job Description. SkillMap AI akan menganalisis skor kecocokan, memetakan skill gap, serta merekomendasikan prioritas belajar Anda.
        </p>

        <button
          onClick={onStart}
          className="mt-6 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>Analyze My Skills</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold mb-2">
              ✓
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Match Score</h3>
            <p className="text-xs text-slate-600 leading-normal">
              Indikator kesiapan 0–100% yang dihitung objektif terhadap kualifikasi lowongan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold mb-2">
              ⚡
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Skill Gap Mapping</h3>
            <p className="text-xs text-slate-600 leading-normal">
              Perbandingan terperinci antara Matching, Partial match, dan Missing skills.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold mb-2">
              🎯
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Learning Priority</h3>
            <p className="text-xs text-slate-600 leading-normal">
              Rekomendasi terarah dengan level prioritas HIGH, MEDIUM, dan LOW beserta alasannya.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <p>SkillMap AI — Career Readiness & Skill Gap Companion</p>
      </footer>
    </div>
  );
}