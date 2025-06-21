import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface TreatmentCardProps {
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
  price?: string;
}

const TreatmentCard = ({ title, description, benefits, duration, image, price }: TreatmentCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white rounded-2xl">
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-2xl text-emerald-900 group-hover:text-emerald-700 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-stone-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-sm text-emerald-800 mb-3">Key Benefits:</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-stone-600">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-stone-600">
              <Clock size={16} className="text-emerald-600" />
              <span className="text-sm">{duration}</span>
            </div>
            
            {price && (
              <div className="text-xl font-semibold text-emerald-700">
                {price}
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-4">
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            asChild
          >
            <Link to="/appointment">Book Treatment</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TreatmentCard;
