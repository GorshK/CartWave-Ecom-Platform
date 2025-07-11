
import { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    address: "123 Commerce Street, Business District, City 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@cartwave.com"
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-600 hover:text-brand-600 transition-colors">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-600">Contact Information</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{contactInfo.address}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-brand-600 hover:text-brand-700 transition-colors text-sm"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-brand-600 hover:text-brand-700 transition-colors text-sm"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
