
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-neon/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* About image/visual */}
          <div className="md:w-2/5 order-2 md:order-1">
            <div className="relative">
              <div className="p-1 border-2 border-neon/50 rounded-lg overflow-hidden hover-glow">
                <div className="relative bg-gradient-to-br from-black to-gray-900 p-6 rounded-md h-full">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-white/50 text-xs font-mono">about.js</div>
                  </div>
                  
                  <div className="font-mono text-sm">
                    <p className="text-white/60">
                      <span className="text-pink-400">const</span> <span className="text-neon">developer</span> <span className="text-blue-400">=</span> {"{"}
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">name:</span> <span className="text-orange-300">'Chamindu Kavishka'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">title:</span> <span className="text-orange-300">'Full-Stack Developer'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">experience:</span> <span className="text-blue-300">6</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">education:</span> <span className="text-orange-300">'IBA Campus, IT'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">specialties:</span> [
                    </p>
                    <p className="pl-8">
                      <span className="text-orange-300">'JavaScript'</span>,
                      <span className="text-orange-300">'React'</span>,
                      <span className="text-orange-300">'Next.js'</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-orange-300">'Node.js'</span>,
                      <span className="text-orange-300">'Laravel'</span>
                    </p>
                    <p className="pl-4">],</p>
                    <p className="text-white/60">{"}"}</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-neon/30 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-neon/30 rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* About content */}
          <div className="md:w-3/5 order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-20 h-1 bg-neon mt-2 mb-6"></div>
            </div>
            
            <div className="space-y-4 text-white/80">
              <p>
                I have over 6 years of experience in building web applications, with a strong focus on JavaScript technologies across the full stack, including Node.js, React, and Next.js. I've worked with cloud platforms and have deployed several applications to production environments.
              </p>
              <p>
                In addition to web development, I bring hands-on experience in hardware and software troubleshooting, along with a solid foundation in problem-solving, teamwork, and delivering reliable technical solutions.
              </p>
            </div>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <div className={cn(
                "border-l-2 border-neon pl-6 py-3",
                "bg-gradient-to-r from-secondary to-transparent",
                "rounded-r-lg"
              )}>
                <h4 className="text-lg font-medium">IBA Campus</h4>
                <p className="text-white/70">
                  Pursuing a degree in Information Technology, covering software development, networking, database management, and system analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
