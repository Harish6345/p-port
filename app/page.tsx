import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";


export default function Page() {


return(
  <div className="font-Nunito_Sans px-4 md:px-[10%] ">

    
    <Hero/>
    <About/>
    <Services/>
   <Work/>
   <Contact/>
  </div>
)

}