import { fetchLanguages } from "@/lib/github";

export default async function Projects() {
  const repos = [
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

  // Fetch all language breakdowns in parallel
  const languagesList = await Promise.all(
    repos.map((repo) => fetchLanguages("zshaffer13", repo.slug))
  );

  return (
    <main className="min-h-screen text-gray-900 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center fade-in-up">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2 fade-in-up">
          {repos.map((repo, index) => (
            <div
              key={repo.slug}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-2">{repo.name}</h2>
              <p className="text-gray-600 mb-4">{repo.description}</p>

              <div className="flex gap-2 flex-wrap text-sm">
                {languagesList[index].map(({ lang, percent }) => (
                  <span
                    key={lang}
                    className="px-2 py-1 bg-gray-100 text-gray-800 rounded"
                  >
                    {lang} ({percent}%)
                  </span>
                ))}
              </div>

              <a
                href={`https://github.com/zshaffer13/${repo.slug.replace(/\s/g, "-")}`}
                target="_blank"
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
