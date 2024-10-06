'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Script from 'next/script';

const WEBHOOK_URL = 'https://hook.eu2.make.com/el8vg2h1rdgkfwowj34ty57fp27wwek0';
const RECAPTCHA_SITE_KEY = '6LekVFkqAAAAADHNxX_iSsJbOL9cLLbg8aRU1y_A';
const SUBMIT_DELAY = 2000; // 2 sekundy opóźnienia

// Definicja typu dla grecaptcha
interface ReCaptchaV3 {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

declare global {
  interface Window {
    grecaptcha: ReCaptchaV3;
  }
}

const ContactForm: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Nowe pole honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ subject?: string; message?: string }>({});
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const lastSubmitTime = useRef<number>(0);

  const validateForm = () => {
    const newErrors: { subject?: string; message?: string } = {};
    
    if (!subject) {
      newErrors.subject = 'Proszę wybrać temat';
    }

    if (!message.trim()) {
      newErrors.message = 'Proszę wpisać wiadomość';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Wiadomość musi zawierać co najmniej 10 znaków';
    } else if (message.trim().length > 1000) {
      newErrors.message = 'Wiadomość nie może przekraczać 1000 znaków';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sanitizeInput = (input: string) => {
    // Podstawowa sanityzacja - usuwanie tagów HTML
    return input.replace(/<[^>]*>?/gm, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!recaptchaLoaded) {
      setSubmitStatus('error');
      return;
    }

    // Sprawdzenie pola honeypot
    if (honeypot) {
      console.log('Potential bot detected');
      setSubmitStatus('error');
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime.current < SUBMIT_DELAY) {
      console.log('Submitting too quickly');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Symulacja opóźnienia
      await new Promise(resolve => setTimeout(resolve, SUBMIT_DELAY));

      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {action: 'submit'});
      
      const sanitizedMessage = sanitizeInput(message);
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, message: sanitizedMessage, recaptchaToken: token }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubject('');
        setMessage('');
        lastSubmitTime.current = Date.now();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        onLoad={() => setRecaptchaLoaded(true)}
      />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Pole honeypot - ukryte dla użytkowników, ale widoczne dla botów */}
        <div style={{display: 'none'}}>
          <label htmlFor="honeypot">Leave this field empty</label>
          <input
            type="text"
            id="honeypot"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Pozostałe pola formularza */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
            Temat
          </label>
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border-red-500' : ''}`}
            required
          >
            <option value="">Wybierz temat</option>
            <option value="automation">Automatyzacja</option>
            <option value="consultation">Konsultacja</option>
            <option value="service-request">Usługa</option>
          </select>
          {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Twoja wiadomość..."
            required
          ></textarea>
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
        </div>
        <Button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
        </Button>
        {submitStatus === 'success' && (
          <p className="mt-4 text-green-500">Wiadomość została wysłana pomyślnie!</p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-500">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.</p>
        )}
      </form>
    </>
  );
};

export default ContactForm;