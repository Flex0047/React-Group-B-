import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-50 px-6 ">
      <div className="bg-[url(./src/assets/Img/Element.png)] bg-cover bg-center">
        <div className="max-w-7xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn New Skills,
                <br />
                Advance Your
                <br />
                Career
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                Join thousands of learners who have transformed their careers
                with our expert-led courses. Start your learning journey today
                with industry-relevant skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/courses" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 text-center "
                >
                  Get Started
                </Link>
                <Link 
                  to="/courses" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 text-center"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
            <div className="relative ">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl ">
                <div className="aspect-video bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 bg-[url(./src/assets/Img/29493-scaled.jpg)] bg-cover  bg-center ">
                  {/* Placeholder for hero image/video */}
                  <div className="w-full h-full flex items-center justify-center text-white/60">
                    <i className="fas fa-play-circle text-6xl"></i>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                50k+ Students
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                95% Success Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero