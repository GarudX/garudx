import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AerospaceButton } from '../components/ui/AerospaceButton';
import { TechnicalPanel, TechnicalData, TechnicalSpecs } from '../components/ui/TechnicalPanel';

export default function AerospaceDesignShowcase() {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // Sample drone data
  const droneSpecs = [
    { name: 'Flight Time', value: '35 minutes' },
    { name: 'Max Speed', value: '72 km/h' },
    { name: 'Camera', value: '4K @ 60fps' },
    { name: 'Range', value: '10 km' },
    { name: 'Battery', value: '5200mAh Li-Po' },
    { name: 'Weight', value: '948g' },
  ];
  
  return (
    <div className="min-h-screen bg-midnight text-white overflow-hidden">
      <Navbar />
      <main className="pt-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-white font-mono text-3xl mb-2 tracking-tight">Aerospace Professional UI</h1>
            <p className="text-titaniumSilver font-mono">Design System Implementation</p>
            <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-transparent via-electricBlue/50 to-transparent" />
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Buttons Showcase */}
            <TechnicalPanel 
              title="FLIGHT CONTROLS" 
              subtitle="Command Interface Elements"
              badge="UI-001"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-titaniumSilver text-sm font-mono uppercase tracking-wider mb-3">Primary Actions</h4>
                  <div className="flex flex-wrap gap-4">
                    <AerospaceButton variant="primary" size="sm">INITIALIZE</AerospaceButton>
                    <AerospaceButton variant="primary">LAUNCH SEQUENCE</AerospaceButton>
                    <AerospaceButton variant="primary" size="lg">DEPLOY</AerospaceButton>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-titaniumSilver text-sm font-mono uppercase tracking-wider mb-3">Secondary Actions</h4>
                  <div className="flex flex-wrap gap-4">
                    <AerospaceButton variant="secondary" size="sm">CALIBRATE</AerospaceButton>
                    <AerospaceButton variant="secondary">DIAGNOSTIC</AerospaceButton>
                    <AerospaceButton variant="secondary" size="lg">STANDBY</AerospaceButton>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-titaniumSilver text-sm font-mono uppercase tracking-wider mb-3">Alert States</h4>
                  <div className="flex flex-wrap gap-4">
                    <AerospaceButton variant="danger">EMERGENCY STOP</AerospaceButton>
                    <AerospaceButton variant="warning">CAUTION</AerospaceButton>
                    <AerospaceButton variant="success">SYSTEM READY</AerospaceButton>
                  </div>
                </div>
              </div>
            </TechnicalPanel>
            
            {/* Data Visualization */}
            <TechnicalPanel 
              title="PERFORMANCE METRICS" 
              subtitle="Real-time Telemetry"
              badge="DATA-002"
              badgeVariant="info"
            >
              <div className="grid grid-cols-2 gap-4">
                <TechnicalData 
                  label="ALTITUDE" 
                  value={1250} 
                  unit="ft"
                  trend="up"
                />
                <TechnicalData 
                  label="BATTERY" 
                  value={78} 
                  unit="%"
                  trend="down"
                />
                <TechnicalData 
                  label="SIGNAL STRENGTH" 
                  value={92} 
                  unit="%"
                  trend="neutral"
                />
                <TechnicalData 
                  label="TEMPERATURE" 
                  value={42} 
                  unit="°C"
                  trend="up"
                />
              </div>
              
              <div className="mt-6 pt-4 border-t border-titaniumSilver/10">
                <h4 className="text-titaniumSilver text-sm font-mono uppercase tracking-wider mb-3">System Status</h4>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-signalGreen animate-pulse" />
                    <span className="text-white font-mono text-sm">All Systems Operational</span>
                  </div>
                  <AerospaceButton 
                    variant="secondary" 
                    size="sm"
                  >
                    REFRESH
                  </AerospaceButton>
                </div>
              </div>
            </TechnicalPanel>
          </div>
          
          {/* Mission Control Panel */}
          <TechnicalPanel 
            title="MISSION CONTROL" 
            subtitle="Flight Management System"
            badge="CTRL-003"
            className="mb-8"
          >
            <div className="flex mb-4 border-b border-titaniumSilver/10">
              <button
                className={`px-4 py-2 font-mono text-sm ${selectedTab === 'overview' 
                  ? 'text-electricBlue border-b border-electricBlue' 
                  : 'text-titaniumSilver hover:text-white'}`}
                onClick={() => setSelectedTab('overview')}
              >
                OVERVIEW
              </button>
              <button
                className={`px-4 py-2 font-mono text-sm ${selectedTab === 'specifications' 
                  ? 'text-electricBlue border-b border-electricBlue' 
                  : 'text-titaniumSilver hover:text-white'}`}
                onClick={() => setSelectedTab('specifications')}
              >
                SPECIFICATIONS
              </button>
              <button
                className={`px-4 py-2 font-mono text-sm ${selectedTab === 'flight_data' 
                  ? 'text-electricBlue border-b border-electricBlue' 
                  : 'text-titaniumSilver hover:text-white'}`}
                onClick={() => setSelectedTab('flight_data')}
              >
                FLIGHT DATA
              </button>
            </div>
            
            <div className="py-2">
              {selectedTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-white font-mono text-lg mb-3">GarudX-7 Surveillance Drone</h4>
                    <p className="text-titaniumSilver mb-4">
                      Advanced surveillance UAV with extended flight time and precision control systems.
                      Designed for military-grade reconnaissance and data collection in extreme environments.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <TechnicalData label="MISSION STATUS" value="ACTIVE" />
                      <TechnicalData label="FLIGHT TIME" value="00:22:14" />
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <AerospaceButton variant="primary">
                        FLIGHT PLAN
                      </AerospaceButton>
                      <AerospaceButton variant="secondary">
                        MAINTENANCE LOG
                      </AerospaceButton>
                    </div>
                  </div>
                  
                  <div className="bg-darkSlate/50 p-4 border border-titaniumSilver/10 flex flex-col">
                    <h4 className="text-titaniumSilver text-sm font-mono uppercase tracking-wider mb-3">MISSION BRIEF</h4>
                    <div className="flex-1 text-titaniumSilver text-sm font-mono leading-relaxed">
                      <p>OBJECTIVE: Perimeter surveillance</p>
                      <p>AREA: Grid sector A7-B9</p>
                      <p>DURATION: 45 minutes</p>
                      <p>PRIORITY: High</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-titaniumSilver/10">
                      <AerospaceButton variant="secondary" size="sm" className="w-full">
                        REQUEST CLEARANCE
                      </AerospaceButton>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-white font-mono text-lg mb-4">Technical Specifications</h4>
                    <TechnicalSpecs specs={droneSpecs} />
                    
                    <h4 className="text-white font-mono text-lg mt-6 mb-4">Advanced Features</h4>
                    <ul className="text-titaniumSilver space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-electricBlue">●</span>
                        Obstacle avoidance system with IR sensors
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-electricBlue">●</span>
                        Encrypted communication protocols
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-electricBlue">●</span>
                        Autonomous return-to-base functionality
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-electricBlue">●</span>
                        Weather-resistant construction (IP67 rated)
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-darkSlate/50 p-4 border border-titaniumSilver/10">
                    <h4 className="text-titaniumSilver text-sm font-mono uppercase tracking-wider mb-3">SYSTEM VERSION</h4>
                    <p className="text-white font-mono text-lg">GARUDX OS v2.5.3</p>
                    <p className="text-titaniumSilver text-sm mt-1">Last updated: 2023-11-15</p>
                    
                    <div className="mt-4 pt-4 border-t border-titaniumSilver/10">
                      <h5 className="text-titaniumSilver text-sm font-mono mb-2">Security Status</h5>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-signalGreen" />
                        <span className="text-white text-sm">All security protocols active</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedTab === 'flight_data' && (
                <div>
                  <h4 className="text-white font-mono text-lg mb-4">Flight Data Analysis</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TechnicalPanel 
                      title="FLIGHT HISTORY" 
                      subtitle="Recent Missions"
                      className="bg-darkSlate/50"
                      bordered={false}
                      gridLines={false}
                    >
                      <div className="space-y-3">
                        {[
                          { date: '2023-11-20', duration: '42m', status: 'Completed' },
                          { date: '2023-11-18', duration: '1h 12m', status: 'Completed' },
                          { date: '2023-11-15', duration: '28m', status: 'Aborted' },
                        ].map((flight, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-titaniumSilver/10 last:border-0">
                            <div>
                              <p className="text-white font-mono text-sm">{flight.date}</p>
                              <p className="text-titaniumSilver text-xs">Duration: {flight.duration}</p>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                              flight.status === 'Completed' 
                              ? 'bg-signalGreen/10 text-signalGreen' 
                              : 'bg-alertRed/10 text-alertRed'
                            }`}>
                              {flight.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </TechnicalPanel>
                    
                    <TechnicalPanel 
                      title="PERFORMANCE METRICS" 
                      subtitle="System Efficiency"
                      className="bg-darkSlate/50"
                      bordered={false}
                      gridLines={false}
                    >
                      <div className="space-y-4">
                        {[
                          { label: 'Battery Efficiency', value: 89, max: 100 },
                          { label: 'Motor Performance', value: 92, max: 100 },
                          { label: 'Signal Strength', value: 78, max: 100 },
                        ].map((metric, index) => (
                          <div key={index}>
                            <div className="flex justify-between text-xs font-mono mb-1">
                              <span className="text-titaniumSilver">{metric.label}</span>
                              <span className="text-white">{metric.value}%</span>
                            </div>
                            <div className="h-2 bg-darkSlate rounded overflow-hidden">
                              <div 
                                className="h-full bg-electricBlue" 
                                style={{ width: `${(metric.value / metric.max) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </TechnicalPanel>
                  </div>
                </div>
              )}
            </div>
          </TechnicalPanel>
          
          <footer className="text-center mt-12">
            <p className="text-titaniumSilver font-mono text-sm">GarudX Aerospace Systems &copy; 2023</p>
            <p className="text-titaniumSilver/60 text-xs mt-1">Aerospace Professional UI Implementation</p>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
} 