export interface IEntry {
  name: string;
  date: {
    [key: string]: number;
  };
  level: string;
  id: number;
}

export enum Level {
  Low = "low",
  Medium = "med",
  High = "high",
}

export interface IFooter {
  logout: () => void;
  auth: boolean;
}
