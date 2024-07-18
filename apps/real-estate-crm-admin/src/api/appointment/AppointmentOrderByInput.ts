import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  purpose?: SortOrder;
  clientId?: SortOrder;
  propertyId?: SortOrder;
};
