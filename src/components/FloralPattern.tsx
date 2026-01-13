import { motion } from 'framer-motion';
import { useId } from 'react';

interface FloralPatternProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
}

const FloralPattern = ({ position, size = 'medium' }: FloralPatternProps) => {
  const uniqueId = useId();
  const gradientId = `petalGradient-${uniqueId}`;
  
  const sizeClasses = {
    small: 'w-40 h-40',
    medium: 'w-64 h-64',
    large: 'w-80 h-80',
  };

  const positionClasses = {
    top: 'top-4 left-4',
    bottom: 'bottom-4 right-4',
    left: 'left-4 top-1/2 -translate-y-1/2',
    right: 'right-4 top-1/2 -translate-y-1/2',
  };

  // Clean 5-petal flower with center circle
  const floralSVG = (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Soft pink petal gradient */}
        <radialGradient id={`${gradientId}-petal`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#F472B6" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#F9A8D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FBCFE8" stopOpacity="0.2" />
        </radialGradient>
        {/* Center circle gradient */}
        <radialGradient id={`${gradientId}-center`} cx="50%" cy="50%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.5" />
        </radialGradient>
      </defs>
      
      <g opacity="0.65">
        {/* 5 clean, symmetrical petals */}
        {/* Top petal */}
        <ellipse
          cx="100"
          cy="60"
          rx="20"
          ry="35"
          fill={`url(#${gradientId}-petal)`}
          transform="rotate(0 100 100)"
        />
        
        {/* Top-right petal */}
        <ellipse
          cx="100"
          cy="60"
          rx="20"
          ry="35"
          fill={`url(#${gradientId}-petal)`}
          transform="rotate(72 100 100)"
        />
        
        {/* Bottom-right petal */}
        <ellipse
          cx="100"
          cy="60"
          rx="20"
          ry="35"
          fill={`url(#${gradientId}-petal)`}
          transform="rotate(144 100 100)"
        />
        
        {/* Bottom-left petal */}
        <ellipse
          cx="100"
          cy="60"
          rx="20"
          ry="35"
          fill={`url(#${gradientId}-petal)`}
          transform="rotate(216 100 100)"
        />
        
        {/* Top-left petal */}
        <ellipse
          cx="100"
          cy="60"
          rx="20"
          ry="35"
          fill={`url(#${gradientId}-petal)`}
          transform="rotate(288 100 100)"
        />
        
        {/* Center circle */}
        <circle
          cx="100"
          cy="100"
          r="12"
          fill={`url(#${gradientId}-center)`}
        />
        <circle
          cx="100"
          cy="100"
          r="8"
          fill="#EC4899"
          opacity="0.6"
        />
      </g>
    </svg>
  );

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} floral-pattern`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      style={{ 
        zIndex: 1
      }}
    >
      {floralSVG}
    </motion.div>
  );
};

export default FloralPattern;
