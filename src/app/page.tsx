import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-purple-500 to-blue-500 text-white">
      {/* 🌈 Blurred Background Blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[60rem] h-[60rem] bg-white rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      </div>

      {/* 👤 HERO SECTION */}
      <section
        id="home"
        className="h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-2xl text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
            Hi, I’m Zach Shaffer
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-100">
            I’m an AI Engineer with 4+ years of experience building machine
            learning models, computer vision solutions, and scalable cloud-based
            data pipelines. Skilled in applying cutting-edge research to
            practical, high-impact applications. Passionate about driving
            innovation through deep learning, generative AI, and real-time
            analytics.
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
              href="#projects"
              className="px-6 py-3 border border-white text-white rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition shadow-sm"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* 👔 EXPERIENCE SECTION */}
      <section
        id="experience"
        className="py-16 bg-white/10 backdrop-blur-sm"
      >
        <Experience />
      </section>

      {/* 🛠️ SKILLS SECTION */}
      <section id="skills" className="py-16">
        <Skills />
      </section>

      {/* 📁 PROJECTS SECTION */}
      <section id="projects" className="py-16">
        <Projects />
      </section>

      {/* 📬 CONTACT SECTION */}
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </main>
  );
}
