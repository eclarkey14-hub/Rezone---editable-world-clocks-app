import React, { useState, useEffect, useRef } from 'react';
import { ClockConfig, ClockMode, TimeState } from './types';
import { ClockCard } from './components/clocks/ClockCard';
import { PlusIcon, ClockIcon, MonitorIcon, GlobeIcon, ResetIcon } from './components/icons/Icons';
import { Modal } from './components/ui/Modal';
import { TimezonePicker } from './components/TimezonePicker';
import { TimeEditor } from './components/TimeEditor';
import { createDateFromTimeInput, formatZoneName } from './utils/timeUtils';
import { APP_NAME } from './constants';

const INITIAL_CLOCKS: ClockConfig[] = [
  { id: 'local', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, isLocal: true },
];

const App: React.FC = () => {
  // State
  const [clocks, setClocks] = useState<ClockConfig[]>(INITIAL_CLOCKS);
  const [mode, setMode] = useState<ClockMode>('analog');
  const [timeState, setTimeState] = useState<TimeState>({
    referenceDate: new Date(),
    isLive: true,
  });

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingClock, setEditingClock] = useState<ClockConfig | null>(null);

  // Refs for timer
  const timerRef = useRef<number | null>(null);

  // Timer Logic
  useEffect(() => {
    const tick = () => {
      if (timeState.isLive) {
        setTimeState(prev => ({ ...prev, referenceDate: new Date() }));
      }
    };

    timerRef.current = window.setInterval(tick, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeState.isLive]);

  // Handlers
  const handleAddClock = (timezone: string, label?: string) => {
    const newClock: ClockConfig = {
      id: Math.random().toString(36).substr(2, 9),
      timezone,
      isLocal: false,
      customLabel: label
    };
    setClocks(prev => [...prev, newClock]);
    setIsAddModalOpen(false);
  };

  const handleRemoveClock = (id: string) => {
    setClocks(prev => prev.filter(c => c.id !== id));
  };

  const handleTimeEdit = (newTimeStr: string) => {
    if (!editingClock) return;

    // Calculate the new UTC reference time based on the user input for the specific clock
    const newReferenceDate = createDateFromTimeInput(
      newTimeStr,
      editingClock.timezone,
      timeState.referenceDate
    );

    setTimeState({
      referenceDate: newReferenceDate,
      isLive: false,
    });
    setEditingClock(null);
  };

  const handleResetToLive = () => {
    setTimeState({
      referenceDate: new Date(),
      isLive: true,
    });
    setEditingClock(null);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      {/* Header */}
      <header className="flex-none px-6 py-5 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 z-40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-500/10 rounded-lg">
            <GlobeIcon className="w-6 h-6 text-brand-500" />
          </div>
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {APP_NAME}
          </h1>
        </div>

        <div className="flex items-center gap-3">
           {/* Mode Switcher */}
           <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
             <button
               onClick={() => setMode('analog')}
               className={`p-2 rounded-md transition-all ${mode === 'analog' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
               title="Analog View"
             >
               <ClockIcon className="w-4 h-4" />
             </button>
             <button
               onClick={() => setMode('digital')}
               className={`p-2 rounded-md transition-all ${mode === 'digital' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
               title="Digital View"
             >
               <MonitorIcon className="w-4 h-4" />
             </button>
           </div>
        </div>
      </header>

      {/* Status Bar (if time is edited) */}
      {!timeState.isLive && (
        <div className="flex-none bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 flex items-center justify-between animate-in slide-in-from-top duration-200">
          <span className="text-amber-500 text-xs font-medium uppercase tracking-wider flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Preview Mode Paused
          </span>
          <button 
            onClick={handleResetToLive}
            className="text-xs font-bold text-amber-500 hover:text-amber-400 flex items-center gap-1"
          >
            <ResetIcon className="w-3 h-3" />
            Reset to Live
          </button>
        </div>
      )}

      {/* Main Grid Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto pb-20">
          {clocks.map(clock => (
            <div 
              key={clock.id} 
              className={`aspect-square ${mode === 'digital' ? 'aspect-[4/3] sm:aspect-square' : ''} w-full`}
            >
              <ClockCard
                config={clock}
                date={timeState.referenceDate}
                mode={mode}
                onEdit={setEditingClock}
                onRemove={handleRemoveClock}
              />
            </div>
          ))}

          {/* Add Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className={`
              group flex flex-col items-center justify-center gap-4
              bg-slate-900/30 border-2 border-dashed border-slate-800 
              hover:border-brand-500/50 hover:bg-brand-500/5
              rounded-3xl transition-all duration-300
              ${mode === 'digital' ? 'aspect-[4/3] sm:aspect-square' : 'aspect-square'}
            `}
          >
            <div className="p-4 bg-slate-800 group-hover:bg-brand-500 rounded-full transition-colors shadow-lg group-hover:shadow-brand-500/25">
              <PlusIcon className="w-8 h-8 text-slate-400 group-hover:text-white" />
            </div>
            <span className="font-medium text-slate-500 group-hover:text-brand-400 transition-colors">
              Add City
            </span>
          </button>
        </div>
      </main>

      {/* Modals */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Clock"
      >
        <TimezonePicker onSelect={handleAddClock} />
      </Modal>

      <Modal
        isOpen={!!editingClock}
        onClose={() => setEditingClock(null)}
        title={editingClock ? `Set time for ${editingClock.customLabel || formatZoneName(editingClock.timezone)}` : 'Edit Time'}
      >
        {editingClock && (
          <TimeEditor
            initialDate={timeState.referenceDate}
            timezone={editingClock.timezone}
            onSave={handleTimeEdit}
            onReset={handleResetToLive}
          />
        )}
      </Modal>

    </div>
  );
};

export default App;