import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FiTarget, FiPlay } from 'react-icons/fi';
import { GlassCard } from '../molecules/GlassCard';
import { Button } from '../atoms/Button';

// Import images and videos
import militaryImage from '../../assets/images/IMG-20250408-WA0044.jpg';
import filmImage from '../../assets/images/IMG-20250408-WA0032.jpg';
import rescueImage from '../../assets/images/IMG-20250408-WA0043.jpg';
import tourismImage from '../../assets/images/IMG-20250408-WA0038.jpg';
import droneVideo1 from '../../assets/videos/VID-20250408-WA0001.mp4';
import droneVideo2 from '../../assets/videos/VID-20250408-WA0002.mp4';
import droneVideo3 from '../../assets/videos/VID-20250408-WA0010.mp4';
import droneVideo4 from '../../assets/videos/VID-20250408-WA0016.mp4';

interface ProjectType {
  id: string;
  title: string;
  category: string;
  image: string;
  video: string;
  description: string;
  tags: string[];
  date: string;
}

const featuredProjects: ProjectType[] = [
  {
    id: 'film001',
    title: 'Commercial Film',
    category: 'Film',
    image: filmImage,
    video: droneVideo1,
    description: 'Breathtaking aerial cinematography showcasing the majestic Himalayan landscape for an international documentary production.',
    tags: ['6K Footage', 'FPV Drone', 'Documentary'],
    date: '2025-03-15'
  },
  {
    id: 'tour002',
    title: 'Tourism Promotion',
    category: 'Commercial',
    image: tourismImage,
    video: droneVideo2,
    description: 'Cinematic promotional video showcasing Nepal\'s tourist destinations with stunning aerial perspectives.',
    tags: ['Mavic 3', 'Tourism', 'Promotional'],
    date: '2025-02-22'
  },
  {
    id: 'resc003',
    title: 'Urban Search & Rescue',
    category: 'Emergency',
    image: rescueImage,
    video: droneVideo3,
    description: 'Advanced drone system for urban search and rescue operations with thermal imaging and object recognition capabilities.',
    tags: ['Thermal', 'Search & Rescue', 'Emergency'],
    date: '2025-01-18'
  },
  {
    id: 'real004',
    title: 'Real Estate Tour',
    category: 'Commercial',
    image: militaryImage,
    video: droneVideo4,
    description: 'Comprehensive aerial tour of high-end properties showcasing the surrounding landscape and property features.',
    tags: ['Real Estate', 'Property', 'Showcase'],
    date: '2025-04-05'
  },
];

const categories = ['All', 'Film', 'Commercial', 'Emergency'];

export const FeaturedWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredProjects = activeCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeCategory);
  
  const openVideoModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeVideoModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="portfolio">
      {/* Enhanced Background System - Featured Work Variation */}
      <div className="absolute inset-0">
        {/* Base dark gradient - same as footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Colored gradient overlays - matching footer style */}
        <div className="absolute inset-0">
          {/* Primary blue-purple gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-10%,#3b82f6_0%,transparent_45%)] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_150%,#8b5cf6_0%,transparent_45%)] opacity-10" />
          
          {/* Accent gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_80%,#1d4ed8_0%,transparent_30%)] opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_60%,#4f46e5_0%,transparent_30%)] opacity-5" />
          
          {/* Subtle violet tint */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#8b5cf6_0%,transparent_20%)] opacity-2" />
        </div>

        {/* Enhanced grid system with masks */}
        <div className="absolute inset-0">
          {/* Main grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Larger grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:96px_96px]" />

          {/* Grid fade effects - same as footer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030305_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030305]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" style={{ top: '70%' }} />
        </div>

        {/* Noise texture - exactly like footer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ci8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights - very subtle like footer */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 bg-blue-500/10 rounded-full"
          >
            <span className="text-sm md:text-base tracking-widest uppercase font-mono text-blue-500 flex items-center">
              <FiTarget className="mr-2" />
              Mission Archives
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-header text-3xl md:text-5xl font-bold mb-4 font-mono"
          >
            Strategic Deployment Records
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
            className="text-gray-300 max-w-2xl text-center font-mono"
          >
            Documented field operations demonstrating tactical aerial solutions across diverse mission parameters.
          </motion.p>
        </div>
        
        {/* Filter Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? 'bordered' : 'light'}
              size="sm"
              className={`${activeCategory === category ? 'text-blue-500' : 'text-gray-300'} font-mono`}
            >
              {category.toUpperCase()}
            </Button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => openVideoModal(project)}
            >
              <GlassCard className="h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Tactical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-80"></div>
                  
                  {/* Top overlay with category */}
                  <div className="absolute top-2 left-2 bg-blue-500/20 text-blue-500 text-xs font-mono px-2 py-0.5 rounded">
                    {project.category}
                  </div>
                  
                  {/* Bottom code overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-xs text-blue-500 font-mono flex justify-between">
                    <span>MISSION-{project.id}</span>
                    <span>{project.date}</span>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-blue-500/20 border border-blue-500/50 p-3 rounded-full">
                      <FiPlay className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-blue-500 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm font-mono line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-800/70 text-gray-300 px-2 py-0.5 rounded font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
                            <Button 
                    variant="bordered" 
                    size="lg"
                    isGlowing
                  >
            ACCESS FULL MISSION ARCHIVES
          </Button>
        </motion.div>
      </div>
      
      {/* Video Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeVideoModal}
        size="3xl"
        backdrop="blur"
        classNames={{
          base: "bg-gray-800 border border-blue-500/30",
          header: "border-b border-blue-500/20",
          footer: "border-t border-blue-500/20",
        }}
        motionProps={{
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.3 }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center">
                <div className="font-mono text-blue-500">
                  <span className="text-xs opacity-70">MISSION-ID: </span>
                  <span className="font-bold">{selectedProject?.id}</span>
                </div>
                <Button 
                  variant="light"
                  size="sm" 
                  className="min-w-0 w-8 h-8 p-0"
                  onClick={onClose}
                >
                  <XMarkIcon className="h-4 w-4" />
                </Button>
              </ModalHeader>
              <ModalBody className="p-0">
                {selectedProject && (
                  <video 
                    className="w-full"
                    controls
                    autoPlay
                    poster={selectedProject.image}
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </ModalBody>
              <ModalFooter className="flex flex-col items-start">
                <h3 className="text-lg font-bold text-blue-500 font-mono mb-2">{selectedProject?.title}</h3>
                <p className="text-sm text-gray-300 font-mono mb-3">
                  {selectedProject?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-800/70 text-gray-300 px-2 py-0.5 rounded font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}; 
