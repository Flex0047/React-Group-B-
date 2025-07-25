const Testimonials = () => {
  const testimonials = [
    {
      name: "Sally Manson",
      role: "Software Developer at TechCorp",
      content: "The web development course completely transformed my career. The instructors were knowledgeable and the hands-on projects were incredibly valuable.",
      rating: 5,
      avatar: "/src/assets/Img/Render-_Sam_1.jpg"
    },
    {
      name: "David Chen",
      role: "Data Analyst at DataFlow Inc",
      content: "I learned more in 12 weeks than I did in years of self-study. The structured approach and mentorship made all the difference.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      role: "UX Designer at Creative Studio",
      content: "The design course gave me the confidence and skills to transition into UX design. Now I'm working at my dream company!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from learners who have transformed their careers with our courses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

