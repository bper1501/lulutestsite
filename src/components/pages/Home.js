import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import SocialMedia from '../SocialMedia';
import Process from '../Process';
import Footer from '../Footer';


function Home () {
  return(
    <>
      <HeroSection />
      <Cards />
      <SocialMedia />
      <Process/>
      <Footer />

    </>
  )
}

export default Home;