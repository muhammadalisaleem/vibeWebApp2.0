export interface User {
  id: string;
  name: string;
  email: string;
  coins: number;
  streak: number;
  badges: string[];
  hours: number;
  eventsJoined: number;
  civicChampion: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  category: 'environment' | 'education' | 'social' | 'health';
  location: {
    lat: number;
    lng: number;
  };
  date: Date;
  rsvpCount: number;
}

export interface Story {
  id: string;
  userId: string;
  text: string;
  images: string[];
  likes: number;
  timestamp: Date;
}

export interface Reward {
  id: string;
  name: string;
  cost: number;
  category: 'food' | 'entertainment' | 'other';
}

export interface Emergency {
  id: string;
  title: string;
  desc: string;
  progress: number;
  coinsReward: number;
}

