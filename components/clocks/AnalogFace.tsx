import React, { useMemo } from 'react';
import { getTimeParts } from '../../utils/timeUtils';

interface AnalogFaceProps {
  date: Date;
  timezone: string;
  size?: number;
}

export const AnalogFace: React.FC<AnalogFaceProps> = ({ date, timezone, size = 140 }) => {
  const { hours, minutes, seconds } = getTimeParts(date, timezone);

  const secondDegrees = seconds * 6;
  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

  const ticks = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const deg = i * 30;
      const isCardinal = i % 3 === 0;
      return (
        <div
          key={i}
          className={`absolute w-0.5 bg-slate-600 origin-bottom transform -translate-x-1/2 rounded-full ${isCardinal ? 'h-3 bg-slate-300 w-1' : 'h-1.5'}`}
          style={{
            left: '50%',
            bottom: '50%',
            height: isCardinal ? '12%' : '6%',
            transform: `rotate(${deg}deg) translate(0, -380%)`
          }}
        />
      );
    });
  }, []);

  const numbers = useMemo(() => {
    // Position numbers at ~70% of the radius
    const radius = (size / 2) * 0.70;
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
      // 0 degrees is 3 o'clock, so subtract 90 degrees to start at 12 o'clock
      const angle = (num * 30 - 90) * (Math.PI / 180);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return (
        <div
          key={`num-${num}`}
          className="absolute text-[10px] font-bold text-slate-400 flex items-center justify-center font-sans"
          style={{
            left: '50%',
            top: '50%',
            width: '20px',
            height: '20px',
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
          }}
        >
          {num}
        </div>
      );
    });
  }, [size]);

  return (
    <div 
      className="relative rounded-full bg-slate-800 shadow-inner border-4 border-slate-700 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Clock Face Background / Ticks */}
      <div className="absolute inset-0 rounded-full">
         {ticks}
      </div>

      {/* Numbers */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        {numbers}
      </div>

      {/* Hour Hand */}
      <div 
        className="absolute bg-slate-200 w-1.5 rounded-full origin-bottom z-10 shadow-sm"
        style={{
          height: '25%',
          bottom: '50%',
          left: 'calc(50% - 3px)',
          transform: `rotate(${hourDegrees}deg)`,
          transition: 'transform 0.1s cubic-bezier(0.4, 2.08, 0.55, 0.44)'
        }}
      />

      {/* Minute Hand */}
      <div 
        className="absolute bg-slate-400 w-1 rounded-full origin-bottom z-20 shadow-sm"
        style={{
          height: '38%',
          bottom: '50%',
          left: 'calc(50% - 2px)',
          transform: `rotate(${minuteDegrees}deg)`,
          transition: 'transform 0.1s cubic-bezier(0.4, 2.08, 0.55, 0.44)'
        }}
      />

      {/* Second Hand */}
      <div 
        className="absolute bg-brand-500 w-0.5 rounded-full origin-bottom z-30"
        style={{
          height: '45%',
          bottom: '50%',
          left: 'calc(50% - 1px)',
          transform: `rotate(${secondDegrees}deg)`,
          transition: 'transform 0.05s linear'
        }}
      />

      {/* Center Pin */}
      <div className="absolute w-3 h-3 bg-slate-200 rounded-full z-40 border-2 border-slate-800" />
    </div>
  );
};
