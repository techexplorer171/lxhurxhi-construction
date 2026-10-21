import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Hero from './Home_page/hero/hero'
import Trust from './Home_page/Trust/TrustBar'
import ServicesGrid from './Home_page/ServicesGrid/ServicesGrid'
import FeaturedProjects from './Home_page/FeaturedProjects/FeaturedProjects'
import QuoteForm from './Home_page/QuoteForm/QuoteForm'
import {Federo} from "next/dist/compiled/@next/font/dist/google";
import Highlights from './Home_page/Highlights/Highlights'
import QuoteForm2 from './Home_page/QuoteForm/construction_free_quote_form'
import QuoteForm3 from './Home_page/QuoteForm/QuoteForm'

const Home=()=> {
  return (
    <div >
        <Navbar/>

        <Hero/>
        <Trust/>
        <Highlights/>
        <ServicesGrid/>
        <FeaturedProjects/>

      <QuoteForm3/>

      <Footer/>

    </div>
  );
}
export default Home;


