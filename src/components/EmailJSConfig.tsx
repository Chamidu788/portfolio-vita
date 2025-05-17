
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

interface EmailJSConfigProps {
  serviceId: string;
  templateId: string;
  userId: string;
}

const EmailJSConfig: React.FC<EmailJSConfigProps> = ({ serviceId, templateId, userId }) => {
  useEffect(() => {
    // Initialize EmailJS with user ID
    emailjs.init(userId);
    console.log('EmailJS initialized');
  }, [userId]);

  return null; // This component doesn't render anything
};

export default EmailJSConfig;
