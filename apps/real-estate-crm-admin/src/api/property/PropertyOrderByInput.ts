import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  size?: SortOrder;
  status?: SortOrder;
  agentId?: SortOrder;
};
