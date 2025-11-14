import React, { useState, useMemo } from 'react';
import { getAllTimezones, formatZoneName } from '../utils/timeUtils';
import { searchCities } from '../utils/cityMapping';
import { SearchIcon, MapPinIcon, GlobeIcon } from './icons/Icons';

interface TimezonePickerProps {
  onSelect: (timezone: string, label?: string) => void;
}

export const TimezonePicker: React.FC<TimezonePickerProps> = ({ onSelect }) => {
  const [search, setSearch] = useState('');
  const allTimezones = useMemo(() => getAllTimezones(), []);

  const filteredOptions = useMemo(() => {
    const lowerSearch = search.toLowerCase().trim();

    // 1. Find City Matches
    const cityMatches = searchCities(lowerSearch).map(city => ({
      key: `city-${city.name}-${city.timezone}`,
      label: city.name,
      subLabel: `${city.country} • ${formatZoneName(city.timezone)}`,
      timezone: city.timezone,
      isCity: true,
      customLabel: city.name
    }));

    // 2. Find Standard Timezone Matches
    // Filter out zones that might just be duplicates of what we already showed in cities 
    // (though simple deduping is hard, showing both is usually safer so user knows what they are picking)
    const zoneMatches = allTimezones
      .filter(tz => 
        !lowerSearch || // if empty, show all (sliced later)
        tz.toLowerCase().includes(lowerSearch) || 
        formatZoneName(tz).toLowerCase().includes(lowerSearch)
      )
      .map(tz => ({
        key: `tz-${tz}`,
        label: formatZoneName(tz),
        subLabel: tz,
        timezone: tz,
        isCity: false,
        customLabel: undefined // standard zones don't get a custom label overrides
      }));

    // Combine: Cities first, then Zones
    return [...cityMatches, ...zoneMatches];
  }, [search, allTimezones]);

  // Limit results for performance if query is empty or vague
  const displayOptions = filteredOptions.length > 100 ? filteredOptions.slice(0, 100) : filteredOptions;

  return (
    <div className="flex flex-col h-[400px]">
      <div className="relative mb-4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
        <input 
          type="text"
          placeholder="Search city (e.g. San Francisco) or timezone..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1">
        {displayOptions.length === 0 ? (
          <div className="text-center py-8 text-slate-500 flex flex-col items-center gap-2">
            <SearchIcon className="w-8 h-8 opacity-50" />
            <p>No cities or timezones found.</p>
          </div>
        ) : (
          displayOptions.map(opt => (
            <button
              key={opt.key}
              onClick={() => onSelect(opt.timezone, opt.customLabel)}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-3 group border border-transparent hover:border-slate-700"
            >
              <div className={`p-2 rounded-full ${opt.isCity ? 'bg-brand-500/10 text-brand-400' : 'bg-slate-800 text-slate-500'}`}>
                {opt.isCity ? <MapPinIcon className="w-4 h-4" /> : <GlobeIcon className="w-4 h-4" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{opt.label}</div>
                <div className="text-xs text-slate-500 group-hover:text-slate-400 truncate font-mono">
                  {opt.subLabel}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};