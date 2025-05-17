
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  // For future projects filtering
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built with Next.js and Tailwind CSS with a modern, responsive design showcasing skills and projects.",
      image: "/placeholder.svg", // Using the placeholder for now
      tags: ["Next.js", "Tailwind CSS"],
      category: "web",
      link: "#",
    }
  ];

  // Placeholder for future projects
  const placeholderProjects = [
    { category: "web" },
    { category: "app" },
  ];

  const allProjects = [...projects, ...placeholderProjects];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-neon/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-neon/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">
            Showcasing my latest projects and work.
          </p>
        </div>
        
        {/* Filter buttons - will be more useful when more projects are added */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'web', 'app', 'design'].map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={cn(
                activeFilter === category 
                  ? "bg-neon text-black hover:bg-neon/90" 
                  : "border-white/10 text-white/70 hover:bg-white/5 hover:text-white",
                "capitalize"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Real project */}
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-card border border-white/5 rounded-lg overflow-hidden group",
                "hover:border-neon/30 transition-all duration-300",
                "hover-glow"
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-neon hover:text-white transition-colors"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          
          {/* Placeholder projects */}
          {placeholderProjects.map((_, index) => (
            <div 
              key={`placeholder-${index}`} 
              className={cn(
                "bg-card border border-dashed border-white/10 rounded-lg flex flex-col items-center justify-center py-12 px-6",
                "text-center text-white/40 space-y-4"
              )}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                  />
                </svg>
              </div>
              <p className="font-medium text-lg">Future Project</p>
              <p className="text-sm">Coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
