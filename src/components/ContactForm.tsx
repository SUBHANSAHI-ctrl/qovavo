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

  const handleSubmit = async (e: { preventDefault(): void }) => {
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
      <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-xl p-6 text-center">
        <h3 className="text-emerald-400 text-xl font-semibold mb-2">Thank You!</h3>
        <p className="text-emerald-500/80">We&apos;ll get back to you at team@qovavo.com soon!</p>
      </div>
    );
  }

  const inputClass = "w-full px-3.5 py-2.5 bg-[#0A0C16] border border-[#1E2844] rounded-lg text-[#DDE4F0] placeholder-[#3A4A6A] focus:outline-none focus:border-[#4361EE] focus:ring-1 focus:ring-[#4361EE]/30 text-sm transition-colors";
  const labelClass = "block text-sm font-medium text-[#A8B4CC] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="businessLink" className={labelClass}>
          Business Website <span className="text-[#4A5880] font-normal">(Optional)</span>
        </label>
        <input
          type="url"
          id="businessLink"
          name="businessLink"
          value={formData.businessLink}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://yourbusiness.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>What are you looking for? *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project, collaboration ideas, or what you need help with..."
        />
      </div>

      <div>
        <p className="text-[#4A5880] text-sm mb-4">
          We&apos;ll respond to you at{' '}
          <a href="mailto:team@qovavo.com" className="text-[#4361EE] hover:text-[#6681F4] transition-colors">
            team@qovavo.com
          </a>
        </p>
        <button
          type="submit"
          className="bg-[#4361EE] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3451D1] transition-colors w-full"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
