export interface Book {
  SID: string;
  Name: string;
  DOB: Date;
  Gender: string;
  YB: string;
  Faculity: string;
  Phone: string;
  IC: string;
  DJU: Date;
  DJCP: Date;
  PositionHSU: string;
  ClassOfficePosition: string;
  Talent: string;
  Approval: string;
}

export interface BookRes {
  data: Book;
  status: string;
}