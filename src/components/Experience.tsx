
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            My journey in the tech world and the experiences that have shaped my skills.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon/50 to-neon/5"></div>
            
            {/* Experience item */}
            <div className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <div 
                  className={cn(
                    "bg-card border border-white/5 p-6 rounded-lg shadow-lg relative",
                    "hover:border-neon/30 transition-all duration-300 h-full"
                  )}
                >
                  <h3 className="text-xl font-semibold text-neon mb-2">MC Digital Innovate Pvt Ltd</h3>
                  <p className="text-white/60 text-sm mb-4">Fullstack Developer Internship</p>
                  <div className="space-y-3 text-white/80">
                    <p>• Designed, developed, and deployed dynamic web applications.</p>
                    <p>• Contributed to both frontend and backend development.</p>
                    <p>• Participated in real-world projects and collaborated with teams.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 relative flex justify-start md:justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neon rounded-full flex items-center justify-center border-4 border-background shadow-[0_0_15px_rgba(0,255,127,0.5)] z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Future experience placeholder */}
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative flex justify-end md:justify-center order-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary border border-neon/30 rounded-full flex items-center justify-center z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neon/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-2">
                <div 
                  className={cn(
                    "bg-card border border-dashed border-white/10 p-6 rounded-lg relative",
                    "flex items-center justify-center h-32 text-center"
                  )}
                >
                  <p className="text-white/40 italic">Ready for the next opportunity...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
