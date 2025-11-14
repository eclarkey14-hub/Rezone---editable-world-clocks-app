export interface TimeZone {
  name: string;
  label: string;
  offset?: string;
}

export interface ClockConfig {
  id: string;
  timezone: string;
  isLocal?: boolean;
  customLabel?: string; // User-friendly name (e.g., "San Francisco") instead of "Los Angeles"
}

export type ClockMode = 'analog' | 'digital';

export interface TimeState {
  referenceDate: Date;
  isLive: boolean; // True if the clock is ticking in real-time
}