export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center fade-in-up">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
          Hi, I'm Zach Shaffer
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          I’m a Machine Learning Engineer and Creative Technologist who blends code, design, and AI-powered visuals.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/Zach_Shaffer_Resume_2025.pdf"
            download
            className="px-6 py-3 bg-black text-white rounded-lg text-sm font-semibold hover:opacity-90 transition shadow-sm"
          >
            Download Resume
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition shadow-sm"
          >
            View Projects
          </a>
        </div>
      </div>
    </main>
  );
}
