import React, { useState } from 'react';
import { Navbar } from '../components/templates/Navbar';
import { Footer } from '../components/templates/Footer';
import { Button } from '../components/atoms/Button';
import { NeonText } from '../components/atoms/NeonText';
import { GlassCard } from '../components/molecules/GlassCard';
import { Modal } from '../components/molecules/Modal';
import { Timeline } from '../components/molecules/Timeline';
import { AerospaceButton } from '../components/atoms/AerospaceButton';
import { Input } from '../components/atoms/Input';
import { Select } from '../components/atoms/Select';
import { Checkbox } from '../components/atoms/Checkbox';
import { TextArea } from '../components/atoms/TextArea';
import { Switch } from '../components/atoms/Switch';
import { TechnicalPanel } from '../components/organisms/TechnicalPanel';
import { motion } from 'framer-motion';
import { Accordion } from '../components/molecules/Accordion';
import { Carousel } from '../components/molecules/Carousel';
import { Icon } from '../components/atoms/Icon';
import { ProgressiveBlur } from '../components/molecules/ProgressiveBlur';
import { VideoPlayer } from '../components/molecules/VideoPlayer';
import { YouTubeBackground } from '../components/molecules/YouTubeBackground';

// Custom simplified Tab components without HeroUI dependency
const CustomTabs = ({ 
  children, 
  activeTab, 
  setActiveTab 
}: { 
  children: React.ReactNode, 
  activeTab: string, 
  setActiveTab: (tab: string) => void 
}) => {
  // Extract tab names from children
  const tabs = React.Children.toArray(children)
    .filter(child => React.isValidElement(child) && child.type === CustomTab)
    .map(child => {
      if (React.isValidElement(child)) {
        return { id: child.props.id, label: child.props.label };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-700 mb-4">
        {tabs.map(tab => tab && (
          <button
            key={tab.id}
            className={`px-4 py-2 ${activeTab === tab.id 
              ? 'text-blue-400 border-b-2 border-blue-400 -mb-px' 
              : 'text-gray-400 hover:text-gray-300'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {React.Children.toArray(children)
          .filter(child => 
            React.isValidElement(child) && 
            child.type === CustomTab &&
            child.props.id === activeTab
          )}
      </div>
    </div>
  );
};

const CustomTab = ({ 
  children, 
}: { 
  children: React.ReactNode, 
}) => {
  return <div>{children}</div>;
};

// Custom simplified Radio components without HeroUI dependency
const CustomRadio = ({ 
  label, 
  value, 
  checked, 
  onChange 
}: { 
  label: string, 
  value: string, 
  checked: boolean, 
  onChange: (value: string) => void 
}) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="radio"
          className="sr-only"
          checked={checked}
          onChange={() => onChange(value)}
        />
        <div className={`w-4 h-4 rounded-full border ${checked ? 'border-blue-500' : 'border-gray-400'}`}>
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
          )}
        </div>
      </div>
      <span className="text-gray-200">{label}</span>
    </label>
  );
};

const CustomRadioGroup = ({ 
  options, 
  value, 
  onChange 
}: { 
  options: Array<{label: string, value: string}>, 
  value: string, 
  onChange: (value: string) => void 
}) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map(option => (
        <CustomRadio
          key={option.value}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

// Sample timeline items for demonstration
const timelineItems = [
  {
    title: "Project Initiated",
    content: "Initial research and requirements gathering completed",
    date: "2023-01-15",
    status: "complete" as const,
  },
  {
    title: "Design Phase",
    content: "Prototyping and design iterations finalized",
    date: "2023-02-28",
    status: "complete" as const,
  },
  {
    title: "Development",
    content: "Current implementation phase with core features",
    date: "2023-04-10",
    status: "current" as const,
  },
  {
    title: "Testing",
    content: "Quality assurance and user acceptance testing",
    date: "2023-05-20",
    status: "upcoming" as const,
  },
  {
    title: "Deployment",
    content: "Production release and monitoring",
    date: "2023-06-15",
    status: "upcoming" as const,
  }
];

export const ComponentsShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('buttons');
  const [radioValue, setRadioValue] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  
  const radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <NeonText as="h1" color="cyan" intensity="high" className="text-4xl md:text-5xl font-bold mb-4">
            Components Showcase
          </NeonText>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This page displays all available UI components for easy reference and testing. Use this to check how components look after making changes.
          </p>
        </div>

        <CustomTabs activeTab={activeTab} setActiveTab={setActiveTab}>
          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Buttons
              </NeonText>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-4">
                  <NeonText as="h3" className="text-xl font-bold">Primary</NeonText>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="solid" size="sm">Small</Button>
                    <Button variant="solid" size="md">Medium</Button>
                    <Button variant="solid" size="lg">Large</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <NeonText as="h3" className=" text-xl font-bold">Secondary</NeonText>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="bordered" size="sm">Small</Button>
                    <Button variant="bordered" size="md">Medium</Button>
                    <Button variant="bordered" size="lg">Large</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <NeonText as="h3" className="text-xl font-bold">Tertiary</NeonText>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="light" size="sm">Small</Button>
                    <Button variant="light" size="md">Medium</Button>
                    <Button variant="light" size="lg">Large</Button>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <NeonText as="h3" className="text-xl font-bold mb-4">Aerospace Buttons</NeonText>
                <div className="flex flex-wrap gap-4">
                  <AerospaceButton size="sm">INITIALIZE</AerospaceButton>
                  <AerospaceButton size="md">ENGAGE SYSTEM</AerospaceButton>
                  <AerospaceButton size="lg">LAUNCH SEQUENCE</AerospaceButton>
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Glass Cards
              </NeonText>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard
                  title="Standard Card"
                  footer="Last updated: April 8, 2024"
                >
                  <p className="text-gray-300">
                    This is a standard glass card component with a subtle backdrop blur effect.
                  </p>
                </GlassCard>
                
                <GlassCard
                  variant="bordered"
                  title="Technical Card"
                  footer="[SYS:READY] | STANDBY MODE"
                >
                  <p className="text-gray-300 font-mono">
                    &gt; Technical variant with monospace font and blue accents.
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>STATUS: <span className="text-blue-400">NOMINAL</span></div>
                    <div>POWER: <span className="text-green-400">98.2%</span></div>
                    <div>TEMP: <span className="text-amber-400">42.1°C</span></div>
                    <div>SIGNAL: <span className="text-blue-400">STRONG</span></div>
                  </div>
                </GlassCard>
                
                <GlassCard
                  variant="shadow"
                  title="Premium Card"
                  footer="Exclusive Content"
                  isGlowing={true}
                >
                  <p className="text-gray-300">
                    Premium variant with a golden accent and enhanced glow effects.
                  </p>
                </GlassCard>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Neon Text
              </NeonText>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <NeonText color="blue" intensity="high" className="text-2xl">
                    Blue Neon - High Intensity
                  </NeonText>
                  <NeonText color="cyan" intensity="medium" className="text-2xl">
                    Cyan Neon - Medium Intensity
                  </NeonText>
                  <NeonText color="gray" intensity="low" className="text-2xl">
                    Gray Neon - Low Intensity
                  </NeonText>
                </div>
                
                <div className="space-y-4">
                  <NeonText color="blue" intensity="high" className="text-2xl">
                    Blue Neon - High Intensity
                  </NeonText>
                  <NeonText color="cyan" intensity="medium" className="text-2xl">
                    Cyan Neon - Medium Intensity
                  </NeonText>
                  <NeonText color="gray" intensity="low" className="text-2xl">
                    Gray Neon - Low Intensity
                  </NeonText>
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Form Elements
              </NeonText>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-gray-300">Standard Input</label>
                    <Input placeholder="Enter text here" />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-gray-300">Technical Input</label>
                    <Input variant="bordered" placeholder="SYSTEM_PARAMETER" />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-gray-300">Select</label>
                    <Select 
                      placeholder="Select an option"
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                        { value: "option3", label: "Option 3" }
                      ]}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-gray-300">TextArea</label>
                    <TextArea placeholder="Enter multiple lines of text here" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-gray-300">Custom Radio Group</label>
                    <CustomRadioGroup 
                      options={radioOptions}
                      value={radioValue}
                      onChange={setRadioValue}
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-gray-300">Checkbox</label>
                    <Checkbox 
                      isChecked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      label="Enable feature"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-gray-300">Switch</label>
                    <Switch
                      isChecked={isSwitchOn}
                      onChange={() => setIsSwitchOn(!isSwitchOn)}
                      label="Toggle option"
                    />
                  </div>
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Modals
              </NeonText>
              
              <Button 
                variant="solid" 
                onClick={() => setIsModalOpen(true)}
              >
                Open Modal
              </Button>
              
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Sample Modal"
                size="md"
              >
                <div className="p-4">
                  <p className="text-gray-300 mb-4">
                    This is a sample modal dialog that can be used for various purposes like confirmations, alerts, or detailed forms.
                  </p>
                  
                  <div className="flex justify-end gap-2 mt-6">
                    <Button 
                      variant="light" 
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="solid" 
                      onClick={() => setIsModalOpen(false)}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </Modal>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Timeline
              </NeonText>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Standard Timeline</h3>
                <Timeline items={timelineItems} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Technical Timeline</h3>
                <Timeline items={timelineItems} variant="technical" />
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Accordion
              </NeonText>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Standard Accordion</h3>
                  <Accordion
                    items={[
                      {
                        id: "item-1",
                        title: "Drone Specifications",
                        content: "Detailed technical information about drone capabilities and parameters."
                      },
                      {
                        id: "item-2",
                        title: "Operational Guidelines",
                        content: "Instructions for proper operation and maintenance."
                      },
                      {
                        id: "item-3",
                        title: "Safety Protocols",
                        content: "Essential safety information and emergency procedures."
                      }
                    ]}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Accordion</h3>
                  <Accordion
                    variant="technical"
                    items={[
                      {
                        id: "tech-1",
                        title: "SYSTEM SPECS",
                        content: "Advanced technical information about internal systems and components."
                      },
                      {
                        id: "tech-2",
                        title: "CALIBRATION DATA",
                        content: "Sensor calibration profiles and configuration parameters."
                      },
                      {
                        id: "tech-3",
                        title: "MISSION PARAMETERS",
                        content: "Mission-specific settings and operation guidelines."
                      }
                    ]}
                  />
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Carousel
              </NeonText>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Standard Carousel</h3>
                  <Carousel
                    items={[
                      <div key="1" className="bg-gray-800/50 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-xl">Slide 1</span>
                      </div>,
                      <div key="2" className="bg-gray-800/50 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-xl">Slide 2</span>
                      </div>,
                      <div key="3" className="bg-gray-800/50 h-64 flex items-center justify-center rounded-lg">
                        <span className="text-xl">Slide 3</span>
                      </div>
                    ]}
                    autoplay={false}
                    showArrows={true}
                    showDots={true}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Carousel</h3>
                  <Carousel
                    variant="technical"
                    items={[
                      <div key="1" className="bg-gray-900/50 h-64 flex items-center justify-center rounded-lg border border-blue-500/20">
                        <span className="text-xl font-mono text-blue-400">DATA_SLIDE_01</span>
                      </div>,
                      <div key="2" className="bg-gray-900/50 h-64 flex items-center justify-center rounded-lg border border-blue-500/20">
                        <span className="text-xl font-mono text-blue-400">DATA_SLIDE_02</span>
                      </div>,
                      <div key="3" className="bg-gray-900/50 h-64 flex items-center justify-center rounded-lg border border-blue-500/20">
                        <span className="text-xl font-mono text-blue-400">DATA_SLIDE_03</span>
                      </div>
                    ]}
                    autoplay={false}
                    showArrows={true}
                    showDots={true}
                  />
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Media Players
              </NeonText>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Video Player</h3>
                  <div className="max-w-2xl mx-auto">
                    <VideoPlayer 
                      url="https://download.samplelib.com/mp4/sample-5s.mp4"
                      posterImage="https://via.placeholder.com/640x360.png?text=Video+Poster"
                      title="Sample Video"
                      controls={true}
                      autoplay={false}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Technical Video Player</h3>
                  <div className="max-w-2xl mx-auto">
                    <VideoPlayer 
                      url="https://download.samplelib.com/mp4/sample-5s.mp4"
                      posterImage="https://via.placeholder.com/640x360.png?text=Technical+Video"
                      title="SYSTEM_CAMERA_01"
                      controls={true}
                      autoplay={false}
                      variant="technical"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">YouTube Background</h3>
                  <div className="relative w-full h-64 border border-gray-600/20 rounded-lg overflow-hidden">
                    <YouTubeBackground 
                      videoId="JyECrGp-Sw8"
                      overlayOpacity={0.7}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-bold">Content Over Video Background</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Technical Panels
              </NeonText>
              
              <TechnicalPanel
                title="SYSTEM STATUS"
                className="mb-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-blue-400 mb-2 font-mono text-sm">POWER SYSTEMS</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Main Battery</span>
                        <span className="text-green-400">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Backup Systems</span>
                        <span className="text-green-400">STANDBY</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Power Consumption</span>
                        <span className="text-amber-400">1.2 kW/h</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-blue-400 mb-2 font-mono text-sm">ENVIRONMENTAL</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Temperature</span>
                        <span className="text-green-400">22.4°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Humidity</span>
                        <span className="text-green-400">42%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pressure</span>
                        <span className="text-green-400">101.3 kPa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TechnicalPanel>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Animations
              </NeonText>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Fade In</h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-32 bg-blue-500/20 rounded-lg flex items-center justify-center"
                  >
                    <span className="font-mono">FADE ANIMATION</span>
                  </motion.div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Scale</h3>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-32 bg-green-500/20 rounded-lg flex items-center justify-center"
                  >
                    <span className="font-mono">SCALE ANIMATION</span>
                  </motion.div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Move</h3>
                  <div className="w-full h-32 relative overflow-hidden rounded-lg bg-purple-900/20">
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 200 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="absolute top-1/2 -translate-y-1/2 h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs font-mono">MOVE</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </CustomTab>

          <CustomTab>
            <section className="mb-16">
              <NeonText as="h2" color="blue" intensity="medium" className="text-2xl font-bold mb-6 border-b border-gray-600/20 pb-2">
                Miscellaneous Components
              </NeonText>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Progressive Blur</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                      <ProgressiveBlur position="bottom" intensity="medium" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">Bottom Blur</span>
                      </div>
                    </div>
                    
                    <div className="relative h-64 bg-gradient-to-r from-cyan-500 to-green-600 rounded-lg overflow-hidden">
                      <ProgressiveBlur position="top" intensity="medium" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">Top Blur</span>
                      </div>
                    </div>
                    
                    <div className="relative h-64 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg overflow-hidden">
                      <ProgressiveBlur position="right" intensity="strong" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">Right Blur</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Icons</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="ArrowRightIcon" size="lg" />
                      <span className="mt-2 text-sm">ArrowRightIcon</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="InformationCircleIcon" size="lg" variant="interactive" />
                      <span className="mt-2 text-sm">InformationCircleIcon</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="CheckCircleIcon" size="lg" solid />
                      <span className="mt-2 text-sm">CheckCircleIcon (Solid)</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="ExclamationTriangleIcon" size="lg" variant="interactive" solid />
                      <span className="mt-2 text-sm">ExclamationTriangleIcon</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="RocketLaunchIcon" size="lg" />
                      <span className="mt-2 text-sm">RocketLaunchIcon</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="SignalIcon" size="lg" variant="interactive" />
                      <span className="mt-2 text-sm">SignalIcon</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="GlobeAltIcon" size="lg" solid />
                      <span className="mt-2 text-sm">GlobeAltIcon (Solid)</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-800/20 rounded-lg">
                      <Icon name="Cog6ToothIcon" size="lg" variant="subtle" />
                      <span className="mt-2 text-sm">Cog6ToothIcon</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </CustomTab>
        </CustomTabs>
      </main>
      
      <Footer />
    </div>
  );
}; 
