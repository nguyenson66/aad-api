export interface IUsers {
  id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: string;
  dob?: Date;
  gender: string;
  password?: string;
  salt?: string;
  isVerified: boolean;
}
