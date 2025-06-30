export default function FreeTrial() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f9f9f9] py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-sm font-medium text-indigo-600 mb-2">
          Start building today!
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start your 7-day free trial
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Experience the Stellar difference and unlock the true potential.
        </p>

        {/* Form */}
        <form
          
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="w-full md:w-80 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Get Instant Access
          </button>
        </form>

        {/* Benefits */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-indigo-600" />
            <span>Free 7-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-indigo-600" />
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
