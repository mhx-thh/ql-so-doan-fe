export type PlaceModel = {
  _id?: string;
  ShortHand: string;
  Name: string;
};

export type FacultyModel = {
  _id?: string;
  NameShort: string;
  NameFull: string;
};

export type ClassModel = {
  _id?: string;
  Name: string;
  Faculty: FacultyModel;
};

export type ClassReqModel = {
  _id?: string;
  Name: string;
  Faculty: string;
};

export type RequestModel = {
  _id?: string;
  Book: BookModel;
  Type: "profile" | "rut_so_doan" | "chuyen_chi_doan";
  Title: string;
  Content: string;
  Status: "init" | "done" | "doing";
  createdAt: string;
  updatedAt: string;
};

export type HistoryModel = {
  _id?: string;
  Book: string;
  Class: ClassModel;
  Content: string;
  Time: Date;
};

export type BookModel = {
  _id?: string;
  SID: string;
  Name: string;
  Gender: string;
  DOB: Date;
  Email: string;
  Class: ClassModel;
  NumberApproved: number;
  Phone: string;
  IC: string;
  DJU: Date;
  DJCP: Date;
  PositionHSU: string;
  ClassOfficePosition: string;
  Talent: string;
  Approval: boolean;
  Place: PlaceModel;
  requests?: Array<RequestModel>;
  histories?: Array<HistoryModel>;
};
