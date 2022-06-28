import logo from '../logo.svg';
import Navbar from '../components/landing/navbar';
import Hero from '../components/landing/hero';
import Why from '../components/landing/why';
import Team from '../components/landing/team';
import Footer from '../components/landing/footer';
const Landing = () => {
  return (
    
    <div className="bg-[#282828] h-[100%] w-[100%]">
      
      <div className='flex justify-end z-10 '>
        <span className="bg-[#808080] absolute h-[80%] w-[40%] rounded-bl-[90%]"/>
      </div>

      <div className='relative z-20 font-Inter text-white'>
          <Navbar/>
          <Hero/>
          <Why/>
          <Team/>
          <Footer/>
      </div>
    </div>
  );
}

export default Landing;