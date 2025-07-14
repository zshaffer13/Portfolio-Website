export default function Contact() {
  return (
    <main className="min-h-screen p-8 text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        <form
          className="space-y-6"
          action="https://formsubmit.co/zshaffer13@gmail.com"
          method="POST"
        >
          {/* Optional hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://your-site.vercel.app/thanks" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
