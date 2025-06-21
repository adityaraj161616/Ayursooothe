
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent Successfully! 🌿",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Card className="border-ayur-stone/20 shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-ayur-forest flex items-center gap-2">
          <Send className="w-5 h-5" />
          Send us a Message
        </CardTitle>
        <CardDescription className="text-ayur-moss">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your full name"
              className="border-ayur-stone/30 focus:border-ayur-sage"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className="border-ayur-stone/30 focus:border-ayur-sage"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="How can we help you?"
              className="border-ayur-stone/30 focus:border-ayur-sage min-h-[120px]"
              rows={5}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-ayur-sage hover:bg-ayur-sage/90 text-white"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
