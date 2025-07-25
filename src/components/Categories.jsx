const Categories = () => {
  const categories = [
    {
      icon: "fas fa-code",
      title: "Programming",
      description: "Learn to code with modern languages and frameworks",
      courseCount: "120+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "fas fa-palette",
      title: "Design",
      description: "Master visual design, UX/UI, and creative tools",
      courseCount: "85+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "fas fa-chart-line",
      title: "Business",
      description: "Develop business skills and entrepreneurship",
      courseCount: "95+",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "fas fa-database",
      title: "Data Science",
      description: "Analyze data and build machine learning models",
      courseCount: "60+",
      color: "from-red-500 to-red-600"
    },
    {
      icon: "fas fa-bullhorn",
      title: "Marketing",
      description: "Digital marketing, SEO, and social media strategies",
      courseCount: "70+",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: "fas fa-camera",
      title: "Photography",
      description: "Capture stunning photos and master editing",
      courseCount: "45+",
      color: "from-pink-500 to-pink-600"
    },
  ]

  return (
    <section className="py-20 px-6 bg-white" id="categories">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Course Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore courses by subject and find what interests you
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
              <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 bg-[url(/src/assets/Img/icon.png)]  bg-cover">
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{category.description}</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{category.courseCount}</span>
                  <span className="text-gray-600">courses</span>
                </div>
                <button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                  Explore Courses
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

