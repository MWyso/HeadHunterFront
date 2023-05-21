export type BasicDataResponse = {
  id: string;
  email: string;
  role: string;
  access_token?: string;
};

export type AdminDataResponse = {
  name: string;
} & BasicDataResponse;

export type StudentDataResponse = {
  githubUsername: string;
  firstName: string;
  lastName: string;
} & BasicDataResponse;

export type HrDataResponse = {
  fullName: string;
} & BasicDataResponse;

export type UserDataResponse =
  | AdminDataResponse
  | StudentDataResponse
  | HrDataResponse;

export type CreateResponse = {
  id: string;
};

export type ConfirmResponse = {
  email: string;
  emailToken: string;
};

export type UpdateResponse = {
  id: string;
};

export type RecoveryPasswordResponse = {
  sentToEmail: string;
};
