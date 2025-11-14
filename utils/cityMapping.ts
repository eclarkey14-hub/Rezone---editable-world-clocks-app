
export interface CityData {
  name: string;
  timezone: string;
  country: string;
}

export const POPULAR_CITIES: CityData[] = [
  // USA & Canada
  { name: "San Francisco", timezone: "America/Los_Angeles", country: "USA" },
  { name: "San Jose", timezone: "America/Los_Angeles", country: "USA" },
  { name: "San Diego", timezone: "America/Los_Angeles", country: "USA" },
  { name: "Seattle", timezone: "America/Los_Angeles", country: "USA" },
  { name: "Las Vegas", timezone: "America/Los_Angeles", country: "USA" },
  { name: "Portland", timezone: "America/Los_Angeles", country: "USA" },
  { name: "Phoenix", timezone: "America/Phoenix", country: "USA" },
  { name: "Denver", timezone: "America/Denver", country: "USA" },
  { name: "Salt Lake City", timezone: "America/Denver", country: "USA" },
  { name: "Chicago", timezone: "America/Chicago", country: "USA" },
  { name: "Houston", timezone: "America/Chicago", country: "USA" },
  { name: "Dallas", timezone: "America/Chicago", country: "USA" },
  { name: "Austin", timezone: "America/Chicago", country: "USA" },
  { name: "Minneapolis", timezone: "America/Chicago", country: "USA" },
  { name: "New Orleans", timezone: "America/Chicago", country: "USA" },
  { name: "Miami", timezone: "America/New_York", country: "USA" },
  { name: "Atlanta", timezone: "America/New_York", country: "USA" },
  { name: "Boston", timezone: "America/New_York", country: "USA" },
  { name: "Washington D.C.", timezone: "America/New_York", country: "USA" },
  { name: "Philadelphia", timezone: "America/New_York", country: "USA" },
  { name: "Detroit", timezone: "America/Detroit", country: "USA" },
  { name: "Honolulu", timezone: "Pacific/Honolulu", country: "USA" },
  { name: "Anchorage", timezone: "America/Anchorage", country: "USA" },
  { name: "Montreal", timezone: "America/Toronto", country: "Canada" },
  { name: "Ottawa", timezone: "America/Toronto", country: "Canada" },
  { name: "Toronto", timezone: "America/Toronto", country: "Canada" },
  { name: "Vancouver", timezone: "America/Vancouver", country: "Canada" },
  { name: "Calgary", timezone: "America/Edmonton", country: "Canada" },
  
  // Latin America
  { name: "Mexico City", timezone: "America/Mexico_City", country: "Mexico" },
  { name: "Cancun", timezone: "America/Cancun", country: "Mexico" },
  { name: "Rio de Janeiro", timezone: "America/Sao_Paulo", country: "Brazil" },
  { name: "Brasilia", timezone: "America/Sao_Paulo", country: "Brazil" },
  { name: "Sao Paulo", timezone: "America/Sao_Paulo", country: "Brazil" },
  { name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", country: "Argentina" },
  { name: "Santiago", timezone: "America/Santiago", country: "Chile" },
  { name: "Lima", timezone: "America/Lima", country: "Peru" },
  { name: "Bogota", timezone: "America/Bogota", country: "Colombia" },
  { name: "Montevideo", timezone: "America/Montevideo", country: "Uruguay" },
  { name: "Caracas", timezone: "America/Caracas", country: "Venezuela" },
  { name: "Quito", timezone: "America/Guayaquil", country: "Ecuador" },
  { name: "La Paz", timezone: "America/La_Paz", country: "Bolivia" },
  { name: "San Jose", timezone: "America/Costa_Rica", country: "Costa Rica" },
  { name: "Panama City", timezone: "America/Panama", country: "Panama" },

  // Europe
  { name: "London", timezone: "Europe/London", country: "UK" },
  { name: "Manchester", timezone: "Europe/London", country: "UK" },
  { name: "Liverpool", timezone: "Europe/London", country: "UK" },
  { name: "Edinburgh", timezone: "Europe/London", country: "UK" },
  { name: "Dublin", timezone: "Europe/Dublin", country: "Ireland" },
  { name: "Paris", timezone: "Europe/Paris", country: "France" },
  { name: "Lyon", timezone: "Europe/Paris", country: "France" },
  { name: "Marseille", timezone: "Europe/Paris", country: "France" },
  { name: "Berlin", timezone: "Europe/Berlin", country: "Germany" },
  { name: "Munich", timezone: "Europe/Berlin", country: "Germany" },
  { name: "Frankfurt", timezone: "Europe/Berlin", country: "Germany" },
  { name: "Hamburg", timezone: "Europe/Berlin", country: "Germany" },
  { name: "Rome", timezone: "Europe/Rome", country: "Italy" },
  { name: "Milan", timezone: "Europe/Rome", country: "Italy" },
  { name: "Venice", timezone: "Europe/Rome", country: "Italy" },
  { name: "Florence", timezone: "Europe/Rome", country: "Italy" },
  { name: "Madrid", timezone: "Europe/Madrid", country: "Spain" },
  { name: "Barcelona", timezone: "Europe/Madrid", country: "Spain" },
  { name: "Lisbon", timezone: "Europe/Lisbon", country: "Portugal" },
  { name: "Porto", timezone: "Europe/Lisbon", country: "Portugal" },
  { name: "Amsterdam", timezone: "Europe/Amsterdam", country: "Netherlands" },
  { name: "Brussels", timezone: "Europe/Brussels", country: "Belgium" },
  { name: "Vienna", timezone: "Europe/Vienna", country: "Austria" },
  { name: "Zurich", timezone: "Europe/Zurich", country: "Switzerland" },
  { name: "Geneva", timezone: "Europe/Zurich", country: "Switzerland" },
  { name: "Stockholm", timezone: "Europe/Stockholm", country: "Sweden" },
  { name: "Oslo", timezone: "Europe/Oslo", country: "Norway" },
  { name: "Copenhagen", timezone: "Europe/Copenhagen", country: "Denmark" },
  { name: "Helsinki", timezone: "Europe/Helsinki", country: "Finland" },
  { name: "Athens", timezone: "Europe/Athens", country: "Greece" },
  { name: "Istanbul", timezone: "Europe/Istanbul", country: "Turkey" },
  { name: "Moscow", timezone: "Europe/Moscow", country: "Russia" },
  { name: "Warsaw", timezone: "Europe/Warsaw", country: "Poland" },
  { name: "Prague", timezone: "Europe/Prague", country: "Czech Republic" },
  { name: "Budapest", timezone: "Europe/Budapest", country: "Hungary" },
  { name: "Kyiv", timezone: "Europe/Kyiv", country: "Ukraine" },

  // Asia
  { name: "Dubai", timezone: "Asia/Dubai", country: "UAE" },
  { name: "Abu Dhabi", timezone: "Asia/Dubai", country: "UAE" },
  { name: "Riyadh", timezone: "Asia/Riyadh", country: "Saudi Arabia" },
  { name: "Jerusalem", timezone: "Asia/Jerusalem", country: "Israel" },
  { name: "Tel Aviv", timezone: "Asia/Jerusalem", country: "Israel" },
  { name: "Mumbai", timezone: "Asia/Kolkata", country: "India" },
  { name: "New Delhi", timezone: "Asia/Kolkata", country: "India" },
  { name: "Bangalore", timezone: "Asia/Kolkata", country: "India" },
  { name: "Bangkok", timezone: "Asia/Bangkok", country: "Thailand" },
  { name: "Ho Chi Minh City", timezone: "Asia/Ho_Chi_Minh", country: "Vietnam" },
  { name: "Hanoi", timezone: "Asia/Ho_Chi_Minh", country: "Vietnam" },
  { name: "Jakarta", timezone: "Asia/Jakarta", country: "Indonesia" },
  { name: "Bali", timezone: "Asia/Makassar", country: "Indonesia" },
  { name: "Singapore", timezone: "Asia/Singapore", country: "Singapore" },
  { name: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur", country: "Malaysia" },
  { name: "Manila", timezone: "Asia/Manila", country: "Philippines" },
  { name: "Beijing", timezone: "Asia/Shanghai", country: "China" },
  { name: "Shanghai", timezone: "Asia/Shanghai", country: "China" },
  { name: "Hong Kong", timezone: "Asia/Hong_Kong", country: "China" },
  { name: "Taipei", timezone: "Asia/Taipei", country: "Taiwan" },
  { name: "Tokyo", timezone: "Asia/Tokyo", country: "Japan" },
  { name: "Osaka", timezone: "Asia/Tokyo", country: "Japan" },
  { name: "Kyoto", timezone: "Asia/Tokyo", country: "Japan" },
  { name: "Seoul", timezone: "Asia/Seoul", country: "South Korea" },
  { name: "Busan", timezone: "Asia/Seoul", country: "South Korea" },

  // Oceania
  { name: "Sydney", timezone: "Australia/Sydney", country: "Australia" },
  { name: "Melbourne", timezone: "Australia/Melbourne", country: "Australia" },
  { name: "Brisbane", timezone: "Australia/Brisbane", country: "Australia" },
  { name: "Perth", timezone: "Australia/Perth", country: "Australia" },
  { name: "Adelaide", timezone: "Australia/Adelaide", country: "Australia" },
  { name: "Auckland", timezone: "Pacific/Auckland", country: "New Zealand" },
  { name: "Wellington", timezone: "Pacific/Auckland", country: "New Zealand" },
  { name: "Fiji", timezone: "Pacific/Fiji", country: "Fiji" },

  // Africa
  { name: "Cairo", timezone: "Africa/Cairo", country: "Egypt" },
  { name: "Johannesburg", timezone: "Africa/Johannesburg", country: "South Africa" },
  { name: "Cape Town", timezone: "Africa/Johannesburg", country: "South Africa" },
  { name: "Lagos", timezone: "Africa/Lagos", country: "Nigeria" },
  { name: "Nairobi", timezone: "Africa/Nairobi", country: "Kenya" },
  { name: "Casablanca", timezone: "Africa/Casablanca", country: "Morocco" },
  { name: "Accra", timezone: "Africa/Accra", country: "Ghana" },
];

export const searchCities = (query: string): CityData[] => {
  const lower = query.toLowerCase().trim();
  if (!lower) return [];
  
  // Filter by City Name OR Country Name
  return POPULAR_CITIES.filter(c => 
    c.name.toLowerCase().includes(lower) || 
    c.country.toLowerCase().includes(lower)
  ).sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const aCountry = a.country.toLowerCase();
    const bCountry = b.country.toLowerCase();

    // 1. Exact City Name Match
    if (aName === lower && bName !== lower) return -1;
    if (bName === lower && aName !== lower) return 1;

    // 2. City Name starts with query
    const aNameStarts = aName.startsWith(lower);
    const bNameStarts = bName.startsWith(lower);
    if (aNameStarts && !bNameStarts) return -1;
    if (!aNameStarts && bNameStarts) return 1;

    // 3. Exact Country Match
    if (aCountry === lower && bCountry !== lower) return -1;
    if (bCountry === lower && aCountry !== lower) return 1;

    // 4. Country Name starts with query
    const aCountryStarts = aCountry.startsWith(lower);
    const bCountryStarts = bCountry.startsWith(lower);
    if (aCountryStarts && !bCountryStarts) return -1;
    if (!aCountryStarts && bCountryStarts) return 1;

    // Default: Alphabetical by City
    return a.name.localeCompare(b.name);
  });
}
