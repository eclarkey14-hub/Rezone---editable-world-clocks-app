import React, { useState } from 'react';
import { getFormattedTime } from '../utils/timeUtils';

interface TimeEditorProps {
  initialDate: Date;
  timezone: string;
  onSave: (newTimeStr: string) => void;
  onReset: () => void;
}

export const TimeEditor: React.FC<TimeEditorProps> = ({ initialDate, timezone, onSave, onReset }) => {
  // Initial value in format HH:mm
  const [timeValue, setTimeValue] = useState(getFormattedTime(initialDate, timezone, 'HH:mm'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(timeValue);
  };

  return (
    <div className="flex flex-col gap-6 py-2">
      <div className="text-center space-y-2">
        <p className="text-sm text-slate-400">
          Adjusting this time will update all other clocks relative to this timezone.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="relative flex items-center justify-center">
           <input
            type="time"
            value={timeValue}
            onChange={(e) => setTimeValue(e.target.value)}
            className="bg-slate-950 text-white text-5xl font-mono p-4 rounded-2xl border-2 border-slate-800 focus:border-brand-500 focus:outline-none w-full text-center appearance-none"
            required
          />
        </div>

        <div className="flex gap-3 pt-4">
           <button
            type="button"
            onClick={onReset}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white font-medium transition-colors"
          >
            Reset to Live
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-500 font-bold shadow-lg shadow-brand-900/20 transition-all active:scale-95"
          >
            Set Time
          </button>
        </div>
      </form>
    </div>
  );
};
