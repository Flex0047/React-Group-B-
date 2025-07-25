import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useCart } from "../context/CartContext"

const CoursesPage = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const { addToCart } = useCart()

  const categories = ["All", "Programming", "Design", "Business", "Data Science", "Marketing"]

  const courses = [
    {
      id: "web-dev",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 2341,
      duration: "12 weeks",
      level: "Beginner",
      price: 199,
      category: "Programming",
      badge: "Bestseller",
      badgeColor: "bg-red-500"
    },
    {
      id: "data-science",
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.9,
      reviews: 1876,
      duration: "10 weeks",
      level: "Intermediate",
      price: 299,
      category: "Data Science",
      badge: "New",
      badgeColor: "bg-green-500"
    },
    {
      id: "ux-ui",
      title: "UX/UI Design Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      reviews: 1523,
      duration: "8 weeks",
      level: "Beginner",
      price: 149,
      category: "Design",
      badge: "Popular",
      badgeColor: "bg-purple-500"
    },
    {
      id: "react-advanced",
      title: "Advanced React Development",
      instructor: "John Smith",
      rating: 4.6,
      reviews: 987,
      duration: "6 weeks",
      level: "Advanced",
      price: 249,
      category: "Programming",
      badge: "Hot",
      badgeColor: "bg-orange-500"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Strategy",
      instructor: "Lisa Wang",
      rating: 4.5,
      reviews: 1234,
      duration: "8 weeks",
      level: "Intermediate",
      price: 179,
      category: "Marketing",
      badge: "Trending",
      badgeColor: "bg-blue-500"
    },
    {
      id: "business-analytics",
      title: "Business Analytics & Intelligence",
      instructor: "Mark Thompson",
      rating: 4.7,
      reviews: 856,
      duration: "10 weeks",
      level: "Intermediate",
      price: 229,
      category: "Business",
      badge: "Featured",
      badgeColor: "bg-indigo-500"
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (course) => {
    addToCart(course)
    setSuccessMessage(`"${course.title}" has been added to your cart!`)
    
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive collection of courses designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8 flex items-center justify-center max-w-md mx-auto">
            <i className="fas fa-check-circle mr-2"></i>
            {successMessage}
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="fas fa-play-circle text-4xl mb-2"></i>
                    <p className="text-sm">Course Preview</p>
                  </div>
                </div>
                <div className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {course.badge}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">By {course.instructor}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-600">{course.duration}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                  <button 
                    onClick={() => handleAddToCart(course)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default CoursesPage

