import 'bootstrap/dist/css/bootstrap.css';
import './page.css'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className='section'>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}
