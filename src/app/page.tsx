import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-500 to-blue-500 text-white overflow-hidden">
      {/* 🌈 Blurred Background Blob */}
      <div className="absolute w-[60rem] h-[60rem] bg-white rounded-full blur-3xl opacity-30 animate-pulse-slow -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      {/* 👤 Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto py-32 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
          Hi, I'm Zach Shaffer
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-8">
          I'm an AI Engineer with 4+ years of experience building machine learning models, computer vision
          solutions, and scalable cloud-based data pipelines. Skilled in applying cutting-edge research to
          practical, high-impact applications. Passionate about driving innovation through deep learning,
          generative AI, and real-time analytics.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/Zach Shaffer Resume.pdf"
            download
            className="px-6 py-3 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition shadow-sm"
          >
            Download Resume
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-white text-white rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition shadow-sm"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* 🛠️ Skills / Tech Stack Section */}
      <Skills />
    </main>
  );
}
