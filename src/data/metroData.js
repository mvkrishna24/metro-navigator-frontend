// ============================================
// DELHI METRO — MOCK DATA ENGINE
// Metro Navigator India | Vamshi | 2025
// ============================================

export const METRO_LINES = {
  yellow: { name: "Yellow Line", color: "#fbbf24", stations: ["Samaypur Badli", "Rohini Sector 18-19", "Haiderpur Badli Mor", "Jahangirpuri", "Adarsh Nagar", "Azadpur", "Model Town", "GTB Nagar", "Vishwavidyalaya", "Vidhan Sabha", "Civil Lines", "Kashmere Gate", "Chandni Chowk", "Chawri Bazar", "New Delhi", "Rajiv Chowk", "Patel Chowk", "Central Secretariat", "Udyog Bhavan", "Lok Kalyan Marg", "Jorbagh", "INA", "AIIMS", "Green Park", "Hauz Khas", "Malviya Nagar", "Saket", "Qutab Minar", "Chhattarpur", "Sultanpur", "Ghitorni", "Arjan Garh", "Guru Dronacharya", "Sikanderpur", "MG Road", "IFFCO Chowk", "Huda City Centre"] },
  blue: { name: "Blue Line", color: "#3b82f6", stations: ["Dwarka Sector 21", "Dwarka Sector 8", "Dwarka Sector 9", "Dwarka Sector 10", "Dwarka Sector 11", "Dwarka Sector 12", "Dwarka Sector 13", "Dwarka Sector 14", "Dwarka", "Dwarka Mor", "Nawada", "Uttam Nagar West", "Uttam Nagar East", "Janakpuri West", "Janakpuri East", "Tilak Nagar", "Subhash Nagar", "Tagore Garden", "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Kirti Nagar", "Shadipur", "Patel Nagar", "Rajendra Place", "Karol Bagh", "Jhandewalan", "Ramakrishna Ashram Marg", "Rajiv Chowk", "Barakhamba Road", "Mandi House", "Supreme Court", "Pragati Maidan", "Indraprastha", "Yamuna Bank", "Akshardham", "Mayur Vihar Phase 1", "Mayur Vihar Extension", "New Ashok Nagar", "Noida Sector 15", "Noida Sector 16", "Noida Sector 18", "Botanical Garden"] },
  red: { name: "Red Line", color: "#ef4444", stations: ["Rithala", "Rohini West", "Rohini East", "Pitampura", "Kohat Enclave", "Netaji Subhash Place", "Keshav Puram", "Kanhaiya Nagar", "Inderlok", "Shastri Nagar", "Pratap Nagar", "Pulbangash", "Tis Hazari", "Kashmere Gate", "Shastri Park", "Seelampur", "Welcome", "Shahdara", "Mansarovar Park", "Jhilmil", "Dilshad Garden", "Shaheed Nagar", "Raj Bagh", "Rajendra Nagar", "Seemapuri", "Mohan Nagar", "Hindon River", "Arthala", "Moradabad Road", "Ghaziabad", "Shaheed Sthal"] },
  green: { name: "Green Line", color: "#22c55e", stations: ["Inderlok", "Ashok Park Main", "Punjabi Bagh West", "ESI Hospital", "Mayapuri", "Naraina Vihar", "Delhi Cantt", "Dhaula Kuan", "Shivaji Stadium", "Dilli Haat INA", "Sarojini Nagar", "Bhikaji Cama Place", "Sir Vishweshwaraiah Moti Bagh", "Pragati Maidan"] },
};

