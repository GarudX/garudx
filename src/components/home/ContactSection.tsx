import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../atoms/Button';
import { GlassCard } from '../molecules/GlassCard';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { TextArea } from '../atoms/TextArea';
import { FiTarget } from 'react-icons/fi';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      // Reset form and submission state
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
      // Here you would typically add a success notification
    }, 1500);
  };
  
  // Service options for the select input
  const serviceOptions = [
    { value: 'aerial-cinematography', label: 'Aerial Cinematography' },
    { value: 'drone-design', label: 'Drone Design & R&D' },
    { value: 'anti-drone', label: 'Anti-Drone Systems' },
    { value: 'training', label: 'FPV Drone Training' },
    { value: 'other', label: 'Other' }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background System - Contact Variation */}
      <div className="absolute inset-0">
        {/* Base dark gradient - same as footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Contact-specific colored gradients - extremely subtle red/orange for urgency/action */}
        <div className="absolute inset-0">
          {/* Primary red-orange gradient for urgency/action - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,#dc2626_0%,transparent_50%)] opacity-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,#ea580c_0%,transparent_50%)] opacity-0.5" />
          
          {/* Orange accents for energy - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#f97316_0%,transparent_45%)] opacity-0.5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#fb923c_0%,transparent_40%)] opacity-0.3" />
          
          {/* Subtle yellow for warmth - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#f59e0b_0%,transparent_30%)] opacity-0.3" />
        </div>

        {/* Enhanced grid system - matching footer style with subtle pop */}
        <div className="absolute inset-0">
          {/* Fine grid pattern - more visible */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Medium grid overlay - more visible */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.06)_1px,transparent_1px)] bg-[size:96px_96px]" />

          {/* Grid fade effects - same as footer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030305_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030305]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" style={{ top: '70%' }} />
        </div>

        {/* Noise texture - exactly like footer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ci8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights - very subtle like footer */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 px-3 py-1 bg-blue-500/10 rounded-full"
              >
                <span className="text-sm md:text-base tracking-widest uppercase font-mono text-blue-500 flex items-center">
                  <FiTarget className="mr-2" />
                  Contact Operations
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-4 font-mono"
              >
                Establish Communication
              </motion.h2>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '6rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-blue-500 rounded-full mb-6"
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-300 max-w-2xl font-mono mb-12"
              >
                Establish secure communications to deploy GarudX tactical drone services for your mission requirements.
              </motion.p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded bg-gray-800 border border-blue-500/40 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-blue-500 text-lg font-mono font-medium uppercase tracking-wide">
                      Command Outpost
                    </h3>
                    <p className="mt-1 text-gray-300 font-mono text-sm">
                      Kathmandu, Nepal <span className="text-blue-500">• ACTIVE</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded bg-gray-800 border border-blue-500/40 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-blue-500 text-lg font-mono font-medium uppercase tracking-wide">
                      Encrypted Comms
                    </h3>
                    <p className="mt-1 text-gray-300 font-mono text-sm">
                      <span className="font-light">SEC-ID:</span> info@garudx.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded bg-gray-800 border border-blue-500/40 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-blue-500 text-lg font-mono font-medium uppercase tracking-wide">
                      Direct Line
                    </h3>
                    <p className="mt-1 text-gray-300 font-mono text-sm">
                      <span className="font-light">FREQ:</span> +977 123 456 789
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-blue-500 text-lg font-mono font-medium uppercase tracking-wide mb-4">
                  Intelligence Network
                </h3>
                <div className="flex space-x-5">
                  <a href="#" className="flex items-center justify-center h-10 w-10 rounded bg-gray-800 border border-blue-500/40 text-gray-300 hover:text-blue-500 hover:border-blue-500 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center h-10 w-10 rounded bg-gray-800 border border-blue-500/40 text-gray-300 hover:text-blue-500 hover:border-blue-500 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center h-10 w-10 rounded bg-gray-800 border border-blue-500/40 text-gray-300 hover:text-blue-500 hover:border-blue-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="flex items-center justify-center h-10 w-10 rounded bg-gray-800 border border-blue-500/40 text-gray-300 hover:text-blue-500 hover:border-blue-500 transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <GlassCard className="p-6 md:p-8 border border-blue-500/20">
                <div className="mb-6 text-xs font-mono text-blue-500 flex justify-between">
                  <span>SECURE TRANSMISSION</span>
                  <span>ENCRYPTION ACTIVE</span>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <Input
                    id="name"
                    name="name"
                    label="Operator ID"
                    value={formData.name}
                    onChange={(value) => handleChange('name', value)}
                    placeholder="John Doe"
                    variant="bordered"
                    fullWidth
                    isRequired
                  />
                  
                  <Input
                    id="email"
                    name="email"
                    label="Secure Comms Channel"
                    value={formData.email}
                    onChange={(value) => handleChange('email', value)}
                    placeholder="john@example.com"
                    variant="bordered"
                    fullWidth
                    isRequired
                  />
                  
                  <Select
                    label="Mission Type"
                    selectedKeys={formData.service ? [formData.service] : []}
                    onSelectionChange={(keys) => {
                      const selectedKey = Array.from(keys)[0] as string;
                      handleChange('service', selectedKey);
                    }}
                    placeholder="Select mission parameters"
                    options={serviceOptions}
                    variant="bordered"
                    fullWidth
                    isRequired
                  />
                  
                  <TextArea
                    label="Mission Brief"
                    value={formData.message}
                    onChange={(value) => handleChange('message', value)}
                    placeholder="Provide mission parameters and requirements..."
                    variant="bordered"
                    rows={4}
                    fullWidth
                    isRequired
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button 
                      variant="bordered" 
                      size="lg" 
                      isGlowing 
                      className="w-full"
                      type="submit"
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                    >
                      {!isSubmitting && "TRANSMIT REQUEST"}
                    </Button>
                  </motion.div>
                  
                  <div className="text-xs font-mono text-gray-300/60 text-center mt-4">
                    DATA PROTECTED UNDER PROTOCOL 7329-B
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
