"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const FeaturedCourses = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { addToCart } = useCart()

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
      badge: "Bestseller",
      badgeClass: "badge-bestseller"
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
      badge: "New",
      badgeClass: "badge-new"
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
      badge: "Popular",
      badgeClass: "badge-popular"
    },
  ]

  const handleAddToCart = (course) => {
    addToCart(course)
    setSuccessMessage(`"${course.title}" has been added to your cart!`)
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("")
    }, 3000)
  }

  return (
    <>
      <section className="featured-courses-section" id="featured-courses">
        <div className="featured-courses-header">
          <h2>Featured Courses</h2>
          <p>
            Discover our most popular and highly-rated courses
          </p>
        </div>
        
        {successMessage && (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            {successMessage}
          </div>
        )}
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image-container">
                <img 
                  src={"/src/assets/Img/Online-School-is-better-alternative-768x512.webp"} 
                  alt="Course Image" 
                  className="course-image"
                />
                <div className={`course-badge ${course.badgeClass}`}>
                  {course.badge}
                </div>
              </div>
              
              <div className="course-content">
                <h3 className="course-title">
                  {course.title}
                </h3>
                <p className="course-instructor">By {course.instructor}</p>
                
                <div className="course-rating">
                  <div className="course-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < Math.floor(course.rating) ? '' : 'text-gray-300'}`}></i>
                    ))}
                  </div>
                  <span className="course-rating-value">{course.rating}</span>
                  <span className="course-reviews">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                
                <div className="course-meta">
                  <span className="course-duration">{course.duration}</span>
                  <span className="course-level">
                    {course.level}
                  </span>
                </div>
                
                <div className="course-actions">
                  <span className="course-price">${course.price}</span>
                  <button 
                    onClick={() => handleAddToCart(course)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-courses-link">
          <Link to="/courses">
            View All Courses 
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}

export default FeaturedCourses

