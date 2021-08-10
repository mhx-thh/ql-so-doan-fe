export interface Book {
  SID: string;
  Name: string;
  DOB: Date;
  Email: string;
  Gender: string;
  YB: string;
  Faculty: string;
  Class: string;
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

export interface BookHistory {
  Time: Date;
  _id: string;
  SID: string;
  Content: string;
  PlaceID: string;
}

export interface BookHistoryRes {
  data: [BookHistory];
  status: string;
}