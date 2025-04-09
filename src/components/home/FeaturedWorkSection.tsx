import { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FiTarget, FiPlay } from 'react-icons/fi';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

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
    <section className="py-20 px-4 bg-darkSlate relative" id="portfolio">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 bg-precision-grid bg-[length:20px_20px]" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-midnight to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 bg-electricBlue/10 rounded-full"
          >
            <span className="text-sm md:text-base tracking-widest uppercase font-mono text-electricBlue flex items-center">
              <FiTarget className="mr-2" />
              Mission Archives
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-mono"
          >
            Strategic Deployment Records
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-electricBlue rounded-full mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-titaniumSilver max-w-2xl text-center font-mono"
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
              variant={activeCategory === category ? 'technical' : 'tertiary'}
              size="sm"
              className={`${activeCategory === category ? 'text-electricBlue' : 'text-titaniumSilver'} font-mono`}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="cursor-pointer"
              onClick={() => openVideoModal(project)}
            >
              <GlassCard variant="dark" design="technical" className="h-full overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Tactical overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkSlate to-transparent opacity-80"></div>
                  
                  {/* Top overlay with category */}
                  <div className="absolute top-2 left-2 bg-electricBlue/20 text-electricBlue text-xs font-mono px-2 py-0.5 rounded">
                    {project.category}
                  </div>
                  
                  {/* Bottom code overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-xs text-electricBlue font-mono flex justify-between">
                    <span>MISSION-{project.id}</span>
                    <span>{project.date}</span>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-electricBlue/20 border border-electricBlue/50 p-3 rounded-full">
                      <FiPlay className="h-8 w-8 text-electricBlue" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-electricBlue font-mono">{project.title}</h3>
                  <p className="text-titaniumSilver mb-3 text-sm font-mono line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-darkSlate/70 text-titaniumSilver px-2 py-0.5 rounded font-mono">
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
            variant="technical" 
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
          base: "bg-darkSlate border border-electricBlue/30",
          header: "border-b border-electricBlue/20",
          footer: "border-t border-electricBlue/20",
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
                <div className="font-mono text-electricBlue">
                  <span className="text-xs opacity-70">MISSION-ID: </span>
                  <span className="font-bold">{selectedProject?.id}</span>
                </div>
                <Button 
                  variant="tertiary"
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
                <h3 className="text-lg font-bold text-electricBlue font-mono mb-2">{selectedProject?.title}</h3>
                <p className="text-sm text-titaniumSilver font-mono mb-3">
                  {selectedProject?.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-darkSlate/70 text-titaniumSilver px-2 py-0.5 rounded font-mono">
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