"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Honeypot field
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! Thank you for reaching out.'
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <motion.div
        className="relative w-full h-[22vh] md:h-[32vh] pt-20 md:pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/images/Jaleel Banner small.jpg"
            alt="Jaleel Kotun banner - Elite MLS NEXT academy forward and winger"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact
          </motion.h1>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12" aria-label="Contact information and form">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-sans">
              For inquiries, collaborations, or media requests, please use the contact
              form or reach out through the provided channels.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 font-sans">jkotun48@gmail.com</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-gray-900 mb-3">Social Media</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/jkotun_48/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-navy hover:text-navy/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={28} />
                    <span className="font-sans text-sm">Instagram</span>
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/@jkotun_48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-navy hover:text-navy/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Youtube size={28} />
                    <span className="font-sans text-sm">YouTube</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{
                position: 'absolute',
                left: '-9999px',
                width: '1px',
                height: '1px',
                opacity: 0,
                pointerEvents: 'none'
              }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-sans font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent font-sans text-black disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-sans font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent font-sans text-black disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-sans font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={status.type === 'loading'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent resize-none font-sans text-black disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your message"
              />
            </div>

            {/* Status Messages */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg font-sans ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : status.type === 'error'
                    ? 'bg-red-50 text-red-800 border border-red-200'
                    : ''
                }`}
              >
                {status.message}
              </motion.div>
            )}
            
            <motion.button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full px-6 py-3 bg-navy text-white font-display font-semibold rounded-lg hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={status.type !== 'loading' ? { scale: 1.02 } : {}}
              whileTap={status.type !== 'loading' ? { scale: 0.98 } : {}}
            >
              {status.type === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}