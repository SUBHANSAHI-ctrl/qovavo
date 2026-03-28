'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessLink: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            businessLink: '',
            message: '',
          });
        }, 3000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-900 border border-green-700 rounded-xl p-6 text-center">
        <h3 className="text-green-400 text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-green-300">We'll get back to you at team@qovavo.com soon!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="businessLink" className="block text-sm font-medium text-gray-300 mb-2">
          Business Website (Optional)
        </label>
        <input
          type="url"
          id="businessLink"
          name="businessLink"
          value={formData.businessLink}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="https://yourbusiness.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          What are you looking for? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#1e293b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
          placeholder="Tell us about your project, collaboration ideas, or what you need help with..."
        />
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm mb-4">
          We'll respond to you at <a href="mailto:team@qovavo.com" className="text-blue-400 hover:text-blue-300">team@qovavo.com</a>
        </p>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-md font-medium hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 w-full sm:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;