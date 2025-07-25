import Header from "../components/Header"
import Hero from "../components/Hero"
import FeaturedCourses from "../components/FeaturedCourses"
import Categories from "../components/Categories"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}

export default HomePage

