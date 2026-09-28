import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSelector from "@/components/ServiceSelector";
export default function Home(){
  return(
    <main className="w-full pt-20 bg-surface flex-1">
     
        <Navbar />
        <div className="w-full max-w-8xl px-4 mx-auto sm:px-8 my-6">

          <div className=" bg-[#29428f] text-white p-8 rounded-2xl flex flex-col md:items-between md:items-center gap-6">
            <div className="space-y-3 text-left"> 
              <span className="text-xs bg-white/15 px-3 pt-1 rounded-full font-semibold text-blue-200">    
                Afiliación de prestadores
              </span>
               <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight text-left">
          <br />        
          ¿Eres mecánico, vulcanizador o tienes grúa? 
          <br />
         
        </h1>
          <p className="text-primary font-extrabold">
            Únete a nuestra red de profesionales
             <br />
            <br />
          </p>

            </div>
          </div>
       
        </div>
        <ServiceSelector />
      <Hero />
    </main>
  );
}