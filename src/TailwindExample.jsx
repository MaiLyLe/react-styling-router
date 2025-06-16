function TailwindExample() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Styling with Tailwind CSS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Using Tailwind classes */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            Tailwind CSS Card
          </h3>
          <p className="text-gray-600 leading-relaxed">
            This card is styled using Tailwind's utility classes. Notice how we can
            quickly add styles like padding, colors, and hover effects directly in
            the HTML.
          </p>
        </div>

        {/* Card 2 - Using Tailwind classes */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md p-6 text-white">
          <h3 className="text-xl font-semibold mb-3">
            Another Tailwind Card
          </h3>
          <p className="leading-relaxed">
            This card uses Tailwind's gradient utilities and different text colors.
            The styling is done entirely through class names!
          </p>
        </div>
      </div>
    </div>
  )
}

export default TailwindExample 