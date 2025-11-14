import React from 'react';
import { getFormattedTime } from '../../utils/timeUtils';

interface DigitalFaceProps {
  date: Date;
  timezone: string;
}

export const DigitalFace: React.FC<DigitalFaceProps> = ({ date, timezone }) => {
  const timeStr = getFormattedTime(date, timezone, 'HH:mm');
  const secStr = getFormattedTime(date, timezone, 'ss');
  const ampm = getFormattedTime(date, timezone, 'a');

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-mono font-bold tracking-tight text-white">
          {timeStr}
        </span>
        <div className="flex flex-col text-xs font-mono text-slate-400">
          <span>{secStr}</span>
        </div>
      </div>
      <div className="text-sm font-medium text-brand-500 mt-1 tracking-widest uppercase">
        {ampm}
      </div>
    </div>
  );
};
