import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  price: number | null;
  size: number | null;
  status?: "Option1" | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
};
