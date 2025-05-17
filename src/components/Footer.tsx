
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <a href="#home" className="text-3xl font-bold text-neon">
              CK<span className="text-white">.</span>
            </a>
          </div>
          
          <div className="max-w-md mx-auto mb-8 text-white/60 text-sm">
            <p>
              Full-stack developer specializing in JavaScript technologies, creating modern and 
              responsive web applications with clean code and creative vision.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/camiya23" 
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center",
                "text-white/70 hover:text-neon hover:border-neon transition-all duration-300"
              )}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#"
              className={cn(
                "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center",
                "text-white/70 hover:text-neon hover:border-neon transition-all duration-300"
              )}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a 
              href="#"
              className={cn(
                "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center",
                "text-white/70 hover:text-neon hover:border-neon transition-all duration-300"
              )}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.58 1.81-.9 2.83-.9.97 0 1.89.3 2.66.81.76.51 1.29 1.19 1.61 2.03a4.25 4.25 0 010 2.62c-.32.84-.85 1.52-1.61 2.03a4.186 4.186 0 01-2.66.81 4.26 4.26 0 01-2.83-.9V16H9v-4H6V9h1.56C7.89 8.13 9.45 7 11.42 7c1.45 0 2.79.55 3.79 1.47l-.71.7c-.81-.73-1.89-1.18-3.08-1.18-.97 0-1.87.3-2.63.81a4.25 4.25 0 00-1.61 2.08 4.13 4.13 0 00-.25 1.45c0 .5.08.98.25 1.43.17.45.4.85.7 1.21.3.35.66.64 1.08.85.43.21.88.32 1.37.32.42 0 .83-.08 1.23-.22.4-.15.76-.36 1.09-.63v-1.73h-2.3v-.98h3.3v3.25h-.02z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="text-white/40 text-sm">
            <p>© {currentYear} Chamindu Kavishka. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
