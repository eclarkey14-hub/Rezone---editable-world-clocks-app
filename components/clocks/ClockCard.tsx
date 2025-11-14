import React from 'react';
import { ClockConfig, ClockMode } from '../../types';
import { AnalogFace } from './AnalogFace';
import { DigitalFace } from './DigitalFace';
import { formatZoneName, getFormattedTime, getOffset } from '../../utils/timeUtils';

interface ClockCardProps {
  config: ClockConfig;
  date: Date;
  mode: ClockMode;
  onEdit: (config: ClockConfig) => void;
  onRemove: (id: string) => void;
}

export const ClockCard: React.FC<ClockCardProps> = ({ config, date, mode, onEdit, onRemove }) => {
  const offset = getOffset(date, config.timezone);
  const day = getFormattedTime(date, config.timezone, 'EEE, MMM d');
  
  // Use custom label (City Name) if available, otherwise fallback to formatted timezone name
  const displayName = config.customLabel || (config.isLocal ? 'Local Time' : formatZoneName(config.timezone));

  return (
    <div 
      className="relative group bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 backdrop-blur-md rounded-3xl p-4 flex flex-col items-center justify-between transition-all duration-300 active:scale-95 cursor-pointer select-none h-full"
      onClick={() => onEdit(config)}
    >
      {/* Header: City & Offset */}
      <div className="w-full flex justify-between items-start mb-2">
        <div className="flex flex-col overflow-hidden">
          <span className="text-lg font-semibold text-slate-100 leading-tight truncate w-full" title={displayName}>
            {displayName}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {offset}
          </span>
        </div>
        
        {!config.isLocal && (
           <button 
             onClick={(e) => {
               e.stopPropagation();
               onRemove(config.id);
             }}
             className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-full -mr-2 -mt-2 flex-shrink-0"
             title="Remove clock"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
        )}
      </div>

      {/* Clock Face */}
      <div className="flex-1 flex items-center justify-center w-full py-2">
        {mode === 'analog' ? (
          <AnalogFace date={date} timezone={config.timezone} size={130} />
        ) : (
          <DigitalFace date={date} timezone={config.timezone} />
        )}
      </div>

      {/* Footer: Date */}
      <div className="w-full text-center mt-2">
        <span className="inline-block px-2 py-1 rounded-md bg-slate-800/80 text-xs font-medium text-slate-400">
          {day}
        </span>
      </div>
    </div>
  );
};