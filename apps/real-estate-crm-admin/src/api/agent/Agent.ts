import { Property } from "../property/Property";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  phone: string | null;
  name: string | null;
  email: string | null;
  properties?: Array<Property>;
};
