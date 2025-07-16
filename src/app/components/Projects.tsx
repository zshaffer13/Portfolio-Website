import { fetchLanguages } from "@/lib/github";

export default async function Projects() {
  const repos = [
    {
      name: "Protein Fat Detection",
      slug: "meat-fat-prediction",
      description: "Deep Learning model to predict protein and fat content in meat.",
    },
    {
      name: "OpenGL-Fractals",
      slug: "OpenGL-Fractals",
      description: "GPU-accelerated fractal zoom renderer using OpenGL shaders.",
    },
    {
      name: "AI Audio Vis",
      slug: "ai-audio-vis",
      description: "Audio-reactive visuals using AI and real-time audio input.",
    },
    {
      name: "CV-Projects",
      slug: "CV-Projects",
      description: "Computer vision experiments and projects using OpenCV, deep learning, and image processing.",
    },
    {
      name: "Workout Pose Detection V2",
      slug: "Workout-Pose-Detection-V2",
      description: "Pose tracking for workout feedback and form correction using MediaPipe and ML.",
    },
  ];

  const languagesList = await Promise.all(
    repos.map((repo) => fetchLanguages("zshaffer13", repo.slug))
  );

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-widest text-white">
        Projects
      </h2>

      <div className="overflow-x-auto px-4 no-scrollbar">
        <div className="flex justify-center space-x-6 snap-x snap-mandatory">
          {repos.map((repo, index) => (
            <a
              key={repo.slug}
              href={`https://github.com/zshaffer13/${repo.slug.replace(/\s/g, "-")}`}
              target="_blank"
              className="snap-start flex-shrink-0 w-80 bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:bg-white/30 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {repo.name}
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                {repo.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {languagesList[index].map(({ lang, percent }) => (
                  <span
                    key={lang}
                    className="px-2 py-1 bg-white/30 text-white text-xs rounded"
                  >
                    {lang} ({percent}%)
                  </span>
                ))}
              </div>

              <p className="text-blue-300 font-medium text-sm">
                View on GitHub →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
