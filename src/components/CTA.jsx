import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of students who are already advancing their careers with our expert-led courses. 
          Start your journey today and unlock your potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link 
            to="/courses" 
            className="bg-blue-600 text-blue-600 hover:bg-gray-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg text-white hover:text-black border-2"
          >
            Get Started Now
          </Link>
          <Link 
            to="/courses" 
            className="bg-yellow-400 border-2 border-white text-blue-500 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Browse Courses
          </Link>
        </div>
        
        <p className="text-sm text-blue-200">
          Need help choosing the right course? 
          <a href="#contact" className="text-yellow-300 hover:text-yellow-200 ml-1 underline">
            Contact our learning advisors
          </a>
        </p>
      </div>
    </section>
  )
}

export default CTA

