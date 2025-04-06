
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FraudSectionProps {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

const FraudSection: React.FC<FraudSectionProps> = ({ id, title, description, content }) => {
  return (
    <section id={id} className="py-12 scroll-mt-20">
      <Card className="border-dark-accent/20 bg-dark-navy/50 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-white">{title}</CardTitle>
          <CardDescription className="text-gray-300 text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-gray-200 space-y-4">
          {content}
        </CardContent>
      </Card>
    </section>
  );
};

export default FraudSection;
