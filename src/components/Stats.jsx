const Stats = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Active Students",
      icon: "fas fa-users",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "500+",
      label: "Expert Instructors",
      icon: "fas fa-chalkboard-teacher",
      color: "from-green-500 to-green-600"
    },
    {
      number: "1,200+",
      label: "Courses Available",
      icon: "fas fa-book-open",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: "fas fa-trophy",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-800 via-blue-800 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

