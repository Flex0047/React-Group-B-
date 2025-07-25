"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import Cart from "./Cart"
import logo from "../assets/Img/Logo.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { getCartItemsCount } = useCart()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${mobileMenuOpen ? "block" : "hidden"} flex items-center justify-center`}
        onClick={closeMobileMenu}
      >
        <div className={`bg-white rounded-lg p-6 w-80 max-w-sm transform transition-transform duration-300 ${mobileMenuOpen ? "scale-100" : "scale-95"}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-6">
            <img src={logo || "/placeholder.svg"} alt="LearnSpace Logo" className="h-8" />
            <button className="text-gray-600 hover:text-gray-800" onClick={closeMobileMenu}>
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium" onClick={closeMobileMenu}>
              Courses
            </Link>
            <a
              href="#categories"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("categories")
                closeMobileMenu()
              }}
            >
              Categories
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("testimonials")
                closeMobileMenu()
              }}
            >
              Testimonials
            </a>
            <Link 
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium "
              onClick={(e) => {
                e.preventDefault()
                toggleCart()
                closeMobileMenu()
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              Cart <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs ml-1">{getCartItemsCount()}</span>
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link to="/login" className="bg-yellow-600 text-gray-700 px-4 py-2 rounded-lg text-center" onClick={closeMobileMenu}>Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors" onClick={closeMobileMenu}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-blue-900 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <Link to="/">
            <img src={logo || "/src/assets/Img/Logo.png"} alt="LearnSpace Logo" className="h-8" />
          </Link>
        </div>

        <div className=" md:flex items-center space-x-8 ">
          <Link to="/courses" className="text-white hover:text-yellow-400 font-medium transition-colors">Courses</Link>
          <a
            href="#categories"
            className="text-white hover:text-yellow-400 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("categories")
            }}
          >
            Categories
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-yellow-400 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("testimonials")
            }}
          >
            Testimonials
          </a>
          <Link 
            to="#"
            className="flex items-center gap-2 text-white hover:text-yellow-400 font-medium transition-colors"
            onClick={(e) => {
              e.preventDefault()
              toggleCart()
            }}
          >
            <i className="fas fa-shopping-cart"></i>
            Cart <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs ml-1">{getCartItemsCount()}</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Link to="/login" className="bg-yellow-400 text-white-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Sign Up</Link>
          </div>
        </div>

        <div className="md:hidden" onClick={toggleMobileMenu}>
          <i className="fas fa-bars text-xl text-gray-700"></i>
        </div>
      </nav>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Header

