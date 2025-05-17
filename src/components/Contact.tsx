
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import emailjs from 'emailjs-com';
import { Mail, Phone, Github } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_USER_ID' // replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Email successfully sent!', response);
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        toast({
          title: "Error sending message",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-3">
            Have a project in mind? Let's talk about how we can work together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-neon">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:chamidukawi@gmail.com" className="text-white/70 hover:text-neon transition-colors">
                    chamidukawi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-neon">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:0764907961" className="text-white/70 hover:text-neon transition-colors">
                    0764907961
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-lg text-neon">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/camiya23" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-neon transition-colors"
                  >
                    github.com/camiya23
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="#"
                  className={cn(
                    "w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/70",
                    "hover:text-neon hover:bg-secondary/80 transition-colors"
                  )}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#"
                  className={cn(
                    "w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/70",
                    "hover:text-neon hover:bg-secondary/80 transition-colors"
                  )}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 013.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="#"
                  className={cn(
                    "w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white/70",
                    "hover:text-neon hover:bg-secondary/80 transition-colors"
                  )}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.957 0 1.742.81 1.742 1.802 0 .858-.571 1.564-1.377 1.752.201.49.324 1.013.324 1.554a5.046 5.046 0 01-2.027 4.052A5.054 5.054 0 0112 21a5.073 5.073 0 01-4.844-2.61 5.08 5.08 0 01-.581-2.334c0-.522.108-1.028.3-1.486a1.875 1.875 0 01-1.186-1.751c0-.992.784-1.802 1.732-1.802.482 0 .908.19 1.184.49 1.188-.865 2.854-1.42 4.693-1.493l.897-4.23a.25.25 0 01.334-.172l2.248.76c.218-.394.628-.63 1.062-.63zm-.964 5.31a1.268 1.268 0 00-1.055 1.897 1.267 1.267 0 001.908-.29 1.266 1.266 0 00-.853-2.207zm-5.37-3.09l-2.2-1.31a1.252 1.252 0 00-1.147 0l-2.15 1.31a1.26 1.26 0 00-.627 1.034c0 .66-.814 1.019-1.361.643l-1.362.647c-.553-.375-1.354-.016-1.354.643a1.26 1.26 0 00.651 1.114l2.1 1.27a1.26 1.26 0 001.202 0l2.1-1.27a1.26 1.26 0 00.65-1.114c0-.66-.814-1.019-1.361-.643l-1.362-.647c-.553.375-1.354.016-1.354-.643 0-.375.195-.722.514-.909l2.35-1.63-.115-.04a1.262 1.262 0 01-.637-1.106c0-.655.783-1.016 1.331-.641l1.313.626c.552-.375 1.354-.016 1.354.642 0 .375-.195.722-.514.91l-2.35 1.63.115.04a1.262 1.262 0 01.637 1.106zM12 13.5a2.62 2.62 0 00-2.625 2.625A2.62 2.62 0 0012 18.75a2.62 2.62 0 002.625-2.625A2.62 2.62 0 0012 13.5z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-white/5 rounded-lg p-6 md:p-8 hover:border-neon/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-white/10 focus:border-neon text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-white/10 focus:border-neon text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary border-white/10 focus:border-neon text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                className="bg-neon text-black hover:bg-neon/90 w-full hover-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
