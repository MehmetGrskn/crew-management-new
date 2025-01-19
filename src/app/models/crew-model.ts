export interface UserCertificate extends Certificate, UserCertificateRelation {}

export interface Certificate {
  id: number;
  description: string;
  type: string;
}

export interface UserCertificateRelation {
  certificateId: number;
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
  certificateRelations: UserCertificateRelation[];
  certificates?: UserCertificate[];
}