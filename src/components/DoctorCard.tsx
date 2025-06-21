
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface DoctorCardProps {
  name: string;
  designation: string;
  specialties: string[];
  experience: string;
  image: string;
  education?: string;
}

const DoctorCard = ({ name, designation, specialties, experience, image, education }: DoctorCardProps) => {
  return (
    <Card className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl">
      <CardHeader className="text-center pb-4">
        <div className="relative mx-auto mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
            <img 
              src={image} 
              alt={`Dr. ${name} - Ayurvedic Practitioner`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        
        <h3 className="font-serif text-xl font-semibold text-emerald-900">{name}</h3>
        <p className="text-emerald-700 font-medium">{designation}</p>
        {education && (
          <p className="text-sm text-stone-600">{education}</p>
        )}
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-emerald-800 mb-2">Experience:</p>
          <p className="text-sm text-stone-600">{experience}</p>
        </div>
        
        <div>
          <p className="text-sm font-semibold text-emerald-800 mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          asChild
        >
          <Link to="/appointment">Book Appointment</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
