export interface Certificate {
  type: string;
  issueDate: string;
  expiryDate: string;
}

export interface Crew {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  discount: number;
  currency: string;
  certificates: Certificate[];
}