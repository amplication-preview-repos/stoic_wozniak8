import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  phone?: string | null;
  name?: string | null;
  email?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