export const ALL_STATIONS = [
  "Rajiv Chowk", "Kashmere Gate", "Huda City Centre", "Central Secretariat",
  "AIIMS", "Hauz Khas", "New Delhi", "Chandni Chowk", "Dwarka Sector 21",
  "Botanical Garden", "Noida Sector 18", "Yamuna Bank", "Indraprastha",
  "Mandi House", "Barakhamba Road", "Karol Bagh", "Janakpuri West",
  "Rajouri Garden", "Kirti Nagar", "Netaji Subhash Place", "Dilshad Garden",
  "Welcome", "Seelampur", "GTB Nagar", "Vishwavidyalaya", "Azadpur",
  "Jahangirpuri", "INA", "Saket", "Qutab Minar", "Chhattarpur",
  "Sikanderpur", "MG Road", "IFFCO Chowk", "Green Park", "Malviya Nagar",
  "Udyog Bhavan", "Patel Chowk", "Civil Lines"
];

export const LANDMARK_TO_STATION = {
  "India Gate": { station: "Central Secretariat", distance: "1.2 km", walk: "15 min walk" },
  "Red Fort": { station: "Chandni Chowk", distance: "0.8 km", walk: "10 min walk" },
  "Connaught Place": { station: "Rajiv Chowk", distance: "0.3 km", walk: "4 min walk" },
  "Qutub Minar": { station: "Qutab Minar", distance: "0.5 km", walk: "6 min walk" },
  "Lotus Temple": { station: "Nehru Place", distance: "1.0 km", walk: "12 min walk" },
  "Akshardham Temple": { station: "Akshardham", distance: "0.2 km", walk: "3 min walk" },
  "Humayun's Tomb": { station: "JLN Stadium", distance: "1.5 km", walk: "18 min walk" },
  "Parliament House": { station: "Central Secretariat", distance: "0.9 km", walk: "11 min walk" },
  "AIIMS Hospital": { station: "AIIMS", distance: "0.1 km", walk: "2 min walk" },
  "Lajpat Nagar Market": { station: "Lajpat Nagar", distance: "0.4 km", walk: "5 min walk" },
  "Sarojini Nagar Market": { station: "INA", distance: "0.7 km", walk: "8 min walk" },
  "Select Citywalk": { station: "Saket", distance: "0.5 km", walk: "6 min walk" },
  "DLF Cyber City": { station: "Sikanderpur", distance: "1.0 km", walk: "12 min walk" },
  "Ambience Mall Gurgaon": { station: "IFFCO Chowk", distance: "1.3 km", walk: "15 min walk" },
  "IGI Airport": { station: "Dwarka Sector 21", distance: "1.5 km", walk: "18 min walk" },
  "New Delhi Railway Station": { station: "New Delhi", distance: "0.2 km", walk: "3 min walk" },
  "Delhi University": { station: "Vishwavidyalaya", distance: "0.3 km", walk: "4 min walk" },
  "IIT Delhi": { station: "Hauz Khas", distance: "1.0 km", walk: "12 min walk" },
  "Jantar Mantar": { station: "Patel Chowk", distance: "0.6 km", walk: "7 min walk" },
  "Lal Quila": { station: "Chandni Chowk", distance: "0.5 km", walk: "6 min walk" },
};

