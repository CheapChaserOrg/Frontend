export interface Activity {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface TripPreferences {
  preferences: string;
  budget: number;
}