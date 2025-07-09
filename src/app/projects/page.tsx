export default function Projects() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="space-y-6">
          <div className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">AI Visualizer</h2>
            <p className="mt-2 text-gray-700">
              Real-time audio-reactive visuals built using fractal shaders and beat detection.
            </p>
            <a
              href="https://github.com/your-username/ai-visualizer"
              className="text-blue-600 hover:underline mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          <div className="border p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Handwriting OCR</h2>
            <p className="mt-2 text-gray-700">
              CNN-LSTM model trained on IAM dataset to recognize handwritten text.
            </p>
            <a
              href="https://github.com/your-username/ocr-model"
              className="text-blue-600 hover:underline mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
