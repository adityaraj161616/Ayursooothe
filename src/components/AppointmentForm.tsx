
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatmentType: '',
    preferredDate: '',
    preferredTime: '',
    healthConcern: ''
  });

  const treatmentOptions = [
    'General Consultation',
    'Panchakarma',
    'Abhyanga',
    'Shirodhara',
    'Kizhi (Herbal Poultice)',
    'Nasya',
    'Udvartana',
    'Marma Therapy',
    'Rasayana (Rejuvenation)',
    'Basti (Medicated Enema)'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.treatmentType || !formData.preferredDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Appointment Requested Successfully! 🌿",
      description: "We'll contact you within 24 hours to confirm your appointment details. Thank you for choosing AyurSoothe!",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatmentType: '',
      preferredDate: '',
      preferredTime: '',
      healthConcern: ''
    });
  };

  return (
    <Card className="max-w-2xl mx-auto border-ayur-stone/20 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-serif text-2xl text-ayur-forest flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6" />
          Book Your Appointment
        </CardTitle>
        <CardDescription className="text-ayur-moss">
          Begin your healing journey with a personalized consultation
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <User className="w-5 h-5 text-ayur-sage" />
              <h3 className="font-semibold text-ayur-forest">Personal Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="border-ayur-stone/30 focus:border-ayur-sage"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  className="border-ayur-stone/30 focus:border-ayur-sage"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                className="border-ayur-stone/30 focus:border-ayur-sage"
                required
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="w-5 h-5 text-ayur-sage" />
              <h3 className="font-semibold text-ayur-forest">Appointment Details</h3>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="treatment">Treatment Type *</Label>
              <Select value={formData.treatmentType} onValueChange={(value) => handleInputChange('treatmentType', value)}>
                <SelectTrigger className="border-ayur-stone/30 focus:border-ayur-sage">
                  <SelectValue placeholder="Select a treatment" />
                </SelectTrigger>
                <SelectContent>
                  {treatmentOptions.map((treatment) => (
                    <SelectItem key={treatment} value={treatment}>
                      {treatment}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  className="border-ayur-stone/30 focus:border-ayur-sage"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger className="border-ayur-stone/30 focus:border-ayur-sage">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Health Concern */}
          <div className="space-y-2">
            <Label htmlFor="concern">Health Concern or Message</Label>
            <Textarea
              id="concern"
              value={formData.healthConcern}
              onChange={(e) => handleInputChange('healthConcern', e.target.value)}
              placeholder="Please describe your health concerns or any specific requirements..."
              className="border-ayur-stone/30 focus:border-ayur-sage min-h-[100px]"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-ayur-sage hover:bg-ayur-sage/90 text-white font-semibold py-3 text-lg"
          >
            Request Appointment
          </Button>
          
          <p className="text-sm text-ayur-moss text-center">
            * Required fields. We'll contact you within 24 hours to confirm your appointment.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default AppointmentForm;
