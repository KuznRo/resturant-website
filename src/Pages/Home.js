import About from "../Components/About";
import HomeMenu from "../Components/HomeMenu";
import Recommended from "../Components/Recommended";
import Testimonials from "../Components/Testimonials";
import Hero from "./Hero";


function Home() {
  return (
    <div name='/' className="w-full">
    <Hero />
    <HomeMenu />
    <About />
    <Recommended />
    <Testimonials />
    </div>
  );
}

export default Home;
