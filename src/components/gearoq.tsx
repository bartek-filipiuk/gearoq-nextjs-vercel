'use client';

import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

const Gearoq: React.FC = () => {
  const [source, setSource] = useState('organic');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sourceFromUrl = params.get('source');
    if (sourceFromUrl) {
      // Validate and sanitize the source value
      const sanitizedSource = sourceFromUrl.replace(/[^a-zA-Z_]/g, '') || 'organic';
      setSource(sanitizedSource);
      
      // Remove the source parameter from the URL
      params.delete('source');
      const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
      window.history.replaceState({}, '', newUrl);
      
      console.log(`Source parameter detected and sanitized: ${sanitizedSource}`);
    } else {
      console.log('No source parameter detected, using default: organic');
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a spinner or any loading indicator
  }

  return <ContactForm initialSource={source} />;
};

export default Gearoq;