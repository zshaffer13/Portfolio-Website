export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center fade-in-up">Projects</h1>

        <div className="grid gap-8 md:grid-cols-2 fade-in-up">
          {/* Project Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition hover:shadow-md">
            <h2 className="text-2xl font-semibold mb-2">AI Visualizer</h2>
            <p className="text-gray-600 mb-4">
              Real-time audio-reactive visuals built using fractal shaders and beat detection.
            </p>
            <a
              href="https://github.com/your-username/ai-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition hover:shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Handwriting OCR</h2>
            <p className="text-gray-600 mb-4">
              CNN-LSTM model trained on the IAM dataset to recognize handwritten text.
            </p>
            <a
              href="https://github.com/your-username/ocr-model"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          </div>

          {/* Add more cards here as needed */}
        </div>
      </div>
    </main>
  );
}
