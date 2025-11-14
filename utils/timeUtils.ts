import { formatInTimeZone, fromZonedTime, toZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';

/**
 * Gets the formatted time string for a specific timezone
 */
export const getFormattedTime = (date: Date, timeZone: string, fmt: string = 'HH:mm'): string => {
  try {
    return formatInTimeZone(date, timeZone, fmt);
  } catch (e) {
    return '--:--';
  }
};

/**
 * Gets the parts (hour, minute, second) for a specific timezone to drive analog clocks
 */
export const getTimeParts = (date: Date, timeZone: string) => {
  try {
    const zonedDate = toZonedTime(date, timeZone);
    return {
      hours: zonedDate.getHours(),
      minutes: zonedDate.getMinutes(),
      seconds: zonedDate.getSeconds(),
    };
  } catch (e) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
};

/**
 * Get a display name for the timezone (e.g. "New York" from "America/New_York")
 */
export const formatZoneName = (zone: string): string => {
  if (zone === 'UTC') return 'UTC';
  const parts = zone.split('/');
  return parts[parts.length - 1].replace(/_/g, ' ');
};

/**
 * Get offset string (e.g., +05:00)
 */
export const getOffset = (date: Date, timeZone: string): string => {
  try {
    return formatInTimeZone(date, timeZone, 'XXX');
  } catch (e) {
    return '';
  }
};

/**
 * Get all supported timezones from the browser
 */
export const getAllTimezones = (): string[] => {
  try {
    // @ts-ignore
    return Intl.supportedValuesOf('timeZone');
  } catch (e) {
    console.warn("Intl.supportedValuesOf not supported, falling back to popular list");
    return [
      "UTC", "America/New_York", "Europe/London", "Asia/Tokyo", "Australia/Sydney"
    ]; // Fallback
  }
};

/**
 * Create a date object from a specific time input in a specific timezone,
 * preserving the *other* date components (year/month/day) of the reference.
 */
export const createDateFromTimeInput = (
  timeString: string, 
  targetTimeZone: string, 
  referenceDate: Date
): Date => {
  // timeString is "HH:mm"
  const [hours, minutes] = timeString.split(':').map(Number);
  
  // 1. Convert reference date to the target timezone to get the current Year/Month/Day in that zone
  const zonedRef = toZonedTime(referenceDate, targetTimeZone);
  
  // 2. Set the new hours and minutes
  zonedRef.setHours(hours);
  zonedRef.setMinutes(minutes);
  zonedRef.setSeconds(0);
  
  // 3. Convert back to UTC to update the global reference time
  return fromZonedTime(zonedRef, targetTimeZone);
};