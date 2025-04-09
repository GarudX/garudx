import React from 'react';
import { cn } from '../../lib/utils';

// ==================
// Shared Types
// ==================

export type DataPoint = {
  label: string;
  value: number;
  color?: string;
  description?: string;
};

interface BaseChartProps {
  data: DataPoint[];
  title?: string;
  subtitle?: string;
  height?: number;
  width?: number;
  showLegend?: boolean;
  showLabels?: boolean;
  showValues?: boolean;
  showGrid?: boolean;
  variant?: 'standard' | 'technical';
  className?: string;
}

const DEFAULT_COLORS = [
  '#3A86FF', // electricBlue
  '#1B7F79', // mutedTeal
  '#4D9078', // signalGreen
  '#FFB703', // warningAmber
  '#C0C0C0', // silver
];

// Utility functions
const getColor = (index: number, customColor?: string): string => {
  if (customColor) return customColor;
  return DEFAULT_COLORS[index % DEFAULT_COLORS.length];
};

const calculateMax = (data: DataPoint[]): number => {
  const max = Math.max(...data.map(item => item.value));
  return Math.ceil(max / 10) * 10; // Round up to next multiple of 10
};

// ==================
// Bar Chart
// ==================

export const BarChart: React.FC<BaseChartProps> = ({
  data,
  title,
  subtitle,
  height = 300,
  width = 500,
  showLegend = true,
  showLabels = true,
  showValues = true,
  showGrid = true,
  variant = 'standard',
  className,
}) => {
  if (!data || data.length === 0) {
    return <div className="text-titaniumSilver">No data available</div>;
  }

  const maxValue = calculateMax(data);
  const barWidth = `${100 / data.length - 5}%`;

  return (
    <div 
      className={cn(
        'p-4 rounded-lg',
        variant === 'standard' ? 'bg-darkSlate/70' : 'bg-deepIndigo/80 border border-titaniumSilver/10',
        className
      )}
      style={{ width }}
    >
      {/* Chart header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className={cn(
              'text-white text-lg font-medium',
              variant === 'technical' && 'font-mono text-base tracking-wide'
            )}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={cn(
              'text-titaniumSilver text-sm',
              variant === 'technical' && 'font-mono text-xs tracking-wide'
            )}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Chart area */}
      <div 
        className={cn(
          'relative',
          variant === 'technical' && 'border border-titaniumSilver/10'
        )}
        style={{ height }}
      >
        {/* Grid lines */}
        {showGrid && (
          <div className="absolute inset-0">
            {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
              <div 
                key={tick}
                className={cn(
                  'absolute w-full border-t border-dashed',
                  variant === 'standard' ? 'border-titaniumSilver/10' : 'border-electricBlue/10',
                  'z-0'
                )}
                style={{ bottom: `${tick * 100}%` }}
              >
                {variant === 'technical' && (
                  <span className="absolute -top-2 -left-7 text-titaniumSilver/50 text-xs font-mono">
                    {Math.round(maxValue * tick)}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Technical grid background */}
        {variant === 'technical' && (
          <div className="absolute inset-0 bg-precision-grid opacity-10" aria-hidden="true" />
        )}

        {/* Bars */}
        <div className="absolute inset-0 flex items-end justify-around px-2">
          {data.map((item, index) => {
            const barHeight = `${(item.value / maxValue) * 100}%`;
            const barColor = getColor(index, item.color);
            
            return (
              <div 
                key={index}
                className="flex flex-col items-center"
                style={{ width: barWidth }}
              >
                {/* Bar */}
                <div 
                  className={cn(
                    'w-full rounded-t-sm transition-all duration-500 ease-out',
                    variant === 'technical' && 'rounded-none border-t-2 border-electricBlue/30'
                  )}
                  style={{ 
                    height: barHeight, 
                    backgroundColor: barColor,
                    boxShadow: variant === 'standard' ? `0 0 20px ${barColor}30` : 'none'
                  }}
                  title={item.description || `${item.label}: ${item.value}`}
                >
                  {/* Bar value */}
                  {showValues && (
                    <div className={cn(
                      'text-white text-xs -mt-6 flex justify-center',
                      variant === 'technical' && 'font-mono text-electricBlue'
                    )}>
                      {item.value}
                    </div>
                  )}
                </div>
                
                {/* Bar label */}
                {showLabels && (
                  <div className={cn(
                    'text-titaniumSilver text-xs mt-2 truncate max-w-full',
                    variant === 'technical' && 'font-mono text-xxs tracking-wide'
                  )}>
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      {showLegend && (
        <div className={cn(
          'flex flex-wrap gap-4 mt-4',
          variant === 'technical' && 'border-t border-titaniumSilver/10 pt-2'
        )}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 mr-1 rounded-sm" 
                style={{ backgroundColor: getColor(index, item.color) }}
              />
              <span className={cn(
                'text-titaniumSilver text-xs',
                variant === 'technical' && 'font-mono'
              )}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ==================
// Line Chart
// ==================

export const LineChart: React.FC<BaseChartProps> = ({
  data,
  title,
  subtitle,
  height = 300,
  width = 500,
  showLegend = true,
  showLabels = true,
  showValues = true,
  showGrid = true,
  variant = 'standard',
  className,
}) => {
  if (!data || data.length === 0) {
    return <div className="text-titaniumSilver">No data available</div>;
  }

  const maxValue = calculateMax(data);
  const pointWidth = width / (data.length - 1);
  
  // Calculate points for the SVG path
  const points = data.map((item, index) => {
    const x = index * (width / (data.length - 1));
    const y = height - (item.value / maxValue) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div 
      className={cn(
        'p-4 rounded-lg',
        variant === 'standard' ? 'bg-darkSlate/70' : 'bg-deepIndigo/80 border border-titaniumSilver/10',
        className
      )}
      style={{ width }}
    >
      {/* Chart header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className={cn(
              'text-white text-lg font-medium',
              variant === 'technical' && 'font-mono text-base tracking-wide'
            )}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={cn(
              'text-titaniumSilver text-sm',
              variant === 'technical' && 'font-mono text-xs tracking-wide'
            )}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Chart area */}
      <div 
        className={cn(
          'relative',
          variant === 'technical' && 'border border-titaniumSilver/10'
        )}
        style={{ height }}
      >
        {/* Grid lines */}
        {showGrid && (
          <div className="absolute inset-0">
            {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
              <div 
                key={tick}
                className={cn(
                  'absolute w-full border-t border-dashed',
                  variant === 'standard' ? 'border-titaniumSilver/10' : 'border-electricBlue/10',
                  'z-0'
                )}
                style={{ bottom: `${tick * 100}%` }}
              >
                {variant === 'technical' && (
                  <span className="absolute -top-2 -left-7 text-titaniumSilver/50 text-xs font-mono">
                    {Math.round(maxValue * tick)}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Technical grid background */}
        {variant === 'technical' && (
          <div className="absolute inset-0 bg-precision-grid opacity-10" aria-hidden="true" />
        )}

        {/* Line chart SVG */}
        <svg 
          className="absolute inset-0 z-10" 
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
        >
          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke={variant === 'standard' ? '#3A86FF' : '#3A86FF'}
            strokeWidth={variant === 'standard' ? 2 : 1.5}
            className={variant === 'standard' ? 'drop-shadow-lg' : ''}
          />
          
          {/* Area fill */}
          {variant === 'standard' && (
            <polyline
              points={`0,${height} ${points} ${width},${height}`}
              fill="url(#blueGradient)"
              opacity="0.1"
            />
          )}
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3A86FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3A86FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Data points */}
          {data.map((item, index) => {
            const x = index * (width / (data.length - 1));
            const y = height - (item.value / maxValue) * height;
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  fill={variant === 'standard' ? '#3A86FF' : '#0D1B2A'}
                  stroke={variant === 'standard' ? 'white' : '#3A86FF'}
                  strokeWidth="1.5"
                  className="drop-shadow-md"
                />
                
                {/* Values above points */}
                {showValues && (
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    fill={variant === 'standard' ? 'white' : '#3A86FF'}
                    fontSize="10"
                    fontFamily={variant === 'technical' ? 'monospace' : 'sans-serif'}
                  >
                    {item.value}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* X axis labels */}
        {showLabels && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
            {data.map((item, index) => (
              <div 
                key={index}
                className={cn(
                  'text-titaniumSilver text-xs absolute -bottom-6',
                  variant === 'technical' && 'font-mono text-xxs tracking-wide'
                )}
                style={{ left: `${(index / (data.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Add extra padding at bottom for x-axis labels */}
      {showLabels && <div className="h-6" />}
    </div>
  );
};

// ==================
// Pie Chart
// ==================

export const PieChart: React.FC<BaseChartProps> = ({
  data,
  title,
  subtitle,
  height = 300,
  width = 300,
  showLegend = true,
  showValues = true,
  variant = 'standard',
  className,
}) => {
  if (!data || data.length === 0) {
    return <div className="text-titaniumSilver">No data available</div>;
  }

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = Math.min(width, height) / 2;
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Calculate pie segments
  let startAngle = 0;
  const segments = data.map((item, index) => {
    const percentage = item.value / total;
    const angle = percentage * 360;
    const endAngle = startAngle + angle;
    
    // Calculate SVG path arc
    const startRad = (startAngle - 90) * (Math.PI / 180);
    const endRad = (endAngle - 90) * (Math.PI / 180);
    
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    
    // Use the "large-arc-flag" parameter (0 for arcs <180 degrees, 1 for arcs >180 degrees)
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    // Create the path
    const path = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
    
    // Calculate center point of the arc for text
    const midAngle = startAngle + angle / 2;
    const midRad = (midAngle - 90) * (Math.PI / 180);
    
    // Position text slightly outward from center
    const textRadius = radius * 0.7;
    const textX = centerX + textRadius * Math.cos(midRad);
    const textY = centerY + textRadius * Math.sin(midRad);
    
    const color = getColor(index, item.color);
    
    // Prepare for next segment
    startAngle = endAngle;
    
    return {
      path,
      color,
      percentage,
      textX,
      textY,
      item
    };
  });

  return (
    <div 
      className={cn(
        'p-4 rounded-lg',
        variant === 'standard' ? 'bg-darkSlate/70' : 'bg-deepIndigo/80 border border-titaniumSilver/10',
        'flex flex-col items-center',
        className
      )}
      style={{ width }}
    >
      {/* Chart header */}
      {(title || subtitle) && (
        <div className="mb-4 text-center">
          {title && (
            <h3 className={cn(
              'text-white text-lg font-medium',
              variant === 'technical' && 'font-mono text-base tracking-wide'
            )}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={cn(
              'text-titaniumSilver text-sm',
              variant === 'technical' && 'font-mono text-xs tracking-wide'
            )}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Pie chart SVG */}
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
        className={cn(
          'relative z-10',
          variant === 'technical' && 'border border-titaniumSilver/10 rounded-full'
        )}
      >
        {/* Segments */}
        {segments.map((segment, index) => (
          <path
            key={index}
            d={segment.path}
            fill={segment.color}
            stroke={variant === 'standard' ? 'rgba(0,0,0,0.1)' : 'rgba(58,134,255,0.2)'}
            strokeWidth={variant === 'standard' ? 1 : 0.5}
            className="transition-all duration-300 hover:opacity-90 hover:transform hover:scale-105"
          />
        ))}
        
        {/* Center circle for technical variant */}
        {variant === 'technical' && (
          <circle
            cx={centerX}
            cy={centerY}
            r={radius * 0.4}
            fill="#0D1B2A"
            stroke="#3A86FF"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        )}
        
        {/* Value labels */}
        {showValues && (
          <>
            {segments.map((segment, index) => (
              <text
                key={index}
                x={segment.textX}
                y={segment.textY}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="white"
                fontSize={variant === 'technical' ? 10 : 12}
                fontFamily={variant === 'technical' ? 'monospace' : 'sans-serif'}
                fontWeight={variant === 'standard' ? 'bold' : 'normal'}
              >
                {Math.round(segment.percentage * 100)}%
              </text>
            ))}
          </>
        )}
      </svg>

      {/* Legend */}
      {showLegend && (
        <div className={cn(
          'flex flex-wrap justify-center gap-4 mt-4',
          variant === 'technical' && 'border-t border-titaniumSilver/10 pt-2'
        )}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className={cn(
                  'w-3 h-3 mr-1',
                  variant === 'standard' ? 'rounded-sm' : 'rounded-none'
                )}
                style={{ backgroundColor: getColor(index, item.color) }}
              />
              <span className={cn(
                'text-titaniumSilver text-xs',
                variant === 'technical' && 'font-mono'
              )}>
                {item.label} ({item.value})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Export a combined namespace
export const DataVisualizations = {
  BarChart,
  LineChart,
  PieChart,
}; 