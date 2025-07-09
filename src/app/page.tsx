export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Zach Shaffer</h1>
        <p className="text-lg mb-6">
          AI Engineer with 4+ years of experience building machine learning models, computer vision
          solutions, and scalable cloud-based data pipelines. Skilled in applying cutting-edge research to
          practical, high-impact applications. Passionate about driving innovation through deep learning,
          generative AI, and real-time analytics.

        </p>
        <a
          href="/Zach Shaffer Resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}
