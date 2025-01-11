export interface Club {
  id: number;
  name: string;
  courts: number;
  price: number;
  location: string;
  state: string;
  city: string;
  image: string;
}

export interface PlayerRequest {
  id: number;
  playersNeeded: number;
  level: string;
  club: string;
  location: string;
  state: string;
  city: string;
  category: string;
  price: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface Tournament {
  id: number;
  playersNeeded: number;
  level: string;
  club: string;
  location: string;
  state: string;
  city: string;
  category: string;
  price: number;
  date: string;
  startTime: string;
  endTime: string;
  image: string;
}
