
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Responsive and modern interfaces using Next.js and Tailwind CSS.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Responsive user interfaces",
        "Interactive UI components",
        "Modern frameworks and libraries",
        "Optimized for performance",
      ],
    },
    {
      title: "Backend Development",
      description: "Robust backend logic and APIs with Laravel and Node.js.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: [
        "RESTful API development",
        "Database architecture & design",
        "Server configuration",
        "Authentication & authorization",
      ],
    },
    {
      title: "Deployment",
      description: "Full deployment solutions for modern web applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      features: [
        "CI/CD pipelines setup",
        "Cloud platform configuration",
        "Performance optimization",
        "Monitoring & maintenance",
      ],
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">
            Expert solutions to bring your digital projects to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={cn(
                "bg-card border-white/5 text-white relative overflow-hidden group",
                "hover:border-neon/30 transition-all duration-500",
              )}
            >
              {/* Gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="pb-3">
                <div className="text-neon mb-4 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-white/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neon flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Corner decorative element */}
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full border border-neon/20 group-hover:border-neon/40 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
