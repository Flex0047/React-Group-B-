import { Link } from "react-router-dom"
import logo from "../assets/Img/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo || "/placeholder.svg"} alt="LearnSpace Logo" className="h-8 mr-3" />
            </div>
            <p className="text-blue-200 leading-relaxed mb-6">
              Empowering learners worldwide with high-quality, accessible education. Join our community and transform your career with expert-led courses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-blue-200 hover:text-white transition-colors">All Courses</Link></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Programming</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Business</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Data Science</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-blue-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-blue-200 mb-6">
              Get the latest courses and learning tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-blue-100 border border-blue-700 text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © 2024 LearnSpace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