export const ROUTES = {
  "Huda City Centre→Central Secretariat": {
    path: ["Huda City Centre", "IFFCO Chowk", "MG Road", "Sikanderpur", "Guru Dronacharya", "Sultanpur", "Chhattarpur", "Qutab Minar", "Saket", "Malviya Nagar", "Green Park", "AIIMS", "Central Secretariat"],
    time: "38 mins", fare: "₹50", interchanges: [],
    line: "yellow", coaches: "6-coach train", frequency: "Every 5 mins",
    tag: "Fastest Route", tagColor: "metro-blue"
  },
  "Rajiv Chowk→Central Secretariat": {
    path: ["Rajiv Chowk", "Patel Chowk", "Central Secretariat"],
    time: "8 mins", fare: "₹20", interchanges: [],
    line: "yellow", coaches: "6-coach train", frequency: "Every 3 mins",
    tag: "AI Recommended", tagColor: "metro-yellow"
  },
  "Kashmere Gate→Central Secretariat": {
    path: ["Kashmere Gate", "Chandni Chowk", "New Delhi", "Rajiv Chowk", "Patel Chowk", "Central Secretariat"],
    time: "18 mins", fare: "₹30", interchanges: ["Rajiv Chowk"],
    line: "yellow", coaches: "8-coach train", frequency: "Every 4 mins",
    tag: "Fastest Route", tagColor: "metro-blue"
  },
  "Dwarka Sector 21→Rajiv Chowk": {
    path: ["Dwarka Sector 21", "Dwarka", "Dwarka Mor", "Nawada", "Janakpuri West", "Janakpuri East", "Tilak Nagar", "Subhash Nagar", "Rajouri Garden", "Ramesh Nagar", "Moti Nagar", "Karol Bagh", "Rajiv Chowk"],
    time: "42 mins", fare: "₹50", interchanges: [],
    line: "blue", coaches: "6-coach train", frequency: "Every 5 mins",
    tag: "AI Recommended", tagColor: "metro-yellow"
  },
  "Botanical Garden→Mandi House": {
    path: ["Botanical Garden", "Noida Sector 18", "Noida Sector 16", "Noida Sector 15", "New Ashok Nagar", "Mayur Vihar Extension", "Mayur Vihar Phase 1", "Akshardham", "Yamuna Bank", "Indraprastha", "Supreme Court", "Mandi House"],
    time: "35 mins", fare: "₹40", interchanges: ["Yamuna Bank"],
    line: "blue", coaches: "6-coach train", frequency: "Every 5 mins",
    tag: "Fastest Route", tagColor: "metro-blue"
  },
  "Jahangirpuri→Hauz Khas": {
    path: ["Jahangirpuri", "Adarsh Nagar", "Azadpur", "Model Town", "GTB Nagar", "Vishwavidyalaya", "Civil Lines", "Kashmere Gate", "Chandni Chowk", "New Delhi", "Rajiv Chowk", "Patel Chowk", "Central Secretariat", "Udyog Bhavan", "Lok Kalyan Marg", "INA", "AIIMS", "Green Park", "Hauz Khas"],
    time: "55 mins", fare: "₹60", interchanges: ["Rajiv Chowk"],
    line: "yellow", coaches: "8-coach train", frequency: "Every 4 mins",
    tag: "Scenic Route", tagColor: "metro-green"
  },
  "Dilshad Garden→Rajiv Chowk": {
    path: ["Dilshad Garden", "Jhilmil", "Mansarovar Park", "Shahdara", "Welcome", "Seelampur", "Shastri Park", "Kashmere Gate", "Tis Hazari", "Pulbangash", "Pratap Nagar", "Shastri Nagar", "Inderlok"],
    time: "45 mins", fare: "₹50", interchanges: ["Kashmere Gate"],
    line: "red", coaches: "6-coach train", frequency: "Every 5 mins",
    tag: "AI Recommended", tagColor: "metro-yellow"
  },
};

export const getRouteKey = (source, destination) => {
  const direct = `${source}→${destination}`;
  const reverse = `${destination}→${source}`;
  if (ROUTES[direct]) return { key: direct, reversed: false };
  if (ROUTES[reverse]) return { key: reverse, reversed: true };
  // Generate a mock route if not found
  return { key: null, reversed: false };
};

export const generateMockRoute = (source, destination) => {
  // Intelligent fallback — creates a believable mock route
  const mockStations = [source, "Rajiv Chowk", "Central Secretariat", destination];
  return {
    path: mockStations,
    time: `${Math.floor(Math.random() * 20) + 20} mins`,
    fare: `₹${[20, 30, 40, 50][Math.floor(Math.random() * 4)]}`,
    interchanges: ["Rajiv Chowk"],
    line: "yellow",
    coaches: "6-coach train",
    frequency: "Every 5 mins",
    tag: "AI Recommended",
    tagColor: "metro-yellow"
  };
};